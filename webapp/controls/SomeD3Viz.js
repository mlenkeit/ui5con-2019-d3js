sap.ui.define([
  'sap/ui/core/Control',
  'sap/ui/core/HTML',
  'sap/ui/core/ResizeHandler',
  './../thirdparty/d3.v5.min'
], function(Control, HTML, ResizeHandler) {
  'use strict';
  
  return Control.extend('sap.ui5con2019.d3js.controls.SomeD3Viz', {
    metadata: {
      aggregations: {
        _html: {
          type: 'sap.ui.core.HTML',
          multiple: false,
          visibility: 'hidden'
        },
        data: {
          type: 'sap.ui.base.ManagedObject'
        }
      }
    },
    
    init: function() {
      this._sContainerId = this.getId() + '--container'
      this.setAggregation('_html', new HTML({
        content: `<svg id="${this._sContainerId}"></svg>`
      }))
    },
    
    exit: function() {
      ResizeHandler.deregister(this._sResizeHandlerId);
    },
    
    renderer: {
      apiVersion: 2,
      render: function(oRm, oControl) {
        oRm.openStart('div', oControl);
        oRm.class('someViz');
        oRm.openEnd();
        oRm.openStart('p').openEnd();
        oRm.text('Custom controls are great 🎉');
        oRm.close('p');
        oRm.renderControl(oControl.getAggregation('_html'));
        oRm.close('div');
      }
    },
    
    _onResize: function() {
      console.log('resize to width:', this.$().width());
      this._renderViz();
    },
    
    onBeforeRendering: function() {
      ResizeHandler.deregister(this._sResizeHandlerId);
    },
    
    onAfterRendering: function() {
      this._sResizeHandlerId = ResizeHandler.register(this, this._onResize.bind(this));
      this._renderViz();
    },
    
    _renderViz: function() {  
      const height = 500;
      const width = this.$().width();
      console.log('rendering with width', width);
      
      const svg = d3.select('#' + this._sContainerId)
      svg.attr("height", height).attr("width", width)
      
      
      const data = this.getBinding("data").getContexts()
        .map(oContext => oContext.getObject());
      
      /**
       * The following snippet is based on the Bubble Chart of Mike Bostock
       * https://observablehq.com/@d3/bubble-chart
       */
         
      const format = d3.format(",d")
      const color = d3.scaleOrdinal(data.map(d => d.group), d3.schemeCategory10)
      const pack = data => d3.pack()
        .size([width - 2, height - 2])
        .padding(3)
        (d3.hierarchy({children: data})
        .sum(d => d.value))
        
      const root = pack(data);
        
      svg.attr("viewBox", [0, 0, width, height])
          .attr("font-size", 10)
          .attr("font-family", "sans-serif")
          .attr("text-anchor", "middle");

      const leaf = svg.selectAll("g")
        .data(root.leaves())
        .join("g")
          .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

      leaf.append("circle")
          .attr("id", d => (d.leafUid = "leaf" /*DOM.uid*/).id)
          .attr("r", d => d.r)
          .attr("fill-opacity", 0.7)
          .attr("fill", d => color(d.data.group));

      leaf.append("clipPath")
          .attr("id", d => (d.clipUid = "clip" /*DOM.uid*/).id)
        .append("use")
          .attr("xlink:href", d => d.leafUid.href);

      leaf.append("text")
          .attr("clip-path", d => d.clipUid)
        .selectAll("tspan")
        .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
        .join("tspan")
          .attr("x", 0)
          .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
          .text(d => d);

      leaf.append("title")
          .text(d => `${d.data.title}\n${format(d.value)}`);
    } // end of onAfterRendering
  });
});