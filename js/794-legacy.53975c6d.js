"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[794],{7781:function(t,e,i){i.d(e,{Z:function(){return h}});var a=i(8932),n=i(4367),l=i(9726),s=(i(9653),i(6699),i(1539),i(1249),i(8309),i(2222),i(561),i(4747),i(7042),i(5978)),o=s.Z,r=i(5424),c=i(4589),d=i(1824),u=i(6290),h=o.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return(0,c.TI)(t).every((function(t){return null!=t&&"object"===(0,l.Z)(t)}))}}},computed:{classes:function(){return(0,n.Z)((0,n.Z)({},o.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,a=void 0===i?0:i;return t+a}),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,c.XE)(e,1024===this.base))},internalArrayValue:function(){return(0,c.TI)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,a=void 0===i?"":i,n=e.size,l=void 0===n?0:n,s=t.truncateText(a);return t.showSize?"".concat(s," (").concat((0,c.XE)(l,1024===t.base),")"):s})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&(0,d.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];(0,c.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(r.Z,{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=o.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,u.y0)(t.data.style,{display:"none"})),t},genInput:function(){var t=o.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,a){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[a],file:i,index:a}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=o.options.methods.genTextFieldSlot.call(this);return e.data.on=(0,n.Z)((0,n.Z)({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=(0,a.Z)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},7134:function(t,e,i){i.r(e),i.d(e,{default:function(){return $}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"table"},[i("v-card-title",{staticClass:"table_head"},[i("div",{staticClass:"table_title mb-1"},[i("span",{staticClass:"mr-2"},[t._v("Banner name:")]),i("v-select",{staticClass:"table_select",attrs:{flat:"","solo-inverted":"","hide-details":"",color:"white",dense:"",items:t.keys,label:"Menu"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),i("v-text-field",{staticClass:"table_search",attrs:{color:"white","append-icon":"mdi-magnify",label:"Please enter your search term","hide-details":"","solo-inverted":"",flat:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("div",{staticClass:"table_title mb-2"},[i("span",{staticClass:"mr-2 mt-1"},[t._v("Banner classification:")]),i("v-select",{staticClass:"table_select mt-1",attrs:{flat:"","solo-inverted":"","hide-details":"",color:"white",dense:"",items:["key1","key2"],label:"Large"}}),i("v-select",{staticClass:"table_select mt-1",attrs:{flat:"","solo-inverted":"","hide-details":"",color:"white",dense:"",items:["key1","key2"],label:"Medium"}}),i("v-select",{staticClass:"table_select mt-1",attrs:{flat:"","solo-inverted":"","hide-details":"",color:"white",dense:"",items:["key1","key2"],label:"Small"}}),i("v-select",{staticClass:"table_select mt-1",attrs:{flat:"","solo-inverted":"","hide-details":"",color:"white",dense:"",items:["key1","key2"],label:"Subclass"}})],1),i("div",{staticClass:"table_title mb-2"},[i("span",{staticClass:"mr-2"},[t._v("Sort by:")]),i("v-select",{staticClass:"table_select",attrs:{flat:"","solo-inverted":"","hide-details":"",color:"white",dense:"",items:["Registration","Date"],label:"Sort by"}})],1),i("div",{staticClass:"table_title justify-center"},[i("div",{staticClass:"table_box"},[i("v-btn",{staticClass:"mr-3 white--text",attrs:{color:"blue darken-3"}},[t._v(" Search ")]),i("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"}},[t._v(" Reset ")])],1)])]),i("v-data-table",{staticClass:"table_data",attrs:{headers:t.headers,items:t.$store.state.bannerList,search:t.search,"show-select":"","item-key":"code"},scopedSlots:t._u([{key:"item.use",fn:function(e){var a=e.item;return[i("div",{staticClass:"d-flex"},[i("v-checkbox",{staticStyle:{width:"fit-content"},attrs:{color:"blue darken-3","hide-details":"","on-icon":"mdi-checkbox-outline"},model:{value:a.use.checkbox,callback:function(e){t.$set(a.use,"checkbox",e)},expression:"item.use.checkbox"}}),i("v-checkbox",{staticStyle:{width:"fit-content"},attrs:{color:"blue darken-3","hide-details":"","on-icon":"mdi-close-box-outline"},model:{value:a.use.x,callback:function(e){t.$set(a.use,"x",e)},expression:"item.use.x"}})],1)]}},{key:"item.preview",fn:function(t){var e=t.item;return[i("v-img",{staticClass:"mt-2 mb-2",attrs:{cover:"","max-height":"100","max-width":"160",src:e.preview}})]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),i("div",{staticClass:"d-flex justify-center table_title pr-4 pl-4 pb-3"},[i("v-btn",{staticClass:"mr-3 white--text",attrs:{color:"blue darken-3"},on:{click:function(e){return t.showDialog("Would you like to add a banner?")}}},[t._v(" Add ")]),i("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(e){return t.showDialog("Are you sure you want to delete the selected item?")}}},[t._v(" Delete ")])],1)],1),i("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-container",[i("div",{staticClass:"card_title text-center mb-8",domProps:{textContent:t._s(t.titleDialog)}})]),i("v-card-actions",{staticClass:"justify-center"},[i("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.addBanner()}}},[t._v(" Confirm ")]),i("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.closeDialog()}}},[t._v(" Cansel ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"1100px"},model:{value:t.dialogAdd,callback:function(e){t.dialogAdd=e},expression:"dialogAdd"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[i("span",[t._v("Add banner")])]),i("v-container",[i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Banner Name:")]),i("v-text-field",{staticStyle:{"max-width":"700px"},attrs:{outlined:"",dense:"","hide-details":""}})],1),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Banner classification:")]),i("div",{staticClass:"d-flex align-center"},[i("v-select",{staticClass:"mr-1",attrs:{"hide-details":"",outlined:"",dense:"",items:["key1","key2"],label:"Large"}}),i("v-select",{staticClass:"mr-1",attrs:{"hide-details":"",outlined:"",dense:"",items:["key1","key2"],label:"Medium"}}),i("v-select",{staticClass:"mr-1",attrs:{"hide-details":"",outlined:"",dense:"",items:["key1","key2"],label:"Small"}}),i("v-select",{attrs:{"hide-details":"",outlined:"",dense:"",items:["key1","key2"],label:"Subclass"}})],1)]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Period: ")]),i("div",[i("v-checkbox",{staticStyle:{width:"fit-content"},attrs:{color:"blue darken-3",label:"Unlimited","hide-details":""}}),i("div",{staticClass:"d-flex align-center mt-3"},[i("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({staticClass:"mr-1",staticStyle:{"max-width":"240px"},attrs:{label:"Start date",readonly:"",dense:"",flat:"",outlined:"","hide-details":"","append-icon":"mdi-calendar"},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}},"v-text-field",n,!1),a))]}}]),model:{value:t.menuStart,callback:function(e){t.menuStart=e},expression:"menuStart"}},[i("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(e){t.menuStart=!1}},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}})],1),i("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"return-value":t.time2,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time2=e},"update:return-value":function(e){t.time2=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({staticStyle:{"max-width":"120px"},attrs:{label:"Time",readonly:"",dense:"",flat:"",outlined:"","hide-details":"","append-icon":"mdi-clock-time-four-outline"},model:{value:t.time2,callback:function(e){t.time2=e},expression:"time2"}},"v-text-field",n,!1),a))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t.menu2?i("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(e){return t.$refs.menu2.save(t.time2)}},model:{value:t.time2,callback:function(e){t.time2=e},expression:"time2"}}):t._e()],1),i("span",{staticClass:"mr-1 ml-1"},[t._v(" ~ ")]),i("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({staticClass:"mr-1",staticStyle:{"max-width":"240px"},attrs:{label:"End date",readonly:"",dense:"",flat:"",outlined:"","hide-details":"","append-icon":"mdi-calendar"},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}},"v-text-field",n,!1),a))]}}]),model:{value:t.menuEnd,callback:function(e){t.menuEnd=e},expression:"menuEnd"}},[i("v-date-picker",{attrs:{"header-color":"blue darken-3"},on:{input:function(e){t.menuEnd=!1}},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}})],1),i("v-menu",{ref:"menu3",attrs:{"close-on-content-click":!1,"return-value":t.time3,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time3=e},"update:return-value":function(e){t.time3=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({staticStyle:{"max-width":"120px"},attrs:{label:"Time",readonly:"",dense:"",flat:"",outlined:"","hide-details":"","append-icon":"mdi-clock-time-four-outline"},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}},"v-text-field",n,!1),a))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t.menu3?i("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(e){return t.$refs.menu3.save(t.time3)}},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}}):t._e()],1)],1)],1)]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Whether or not to use")]),i("v-radio-group",{staticClass:"mt-0",attrs:{row:"","hide-details":""},model:{value:t.row,callback:function(e){t.row=e},expression:"row"}},[i("v-radio",{attrs:{label:"Used",value:"radio-1",color:"blue darken-4"}}),i("v-radio",{attrs:{label:"Not used",value:"radio-2",color:"blue darken-4"}})],1)],1),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Link")]),i("div",{staticClass:"d-flex align-center"},[i("v-select",{staticStyle:{"max-width":"200px"},attrs:{"hide-details":"",items:["url 1","url 2","url 3"],outlined:"",dense:""}}),i("v-text-field",{staticClass:"ml-2",staticStyle:{"max-width":"500px"},attrs:{outlined:"",dense:"","hide-details":"",label:"Enter the URL directly"}})],1)]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Link target")]),i("div",{staticClass:"d-flex align-center"},[i("v-select",{staticStyle:{"max-width":"200px"},attrs:{"hide-details":"",items:["url 1","url 2","url 3"],outlined:"",dense:""}})],1)]),i("div",{staticClass:"coupon_grid"},[i("span",[t._v("Banner type")]),i("div",{staticClass:"d-flex align-center"},[i("v-select",{staticStyle:{"max-width":"200px"},attrs:{"hide-details":"",items:["image 1","image 2","image 3"],outlined:"",dense:""}})],1)]),i("div",{staticClass:"coupon_grid mb-5"},[i("span",[t._v("File Upload")]),i("div",{staticClass:"d-flex align-center"},[i("v-file-input",{staticStyle:{"max-width":"300px"},attrs:{label:"Select file",outlined:"",dense:"","hide-details":""}})],1)]),i("div",{staticClass:"d-flex"},[i("v-spacer"),i("v-btn",{staticClass:"white--text mr-3",attrs:{color:"blue darken-3"},on:{click:function(e){return t.showDialog("Banner has been added")}}},[t._v("Confirm")]),i("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3"},on:{click:function(e){return t.closeAddDialog()}}},[t._v("Cancel")]),i("v-spacer")],1)])],1)],1)],1)},n=[],l=i(3796),s={data:function(){var t;return t={search:"",sortBy:"",keys:["Name","Text"],headers:[{text:"Code",align:"start",value:"code",sortable:!1},{text:"Classification",value:"classification",sortable:!1},{text:"Banner name",value:"name",sortable:!1},{text:"Use",value:"use",sortable:!1},{text:"Preview",align:"center",value:"preview",sortable:!1}],dialog:!1,dialogAdd:!1,selected:[]},(0,l.Z)(t,"dialog",!1),(0,l.Z)(t,"titleDialog","Change the price of Sponsor AD Item?"),(0,l.Z)(t,"row",null),(0,l.Z)(t,"dateStart",""),(0,l.Z)(t,"dateEnd",""),(0,l.Z)(t,"menuStart",!1),(0,l.Z)(t,"menuEnd",!1),(0,l.Z)(t,"time2",null),(0,l.Z)(t,"menu2",!1),(0,l.Z)(t,"time3",null),(0,l.Z)(t,"menu3",!1),t},methods:{showDialog:function(t){this.dialog=!0,this.dialogAdd=!1,this.titleDialog=t},addBanner:function(){this.dialog=!1,this.dialogAdd=!0},closeAddDialog:function(){this.dialog=!1,this.dialogAdd=!1},closeDialog:function(){this.dialog=!1,this.dialogAdd=!1}}},o=s,r=i(1001),c=i(3453),d=i.n(c),u=i(680),h=i(2371),m=i(7118),v=i(593),p=i(9846),f=i(4998),b=i(7416),x=i(4497),y=i(7781),g=i(7047),k=i(6768),C=i(8978),S=i(4739),_=i(5651),w=i(9762),V=i(5978),Z=i(9142),D=(0,r.Z)(o,a,n,!1,null,null,null),$=D.exports;d()(D,{VBtn:u.Z,VCard:h.Z,VCardActions:m.h7,VCardTitle:m.EB,VCheckbox:v.Z,VContainer:p.Z,VDataTable:f.Z,VDatePicker:b.Z,VDialog:x.Z,VFileInput:y.Z,VImg:g.Z,VMenu:k.Z,VRadio:C.Z,VRadioGroup:S.Z,VSelect:_.Z,VSpacer:w.Z,VTextField:V.Z,VTimePicker:Z.Z})}}]);
//# sourceMappingURL=794-legacy.53975c6d.js.map