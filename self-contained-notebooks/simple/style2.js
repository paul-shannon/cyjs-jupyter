vizmap = [

   {selector: "node", css: {
      "shape": "ellipse",
      "text-valign":"center",
      "text-halign":"center",
      "content": "data(name)",
      "background-color": "#FFFFFF",
      "border-color":"black","border-width":"1px",
      "width": "mapData(degree, 0.0, 5.0, 20.0, 200.0)",
      "height":"mapData(degree, 0.0, 5.0, 20.0, 200.0)",
      "font-size":"8px"}},


   {selector: 'node[type="info"]', css: {
       "shape": "roundrectangle",
       "font-size": "72px",
       "width": "360px",
       "height": "120px",
       "border-width": "3px",
       "background-color": "beige"
       }},

   {selector: 'node[type="metabolite"]', css: {
       "shape": "roundrectangle",
       "width": "80px",
       "height": "30px",
       "font-size": "6px"
       }},

   {selector: 'node[type="reaction"]', css: {
      "shape": "roundrectangle",
      "background-color": "beige",
      "width":  "60px",
      "height": "60px"
       }},

   {selector: 'node[type="tf"]', css: {
       "shape": "rectangle"
       }},
   

   {selector: 'node[score=1]', css: {
       "background-color": "#AAFFAA"
       }},

   {selector: 'node[score=2]', css: {
       "background-color": "#DDDDFF"
       }},

   {selector: 'node[score=3]', css: {
       "background-color": "#FF2222"
       }},

   {selector: 'edge', css: {
      "line-color": "rgb(200, 200, 200)",
      "target-arrow-shape": "triangle",
      "target-arrow-color": "rgb(0, 0, 0)",
      width: "2px"
      }},

   {selector: 'edge[edgeType="substrateFor"]', css: {
      "line-color": "blue",
      "target-arrow-shape": "triangle",
      "target-arrow-color": "rgb(0, 0, 0)",
      width: "2px",
      "curve-style":"bezier",   // bezier, haystack
      }},

   {selector: 'edge[edgeType="produces"]', css: {
      "line-color": "red",
      "target-arrow-shape": "triangle",
      "target-arrow-color": "rgb(0, 0, 0)",
      width: "2px",
      "curve-style":"bezier",   // bezier, haystack
      }},

   {selector:"node:selected", css: {
       "text-valign":"center",
       "text-halign":"center",
       "border-color": "black",
       "overlay-opacity": 0.2,
       "overlay-color": "gray"
       }}
   ];
