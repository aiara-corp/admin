"use strict";(self["webpackChunkadmin_panel"]=self["webpackChunkadmin_panel"]||[]).push([[65],{65:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"category"},[a("div",{staticClass:"category_table"},[a("v-data-table",{attrs:{headers:t.headers,items:t.region,"items-per-page":10,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"white--text font-weight-medium"},[t._v("Region List")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"white"}},"v-btn",s,!1),i),[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("div",{staticClass:"card_title text-center mb-8"},[t._v(" Are you sure you want to delete this item? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"primary"},on:{click:t.deleteItemConfirm}},[t._v("Delete")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.name",fn:function(e){var i=e.item;return[a("div",{staticClass:"category_value"},[t._v(" "+t._s(i.name)+" "),a("div",{staticClass:"category_move"},[t._v("⋮")])])]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){},proxy:!0}])})],1),a("div",{staticClass:"category_table"},[a("v-data-table",{attrs:{headers:t.headers,items:t.years,"items-per-page":10},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"white--text font-weight-medium"},[t._v("Years")]),a("v-spacer"),a("v-btn",{attrs:{color:"white"}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)]},proxy:!0},{key:"item.name",fn:function(e){var i=e.item;return[a("div",{staticClass:"category_value"},[t._v(" "+t._s(i.name)+" "),a("div",{staticClass:"category_move"},[t._v("⋮")])])]}},{key:"item.actions",fn:function(e){e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){},proxy:!0}])})],1),a("div",{staticClass:"category_table"},[a("v-data-table",{attrs:{headers:t.headers,items:t.brand,"items-per-page":10,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"white--text font-weight-medium"},[t._v("Brand List")]),a("v-spacer"),a("v-btn",{attrs:{color:"white"}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)]},proxy:!0},{key:"item.name",fn:function(e){var i=e.item;return[a("div",{staticClass:"category_value category_value_brand"},[t._v(" "+t._s(i.name)+" "),a("div",{staticClass:"category_move"},[t._v("⋮")])])]}},{key:"item.actions",fn:function(e){e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){},proxy:!0}])}),a("v-btn",{staticClass:"mb-3 mt-3",attrs:{outlined:""}},[t._v(" Completed ")])],1),a("div",{staticClass:"category_table"},[a("v-data-table",{attrs:{headers:t.headers,items:t.model,"items-per-page":10,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"white--text font-weight-medium"},[t._v("Model List")]),a("v-spacer"),a("v-btn",{attrs:{color:"white"}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)]},proxy:!0},{key:"no-data",fn:function(){return[a("div",{staticClass:"category_data"},[a("v-icon",[t._v(" mdi-calendar-text ")]),t._v(" Please select a parent category ")],1)]},proxy:!0}])})],1),a("div",{staticClass:"category_table"},[a("v-data-table",{attrs:{headers:t.headers,items:t.model,"items-per-page":10,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"white--text font-weight-medium"},[t._v("Sub Model List")]),a("v-spacer"),a("v-btn",{attrs:{color:"white"}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)]},proxy:!0},{key:"no-data",fn:function(){return[a("div",{staticClass:"category_data"},[a("v-icon",[t._v(" mdi-calendar-text ")]),t._v(" Please select a parent category ")],1)]},proxy:!0}])})],1),a("div",{staticClass:"category_table"},[a("v-data-table",{attrs:{headers:t.headers,items:t.model,"items-per-page":10,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"white--text font-weight-medium"},[t._v("Series List")]),a("v-spacer"),a("v-btn",{attrs:{color:"white"}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)]},proxy:!0},{key:"no-data",fn:function(){return[a("div",{staticClass:"category_data"},[a("v-icon",[t._v(" mdi-calendar-text ")]),t._v(" Please select a parent category ")],1)]},proxy:!0}])})],1)]),a("div",{staticClass:"category"},[a("div",{staticClass:"category_table"},[a("v-data-table",{attrs:{headers:t.headers,items:t.partSection,"items-per-page":10,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"white--text font-weight-medium"},[t._v("Part Section")]),a("v-spacer"),a("v-btn",{attrs:{color:"white"}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)]},proxy:!0},{key:"item.name",fn:function(e){var i=e.item;return[a("div",{staticClass:"category_value"},[t._v(" "+t._s(i.name)+" "),a("div",{staticClass:"category_move"},[t._v("⋮")])])]}},{key:"item.actions",fn:function(e){e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){},proxy:!0}])}),a("v-btn",{staticClass:"mb-3 mt-3",attrs:{outlined:""}},[t._v(" Completed ")])],1),a("div",{staticClass:"category_table"},[a("v-data-table",{attrs:{headers:t.headers,items:t.patternPart,"items-per-page":10,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"white--text font-weight-medium"},[t._v("Pattern Part")]),a("v-spacer"),a("v-btn",{attrs:{color:"white"}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)]},proxy:!0},{key:"item.name",fn:function(e){var i=e.item;return[a("div",{staticClass:"category_value category_value_brand"},[t._v(" "+t._s(i.name)+" "),a("div",{staticClass:"category_move"},[t._v("⋮")])])]}},{key:"item.actions",fn:function(e){e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){},proxy:!0}])})],1),a("div",{staticClass:"category_table"},[a("v-data-table",{attrs:{headers:t.headers,items:t.subPart,"items-per-page":10,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"white--text font-weight-medium"},[t._v("Sub Part")]),a("v-spacer"),a("v-btn",{attrs:{color:"white"}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Add ")],1)],1)]},proxy:!0},{key:"no-data",fn:function(){return[a("div",{staticClass:"category_data"},[a("v-icon",[t._v(" mdi-calendar-text ")]),t._v(" Please select a parent category ")],1)]},proxy:!0}])})],1)])])},s=[],r={data:()=>({dialog:!1,dialogDelete:!1,headers:[{text:"Value",align:"start",value:"name"},{text:"",value:"actions",align:"end",sortable:!1}],region:[{name:"Canada and USA"},{name:"Europe"},{name:"South Korea"}],brand:[{name:"Mersedes Benz"},{name:"BMW"},{name:"Hyundai"},{name:"KIA"},{name:"Porshe"},{name:"Audi"}],years:[{name:"2022"},{name:"2021"},{name:"2020"},{name:"2019"},{name:"2018"},{name:"2017"},{name:"2016"},{name:"2015"},{name:"2016"},{name:"2015"},{name:"2014"},{name:"2013"},{name:"2012"},{name:"2011"},{name:"2010"},{name:"2009"},{name:"2008"},{name:"2007"},{name:"2006"}],partSection:[{name:"ALL"},{name:"Out Front"},{name:"Out Side"},{name:"Out Rear"},{name:"Inner"}],patternPart:[{name:"Bumper"},{name:"Front Fender"},{name:"Head Light"},{name:"Hood"}],model:[],subPart:[],editedIndex:-1,editedItem:{name:""},defaultItem:{name:""}}),computed:{formTitle(){return-1===this.editedIndex?"New":"Edit"}},watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},methods:{editItem(t){this.editedIndex=this.region.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem(t){this.editedIndex=this.region.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm(){this.region.splice(this.editedIndex,1),this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},save(){this.editedIndex>-1?Object.assign(this.region[this.editedIndex],this.editedItem):this.region.push(this.editedItem),this.close()}}},n=r,o=a(1001),l=a(3453),d=a.n(l),c=a(680),v=a(2371),m=a(7118),u=a(2102),f=a(9846),_=a(4998),p=a(4497),h=a(6428),b=a(2877),y=a(9762),g=a(5978),k=a(6656),x=a(7921),C=(0,o.Z)(n,i,s,!1,null,null,null),w=C.exports;d()(C,{VBtn:c.Z,VCard:v.Z,VCardActions:m.h7,VCardText:m.ZB,VCardTitle:m.EB,VCol:u.Z,VContainer:f.Z,VDataTable:_.Z,VDialog:p.Z,VIcon:h.Z,VRow:b.Z,VSpacer:y.Z,VTextField:g.Z,VToolbar:k.Z,VToolbarTitle:x.qW})}}]);
//# sourceMappingURL=65.561e3a63.js.map