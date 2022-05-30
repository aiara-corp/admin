"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[239],{239:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"table"},[a("v-card-title",{staticClass:"table_head"},[a("div",{staticClass:"table_title mb-2"},[a("v-select",{staticClass:"table_select",attrs:{flat:"","solo-inverted":"","hide-details":"",dense:"",color:"white",items:t.keys,label:"Search term"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),a("v-text-field",{staticClass:"table_search",attrs:{color:"white","append-icon":"mdi-magnify",label:"Search","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("div",{staticClass:"table_box table_choise"},[t._v(" Member level: "),a("v-checkbox",{staticClass:"mr-1 ml-1",attrs:{label:"Beginner",color:"primary",value:"","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Advancer",color:"primary",value:"","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Expert",color:"primary",value:"","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Master",color:"primary",value:"","hide-details":"",dense:""}})],1)],1),a("div",{staticClass:"table_title mb-1 justify-center"},[a("div",{staticClass:"table_box"},[a("v-btn",{staticClass:"mr-3 white--text",attrs:{color:"blue darken-3"}},[t._v(" Search ")]),a("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(e){return t.resetInput()}}},[t._v(" Reset ")])],1)]),a("div",{staticClass:"table_title"},[a("v-spacer"),a("div",{staticClass:"table_box table_box_checkbox"},[a("v-checkbox",{staticClass:"mr-2 table_checkbox_current",attrs:{label:"Apply current search filter",color:"primary","hide-details":"",dense:""}}),a("v-btn",{attrs:{"x-small":""},on:{click:function(e){return t.showDialogExcel()}}},[t._v(" Excel file Download ")])],1)],1)]),a("v-data-table",{staticClass:"table_data",attrs:{headers:t.headers,items:t.$store.state.merchantList,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"text-h6",staticStyle:{"font-weight":"700"}},[t._v(" Total "),a("span",{staticStyle:{color:"#0d47a1"}},[t._v(t._s(t.$store.state.merchantList.length))])])],1),a("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialogExcel,callback:function(e){t.dialogExcel=e},expression:"dialogExcel"}},[a("v-card",[a("v-container",[a("div",{staticClass:"card_title text-center mb-8",domProps:{textContent:t._s(t.titleDialogExcel)}})]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.closeDialogExcel()}}},[t._v(" Confirm ")])],1)],1)],1)]},proxy:!0},{key:"item.checkbox",fn:function(e){var l=e.item;return[a("v-checkbox",{staticStyle:{width:"fit-content"},attrs:{color:"blue darken-3"},model:{value:l.checkbox,callback:function(e){t.$set(l,"checkbox",e)},expression:"item.checkbox"}})]}}])})],1)],1)},s=[],c=(a(1539),a(4747),a(4916),a(4765),{data:function(){return{search:"",sortBy:"",keys:["All","Active","Sespended","Secession"],headers:[{text:"Merchant",align:"start",value:"merchant"},{text:"Merchant level",value:"level"},{text:"Total Profit (%)",value:"total"},{text:"Holding Profit",value:"profit"},{text:"Upload Pattern",value:"upload"},{text:"Downloads",value:"downloads"},{text:"Suspend Uploader",value:"checkbox"}],titleDialogExcel:"",dialogExcel:!1}},methods:{resetInput:function(){var t=document.querySelectorAll(".table_head .v-input--selection-controls__input input");t.forEach((function(t){t.checked&&t.click()})),this.search="",this.sortBy=""},showDialogExcel:function(){var t=document.querySelector(".table_checkbox_current input");t.checked?this.titleDialogExcel="Do you want to get the current search results in Excel?":this.titleDialogExcel="Do you want to get the entire data into Excel?",this.dialogExcel=!0},closeDialogExcel:function(){this.dialogExcel=!1}}}),i=c,o=a(1001),r=a(3453),n=a.n(r),d=a(680),h=a(2371),u=a(7118),b=a(9362),v=a(9846),x=a(4998),m=a(4497),p=a(5651),f=a(9762),k=a(5978),_=a(6656),C=a(7921),y=(0,o.Z)(i,l,s,!1,null,null,null),g=y.exports;n()(y,{VBtn:d.Z,VCard:h.Z,VCardActions:u.h7,VCardTitle:u.EB,VCheckbox:b.Z,VContainer:v.Z,VDataTable:x.Z,VDialog:m.Z,VSelect:p.Z,VSpacer:f.Z,VTextField:k.Z,VToolbar:_.Z,VToolbarTitle:C.qW})}}]);
//# sourceMappingURL=239-legacy.ab7eb1ff.js.map