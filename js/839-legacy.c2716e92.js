"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[839],{1106:function(t,a,e){e.r(a),e.d(a,{default:function(){return A}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"text-h5 mb-10"},[t._v("Approval/Registration")]),e("v-card",{staticClass:"table filter approval"},[e("v-card-title",{staticClass:"table_head"},[e("div",{staticClass:"table_title mb-1"},[t._v(" Filter: ")]),e("div",{staticClass:"table_title",staticStyle:{"font-size":"14px"}},[t._v(" Pattern Information ")]),e("div",{staticClass:"table_title"},[e("v-text-field",{staticClass:"table_search",attrs:{label:"Region","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.region,callback:function(a){t.region=a},expression:"region"}}),e("v-text-field",{staticClass:"table_search",attrs:{label:"Maker","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.maker,callback:function(a){t.maker=a},expression:"maker"}}),e("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Year","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.year,callback:function(a){t.year=a},expression:"year"}}),e("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Model","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.model,callback:function(a){t.model=a},expression:"model"}})],1),e("div",{staticClass:"table_title"},[e("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Sub Model","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.subModel,callback:function(a){t.subModel=a},expression:"subModel"}}),e("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Series","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.series,callback:function(a){t.series=a},expression:"series"}}),e("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Code","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.code,callback:function(a){t.code=a},expression:"code"}})],1),e("div",{staticClass:"table_title",staticStyle:{"font-size":"14px"}},[t._v(" Upload Information ")]),e("div",{staticClass:"table_title"},[e("v-text-field",{staticClass:"table_search mt-1",attrs:{label:"Name","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),e("v-text-field",{staticClass:"table_search table_search_min mt-1",attrs:{label:"Price min","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.priceMin,callback:function(a){t.priceMin=a},expression:"priceMin"}}),e("v-text-field",{staticClass:"table_search table_search_min mt-1",attrs:{label:"Price max","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.priceMax,callback:function(a){t.priceMax=a},expression:"priceMax"}}),e("v-text-field",{staticClass:"table_search table_search_min mt-1",attrs:{label:"Area min","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.areaMin,callback:function(a){t.areaMin=a},expression:"areaMin"}}),e("v-text-field",{staticClass:"table_search table_search_min mt-1",attrs:{label:"Area max","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.areaMax,callback:function(a){t.areaMax=a},expression:"areaMax"}})],1),e("div",{staticClass:"table_title mb-2 mt-4"},[e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-text-field",t._g(t._b({staticClass:"datepicker mr-5",attrs:{label:"Data start",readonly:"",dense:""},model:{value:t.dateStart,callback:function(a){t.dateStart=a},expression:"dateStart"}},"v-text-field",i,!1),s))]}}]),model:{value:t.menuStart,callback:function(a){t.menuStart=a},expression:"menuStart"}},[e("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(a){t.menuStart=!1}},model:{value:t.dateStart,callback:function(a){t.dateStart=a},expression:"dateStart"}})],1),e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-text-field",t._g(t._b({staticClass:"datepicker",attrs:{label:"Data end",readonly:"",dense:""},model:{value:t.dateEnd,callback:function(a){t.dateEnd=a},expression:"dateEnd"}},"v-text-field",i,!1),s))]}}]),model:{value:t.menuEnd,callback:function(a){t.menuEnd=a},expression:"menuEnd"}},[e("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(a){t.menuEnd=!1}},model:{value:t.dateEnd,callback:function(a){t.dateEnd=a},expression:"dateEnd"}})],1),e("v-spacer")],1),e("div",{staticClass:"table_title mb-2"},[e("v-spacer"),e("div",{staticClass:"table_box table_box_buttons"},[e("v-btn",{staticClass:"mr-3 white--text",attrs:{color:"blue darken-3"}},[t._v(" Search ")]),e("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(a){return t.resetInput()}}},[t._v(" Reset ")])],1),e("v-spacer")],1),e("div",{staticClass:"table_title"},[e("v-select",{staticClass:"table_select",attrs:{flat:"","solo-inverted":"","hide-details":"",color:"white",dense:"",items:t.keys,label:"sort By"},model:{value:t.sortBy,callback:function(a){t.sortBy=a},expression:"sortBy"}}),e("v-spacer")],1)]),e("v-data-table",{staticClass:"table_data",attrs:{headers:t.headers,items:t.$store.state.uploaderPattern,search:t.name},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialogApproval,callback:function(a){t.dialogApproval=a},expression:"dialogApproval"}},[e("v-card",[e("v-container",[e("div",{staticClass:"card_title text-center mb-8",domProps:{textContent:t._s(t.titleDialogApproval)}}),!0===t.isReason?e("div",[e("span",{staticClass:"text-body-2"},[t._v("* it will be shown to the uploader as a reason for rejection.")]),e("v-text-field",{attrs:{"solo-inverted":"",flat:""}})],1):t._e()]),!1===t.isApproval?e("v-card-actions",{staticClass:"justify-center"},[e("v-btn",{attrs:{color:"primary"},on:{click:function(a){return t.confirmApproval()}}},[t._v(" Confirm ")]),e("v-btn",{attrs:{color:"primary"},on:{click:function(a){return t.closeDialogApproval()}}},[t._v(" Cancel ")])],1):t._e(),!0===t.isApproval?e("v-card-actions",{staticClass:"justify-center"},[e("v-btn",{attrs:{color:"primary"},on:{click:function(a){return t.closeDialogApproval()}}},[t._v(" Confirm ")])],1):t._e()],1)],1),e("v-dialog",{attrs:{"max-width":"1000px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"text-h5"},[e("span",[t._v("Details")])]),e("v-container",[e("div",{staticClass:"text-subtitle-1 card_title"},[t._v("Uploader Information")]),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("div",{staticClass:"card_box mb-3"},[e("div",{staticClass:"card_subtitle "},[t._v("Name")]),e("div",{staticClass:"card_value ",domProps:{textContent:t._s(t.nameDialog)}}),e("div",{staticClass:"card_subtitle "},[t._v("Company")]),e("div",{staticClass:"card_value ",domProps:{textContent:t._s(t.companyName)}}),e("div",{staticClass:"card_subtitle "},[t._v("Country")]),e("div",{staticClass:"card_value ",domProps:{textContent:t._s(t.countryName)}}),e("div",{staticClass:"card_subtitle "},[t._v("Date")]),e("div",{staticClass:"card_value ",domProps:{textContent:t._s(t.dateJoin)}}),e("div",{staticClass:"card_subtitle "},[t._v("Contact Email")]),e("div",{staticClass:"card_value ",domProps:{textContent:t._s(t.contactEmail)}})])]),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("div",{staticClass:"card_box card_box_pattern mb-3"},[e("div",{staticClass:"card_subtitle"},[t._v("CI/BI Image")]),e("div",{staticClass:"card_img"},[e("img",{staticClass:"card_dialog_img",attrs:{src:t.imgUrl}})])])])],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("div",{staticClass:"card_box card_box_introduction mb-6"},[e("div",{staticClass:"card_subtitle"},[t._v("Introduction")]),e("div",{staticClass:"card_value"})])])],1),e("div",{staticClass:"text-subtitle-1 card_title"},[t._v("Pattern Information "),e("span",[t._v(t._s(t.codeValue))])]),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("div",{staticClass:"card_box"},[e("div",{staticClass:"card_subtitle "},[t._v("Region")]),e("div",{staticClass:"card_value "},[t._v("USA")]),e("div",{staticClass:"card_subtitle "},[t._v("Maker")]),e("div",{staticClass:"card_value "},[t._v("BMW")]),e("div",{staticClass:"card_subtitle "},[t._v("Year")]),e("div",{staticClass:"card_value "},[t._v("2020")]),e("div",{staticClass:"card_subtitle "},[t._v("Model")]),e("div",{staticClass:"card_value "},[t._v("X series")]),e("div",{staticClass:"card_subtitle "},[t._v("Sub Model")]),e("div",{staticClass:"card_value "},[t._v("X5")]),e("div",{staticClass:"card_subtitle "},[t._v("Series")]),e("div",{staticClass:"card_value "},[t._v("-")])])]),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("div",{staticClass:"card_box"},[e("div",{staticClass:"card_subtitle "},[t._v("Side")]),e("div",{staticClass:"card_value "},[t._v("Out Front")]),e("div",{staticClass:"card_subtitle "},[t._v("Pattern Part")]),e("div",{staticClass:"card_value "},[t._v("Bumper")]),e("div",{staticClass:"card_subtitle "},[t._v("Sub Part")]),e("div",{staticClass:"card_value "},[t._v("Bikini/Wrapped/Sensors")]),e("div",{staticClass:"card_subtitle "},[t._v("Tag")]),e("div",{staticClass:"card_value "},[t._v("#tag #tag2 #tag3")]),e("div",{staticClass:"card_subtitle "},[t._v("Price")]),e("div",{staticClass:"card_value "},[t._v("$1.0")]),e("div",{staticClass:"card_subtitle "},[t._v("Area")]),e("div",{staticClass:"card_value "},[t._v("-")])])])],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("v-card-actions",{staticStyle:{padding:"0"}},[!0===t.newPattern?e("div",[t._v(" * This is a category newly registered by the user ")]):t._e(),e("v-spacer"),e("v-btn",{attrs:{small:"",outlined:"",href:"http://178.62.183.143:6221/editor"}},[t._v(" Editor ")])],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("div",{staticClass:"card_box card_box_introduction mb-6"},[e("div",{staticClass:"card_subtitle"},[t._v("Pattern File")]),e("div",{staticClass:"card_value"},[e("img",{staticClass:"card_dialog_img",attrs:{src:t.imgUrl}}),t._v(" bumperImage_01 ")]),e("div",{staticClass:"card_subtitle"},[t._v("Description Memo")]),e("div",{staticClass:"card_value"})])])],1)],1),!0===t.rejectPattern?e("div",[e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"white--text",attrs:{color:"error"},on:{click:function(a){return t.showDialogApproval("reject")}}},[t._v(" Reject Rejection ")]),e("v-btn",{attrs:{outlined:""},on:{click:function(a){return t.closeDialog()}}},[t._v(" List ")])],1)],1):t._e(),!1===t.rejectPattern?e("div",[e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"white--text",attrs:{color:"error"},on:{click:function(a){return t.cancelPattern()}}},[t._v(" Cancel ")]),e("v-btn",{attrs:{outlined:""},on:{click:function(a){return t.showDialogApproval("notreject")}}},[t._v(" Approval ")]),e("v-btn",{attrs:{outlined:""},on:{click:function(a){return t.closeDialog()}}},[t._v(" List ")])],1)],1):t._e()],1)],1)]},proxy:!0},{key:"item.class",fn:function(a){var s=a.item;return[!0===s.class.new?e("div",{staticClass:"class_new"},[t._v(" "+t._s(s.class.value)+" ")]):t._e(),!1===s.class.new?e("div",[t._v(" "+t._s(s.class.value)+" ")]):t._e()]}},{key:"item.reject",fn:function(a){var s=a.item;return[!0===s.reject?e("div",{staticStyle:{color:"red"}},[t._v(" reject ")]):t._e()]}},{key:"item.actions",fn:function(a){var s=a.item;return[e("v-icon",{staticClass:"mr-2",on:{click:function(a){return t.showDialog(s)}}},[t._v(" mdi-information-outline ")])]}}])})],1)],1)},i=[],l=(e(1539),e(4747),e(8309),{data:function(){return{region:"",maker:"",year:"",model:"",subModel:"",series:"",code:"",name:"",priceMax:"",priceMin:"",areaMin:"",areaMax:"",sortBy:"",keys:["Newest","Oldest","Waiting","Reject"],headers:[{text:"Uploader",align:"start",value:"name"},{text:"Pattern Code",value:"code"},{text:"Class",value:"class"},{text:"Part",value:"part"},{text:"Upload Date",value:"date"},{text:"Price",value:"price"},{text:"Reject",value:"reject"},{text:"Info",value:"actions",sortable:!1}],dialog:!1,dialogApproval:!1,dateJoin:"",nameDialog:"",companyName:"",countryName:"",contactEmail:"",imgUrl:"",codeValue:"",newPattern:!1,rejectPattern:!1,dateStart:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateEnd:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),menuStart:!1,menuEnd:!1,titleDialogApproval:"",isApproval:!1,isCancel:!1,isReason:!1,isReject:!1}},methods:{resetInput:function(){var t=document.querySelectorAll(".table_head .v-input--selection-controls__input input");t.forEach((function(t){t.checked&&t.click()})),this.region="",this.maker="",this.year="",this.model="",this.subModel="",this.series="",this.code="",this.name="",this.priceMax="",this.priceMin="",this.areaMin="",this.areaMax="",this.sortBy="",this.dateStart=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.dateEnd=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},showDialog:function(t){this.dialog=!0,this.dateJoin=t.date,this.nameDialog=t.name,this.companyName=t.company,this.countryName=t.country,this.contactEmail=t.email,this.imgUrl=t.image,this.codeValue=t.code,this.newPattern=t.class.new,this.rejectPattern=t.reject},closeDialog:function(){this.dialog=!1},showDialogApproval:function(t){"reject"===t?(this.dialogApproval=!0,this.titleDialogApproval="Are you sure you want to withdraw the pattern approval rejection?",this.isApproval=!1,this.isCancel=!1,this.isReason=!1,this.isReject=!0):(this.dialogApproval=!0,this.titleDialogApproval="Are you sure you want to approve the pattern?",this.isApproval=!1,this.isCancel=!1,this.isReason=!1,this.isReject=!1)},closeDialogApproval:function(){!0===this.isReason?(this.titleDialogApproval="Pattern approval request rejected",this.isReason=!1):this.dialogApproval=!1},confirmApproval:function(){!0===this.isReject?(this.titleDialogApproval="The pattern approval rejection withdrawal has been completed",this.isReason=!1,this.isApproval=!0):(!1===this.isCancel?(this.titleDialogApproval="Pattern approval is complete",this.isReason=!1):(this.titleDialogApproval="Please enter a reason",this.isReason=!0),this.isApproval=!0)},cancelPattern:function(){this.dialogApproval=!0,this.isApproval=!1,this.isCancel=!0,this.titleDialogApproval="Are you sure you want to decline the pattern approval request?"}}}),r=l,o=e(1001),c=e(3453),n=e.n(c),d=e(680),v=e(2371),u=e(7118),_=e(2102),p=e(9846),m=e(4998),b=e(4484),h=e(4497),f=e(6428),C=e(6768),x=e(2877),g=e(5651),k=e(9762),y=e(5978),w=(0,o.Z)(r,s,i,!1,null,null,null),A=w.exports;n()(w,{VBtn:d.Z,VCard:v.Z,VCardActions:u.h7,VCardTitle:u.EB,VCol:_.Z,VContainer:p.Z,VDataTable:m.Z,VDatePicker:b.Z,VDialog:h.Z,VIcon:f.Z,VMenu:C.Z,VRow:x.Z,VSelect:g.Z,VSpacer:k.Z,VTextField:y.Z})}}]);
//# sourceMappingURL=839-legacy.c2716e92.js.map