---
to: src/components/<%= directory %>/<%= h.changeCase.pascal(component_name) %>/index.ts
---
export { <%= h.changeCase.pascal(component_name) %> } from './<%= h.changeCase.pascal(component_name) %>'
