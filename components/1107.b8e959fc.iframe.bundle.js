"use strict";(self.webpackChunkowncast_admin=self.webpackChunkowncast_admin||[]).push([[1107],{"./node_modules/mermaid/dist/classDiagram-v2-539b00ca.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var _styles_0dd3ba1e_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/mermaid/dist/styles-0dd3ba1e.js"),d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/src/index.js"),dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/index.js"),_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/mermaid/dist/config-389b86ff.js"),_index_f9d09cc9_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/mermaid/dist/index-f9d09cc9.js"),_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/mermaid/dist/utils-d5eeff82.js"),_setupGraphViewbox_e35e4124_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/mermaid/dist/setupGraphViewbox-e35e4124.js");__webpack_require__("./node_modules/dompurify/dist/purify.js"),__webpack_require__("./node_modules/dayjs/dayjs.min.js"),__webpack_require__("./node_modules/dagre-d3-es/src/dagre/index.js"),__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/json.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js");const sanitizeText=txt=>_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.d.sanitizeText(txt,(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)());let conf={dividerMargin:10,padding:5,textHeight:10,curve:void 0};function getArrowMarker(type){let marker;switch(type){case 0:marker="aggregation";break;case 1:marker="extension";break;case 2:marker="composition";break;case 3:marker="dependency";break;case 4:marker="lollipop";break;default:marker="none"}return marker}const renderer={setConf:function(cnf){conf={...conf,...cnf}},draw:function(text,id,_version,diagObj){_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.l.info("Drawing class - ",id);const conf2=(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().flowchart??(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().class,securityLevel=(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().securityLevel;_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.l.info("config:",conf2);const nodeSpacing=(null==conf2?void 0:conf2.nodeSpacing)??50,rankSpacing=(null==conf2?void 0:conf2.rankSpacing)??50,g=new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_1__.k({multigraph:!0,compound:!0}).setGraph({rankdir:diagObj.db.getDirection(),nodesep:nodeSpacing,ranksep:rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),classes=diagObj.db.getClasses(),relations=diagObj.db.getRelations(),notes=diagObj.db.getNotes();let sandboxElement;_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.l.info(relations),function(classes,g,_id,diagObj){const keys=Object.keys(classes);_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.l.info("keys:",keys),_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.l.info(classes),keys.forEach((function(id){var _a,_b;const vertex=classes[id];let cssClassStr="";vertex.cssClasses.length>0&&(cssClassStr=cssClassStr+" "+vertex.cssClasses.join(" "));const styles2_labelStyle="",styles2_style="",vertexText=vertex.label??vertex.id,node={labelStyle:styles2_labelStyle,shape:"class_box",labelText:sanitizeText(vertexText),classData:vertex,rx:0,ry:0,class:cssClassStr,style:styles2_style,id:vertex.id,domId:vertex.domId,tooltip:diagObj.db.getTooltip(vertex.id)||"",haveCallback:vertex.haveCallback,link:vertex.link,width:"group"===vertex.type?500:void 0,type:vertex.type,padding:(null==(_a=(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().flowchart)?void 0:_a.padding)??(null==(_b=(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().class)?void 0:_b.padding)};g.setNode(vertex.id,node),_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.l.info("setNode",node)}))}(classes,g,0,diagObj),function(relations,g){const conf2=(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().flowchart;let cnt=0;relations.forEach((function(edge){var _a;cnt++;const edgeData={classes:"relation",pattern:1==edge.relation.lineType?"dashed":"solid",id:"id"+cnt,arrowhead:"arrow_open"===edge.type?"none":"normal",startLabelRight:"none"===edge.relationTitle1?"":edge.relationTitle1,endLabelLeft:"none"===edge.relationTitle2?"":edge.relationTitle2,arrowTypeStart:getArrowMarker(edge.relation.type1),arrowTypeEnd:getArrowMarker(edge.relation.type2),style:"fill:none",labelStyle:"",curve:(0,_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_8__.n)(null==conf2?void 0:conf2.curve,d3__WEBPACK_IMPORTED_MODULE_0__.c_6)};if(_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.l.info(edgeData,edge),void 0!==edge.style){const styles2=(0,_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_8__.m)(edge.style);edgeData.style=styles2.style,edgeData.labelStyle=styles2.labelStyle}edge.text=edge.title,void 0===edge.text?void 0!==edge.style&&(edgeData.arrowheadStyle="fill: #333"):(edgeData.arrowheadStyle="fill: #333",edgeData.labelpos="c",(null==(_a=(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().flowchart)?void 0:_a.htmlLabels)??(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().htmlLabels?(edgeData.labelType="html",edgeData.label='<span class="edgeLabel">'+edge.text+"</span>"):(edgeData.labelType="text",edgeData.label=edge.text.replace(_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.d.lineBreakRegex,"\n"),void 0===edge.style&&(edgeData.style=edgeData.style||"stroke: #333; stroke-width: 1.5px;fill:none"),edgeData.labelStyle=edgeData.labelStyle.replace("color:","fill:"))),g.setEdge(edge.id1,edge.id2,edgeData,cnt)}))}(relations,g),function(notes,g,startEdgeId,classes){_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.l.info(notes),notes.forEach((function(note,i){var _a,_b;const vertex=note,styles2_labelStyle="",styles2_style="",vertexText=vertex.text,node={labelStyle:styles2_labelStyle,shape:"note",labelText:sanitizeText(vertexText),noteData:vertex,rx:0,ry:0,class:"",style:styles2_style,id:vertex.id,domId:vertex.id,tooltip:"",type:"note",padding:(null==(_a=(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().flowchart)?void 0:_a.padding)??(null==(_b=(0,_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.g)().class)?void 0:_b.padding)};if(g.setNode(vertex.id,node),_config_389b86ff_js__WEBPACK_IMPORTED_MODULE_7__.l.info("setNode",node),!vertex.class||!(vertex.class in classes))return;const edgeId=startEdgeId+i,edgeData={id:`edgeNote${edgeId}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_8__.n)(conf.curve,d3__WEBPACK_IMPORTED_MODULE_0__.c_6)};g.setEdge(vertex.id,vertex.class,edgeData,edgeId)}))}(notes,g,relations.length+1,classes),"sandbox"===securityLevel&&(sandboxElement=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)("#i"+id));const root="sandbox"===securityLevel?(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)(sandboxElement.nodes()[0].contentDocument.body):(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)("body"),svg=root.select(`[id="${id}"]`),element=root.select("#"+id+" g");if((0,_index_f9d09cc9_js__WEBPACK_IMPORTED_MODULE_9__.r)(element,g,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",id),_utils_d5eeff82_js__WEBPACK_IMPORTED_MODULE_8__.u.insertTitle(svg,"classTitleText",(null==conf2?void 0:conf2.titleTopMargin)??5,diagObj.db.getDiagramTitle()),(0,_setupGraphViewbox_e35e4124_js__WEBPACK_IMPORTED_MODULE_10__.s)(g,svg,null==conf2?void 0:conf2.diagramPadding,null==conf2?void 0:conf2.useMaxWidth),!(null==conf2?void 0:conf2.htmlLabels)){const doc="sandbox"===securityLevel?sandboxElement.nodes()[0].contentDocument:document,labels=doc.querySelectorAll('[id="'+id+'"] .edgeLabel .label');for(const label of labels){const dim=label.getBBox(),rect=doc.createElementNS("http://www.w3.org/2000/svg","rect");rect.setAttribute("rx",0),rect.setAttribute("ry",0),rect.setAttribute("width",dim.width),rect.setAttribute("height",dim.height),label.insertBefore(rect,label.firstChild)}}}},diagram={parser:_styles_0dd3ba1e_js__WEBPACK_IMPORTED_MODULE_11__.p,db:_styles_0dd3ba1e_js__WEBPACK_IMPORTED_MODULE_11__.d,renderer,styles:_styles_0dd3ba1e_js__WEBPACK_IMPORTED_MODULE_11__.s,init:cnf=>{cnf.class||(cnf.class={}),cnf.class.arrowMarkerAbsolute=cnf.arrowMarkerAbsolute,_styles_0dd3ba1e_js__WEBPACK_IMPORTED_MODULE_11__.d.clear()}}}}]);