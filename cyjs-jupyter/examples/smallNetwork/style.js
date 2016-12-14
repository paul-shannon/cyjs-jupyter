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
      "background-color":"mapData(flux, 0, 1000, white, red)",
      "width":  "60px",
      "height": "60px"
       }},

   {selector: 'node[type="gene"]', css: {
      "shape": "ellipse",
       }},

   {selector: 'node[type="gene"][expression < 0]', css: {
      "background-color": "mapData(expression, -3, 0, green, white)"
       }},
   
   {selector: 'node[type="gene"][expression >=0]', css: {
      "background-color": "mapData(expression, 0, 3, white, red)"
       }},
   
   {selector: 'edge[edgeType="produces"][flux < 0]', css: {
      "source-arrow-shape": "triangle",
      "source-arrow-color": "green", 
      "curve-style":"bezier",
      "line-color": "mapData(flux, -14, 0, green, #EDEDED)",
      "width":      "mapData(flux, -14, 0, 10, 1)"
      }},

   {selector: 'edge[edgeType="produces"][flux >= 0]', css: {
      "source-arrow-shape": "triangle",
      "source-arrow-color": "red", 
      "curve-style":"bezier",
      "line-color": "mapData(flux, 0, 14, #EDEDED, red)",
      "width":      "mapData(flux, 0, 14, 1, 10)"
      }},

   {selector: 'edge[edgeType="consumes"][flux < 0]', css: {
      "source-arrow-shape": "triangle",
      "source-arrow-color": "green",
      "curve-style":"bezier",
      "line-color": "mapData(flux, -14, 0, green, #EDEDED)",
      "width":      "mapData(flux, -14, 0, 10, 1)"
      }},

   {selector: 'edge[edgeType="consumes"][flux >= 0]', css: {
      "source-arrow-shape": "triangle",
      "source-arrow-color": "red", 
      "line-color": "mapData(flux, 0, 14, #EDEDED, red)",
      "width":      "mapData(flux, 0, 14, 1, 10)",
      "curve-style":"bezier"   // bezier, haystack
      }},


   {selector: 'edge[edgeType="catalyzes"]', css: {
      "line-color": "black",
      "target-arrow-shape": "circle",
      "target-arrow-color": "rgb(102, 102, 102)",
      width: "1px",
      "curve-style":"bezier"
      }},

   {selector:"node:selected", css: {
       "text-valign":"center",
       "text-halign":"center",
       //"content": "data(id)",
       "border-color": "black",
       "overlay-opacity": 0.2,
       "overlay-color": "gray"
       }},
       
   {selector:"edge:selected", css: {
       "overlay-opacity": 0.2,
       "overlay-color": "red"
       }}
   ];
