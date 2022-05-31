"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[206],{4659:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",[i("v-container",[i("div",{staticClass:"text-h6"},[t._v("Basic setting")]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Issuence type:")]),i("v-radio-group",{staticClass:"mt-0",attrs:{row:"","hide-details":""},model:{value:t.row,callback:function(e){t.row=e},expression:"row"}},[i("v-radio",{attrs:{label:"Discount coupon",value:"radio-1",color:"blue darken-4"}}),i("v-radio",{attrs:{label:"Shipping Fee Free Coupon",value:"radio-2",color:"blue darken-4"}})],1)],1),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Issuance Type:")]),i("div",{staticClass:"d-flex align-center"},[i("v-radio-group",{staticClass:"mt-0",attrs:{row:"","hide-details":""},model:{value:t.row2,callback:function(e){t.row2=e},expression:"row2"}},[i("v-radio",{attrs:{label:"Conditional",value:"radio-3",color:"blue darken-4"}})],1),i("v-select",{staticStyle:{"max-width":"570px"},attrs:{"hide-details":"",items:["Sign Up","First-Time Customer","Satisfy purchase quantity","Satisfy the purchase amount"],outlined:"",dense:""}})],1)]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Coupon Name:")]),i("v-text-field",{staticStyle:{"max-width":"700px"},attrs:{outlined:"",dense:"","hide-details":""}})],1),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Coupon Description:")]),i("v-text-field",{staticStyle:{"max-width":"700px"},attrs:{outlined:"",dense:"","hide-details":""}})],1),i("div",{staticClass:"coupon_grid pb-5"},[i("span",[t._v("Date of use: ")]),i("div",{staticClass:"d-flex align-center"},[i("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({staticClass:"mr-1",staticStyle:{"max-width":"240px"},attrs:{label:"Start date",readonly:"",dense:"",flat:"",outlined:"","hide-details":"","append-icon":"mdi-calendar"},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}},"v-text-field",n,!1),a))]}}]),model:{value:t.menuStart,callback:function(e){t.menuStart=e},expression:"menuStart"}},[i("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(e){t.menuStart=!1}},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}})],1),i("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"return-value":t.time2,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time2=e},"update:return-value":function(e){t.time2=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({staticStyle:{"max-width":"120px"},attrs:{label:"Time",readonly:"",dense:"",flat:"",outlined:"","hide-details":"","append-icon":"mdi-clock-time-four-outline"},model:{value:t.time2,callback:function(e){t.time2=e},expression:"time2"}},"v-text-field",n,!1),a))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t.menu2?i("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(e){return t.$refs.menu2.save(t.time2)}},model:{value:t.time2,callback:function(e){t.time2=e},expression:"time2"}}):t._e()],1),i("span",{staticClass:"mr-1 ml-1"},[t._v(" ~ ")]),i("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({staticClass:"mr-1",staticStyle:{"max-width":"240px"},attrs:{label:"End date",readonly:"",dense:"",flat:"",outlined:"","hide-details":"","append-icon":"mdi-calendar"},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}},"v-text-field",n,!1),a))]}}]),model:{value:t.menuEnd,callback:function(e){t.menuEnd=e},expression:"menuEnd"}},[i("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(e){t.menuEnd=!1}},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}})],1),i("v-menu",{ref:"menu3",attrs:{"close-on-content-click":!1,"return-value":t.time3,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time3=e},"update:return-value":function(e){t.time3=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({staticStyle:{"max-width":"120px"},attrs:{label:"Time",readonly:"",dense:"",flat:"",outlined:"","hide-details":"","append-icon":"mdi-clock-time-four-outline"},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}},"v-text-field",n,!1),a))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t.menu3?i("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(e){return t.$refs.menu3.save(t.time3)}},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}}):t._e()],1)],1),i("div",{staticClass:"coupon_grid_info"},[t._v(" * if the period of use not specified, there is no limit to the period of use ")])]),i("div",{staticClass:"coupon_grid mb-3"},[i("span",[t._v("Coupon benefit amount setting")]),i("div",{staticClass:"d-flex align-center"},[i("v-text-field",{staticClass:"mr-2",staticStyle:{"max-width":"390px"},attrs:{outlined:"",dense:"","hide-details":"",value:"0"}}),i("v-select",{staticStyle:{"max-width":"100px"},attrs:{"hide-details":"",items:["$","€","₩"],outlined:"",dense:""}})],1)]),i("div",{staticClass:"text-h6"},[t._v("Coupon detailed setting")]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Minimum Issued Amount:")]),i("div",{staticClass:"d-flex align-center"},[t._v(" Issued when the purchase amount is "),i("v-text-field",{staticClass:"ml-2 mr-2",staticStyle:{"max-width":"250px"},attrs:{outlined:"",dense:"","hide-details":""}}),t._v(" $ or more ")],1)]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Set minimum purchase amount:")]),i("div",{staticClass:"d-flex align-center"},[t._v(" Available when the minimum perchase amount is "),i("v-text-field",{staticClass:"ml-2 mr-2",staticStyle:{"max-width":"250px"},attrs:{outlined:"",dense:"","hide-details":""}}),t._v(" $ or more ")],1)]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Purchase Quantity Fulfillment:")])]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Set discount rate:")]),i("span",{staticClass:"coupon_grid_select"},[t._v("*Please select a product category")]),i("span"),i("div",{staticClass:"d-flex align-center"},[t._v(" 1 Dept: "),i("v-select",{staticClass:"ml-1 mr-2",staticStyle:{"max-width":"290px"},attrs:{"hide-details":"",items:["Windshield protection","Paint Protection Film","Window Film"],outlined:"",dense:""}}),t._v(" Product: "),i("v-select",{staticClass:"ml-1",staticStyle:{"max-width":"250px"},attrs:{"hide-details":"",items:["Ultrafit XP Crystal","Ultrafit XP Crystal 2","Ultrafit XP Crystal 3"],outlined:"",dense:""}})],1)]),i("div",{staticClass:"coupon_grid"},[i("span"),i("div",{staticClass:"d-flex align-center"},[t._v(" 2 Dept: "),i("v-select",{staticClass:"ml-1 mr-2",staticStyle:{"max-width":"290px"},attrs:{"hide-details":"",items:["Windshield protection","Paint Protection Film","Window Film"],outlined:"",dense:""}})],1)]),i("div",{staticClass:"coupon_grid"},[i("span"),i("div",{staticClass:"d-flex align-center"},[t._v(" 3 Dept: "),i("v-select",{staticClass:"ml-1 mr-2",staticStyle:{"max-width":"290px"},attrs:{"hide-details":"",items:["Windshield protection","Paint Protection Film","Window Film"],outlined:"",dense:""}})],1)]),i("div",{staticClass:"coupon_grid"},[i("span"),i("div",{staticClass:"d-flex align-center"},[i("v-text-field",{staticClass:"mr-2",staticStyle:{"max-width":"190px"},attrs:{outlined:"",dense:"","hide-details":""}}),t._v(" buy "),i("v-select",{staticClass:"ml-2 mr-2",staticStyle:{"max-width":"100px"},attrs:{"hide-details":"",items:["$","€","₩"],outlined:"",dense:""}}),t._v(" D/C ")],1)]),i("div",{staticClass:"coupon_grid mb-3"},[i("span"),i("v-btn",{staticStyle:{"max-width":"100px"},attrs:{text:""}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-plus ")]),t._v("Add")],1)],1),i("div",{staticClass:"d-flex"},[i("v-spacer"),i("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"}},[t._v("Add Coupon")]),i("v-spacer")],1)])],1)],1)},n=[],s={data:function(){return{row:null,row2:null,dateStart:"",dateEnd:"",menuStart:!1,menuEnd:!1,time2:null,menu2:!1,time3:null,menu3:!1}}},l=s,d=i(1001),o=i(3453),r=i.n(o),c=i(680),u=i(2371),m=i(9846),p=i(7416),v=i(6428),f=i(6768),x=i(8978),h=i(4739),_=i(5651),C=i(9762),w=i(5978),S=i(9142),k=(0,d.Z)(l,a,n,!1,null,null,null),b=k.exports;r()(k,{VBtn:c.Z,VCard:u.Z,VContainer:m.Z,VDatePicker:p.Z,VIcon:v.Z,VMenu:f.Z,VRadio:x.Z,VRadioGroup:h.Z,VSelect:_.Z,VSpacer:C.Z,VTextField:w.Z,VTimePicker:S.Z})}}]);
//# sourceMappingURL=206-legacy.e59d4728.js.map