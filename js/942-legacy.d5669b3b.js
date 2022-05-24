"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[942],{2300:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-h5 mb-10"},[t._v("Refund Management List")]),a("v-card",{staticClass:"table filter"},[a("v-card-title",{staticClass:"table_head"},[a("div",{staticClass:"table_title mb-2"},[t._v(" Filter: ")]),a("div",{staticClass:"table_title mb-2"},[a("v-text-field",{staticClass:"table_search",attrs:{label:"Name","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"datepicker",attrs:{label:"Data start",readonly:"",dense:""},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}},"v-text-field",i,!1),s))]}}]),model:{value:t.menuStart,callback:function(e){t.menuStart=e},expression:"menuStart"}},[a("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(e){t.menuStart=!1}},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}})],1),a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"datepicker",attrs:{label:"Data end",readonly:"",dense:""},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}},"v-text-field",i,!1),s))]}}]),model:{value:t.menuEnd,callback:function(e){t.menuEnd=e},expression:"menuEnd"}},[a("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(e){t.menuEnd=!1}},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}})],1),a("div",{staticClass:"table_box table_choise"},[t._v(" Product: "),a("v-checkbox",{staticClass:"mr-1 ml-1",attrs:{label:"Standart",color:"primary","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Plus",color:"primary","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Premium",color:"primary","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Gold",color:"primary",dense:"","hide-details":""}})],1)],1),a("div",{staticClass:"table_title mb-1"},[a("v-text-field",{staticClass:"table_search",attrs:{label:"Code","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),a("div",{staticClass:"table_title"},[a("v-select",{staticClass:"table_select",attrs:{flat:"","solo-inverted":"","hide-details":"",dense:"",items:t.keys,label:"ALL"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),a("v-spacer"),a("div",{staticClass:"table_box table_box_buttons"},[a("v-btn",{staticClass:"mr-3 white--text",attrs:{color:"blue darken-3"}},[t._v(" Search ")]),a("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(e){return t.resetInput()}}},[t._v(" Reset ")])],1),a("v-spacer"),a("div",{staticClass:"table_box table_box_checkbox"},[a("v-checkbox",{staticClass:"mr-2 table_checkbox_current",attrs:{label:"Apply current search filter",color:"primary","hide-details":"",dense:""}}),a("v-btn",{attrs:{"x-small":""},on:{click:function(e){return t.showDialogExcel()}}},[t._v(" Excel file Download ")])],1)],1)]),a("v-data-table",{staticClass:"table_data",attrs:{headers:t.headers,items:t.$store.state.refundList,search:t.name},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialogExcel,callback:function(e){t.dialogExcel=e},expression:"dialogExcel"}},[a("v-card",[a("v-container",[a("div",{staticClass:"card_title text-center mb-8",domProps:{textContent:t._s(t.titleDialogExcel)}})]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.closeDialogExcel(),t.downloadExcel()}}},[t._v(" Confirm ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 justify-center"},[a("span",[t._v("Details")])]),a("v-container",[a("v-row",{staticClass:"justify-center"},[a("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[a("div",{staticClass:"text-subtitle-1 card_title text-center font-weight-medium"},[t._v("Holding Credit")]),a("div",{staticClass:"card_box mb-6"},[a("div",{staticClass:"card_subtitle text-subtitle-2"},[t._v("Name")]),a("div",{staticClass:"card_value text-subtitle-2",domProps:{textContent:t._s(t.nameDialog)}}),a("div",{staticClass:"card_subtitle text-subtitle-2"},[t._v("Product")]),a("div",{staticClass:"card_value text-subtitle-2",domProps:{textContent:t._s(t.productStatus)}}),a("div",{staticClass:"card_subtitle text-subtitle-2"},[t._v("Holding Credit")]),a("div",{staticClass:"card_value text-subtitle-2",domProps:{textContent:t._s(t.chargeCredit)}})]),a("div",{staticClass:"text-subtitle-1 card_title text-center font-weight-medium"},[t._v("Refund Request")]),a("div",{staticClass:"card_box mb-6"},[a("div",{staticClass:"card_subtitle text-subtitle-2"},[t._v("Date")]),a("div",{staticClass:"card_value text-subtitle-2",domProps:{textContent:t._s(t.dateRequest)}}),a("div",{staticClass:"card_subtitle text-subtitle-2"},[t._v("Method of payment")]),a("div",{staticClass:"card_value text-subtitle-2",domProps:{textContent:t._s(t.methodPayment)}}),a("div",{staticClass:"card_subtitle text-subtitle-2"},[t._v("Amount of payment")]),a("div",{staticClass:"card_value text-subtitle-2",domProps:{textContent:t._s(t.amountPayment)}}),a("div",{staticClass:"card_subtitle text-subtitle-2"},[t._v("Reason for refund")]),a("div",{staticClass:"card_value text-subtitle-2",domProps:{textContent:t._s(t.reasonRefund)}})])])],1)],1),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(e){return t.closeDialog()}}},[t._v(" List ")])],1)],1)],1)]},proxy:!0},{key:"item.state",fn:function(e){var s=e.item;return[a("v-btn",{attrs:{"x-small":""}},[t._v(" "+t._s(s.state)+" ")])]}},{key:"item.actions",fn:function(e){var s=e.item;return[a("v-icon",{staticClass:"mr-2",on:{click:function(e){return t.showDialog(s)}}},[t._v(" mdi-information-outline ")])]}}])})],1)],1)},i=[],l=(a(1539),a(4747),a(8309),{data:function(){return{name:"",code:"",sortBy:"",keys:["Waiting","Approval"],headers:[{text:"Code",align:"start",value:"code"},{text:"Request",value:"date"},{text:"Name",value:"name"},{text:"Product",value:"product"},{text:"Charge",value:"charge"},{text:"Paypal amount",value:"amount"},{text:"Deposited",value:"deposited"},{text:"Refund State",value:"state",sortable:!1},{text:"Info",value:"actions",sortable:!1}],dateStart:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateEnd:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),menuStart:!1,menuEnd:!1,dialog:!1,titleDialogExcel:"Do you want to get the entire data into Excel?",dialogExcel:!1,codeNumber:"",dateRequest:"",nameDialog:"",productStatus:"",chargeCredit:"",paypalAmount:"",amountPayment:"",refundState:"",methodPayment:"",reasonRefund:""}},methods:{resetInput:function(){var t=document.querySelectorAll(".table_head .v-input--selection-controls__input input");t.forEach((function(t){t.checked&&t.click()})),this.name="",this.code="",this.sortBy="",this.dateStart=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.dateEnd=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},showDialog:function(t){this.dialog=!0,this.codeNumber=t.code,this.dateRequest=t.date,this.nameDialog=t.name,this.productStatus=t.product,this.paypalAmount=t.code,this.amountPayment=t.amount,this.chargeCredit=t.charge,this.methodPayment=t.method,this.reasonRefund=t.reason},closeDialog:function(){this.dialog=!1},showDialogExcel:function(){var t=document.querySelector(".table_checkbox_current input");t.checked?this.titleDialogExcel="Do you want to get the current search results in Excel?":this.titleDialogExcel="Do you want to get the entire data into Excel?",this.dialogExcel=!0},closeDialogExcel:function(){this.dialogExcel=!1},downloadExcel:function(t,e,a){}}}),n=l,o=a(1001),c=a(3453),r=a.n(c),d=a(680),u=a(2371),v=a(7118),m=a(9362),b=a(2102),x=a(9846),f=a(4998),h=a(4484),_=a(4497),C=a(6428),p=a(6768),g=a(2877),k=a(5651),y=a(9762),D=a(5978),E=(0,o.Z)(n,s,i,!1,null,null,null),w=E.exports;r()(E,{VBtn:d.Z,VCard:u.Z,VCardActions:v.h7,VCardTitle:v.EB,VCheckbox:m.Z,VCol:b.Z,VContainer:x.Z,VDataTable:f.Z,VDatePicker:h.Z,VDialog:_.Z,VIcon:C.Z,VMenu:p.Z,VRow:g.Z,VSelect:k.Z,VSpacer:y.Z,VTextField:D.Z})}}]);
//# sourceMappingURL=942-legacy.d5669b3b.js.map