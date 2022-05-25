"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[7],{9007:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-h5 mb-10"},[t._v("Gift Credit Management")]),a("v-card",{staticClass:"table"},[a("v-card-title",{staticClass:"table_head"},[a("div",{staticClass:"table_title mb-2"},[t._v(" Gift Credit amount Setting: ")]),a("div",{staticClass:"table_title mb-8",staticStyle:{position:"relative"}},[a("v-text-field",{staticClass:"table_search table_search_gift",attrs:{label:"Direct input","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.gift,callback:function(e){t.gift=e},expression:"gift"}}),a("div",{staticClass:"table_description"},[t._v(" *The gift credit is the credit that is paid to the user in Bonus ")]),a("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3",small:""},on:{click:function(e){return t.showDialog()}}},[t._v(" Confirm ")]),a("v-spacer")],1),a("div",{staticClass:"table_title mb-2"},[t._v(" Member search: ")]),a("div",{staticClass:"table_title mb-2"},[a("v-select",{staticClass:"table_select",attrs:{flat:"","solo-inverted":"","hide-details":"",dense:"",color:"white",items:t.keys,label:"Search term"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),a("v-text-field",{staticClass:"table_search",attrs:{label:"Search","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("div",{staticClass:"table_box table_choise"},[t._v(" Member level: "),a("v-checkbox",{staticClass:"mr-1 ml-1",attrs:{label:"Beginner",color:"primary",value:"","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Advancer",color:"primary",value:"","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Expert",color:"primary",value:"","hide-details":"",dense:""}}),a("v-checkbox",{staticClass:"mr-1",attrs:{label:"Master",color:"primary",value:"","hide-details":"",dense:""}})],1)],1),a("div",{staticClass:"table_title justify-center"},[a("div",{staticClass:"table_box"},[a("v-btn",{staticClass:"mr-3 white--text",attrs:{color:"blue darken-3"}},[t._v(" Search ")]),a("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(e){return t.resetInput()}}},[t._v(" Reset ")])],1)])]),a("v-data-table",{staticClass:"table_data",attrs:{headers:t.headers,items:t.$store.state.users,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"text-h6",staticStyle:{"font-weight":"700"}},[t._v(" Total "),a("span",{staticStyle:{color:"#0D47A1"}},[t._v(t._s(t.$store.state.users.length))])]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-container",[a("div",{staticClass:"card_title text-center mb-8"},[t._v(" Would you like to grant "+t._s(t.gift)+" credit to the selected member? ")])]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.closeDialog()}}},[t._v(" Confirm ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.checkbox",fn:function(e){var s=e.item;return[a("v-checkbox",{staticStyle:{width:"fit-content"},attrs:{color:"blue darken-3"},model:{value:s.checkbox,callback:function(e){t.$set(s,"checkbox",e)},expression:"item.checkbox"}})]}}])})],1)],1)},l=[],i={data(){return{search:"",gift:"",sortBy:"",keys:["All","Active","Sespended","Secession"],headers:[{text:"Code",align:"start",value:"code"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Country",value:"country"},{text:"Member level",value:"level"},{text:"Join date",value:"join"},{text:"Credit Gift",value:"checkbox"}],dialog:!1}},methods:{resetInput(){let t=document.querySelectorAll(".table_head .v-input--selection-controls__input input");t.forEach((t=>{t.checked&&t.click()})),this.search="",this.sortBy=""},showDialog(){this.dialog=!0},closeDialog(){this.dialog=!1}}},r=i,c=a(1001),o=a(3453),n=a.n(o),d=a(680),v=a(2371),u=a(7118),h=a(9362),b=a(9846),m=a(4998),f=a(4497),x=a(5651),C=a(9762),_=a(5978),p=a(6656),k=a(7921),g=(0,c.Z)(r,s,l,!1,null,null,null),y=g.exports;n()(g,{VBtn:d.Z,VCard:v.Z,VCardActions:u.h7,VCardTitle:u.EB,VCheckbox:h.Z,VContainer:b.Z,VDataTable:m.Z,VDialog:f.Z,VSelect:x.Z,VSpacer:C.Z,VTextField:_.Z,VToolbar:p.Z,VToolbarTitle:k.qW})}}]);
//# sourceMappingURL=7.099d9b7b.js.map