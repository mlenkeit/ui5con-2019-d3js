sap.ui.define([
  "sap/ui/core/UIComponent"
], function(UIComponent) {
  "use strict";

  return UIComponent.extend("com.sap.ui5con2019.d3js.Component", {

    metadata : {
      manifest : "json"
    },

    init: function() {
      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();

      var oModel = this.getModel();
      window.oModel = oModel; // DON'T DO THIS, only for demo purposes
      oModel.setProperty('/ui5con', [
  {
    "name": "flare",
    "title": "flare",
    "value": 0
  },
  {
    "name": "analytics",
    "title": "flare/analytics",
    "group": "analytics",
    "value": 0
  },
  {
    "name": "cluster",
    "title": "flare/analytics/cluster",
    "group": "analytics",
    "value": 0
  },
  {
    "name": "AgglomerativeCluster",
    "title": "flare/analytics/cluster/AgglomerativeCluster",
    "group": "analytics",
    "value": 3938
  },
  {
    "name": "CommunityStructure",
    "title": "flare/analytics/cluster/CommunityStructure",
    "group": "analytics",
    "value": 3812
  },
  {
    "name": "HierarchicalCluster",
    "title": "flare/analytics/cluster/HierarchicalCluster",
    "group": "analytics",
    "value": 6714
  },
  {
    "name": "MergeEdge",
    "title": "flare/analytics/cluster/MergeEdge",
    "group": "analytics",
    "value": 743
  },
  {
    "name": "graph",
    "title": "flare/analytics/graph",
    "group": "analytics",
    "value": 0
  },
  {
    "name": "BetweennessCentrality",
    "title": "flare/analytics/graph/BetweennessCentrality",
    "group": "analytics",
    "value": 3534
  },
  {
    "name": "LinkDistance",
    "title": "flare/analytics/graph/LinkDistance",
    "group": "analytics",
    "value": 5731
  },
  {
    "name": "MaxFlowMinCut",
    "title": "flare/analytics/graph/MaxFlowMinCut",
    "group": "analytics",
    "value": 7840
  },
  {
    "name": "ShortestPaths",
    "title": "flare/analytics/graph/ShortestPaths",
    "group": "analytics",
    "value": 5914
  },
  {
    "name": "SpanningTree",
    "title": "flare/analytics/graph/SpanningTree",
    "group": "analytics",
    "value": 3416
  },
  {
    "name": "optimization",
    "title": "flare/analytics/optimization",
    "group": "analytics",
    "value": 0
  },
  {
    "name": "AspectRatioBanker",
    "title": "flare/analytics/optimization/AspectRatioBanker",
    "group": "analytics",
    "value": 7074
  },
  {
    "name": "animate",
    "title": "flare/animate",
    "group": "animate",
    "value": 0
  },
  {
    "name": "Easing",
    "title": "flare/animate/Easing",
    "group": "animate",
    "value": 17010
  },
  {
    "name": "FunctionSequence",
    "title": "flare/animate/FunctionSequence",
    "group": "animate",
    "value": 5842
  },
  {
    "name": "interpolate",
    "title": "flare/animate/interpolate",
    "group": "animate",
    "value": 0
  },
  {
    "name": "ArrayInterpolator",
    "title": "flare/animate/interpolate/ArrayInterpolator",
    "group": "animate",
    "value": 1983
  },
  {
    "name": "ColorInterpolator",
    "title": "flare/animate/interpolate/ColorInterpolator",
    "group": "animate",
    "value": 2047
  },
  {
    "name": "DateInterpolator",
    "title": "flare/animate/interpolate/DateInterpolator",
    "group": "animate",
    "value": 1375
  },
  {
    "name": "Interpolator",
    "title": "flare/animate/interpolate/Interpolator",
    "group": "animate",
    "value": 8746
  },
  {
    "name": "MatrixInterpolator",
    "title": "flare/animate/interpolate/MatrixInterpolator",
    "group": "animate",
    "value": 2202
  },
  {
    "name": "NumberInterpolator",
    "title": "flare/animate/interpolate/NumberInterpolator",
    "group": "animate",
    "value": 1382
  },
  {
    "name": "ObjectInterpolator",
    "title": "flare/animate/interpolate/ObjectInterpolator",
    "group": "animate",
    "value": 1629
  },
  {
    "name": "PointInterpolator",
    "title": "flare/animate/interpolate/PointInterpolator",
    "group": "animate",
    "value": 1675
  },
  {
    "name": "RectangleInterpolator",
    "title": "flare/animate/interpolate/RectangleInterpolator",
    "group": "animate",
    "value": 2042
  },
  {
    "name": "ISchedulable",
    "title": "flare/animate/ISchedulable",
    "group": "animate",
    "value": 1041
  },
  {
    "name": "Parallel",
    "title": "flare/animate/Parallel",
    "group": "animate",
    "value": 5176
  },
  {
    "name": "Pause",
    "title": "flare/animate/Pause",
    "group": "animate",
    "value": 449
  },
  {
    "name": "Scheduler",
    "title": "flare/animate/Scheduler",
    "group": "animate",
    "value": 5593
  },
  {
    "name": "Sequence",
    "title": "flare/animate/Sequence",
    "group": "animate",
    "value": 5534
  },
  {
    "name": "Transition",
    "title": "flare/animate/Transition",
    "group": "animate",
    "value": 9201
  },
  {
    "name": "Transitioner",
    "title": "flare/animate/Transitioner",
    "group": "animate",
    "value": 19975
  },
  {
    "name": "TransitionEvent",
    "title": "flare/animate/TransitionEvent",
    "group": "animate",
    "value": 1116
  },
  {
    "name": "Tween",
    "title": "flare/animate/Tween",
    "group": "animate",
    "value": 6006
  },
  {
    "name": "data",
    "title": "flare/data",
    "group": "data",
    "value": 0
  },
  {
    "name": "converters",
    "title": "flare/data/converters",
    "group": "data",
    "value": 0
  },
  {
    "name": "Converters",
    "title": "flare/data/converters/Converters",
    "group": "data",
    "value": 721
  },
  {
    "name": "DelimitedTextConverter",
    "title": "flare/data/converters/DelimitedTextConverter",
    "group": "data",
    "value": 4294
  },
  {
    "name": "GraphMLConverter",
    "title": "flare/data/converters/GraphMLConverter",
    "group": "data",
    "value": 9800
  },
  {
    "name": "IDataConverter",
    "title": "flare/data/converters/IDataConverter",
    "group": "data",
    "value": 1314
  },
  {
    "name": "JSONConverter",
    "title": "flare/data/converters/JSONConverter",
    "group": "data",
    "value": 2220
  },
  {
    "name": "DataField",
    "title": "flare/data/DataField",
    "group": "data",
    "value": 1759
  },
  {
    "name": "DataSchema",
    "title": "flare/data/DataSchema",
    "group": "data",
    "value": 2165
  },
  {
    "name": "DataSet",
    "title": "flare/data/DataSet",
    "group": "data",
    "value": 586
  },
  {
    "name": "DataSource",
    "title": "flare/data/DataSource",
    "group": "data",
    "value": 3331
  },
  {
    "name": "DataTable",
    "title": "flare/data/DataTable",
    "group": "data",
    "value": 772
  },
  {
    "name": "DataUtil",
    "title": "flare/data/DataUtil",
    "group": "data",
    "value": 3322
  },
  {
    "name": "display",
    "title": "flare/display",
    "group": "display",
    "value": 0
  },
  {
    "name": "DirtySprite",
    "title": "flare/display/DirtySprite",
    "group": "display",
    "value": 8833
  },
  {
    "name": "LineSprite",
    "title": "flare/display/LineSprite",
    "group": "display",
    "value": 1732
  },
  {
    "name": "RectSprite",
    "title": "flare/display/RectSprite",
    "group": "display",
    "value": 3623
  },
  {
    "name": "TextSprite",
    "title": "flare/display/TextSprite",
    "group": "display",
    "value": 10066
  },
  {
    "name": "flex",
    "title": "flare/flex",
    "group": "flex",
    "value": 0
  },
  {
    "name": "FlareVis",
    "title": "flare/flex/FlareVis",
    "group": "flex",
    "value": 4116
  },
  {
    "name": "physics",
    "title": "flare/physics",
    "group": "physics",
    "value": 0
  },
  {
    "name": "DragForce",
    "title": "flare/physics/DragForce",
    "group": "physics",
    "value": 1082
  },
  {
    "name": "GravityForce",
    "title": "flare/physics/GravityForce",
    "group": "physics",
    "value": 1336
  },
  {
    "name": "IForce",
    "title": "flare/physics/IForce",
    "group": "physics",
    "value": 319
  },
  {
    "name": "NBodyForce",
    "title": "flare/physics/NBodyForce",
    "group": "physics",
    "value": 10498
  },
  {
    "name": "Particle",
    "title": "flare/physics/Particle",
    "group": "physics",
    "value": 2822
  },
  {
    "name": "Simulation",
    "title": "flare/physics/Simulation",
    "group": "physics",
    "value": 9983
  },
  {
    "name": "Spring",
    "title": "flare/physics/Spring",
    "group": "physics",
    "value": 2213
  },
  {
    "name": "SpringForce",
    "title": "flare/physics/SpringForce",
    "group": "physics",
    "value": 1681
  },
  {
    "name": "query",
    "title": "flare/query",
    "group": "query",
    "value": 0
  },
  {
    "name": "AggregateExpression",
    "title": "flare/query/AggregateExpression",
    "group": "query",
    "value": 1616
  },
  {
    "name": "And",
    "title": "flare/query/And",
    "group": "query",
    "value": 1027
  },
  {
    "name": "Arithmetic",
    "title": "flare/query/Arithmetic",
    "group": "query",
    "value": 3891
  },
  {
    "name": "Average",
    "title": "flare/query/Average",
    "group": "query",
    "value": 891
  },
  {
    "name": "BinaryExpression",
    "title": "flare/query/BinaryExpression",
    "group": "query",
    "value": 2893
  },
  {
    "name": "Comparison",
    "title": "flare/query/Comparison",
    "group": "query",
    "value": 5103
  },
  {
    "name": "CompositeExpression",
    "title": "flare/query/CompositeExpression",
    "group": "query",
    "value": 3677
  },
  {
    "name": "Count",
    "title": "flare/query/Count",
    "group": "query",
    "value": 781
  },
  {
    "name": "DateUtil",
    "title": "flare/query/DateUtil",
    "group": "query",
    "value": 4141
  },
  {
    "name": "Distinct",
    "title": "flare/query/Distinct",
    "group": "query",
    "value": 933
  },
  {
    "name": "Expression",
    "title": "flare/query/Expression",
    "group": "query",
    "value": 5130
  },
  {
    "name": "ExpressionIterator",
    "title": "flare/query/ExpressionIterator",
    "group": "query",
    "value": 3617
  },
  {
    "name": "Fn",
    "title": "flare/query/Fn",
    "group": "query",
    "value": 3240
  },
  {
    "name": "If",
    "title": "flare/query/If",
    "group": "query",
    "value": 2732
  },
  {
    "name": "IsA",
    "title": "flare/query/IsA",
    "group": "query",
    "value": 2039
  },
  {
    "name": "Literal",
    "title": "flare/query/Literal",
    "group": "query",
    "value": 1214
  },
  {
    "name": "Match",
    "title": "flare/query/Match",
    "group": "query",
    "value": 3748
  },
  {
    "name": "Maximum",
    "title": "flare/query/Maximum",
    "group": "query",
    "value": 843
  },
  {
    "name": "methods",
    "title": "flare/query/methods",
    "group": "query",
    "value": 0
  },
  {
    "name": "add",
    "title": "flare/query/methods/add",
    "group": "query",
    "value": 593
  },
  {
    "name": "and",
    "title": "flare/query/methods/and",
    "group": "query",
    "value": 330
  },
  {
    "name": "average",
    "title": "flare/query/methods/average",
    "group": "query",
    "value": 287
  },
  {
    "name": "count",
    "title": "flare/query/methods/count",
    "group": "query",
    "value": 277
  },
  {
    "name": "distinct",
    "title": "flare/query/methods/distinct",
    "group": "query",
    "value": 292
  },
  {
    "name": "div",
    "title": "flare/query/methods/div",
    "group": "query",
    "value": 595
  },
  {
    "name": "eq",
    "title": "flare/query/methods/eq",
    "group": "query",
    "value": 594
  },
  {
    "name": "fn",
    "title": "flare/query/methods/fn",
    "group": "query",
    "value": 460
  },
  {
    "name": "gt",
    "title": "flare/query/methods/gt",
    "group": "query",
    "value": 603
  },
  {
    "name": "gte",
    "title": "flare/query/methods/gte",
    "group": "query",
    "value": 625
  },
  {
    "name": "iff",
    "title": "flare/query/methods/iff",
    "group": "query",
    "value": 748
  },
  {
    "name": "isa",
    "title": "flare/query/methods/isa",
    "group": "query",
    "value": 461
  },
  {
    "name": "lt",
    "title": "flare/query/methods/lt",
    "group": "query",
    "value": 597
  },
  {
    "name": "lte",
    "title": "flare/query/methods/lte",
    "group": "query",
    "value": 619
  },
  {
    "name": "max",
    "title": "flare/query/methods/max",
    "group": "query",
    "value": 283
  },
  {
    "name": "min",
    "title": "flare/query/methods/min",
    "group": "query",
    "value": 283
  },
  {
    "name": "mod",
    "title": "flare/query/methods/mod",
    "group": "query",
    "value": 591
  },
  {
    "name": "mul",
    "title": "flare/query/methods/mul",
    "group": "query",
    "value": 603
  },
  {
    "name": "neq",
    "title": "flare/query/methods/neq",
    "group": "query",
    "value": 599
  },
  {
    "name": "not",
    "title": "flare/query/methods/not",
    "group": "query",
    "value": 386
  },
  {
    "name": "or",
    "title": "flare/query/methods/or",
    "group": "query",
    "value": 323
  },
  {
    "name": "orderby",
    "title": "flare/query/methods/orderby",
    "group": "query",
    "value": 307
  },
  {
    "name": "range",
    "title": "flare/query/methods/range",
    "group": "query",
    "value": 772
  },
  {
    "name": "select",
    "title": "flare/query/methods/select",
    "group": "query",
    "value": 296
  },
  {
    "name": "stddev",
    "title": "flare/query/methods/stddev",
    "group": "query",
    "value": 363
  },
  {
    "name": "sub",
    "title": "flare/query/methods/sub",
    "group": "query",
    "value": 600
  },
  {
    "name": "sum",
    "title": "flare/query/methods/sum",
    "group": "query",
    "value": 280
  },
  {
    "name": "update",
    "title": "flare/query/methods/update",
    "group": "query",
    "value": 307
  },
  {
    "name": "variance",
    "title": "flare/query/methods/variance",
    "group": "query",
    "value": 335
  },
  {
    "name": "where",
    "title": "flare/query/methods/where",
    "group": "query",
    "value": 299
  },
  {
    "name": "xor",
    "title": "flare/query/methods/xor",
    "group": "query",
    "value": 354
  },
  {
    "name": "_",
    "title": "flare/query/methods/_",
    "group": "query",
    "value": 264
  },
  {
    "name": "Minimum",
    "title": "flare/query/Minimum",
    "group": "query",
    "value": 843
  },
  {
    "name": "Not",
    "title": "flare/query/Not",
    "group": "query",
    "value": 1554
  },
  {
    "name": "Or",
    "title": "flare/query/Or",
    "group": "query",
    "value": 970
  },
  {
    "name": "Query",
    "title": "flare/query/Query",
    "group": "query",
    "value": 13896
  },
  {
    "name": "Range",
    "title": "flare/query/Range",
    "group": "query",
    "value": 1594
  },
  {
    "name": "StringUtil",
    "title": "flare/query/StringUtil",
    "group": "query",
    "value": 4130
  },
  {
    "name": "Sum",
    "title": "flare/query/Sum",
    "group": "query",
    "value": 791
  },
  {
    "name": "Variable",
    "title": "flare/query/Variable",
    "group": "query",
    "value": 1124
  },
  {
    "name": "Variance",
    "title": "flare/query/Variance",
    "group": "query",
    "value": 1876
  },
  {
    "name": "Xor",
    "title": "flare/query/Xor",
    "group": "query",
    "value": 1101
  },
  {
    "name": "scale",
    "title": "flare/scale",
    "group": "scale",
    "value": 0
  },
  {
    "name": "IScaleMap",
    "title": "flare/scale/IScaleMap",
    "group": "scale",
    "value": 2105
  },
  {
    "name": "LinearScale",
    "title": "flare/scale/LinearScale",
    "group": "scale",
    "value": 1316
  },
  {
    "name": "LogScale",
    "title": "flare/scale/LogScale",
    "group": "scale",
    "value": 3151
  },
  {
    "name": "OrdinalScale",
    "title": "flare/scale/OrdinalScale",
    "group": "scale",
    "value": 3770
  },
  {
    "name": "QuantileScale",
    "title": "flare/scale/QuantileScale",
    "group": "scale",
    "value": 2435
  },
  {
    "name": "QuantitativeScale",
    "title": "flare/scale/QuantitativeScale",
    "group": "scale",
    "value": 4839
  },
  {
    "name": "RootScale",
    "title": "flare/scale/RootScale",
    "group": "scale",
    "value": 1756
  },
  {
    "name": "Scale",
    "title": "flare/scale/Scale",
    "group": "scale",
    "value": 4268
  },
  {
    "name": "ScaleType",
    "title": "flare/scale/ScaleType",
    "group": "scale",
    "value": 1821
  },
  {
    "name": "TimeScale",
    "title": "flare/scale/TimeScale",
    "group": "scale",
    "value": 5833
  },
  {
    "name": "util",
    "title": "flare/util",
    "group": "util",
    "value": 0
  },
  {
    "name": "Arrays",
    "title": "flare/util/Arrays",
    "group": "util",
    "value": 8258
  },
  {
    "name": "Colors",
    "title": "flare/util/Colors",
    "group": "util",
    "value": 10001
  },
  {
    "name": "Dates",
    "title": "flare/util/Dates",
    "group": "util",
    "value": 8217
  },
  {
    "name": "Displays",
    "title": "flare/util/Displays",
    "group": "util",
    "value": 12555
  },
  {
    "name": "Filter",
    "title": "flare/util/Filter",
    "group": "util",
    "value": 2324
  },
  {
    "name": "Geometry",
    "title": "flare/util/Geometry",
    "group": "util",
    "value": 10993
  },
  {
    "name": "heap",
    "title": "flare/util/heap",
    "group": "util",
    "value": 0
  },
  {
    "name": "FibonacciHeap",
    "title": "flare/util/heap/FibonacciHeap",
    "group": "util",
    "value": 9354
  },
  {
    "name": "HeapNode",
    "title": "flare/util/heap/HeapNode",
    "group": "util",
    "value": 1233
  },
  {
    "name": "IEvaluable",
    "title": "flare/util/IEvaluable",
    "group": "util",
    "value": 335
  },
  {
    "name": "IPredicate",
    "title": "flare/util/IPredicate",
    "group": "util",
    "value": 383
  },
  {
    "name": "IValueProxy",
    "title": "flare/util/IValueProxy",
    "group": "util",
    "value": 874
  },
  {
    "name": "math",
    "title": "flare/util/math",
    "group": "util",
    "value": 0
  },
  {
    "name": "DenseMatrix",
    "title": "flare/util/math/DenseMatrix",
    "group": "util",
    "value": 3165
  },
  {
    "name": "IMatrix",
    "title": "flare/util/math/IMatrix",
    "group": "util",
    "value": 2815
  },
  {
    "name": "SparseMatrix",
    "title": "flare/util/math/SparseMatrix",
    "group": "util",
    "value": 3366
  },
  {
    "name": "Maths",
    "title": "flare/util/Maths",
    "group": "util",
    "value": 17705
  },
  {
    "name": "Orientation",
    "title": "flare/util/Orientation",
    "group": "util",
    "value": 1486
  },
  {
    "name": "palette",
    "title": "flare/util/palette",
    "group": "util",
    "value": 0
  },
  {
    "name": "ColorPalette",
    "title": "flare/util/palette/ColorPalette",
    "group": "util",
    "value": 6367
  },
  {
    "name": "Palette",
    "title": "flare/util/palette/Palette",
    "group": "util",
    "value": 1229
  },
  {
    "name": "ShapePalette",
    "title": "flare/util/palette/ShapePalette",
    "group": "util",
    "value": 2059
  },
  {
    "name": "SizePalette",
    "title": "flare/util/palette/SizePalette",
    "group": "util",
    "value": 2291
  },
  {
    "name": "Property",
    "title": "flare/util/Property",
    "group": "util",
    "value": 5559
  },
  {
    "name": "Shapes",
    "title": "flare/util/Shapes",
    "group": "util",
    "value": 19118
  },
  {
    "name": "Sort",
    "title": "flare/util/Sort",
    "group": "util",
    "value": 6887
  },
  {
    "name": "Stats",
    "title": "flare/util/Stats",
    "group": "util",
    "value": 6557
  },
  {
    "name": "Strings",
    "title": "flare/util/Strings",
    "group": "util",
    "value": 22026
  },
  {
    "name": "vis",
    "title": "flare/vis",
    "group": "vis",
    "value": 0
  },
  {
    "name": "axis",
    "title": "flare/vis/axis",
    "group": "vis",
    "value": 0
  },
  {
    "name": "Axes",
    "title": "flare/vis/axis/Axes",
    "group": "vis",
    "value": 1302
  },
  {
    "name": "Axis",
    "title": "flare/vis/axis/Axis",
    "group": "vis",
    "value": 24593
  },
  {
    "name": "AxisGridLine",
    "title": "flare/vis/axis/AxisGridLine",
    "group": "vis",
    "value": 652
  },
  {
    "name": "AxisLabel",
    "title": "flare/vis/axis/AxisLabel",
    "group": "vis",
    "value": 636
  },
  {
    "name": "CartesianAxes",
    "title": "flare/vis/axis/CartesianAxes",
    "group": "vis",
    "value": 6703
  },
  {
    "name": "controls",
    "title": "flare/vis/controls",
    "group": "vis",
    "value": 0
  },
  {
    "name": "AnchorControl",
    "title": "flare/vis/controls/AnchorControl",
    "group": "vis",
    "value": 2138
  },
  {
    "name": "ClickControl",
    "title": "flare/vis/controls/ClickControl",
    "group": "vis",
    "value": 3824
  },
  {
    "name": "Control",
    "title": "flare/vis/controls/Control",
    "group": "vis",
    "value": 1353
  },
  {
    "name": "ControlList",
    "title": "flare/vis/controls/ControlList",
    "group": "vis",
    "value": 4665
  },
  {
    "name": "DragControl",
    "title": "flare/vis/controls/DragControl",
    "group": "vis",
    "value": 2649
  },
  {
    "name": "ExpandControl",
    "title": "flare/vis/controls/ExpandControl",
    "group": "vis",
    "value": 2832
  },
  {
    "name": "HoverControl",
    "title": "flare/vis/controls/HoverControl",
    "group": "vis",
    "value": 4896
  },
  {
    "name": "IControl",
    "title": "flare/vis/controls/IControl",
    "group": "vis",
    "value": 763
  },
  {
    "name": "PanZoomControl",
    "title": "flare/vis/controls/PanZoomControl",
    "group": "vis",
    "value": 5222
  },
  {
    "name": "SelectionControl",
    "title": "flare/vis/controls/SelectionControl",
    "group": "vis",
    "value": 7862
  },
  {
    "name": "TooltipControl",
    "title": "flare/vis/controls/TooltipControl",
    "group": "vis",
    "value": 8435
  },
  {
    "name": "data",
    "title": "flare/vis/data",
    "group": "vis",
    "value": 0
  },
  {
    "name": "Data",
    "title": "flare/vis/data/Data",
    "group": "vis",
    "value": 20544
  },
  {
    "name": "DataList",
    "title": "flare/vis/data/DataList",
    "group": "vis",
    "value": 19788
  },
  {
    "name": "DataSprite",
    "title": "flare/vis/data/DataSprite",
    "group": "vis",
    "value": 10349
  },
  {
    "name": "EdgeSprite",
    "title": "flare/vis/data/EdgeSprite",
    "group": "vis",
    "value": 3301
  },
  {
    "name": "NodeSprite",
    "title": "flare/vis/data/NodeSprite",
    "group": "vis",
    "value": 19382
  },
  {
    "name": "render",
    "title": "flare/vis/data/render",
    "group": "vis",
    "value": 0
  },
  {
    "name": "ArrowType",
    "title": "flare/vis/data/render/ArrowType",
    "group": "vis",
    "value": 698
  },
  {
    "name": "EdgeRenderer",
    "title": "flare/vis/data/render/EdgeRenderer",
    "group": "vis",
    "value": 5569
  },
  {
    "name": "IRenderer",
    "title": "flare/vis/data/render/IRenderer",
    "group": "vis",
    "value": 353
  },
  {
    "name": "ShapeRenderer",
    "title": "flare/vis/data/render/ShapeRenderer",
    "group": "vis",
    "value": 2247
  },
  {
    "name": "ScaleBinding",
    "title": "flare/vis/data/ScaleBinding",
    "group": "vis",
    "value": 11275
  },
  {
    "name": "Tree",
    "title": "flare/vis/data/Tree",
    "group": "vis",
    "value": 7147
  },
  {
    "name": "TreeBuilder",
    "title": "flare/vis/data/TreeBuilder",
    "group": "vis",
    "value": 9930
  },
  {
    "name": "events",
    "title": "flare/vis/events",
    "group": "vis",
    "value": 0
  },
  {
    "name": "DataEvent",
    "title": "flare/vis/events/DataEvent",
    "group": "vis",
    "value": 2313
  },
  {
    "name": "SelectionEvent",
    "title": "flare/vis/events/SelectionEvent",
    "group": "vis",
    "value": 1880
  },
  {
    "name": "TooltipEvent",
    "title": "flare/vis/events/TooltipEvent",
    "group": "vis",
    "value": 1701
  },
  {
    "name": "VisualizationEvent",
    "title": "flare/vis/events/VisualizationEvent",
    "group": "vis",
    "value": 1117
  },
  {
    "name": "legend",
    "title": "flare/vis/legend",
    "group": "vis",
    "value": 0
  },
  {
    "name": "Legend",
    "title": "flare/vis/legend/Legend",
    "group": "vis",
    "value": 20859
  },
  {
    "name": "LegendItem",
    "title": "flare/vis/legend/LegendItem",
    "group": "vis",
    "value": 4614
  },
  {
    "name": "LegendRange",
    "title": "flare/vis/legend/LegendRange",
    "group": "vis",
    "value": 10530
  },
  {
    "name": "operator",
    "title": "flare/vis/operator",
    "group": "vis",
    "value": 0
  },
  {
    "name": "distortion",
    "title": "flare/vis/operator/distortion",
    "group": "vis",
    "value": 0
  },
  {
    "name": "BifocalDistortion",
    "title": "flare/vis/operator/distortion/BifocalDistortion",
    "group": "vis",
    "value": 4461
  },
  {
    "name": "Distortion",
    "title": "flare/vis/operator/distortion/Distortion",
    "group": "vis",
    "value": 6314
  },
  {
    "name": "FisheyeDistortion",
    "title": "flare/vis/operator/distortion/FisheyeDistortion",
    "group": "vis",
    "value": 3444
  },
  {
    "name": "encoder",
    "title": "flare/vis/operator/encoder",
    "group": "vis",
    "value": 0
  },
  {
    "name": "ColorEncoder",
    "title": "flare/vis/operator/encoder/ColorEncoder",
    "group": "vis",
    "value": 3179
  },
  {
    "name": "Encoder",
    "title": "flare/vis/operator/encoder/Encoder",
    "group": "vis",
    "value": 4060
  },
  {
    "name": "PropertyEncoder",
    "title": "flare/vis/operator/encoder/PropertyEncoder",
    "group": "vis",
    "value": 4138
  },
  {
    "name": "ShapeEncoder",
    "title": "flare/vis/operator/encoder/ShapeEncoder",
    "group": "vis",
    "value": 1690
  },
  {
    "name": "SizeEncoder",
    "title": "flare/vis/operator/encoder/SizeEncoder",
    "group": "vis",
    "value": 1830
  },
  {
    "name": "filter",
    "title": "flare/vis/operator/filter",
    "group": "vis",
    "value": 0
  },
  {
    "name": "FisheyeTreeFilter",
    "title": "flare/vis/operator/filter/FisheyeTreeFilter",
    "group": "vis",
    "value": 5219
  },
  {
    "name": "GraphDistanceFilter",
    "title": "flare/vis/operator/filter/GraphDistanceFilter",
    "group": "vis",
    "value": 3165
  },
  {
    "name": "VisibilityFilter",
    "title": "flare/vis/operator/filter/VisibilityFilter",
    "group": "vis",
    "value": 3509
  },
  {
    "name": "IOperator",
    "title": "flare/vis/operator/IOperator",
    "group": "vis",
    "value": 1286
  },
  {
    "name": "label",
    "title": "flare/vis/operator/label",
    "group": "vis",
    "value": 0
  },
  {
    "name": "Labeler",
    "title": "flare/vis/operator/label/Labeler",
    "group": "vis",
    "value": 9956
  },
  {
    "name": "RadialLabeler",
    "title": "flare/vis/operator/label/RadialLabeler",
    "group": "vis",
    "value": 3899
  },
  {
    "name": "StackedAreaLabeler",
    "title": "flare/vis/operator/label/StackedAreaLabeler",
    "group": "vis",
    "value": 3202
  },
  {
    "name": "layout",
    "title": "flare/vis/operator/layout",
    "group": "vis",
    "value": 0
  },
  {
    "name": "AxisLayout",
    "title": "flare/vis/operator/layout/AxisLayout",
    "group": "vis",
    "value": 6725
  },
  {
    "name": "BundledEdgeRouter",
    "title": "flare/vis/operator/layout/BundledEdgeRouter",
    "group": "vis",
    "value": 3727
  },
  {
    "name": "CircleLayout",
    "title": "flare/vis/operator/layout/CircleLayout",
    "group": "vis",
    "value": 9317
  },
  {
    "name": "CirclePackingLayout",
    "title": "flare/vis/operator/layout/CirclePackingLayout",
    "group": "vis",
    "value": 12003
  },
  {
    "name": "DendrogramLayout",
    "title": "flare/vis/operator/layout/DendrogramLayout",
    "group": "vis",
    "value": 4853
  },
  {
    "name": "ForceDirectedLayout",
    "title": "flare/vis/operator/layout/ForceDirectedLayout",
    "group": "vis",
    "value": 8411
  },
  {
    "name": "IcicleTreeLayout",
    "title": "flare/vis/operator/layout/IcicleTreeLayout",
    "group": "vis",
    "value": 4864
  },
  {
    "name": "IndentedTreeLayout",
    "title": "flare/vis/operator/layout/IndentedTreeLayout",
    "group": "vis",
    "value": 3174
  },
  {
    "name": "Layout",
    "title": "flare/vis/operator/layout/Layout",
    "group": "vis",
    "value": 7881
  },
  {
    "name": "NodeLinkTreeLayout",
    "title": "flare/vis/operator/layout/NodeLinkTreeLayout",
    "group": "vis",
    "value": 12870
  },
  {
    "name": "PieLayout",
    "title": "flare/vis/operator/layout/PieLayout",
    "group": "vis",
    "value": 2728
  },
  {
    "name": "RadialTreeLayout",
    "title": "flare/vis/operator/layout/RadialTreeLayout",
    "group": "vis",
    "value": 12348
  },
  {
    "name": "RandomLayout",
    "title": "flare/vis/operator/layout/RandomLayout",
    "group": "vis",
    "value": 870
  },
  {
    "name": "StackedAreaLayout",
    "title": "flare/vis/operator/layout/StackedAreaLayout",
    "group": "vis",
    "value": 9121
  },
  {
    "name": "TreeMapLayout",
    "title": "flare/vis/operator/layout/TreeMapLayout",
    "group": "vis",
    "value": 9191
  },
  {
    "name": "Operator",
    "title": "flare/vis/operator/Operator",
    "group": "vis",
    "value": 2490
  },
  {
    "name": "OperatorList",
    "title": "flare/vis/operator/OperatorList",
    "group": "vis",
    "value": 5248
  },
  {
    "name": "OperatorSequence",
    "title": "flare/vis/operator/OperatorSequence",
    "group": "vis",
    "value": 4190
  },
  {
    "name": "OperatorSwitch",
    "title": "flare/vis/operator/OperatorSwitch",
    "group": "vis",
    "value": 2581
  },
  {
    "name": "SortOperator",
    "title": "flare/vis/operator/SortOperator",
    "group": "vis",
    "value": 2023
  },
  {
    "name": "Visualization",
    "title": "flare/vis/Visualization",
    "group": "vis",
    "value": 16540
  }
        
      ])
    }
  });
});
