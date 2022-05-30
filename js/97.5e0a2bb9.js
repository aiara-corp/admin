"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[97],{6416:function(t,a,s){s.r(a),s.d(a,{default:function(){return D}});var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("v-card",{staticClass:"table filter"},[s("v-card-title",{staticClass:"table_head"},[s("div",{staticClass:"table_title",staticStyle:{"font-size":"14px"}},[t._v(" Order Cancellation "),s("v-spacer"),t._v(" * View details when clicking on Info ")],1)]),s("v-data-table",{staticClass:"table_data",attrs:{headers:t.headers,items:t.$store.state.orderCancellation,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialogExcel,callback:function(a){t.dialogExcel=a},expression:"dialogExcel"}},[s("v-card",[s("v-container",[s("div",{staticClass:"card_title text-center mb-8",domProps:{textContent:t._s(t.titleDialogExcel)}})]),s("v-card-actions",{staticClass:"justify-center"},[s("v-btn",{attrs:{color:"primary"},on:{click:function(a){return t.closeDialogExcel()}}},[t._v(" Confirm ")])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"1000px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"text-h5"},[s("span",[t._v("Order Details")]),s("v-spacer"),s("v-btn",[s("v-icon",[t._v(" mdi-printer ")])],1)],1),s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("div",{staticClass:"text-subtitle-1 card_title"},[t._v(" Order Information ")]),s("div",{staticClass:"card_box mb-3"},[s("div",{staticClass:"card_subtitle"},[t._v("Date")]),s("div",{staticClass:"card_value"},[t._v("2021-08-28")]),s("div",{staticClass:"card_subtitle"},[t._v("Orderer")]),s("div",{staticClass:"card_value"},[t._v("name")]),s("div",{staticClass:"card_subtitle"},[t._v("Order No.")]),s("div",{staticClass:"card_value"},[t._v("000001")]),s("div",{staticClass:"card_subtitle"},[t._v("Shipping info")]),s("div",{staticClass:"card_value"},[t._v("not departing")])])]),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("div",{staticClass:"text-subtitle-1 card_title"},[t._v(" Payment Information ")]),s("div",{staticClass:"card_box mb-3"},[s("div",{staticClass:"card_subtitle"},[t._v("Total Price")]),s("div",{staticClass:"card_value"},[t._v("$ 800")]),s("div",{staticClass:"card_subtitle"},[t._v("D/C Price")]),s("div",{staticClass:"card_value"},[t._v("$ 76")]),s("div",{staticClass:"card_subtitle"},[t._v("Coupon")]),s("div",{staticClass:"card_value"},[t._v("$ 36")]),s("div",{staticClass:"card_subtitle"},[t._v("Profit")]),s("div",{staticClass:"card_value"},[t._v("$ 20")]),s("div",{staticClass:"card_subtitle"},[t._v("Credit")]),s("div",{staticClass:"card_value"},[t._v("$ 20")]),s("div",{staticClass:"card_subtitle"},[t._v("Amounts")]),s("div",{staticClass:"card_value"},[t._v("$ 648")])])])],1),s("v-row",[s("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[s("div",{staticClass:"text-subtitle-1 card_title"},[t._v(" Order Product Information ")]),s("div",{staticClass:"card_box card_box_grid"},[s("v-img",{attrs:{cover:"","max-height":"120",src:t.srcImage}}),s("div",[t._v("Ultrafit Wincrest VS 35BK")]),s("div",[t._v("1 EA")]),s("div",[t._v("$ 400")])],1),s("div",{staticClass:"card_box card_box_grid mb-6"},[s("v-img",{attrs:{cover:"","max-height":"120",src:t.srcImage}}),s("div",[t._v("Ultrafit Wincrest VS 35BK")]),s("div",[t._v("1 EA")]),s("div",[t._v("$ 400")])],1),s("div",{staticClass:"card_box card_box_order mb-6"},[s("div",{staticClass:"card_subtitle"},[t._v("Country")]),s("div",{staticClass:"card_value"},[t._v("text")]),s("div",{staticClass:"card_subtitle"},[t._v("Address")]),s("div",{staticClass:"card_value"},[t._v("text1")]),s("div",{staticClass:"card_subtitle"},[t._v("Address 2")]),s("div",{staticClass:"card_value"},[t._v("text2")]),s("div",{staticClass:"card_subtitle"},[t._v("Zip/Postal")]),s("div",{staticClass:"card_value"},[t._v("123-456")]),s("div",{staticClass:"card_subtitle"},[t._v("Town/City")]),s("div",{staticClass:"card_value"},[t._v("text4")]),s("div",{staticClass:"card_subtitle"},[t._v("Region")]),s("div",{staticClass:"card_value"},[t._v("text5")]),s("div",{staticClass:"card_subtitle"},[t._v("Vat/Tax ID")]),s("div",{staticClass:"card_value"},[t._v("-")])])])],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{outlined:""},on:{click:function(a){return t.closeDialog()}}},[t._v(" Cancellation Approval ")]),s("v-btn",{attrs:{outlined:""},on:{click:function(a){return t.closeDialog()}}},[t._v(" Denial of Approval ")])],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(a){var i=a.item;return[s("v-icon",{staticClass:"mr-2",on:{click:function(a){return t.showDialog(i)}}},[t._v(" mdi-information-outline ")])]}}])})],1)],1)},e=[],l={data(){return{search:"",sortBy:"",keys:["Code","Date","Name"],headers:[{text:"Code",align:"start",value:"code"},{text:"Product Name",value:"name"},{text:"Purchase option",value:"purchase"},{text:"Date",value:"date"},{text:"Cancellation Date",value:"dateCancel"},{text:"Purchase cost",value:"cost"},{text:"State",value:"state"},{text:"Details",value:"actions",sortable:!1}],dateStart:"",dateEnd:"",menuStart:!1,menuEnd:!1,dialog:!1,titleDialogExcel:"Do you want to get the entire data into Excel?",dialogExcel:!1,srcImage:s(8439)}},methods:{showDialog(t){this.dialog=!0},closeDialog(){this.dialog=!1},showDialogExcel(){let t=document.querySelector(".table_checkbox_current input");t.checked?this.titleDialogExcel="Do you want to get the current search results in Excel?":this.titleDialogExcel="Do you want to get the entire data into Excel?",this.dialogExcel=!0},closeDialogExcel(){this.dialogExcel=!1}}},c=l,r=s(1001),d=s(3453),v=s.n(d),o=s(680),n=s(2371),_=s(7118),u=s(2102),C=s(9846),x=s(4998),b=s(4497),m=s(6428),g=s(7047),h=s(2877),p=s(9762),f=(0,r.Z)(c,i,e,!1,null,null,null),D=f.exports;v()(f,{VBtn:o.Z,VCard:n.Z,VCardActions:_.h7,VCardTitle:_.EB,VCol:u.Z,VContainer:C.Z,VDataTable:x.Z,VDialog:b.Z,VIcon:m.Z,VImg:g.Z,VRow:h.Z,VSpacer:p.Z})}}]);
//# sourceMappingURL=97.5e0a2bb9.js.map