webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/global.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,\\n    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n  line-height: 1.6;\\n  font-size: 18px;\\n  background:#000000;\\n  color:white;\\n}\\n\\n* {\\n  -moz-box-sizing: border-box;\\n       box-sizing: border-box;\\n}\\n\\na {\\n  color: #0070f3;\\n  text-decoration: none;\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n.navigation{\\n  font-size: 14px !important;\\n  margin-top: 4px !important;\\n}\\n.ui.secondary.inverted.pointing.menu .item{\\n  color: gainsboro !important;\\n}\\n\\nheader{\\n  position: relative;\\n  z-index: 10000;\\n}\\n\\n\\n.billboard{\\n  position: absolute;\\n  /* background-color: #000; */\\n  width: 100%;\\n  height: 56.25vw;\\n  z-index: 0;\\n  left: 0px;\\n  top: 63px;\\n}\\n\\nbutton.billboard-button{\\n  margin-top: 30px !important;\\n  background: white !important;\\n  color: black !important;\\n}\\nbutton.billboard-button i{\\n  margin-left: 10px !important;\\n}\\n\\n.gallery-container{\\n  margin-top: 32.25vw;\\n}\\n\\n.billboard-image{\\n  position: absolute;\\n    top: -140px;\\n    z-index: -1;\\n}\\n\\nh2.ui.billboard-second-header{\\n  margin-top: 1.2em;\\n  color: #a0a0a0;\\n  color: #fff;\\n  font-weight: 400;\\n  line-height: normal;\\n  width: 100%;\\n  font-size: 1.4vw;\\n  text-shadow: 2px 2px 4px rgba(0,0,0,.45);\\n}\\n\\n\\n.ui.card>.image, .ui.cards>.card>.image{\\n  height: 201px;\\n}\\n\\n.ui.card>.image:not(.ui)>img, .ui.cards>.card>.image:not(.ui)>img{\\nheight: 100%;\\nobject-fit: cover;\\nwidth: 100%;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/portal/Documents/GitHub/thespacelife/the-space-life/styles/global.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAU;EACV,SAAS;EACT;gEAC8D;EAC9D,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,2BAAsB;OAAtB,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,0BAA0B;AAC5B;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;;AAGA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,WAAW;EACX,eAAe;EACf,UAAU;EACV,SAAS;EACT,SAAS;AACX;;AAEA;EACE,2BAA2B;EAC3B,4BAA4B;EAC5B,uBAAuB;AACzB;AACA;EACE,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;IAChB,WAAW;IACX,WAAW;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,wCAAwC;AAC1C;;;AAGA;EACE,aAAa;AACf;;AAEA;AACA,YAAY;AAEZ,iBAAiB;AACjB,WAAW;AACX\",\"file\":\"global.css\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,\\n    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n  line-height: 1.6;\\n  font-size: 18px;\\n  background:#000000;\\n  color:white;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\na {\\n  color: #0070f3;\\n  text-decoration: none;\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n.navigation{\\n  font-size: 14px !important;\\n  margin-top: 4px !important;\\n}\\n.ui.secondary.inverted.pointing.menu .item{\\n  color: gainsboro !important;\\n}\\n\\nheader{\\n  position: relative;\\n  z-index: 10000;\\n}\\n\\n\\n.billboard{\\n  position: absolute;\\n  /* background-color: #000; */\\n  width: 100%;\\n  height: 56.25vw;\\n  z-index: 0;\\n  left: 0px;\\n  top: 63px;\\n}\\n\\nbutton.billboard-button{\\n  margin-top: 30px !important;\\n  background: white !important;\\n  color: black !important;\\n}\\nbutton.billboard-button i{\\n  margin-left: 10px !important;\\n}\\n\\n.gallery-container{\\n  margin-top: 32.25vw;\\n}\\n\\n.billboard-image{\\n  position: absolute;\\n    top: -140px;\\n    z-index: -1;\\n}\\n\\nh2.ui.billboard-second-header{\\n  margin-top: 1.2em;\\n  color: #a0a0a0;\\n  color: #fff;\\n  font-weight: 400;\\n  line-height: normal;\\n  width: 100%;\\n  font-size: 1.4vw;\\n  text-shadow: 2px 2px 4px rgba(0,0,0,.45);\\n}\\n\\n\\n.ui.card>.image, .ui.cards>.card>.image{\\n  height: 201px;\\n}\\n\\n.ui.card>.image:not(.ui)>img, .ui.cards>.card>.image:not(.ui)>img{\\nheight: 100%;\\n-o-object-fit: cover;\\nobject-fit: cover;\\nwidth: 100%;\\n}\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5jc3M/ZWNlOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGdCQUFnQixlQUFlLGNBQWMsd0pBQXdKLHFCQUFxQixvQkFBb0IsdUJBQXVCLGdCQUFnQixHQUFHLE9BQU8sZ0NBQWdDLGdDQUFnQyxHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLGFBQWEsK0JBQStCLEdBQUcsU0FBUyxvQkFBb0IsbUJBQW1CLEdBQUcsZ0JBQWdCLCtCQUErQiwrQkFBK0IsR0FBRyw2Q0FBNkMsZ0NBQWdDLEdBQUcsV0FBVyx1QkFBdUIsbUJBQW1CLEdBQUcsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsbUJBQW1CLG9CQUFvQixlQUFlLGNBQWMsY0FBYyxHQUFHLDRCQUE0QixnQ0FBZ0MsaUNBQWlDLDRCQUE0QixHQUFHLDRCQUE0QixpQ0FBaUMsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHVCQUF1QixrQkFBa0Isa0JBQWtCLEdBQUcsa0NBQWtDLHNCQUFzQixtQkFBbUIsZ0JBQWdCLHFCQUFxQix3QkFBd0IsZ0JBQWdCLHFCQUFxQiw2Q0FBNkMsR0FBRyw4Q0FBOEMsa0JBQWtCLEdBQUcsc0VBQXNFLGVBQWUsb0JBQW9CLGNBQWMsR0FBRyxPQUFPLG9JQUFvSSxVQUFVLFVBQVUsS0FBSyxPQUFPLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsMERBQTBELGVBQWUsY0FBYyx3SkFBd0oscUJBQXFCLG9CQUFvQix1QkFBdUIsZ0JBQWdCLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxhQUFhLCtCQUErQixHQUFHLFNBQVMsb0JBQW9CLG1CQUFtQixHQUFHLGdCQUFnQiwrQkFBK0IsK0JBQStCLEdBQUcsNkNBQTZDLGdDQUFnQyxHQUFHLFdBQVcsdUJBQXVCLG1CQUFtQixHQUFHLGlCQUFpQix1QkFBdUIsOEJBQThCLG1CQUFtQixvQkFBb0IsZUFBZSxjQUFjLGNBQWMsR0FBRyw0QkFBNEIsZ0NBQWdDLGlDQUFpQyw0QkFBNEIsR0FBRyw0QkFBNEIsaUNBQWlDLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQix1QkFBdUIsa0JBQWtCLGtCQUFrQixHQUFHLGtDQUFrQyxzQkFBc0IsbUJBQW1CLGdCQUFnQixxQkFBcUIsd0JBQXdCLGdCQUFnQixxQkFBcUIsNkNBQTZDLEdBQUcsOENBQThDLGtCQUFrQixHQUFHLHNFQUFzRSxlQUFlLHVCQUF1QixvQkFBb0IsY0FBYyxHQUFHLEdBQUc7QUFDbmhJO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL3N0eWxlcy9nbG9iYWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSxcXG4gICAgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQ6IzAwMDAwMDtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4qIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzAwNzBmMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubmF2aWdhdGlvbntcXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi51aS5zZWNvbmRhcnkuaW52ZXJ0ZWQucG9pbnRpbmcubWVudSAuaXRlbXtcXG4gIGNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcXG59XFxuXFxuaGVhZGVye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwMDA7XFxufVxcblxcblxcbi5iaWxsYm9hcmR7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU2LjI1dnc7XFxuICB6LWluZGV4OiAwO1xcbiAgbGVmdDogMHB4O1xcbiAgdG9wOiA2M3B4O1xcbn1cXG5cXG5idXR0b24uYmlsbGJvYXJkLWJ1dHRvbntcXG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG59XFxuYnV0dG9uLmJpbGxib2FyZC1idXR0b24gaXtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5nYWxsZXJ5LWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDMyLjI1dnc7XFxufVxcblxcbi5iaWxsYm9hcmQtaW1hZ2V7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTE0MHB4O1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuaDIudWkuYmlsbGJvYXJkLXNlY29uZC1oZWFkZXJ7XFxuICBtYXJnaW4tdG9wOiAxLjJlbTtcXG4gIGNvbG9yOiAjYTBhMGEwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjR2dztcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsMCwwLC40NSk7XFxufVxcblxcblxcbi51aS5jYXJkPi5pbWFnZSwgLnVpLmNhcmRzPi5jYXJkPi5pbWFnZXtcXG4gIGhlaWdodDogMjAxcHg7XFxufVxcblxcbi51aS5jYXJkPi5pbWFnZTpub3QoLnVpKT5pbWcsIC51aS5jYXJkcz4uY2FyZD4uaW1hZ2U6bm90KC51aSk+aW1ne1xcbmhlaWdodDogMTAwJTtcXG5vYmplY3QtZml0OiBjb3ZlcjtcXG53aWR0aDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3BvcnRhbC9Eb2N1bWVudHMvR2l0SHViL3RoZXNwYWNlbGlmZS90aGUtc3BhY2UtbGlmZS9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNUO2dFQUM4RDtFQUM5RCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBc0I7T0FBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHdDQUF3QztBQUMxQzs7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7QUFDQSxZQUFZO0FBRVosaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWFwiLFwiZmlsZVwiOlwiZ2xvYmFsLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LFxcbiAgICBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZDojMDAwMDAwO1xcbiAgY29sb3I6d2hpdGU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzAwNzBmMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubmF2aWdhdGlvbntcXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi51aS5zZWNvbmRhcnkuaW52ZXJ0ZWQucG9pbnRpbmcubWVudSAuaXRlbXtcXG4gIGNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcXG59XFxuXFxuaGVhZGVye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwMDA7XFxufVxcblxcblxcbi5iaWxsYm9hcmR7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU2LjI1dnc7XFxuICB6LWluZGV4OiAwO1xcbiAgbGVmdDogMHB4O1xcbiAgdG9wOiA2M3B4O1xcbn1cXG5cXG5idXR0b24uYmlsbGJvYXJkLWJ1dHRvbntcXG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG59XFxuYnV0dG9uLmJpbGxib2FyZC1idXR0b24gaXtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5nYWxsZXJ5LWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDMyLjI1dnc7XFxufVxcblxcbi5iaWxsYm9hcmQtaW1hZ2V7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTE0MHB4O1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuaDIudWkuYmlsbGJvYXJkLXNlY29uZC1oZWFkZXJ7XFxuICBtYXJnaW4tdG9wOiAxLjJlbTtcXG4gIGNvbG9yOiAjYTBhMGEwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjR2dztcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsMCwwLC40NSk7XFxufVxcblxcblxcbi51aS5jYXJkPi5pbWFnZSwgLnVpLmNhcmRzPi5jYXJkPi5pbWFnZXtcXG4gIGhlaWdodDogMjAxcHg7XFxufVxcblxcbi51aS5jYXJkPi5pbWFnZTpub3QoLnVpKT5pbWcsIC51aS5jYXJkcz4uY2FyZD4uaW1hZ2U6bm90KC51aSk+aW1ne1xcbmhlaWdodDogMTAwJTtcXG4tby1vYmplY3QtZml0OiBjb3ZlcjtcXG5vYmplY3QtZml0OiBjb3ZlcjtcXG53aWR0aDogMTAwJTtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css\n");

/***/ })

})