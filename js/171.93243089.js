"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[171],{4350:function(t,e,a){a.d(e,{Z:function(){return o}});var i=a(5978),s=a(3325);const l=(0,s.Z)(i.Z);var o=l.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=i.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){i.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},8171:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"table filter"},[a("v-card-title",{staticClass:"table_head"},[a("div",{staticClass:"table_title"},[t._v(" Email in use: inogrow@inogrow.com "),a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(e){return t.addEmail()}}},[t._v("create new email")])],1)]),a("v-data-table",{staticClass:"table_data",attrs:{headers:t.headers,items:t.$store.state.emailList},scopedSlots:t._u([{key:"item.content",fn:function(e){var i=e.item;return[a("div",{staticClass:"table_email"},[t._v(t._s(i.content))])]}},{key:"item.status",fn:function(t){var e=t.item;return[a("v-select",{staticStyle:{width:"150px"},attrs:{items:["Automatic","Stop sending","Optional Function"],value:e.status,outlined:"",dense:"","hide-details":""}})]}},{key:"item.edit",fn:function(e){var i=e.item;return[i.edit?a("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.showDialog(i)}}},[t._v("Edit")]):t._e()]}}])})],1),a("v-dialog",{attrs:{"max-width":"1100px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[a("span",{domProps:{textContent:t._s(t.titleEmail)}}),a("v-spacer"),a("v-spacer"),a("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.closeDialog()}}},[t._v(" Save ")])],1),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex align-center mb-4"},[t._v(" Email name: "),a("v-text-field",{staticClass:"ml-2",attrs:{outlined:"",dense:"","hide-details":"",value:t.nameEmail}})],1),a("v-textarea",{staticClass:"mb-1",attrs:{outlined:"","no-resize":"","hide-details":"",value:t.textEmail}}),a("div",{staticClass:"d-flex align-center mb-6"},[a("v-btn",{staticClass:"white--text mr-1",attrs:{small:"",color:"blue darken-3"}},[t._v(" completed ")]),a("v-btn",{staticClass:"mr-1",attrs:{small:""}},[a("v-icon",[t._v(" mdi-attachment ")])],1),a("v-btn",{staticClass:"mr-1",attrs:{small:""}},[a("v-icon",[t._v(" mdi-emoticon-happy-outline ")])],1),a("v-btn",{staticClass:"mr-1",attrs:{small:""}},[a("v-icon",[t._v(" mdi-format-underline ")])],1),a("v-btn",{staticClass:"mr-1",attrs:{small:""}},[a("v-icon",[t._v(" mdi-pencil ")])],1),a("v-btn",{attrs:{small:""}},[a("v-icon",[t._v(" mdi-image ")])],1),a("v-spacer"),a("v-btn",{attrs:{small:""}},[a("v-icon",[t._v(" mdi-bucket ")])],1)],1),a("v-data-table",{staticClass:"mb-4",staticStyle:{border:"1px solid #ddd"},attrs:{headers:t.headersDialog,items:t.itemsDialog,"hide-default-footer":""},scopedSlots:t._u([{key:"item.checkbox",fn:function(e){var i=e.item;return[a("v-checkbox",{staticStyle:{width:"fit-content"},attrs:{color:"blue darken-3","hide-details":"",dense:""},model:{value:i.checkbox,callback:function(e){t.$set(i,"checkbox",e)},expression:"item.checkbox"}})]}}])}),a("div",{staticClass:"text-subtitle-1 card_title"},[t._v(" Search for receiving: ")]),a("div",{staticClass:"table table_coupon mb-4"},[a("v-card-title",{staticClass:"table_head"},[a("div",{staticClass:"table_title"},[a("v-select",{staticClass:"table_select",attrs:{flat:"","solo-inverted":"","hide-details":"",color:"white",dense:"",items:["All","Active","Suspended","Secession"],label:"Search term"}}),a("v-text-field",{staticClass:"table_search",attrs:{color:"white","append-icon":"mdi-magnify",label:"Search","hide-details":"","solo-inverted":"",flat:"",dense:""}}),a("div",{staticClass:"table_box table_choise"},[a("span",{staticStyle:{"font-weight":"400","font-size":"11px"}},[t._v("Member level:")]),a("v-checkbox",{attrs:{label:"Beginner",color:"primary",value:"","hide-details":"",dense:""}}),a("v-checkbox",{attrs:{label:"Advancer",color:"primary",value:"","hide-details":"",dense:""}}),a("v-checkbox",{attrs:{label:"Expert",color:"primary",value:"","hide-details":"",dense:""}}),a("v-checkbox",{attrs:{label:"Master",color:"primary",value:"","hide-details":"",dense:""}})],1),a("div",{staticClass:"table_box"},[a("v-btn",{staticClass:"ml-1 mr-1 white--text",attrs:{color:"blue darken-3",small:""}},[t._v(" Search ")]),a("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3",small:""}},[t._v(" Reset ")])],1)],1)]),a("v-data-table",{staticClass:"table_data",attrs:{headers:t.headersDialog2,items:t.$store.state.usersSubscription,"hide-default-footer":""},scopedSlots:t._u([{key:"item.checkbox",fn:function(e){var i=e.item;return[a("v-checkbox",{staticStyle:{width:"fit-content"},attrs:{color:"blue darken-3","hide-details":"",dense:""},model:{value:i.checkbox,callback:function(e){t.$set(i,"checkbox",e)},expression:"item.checkbox"}})]}}])})],1)],1)],1)],1)],1)],1)],1)},s=[],l={data(){return{headers:[{text:"Email Name",align:"start",value:"name",sortable:!1},{text:"Contents",value:"content",sortable:!1},{text:"Status",value:"status",sortable:!1},{text:"Edit",value:"edit",sortable:!1}],headersDialog:[{text:"Type",align:"start",value:"type",sortable:!1},{text:"Detail Type",value:"detail",sortable:!1},{text:"Select",value:"checkbox",sortable:!1},{text:"Admin e-mail",value:"email",sortable:!1}],headersDialog2:[{text:"Code",align:"start",value:"code"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Country",value:"country"},{text:"Member level",value:"level"},{text:"Join Date",value:"subscription"},{text:"Issued",value:"checkbox"}],itemsDialog:[{type:"User",detail:"Sign Up",checkbox:!0,email:"inogrow@inogrow.com"},{type:"User",detail:"Dormant Account",checkbox:!1,email:"inogrow@inogrow.com"},{type:"User",detail:"Stop Account",checkbox:!1,email:"inogrow@inogrow.com"},{type:"Order",detail:"Shipping Info",checkbox:!1,email:"inogrow@inogrow.com"}],dialog:!1,titleEmail:"",nameEmail:"",textEmail:""}},methods:{showDialog(t){this.dialog=!0,this.titleEmail="Edit",this.nameEmail="Name",this.textEmail="text",this.itemsDialog[0].checkbox=!0},closeDialog(){this.dialog=!1},addEmail(){this.dialog=!0,this.titleEmail="New mail",this.nameEmail="",this.textEmail="",this.itemsDialog[0].checkbox=!1}}},o=l,n=a(1001),r=a(3453),c=a.n(r),d=a(680),u=a(2371),h=a(7118),m=a(3702),v=a(2102),b=a(9846),p=a(4998),x=a(4497),g=a(6428),k=a(2877),f=a(5651),w=a(9762),_=a(5978),C=a(4350),y=(0,n.Z)(o,i,s,!1,null,null,null),S=y.exports;c()(y,{VBtn:d.Z,VCard:u.Z,VCardTitle:h.EB,VCheckbox:m.Z,VCol:v.Z,VContainer:b.Z,VDataTable:p.Z,VDialog:x.Z,VIcon:g.Z,VRow:k.Z,VSelect:f.Z,VSpacer:w.Z,VTextField:_.Z,VTextarea:C.Z})}}]);
//# sourceMappingURL=171.93243089.js.map