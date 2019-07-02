[...document.querySelectorAll('.markdown-body td a')]
  .length

[...document.querySelectorAll('.markdown-body td a')]
  .filter(a => a.href.includes('observablehq.com') || a.href.includes('bl.ocks.org/mbostock'))
  .length

[...document.querySelectorAll('.markdown-body td a')]
  .filter(a => a.href.includes('observablehq.com') || a.href.includes('bl.ocks.org/mbostock'))
  .map(a => ({a, random: Math.random()}))
  .sort((l, r) => l.random - r.random)
  .map(({a}) => a.href)
  .slice(0, 3)

[...document.querySelectorAll('.markdown-body td a')]
  .filter(a => a.href.includes('observablehq.com') || a.href.includes('bl.ocks.org/mbostock'))
  .map(a => ({a, random: Math.random()}))
  .sort((l, r) => l.random - r.random)
  .map(({a}) => a.href)
  .slice(0, 3)
  .forEach(href => open(href))
