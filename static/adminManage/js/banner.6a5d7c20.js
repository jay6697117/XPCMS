(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["banner"],{5176:function(t,e,a){t.exports=a("51b6")},6076:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-wrap"},[a("div",{staticClass:"header-cate-wrap"},[a("a-row",{staticClass:"mt-30"},[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:4},lg:{span:2}}},[t._v("banner图:")]),a("a-col",{attrs:{span:18}},[a("div",[a("a-radio-group",{attrs:{value:t.bannerConfig.type,buttonStyle:"solid",size:"small"},on:{change:t.onBannerTypeClick}},[a("a-radio-button",{attrs:{value:"0"}},[t._v("单图背景+标签云")]),a("a-radio-button",{attrs:{value:"1"}},[t._v("多图轮播")])],1)],1),"0"===t.bannerConfig.type?a("div",{staticClass:"mt-30"},[a("a-row",[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:4},lg:{span:2}}},[t._v("标签云:")]),a("a-col",{attrs:{span:18}},[t._l(t.bannerConfig.label,function(e){return[a("a-tag",{key:e,staticClass:"column-tag mb-10",attrs:{closable:!0,afterClose:function(){return t.handleClose(e)},color:"#108ee9"}},[t._v("\n                        "+t._s(e)+"\n                    ")])]}),t.inputVisible?a("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.inputValue},on:{change:t.handleInputChange,blur:t.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}}}):a("a-tag",{staticClass:"column-tag",attrs:{color:"#87d068"},on:{click:t.showInput}},[a("a-icon",{attrs:{type:"plus"}}),t._v(" 添加标签\n                    ")],1)],2)],1),a("a-row",{staticClass:"mt-30"},[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:4},lg:{span:2}}},[t._v("背景图:")]),a("a-col",{attrs:{span:18}},[a("upload",{attrs:{action:"/api/v0/files/uploadSingle",defaultValue:t.bannerConfig.bgUrl,onFileDel:t.onFileDel,onFileChange:t.onFileChange,data:t.uploadData}})],1)],1)],1):a("div",{staticClass:"mt-30"},[a("div",{staticClass:"mb-20"},[a("a-button",{attrs:{type:"primary",size:"small"},on:{click:t.showModal}},[t._v("添加")])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.bannerConfig.bannerList,pagination:t.isShowPagination,rowKey:"id"},scopedSlots:t._u([{key:"tit",fn:function(e){return a("span",{},[t._v(t._s(e))])}},{key:"imgUrl",fn:function(e){return a("span",{},[a("span",{staticClass:"text-overflow-20",attrs:{title:e}},[t._v(t._s(e))])])}},{key:"label",fn:function(e){return a("span",{},t._l(e,function(e,n){return a("a-tag",{key:n,attrs:{color:"blue"}},[t._v(t._s(e))])}),1)}},{key:"action",fn:function(e){return a("span",{},[a("a",{on:{click:function(a){return t.editData(e)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(a){return t.deleteData(e)}}},[t._v("删除")])],1)}}])},[a("span",{attrs:{slot:"id"},slot:"id"}),a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[t._v("名称")])])],1)])],1),a("a-row",{staticClass:"mt-30"},[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:5},lg:{span:2}}}),a("a-col",{attrs:{span:18}},[a("a-button",{attrs:{type:"primary"},on:{click:t.saveBanner}},[t._v("保存")])],1)],1),t.visible?[a("manage-banner-modal",{attrs:{bannerModelType:t.bannerModelType,rowData:t.rowData,visible:!0,onSubmit:t.handleSubmit,onCancel:t.handleCloseModal}})]:t._e()],2)])},i=[],o=(a("cd17"),a("ed3b")),l=a("5176"),r=a.n(l),s=(a("57e7"),a("85f2")),c=a.n(s),u=a("9ab4"),p=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"add"===t.bannerModelType?"添加banner图":"修改banner图",visible:t.visible,okText:"确认",cancelText:"取消"},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[a("a-form-item",{attrs:{label:"名称","label-col":{span:8},"wrapper-col":{span:12}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入图片名称!"}],initialValue:t.rowData.tit}],expression:"[\n            'title',\n            {\n                rules: [{ required: true, message: '请输入图片名称!' }],\n                initialValue: rowData.tit\n            }\n        ]"}]})],1),a("a-form-item",{attrs:{label:"标签","label-col":{span:8},"wrapper-col":{span:12}}},[a("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["label",{rules:[{required:!0,message:"请输入图片标签!"}],initialValue:t.rowData.label||[]}],expression:"[\n            'label',\n            {\n                rules: [{ required: true, message: '请输入图片标签!' }],\n                initialValue: rowData.label || [],\n            },\n        ]"}],attrs:{options:t.tags}})],1),a("a-form-item",{attrs:{"label-col":{span:8},"wrapper-col":{span:12},label:"上传图片"}},[a("div",{staticClass:"dropbox"},[a("a-upload-dragger",{directives:[{name:"decorator",rawName:"v-decorator",value:["bannerImg",{valuePropName:"fileList",rules:[{required:"edit"!==t.bannerModelType,message:"请上传图片!"}],getValueFromEvent:t.normFile}],expression:"['bannerImg', {\n            valuePropName: 'fileList',\n            rules: [{ required: bannerModelType === 'edit' ? false : true, message: '请上传图片!' }],\n            getValueFromEvent: normFile,\n            }]"}],attrs:{name:"file",action:"/api/v0/files/uploadSingle",data:{source:"banner"}}},[t.rowData.imgUrl?[a("img",{staticStyle:{width:"80%"},attrs:{src:t.rowData.imgUrl}})]:[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("\n                将文件拖拽到这个位置\n                ")])]],2)],1)])],1)],1)},b=[],m=a("a745"),f=a.n(m),h=(a("6d67"),function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="bannerManage",e.fileList=e.rowData?[{uid:e.rowData.id,name:e.rowData.tit,status:"done",url:e.rowData.imgUrl}]:[{}],e}return u["c"](e,t),c()(e.prototype,"tags",{get:function(){var t=this.$store.state.config.header.columns;return t.map(function(t){return{label:t,value:t}})},enumerable:!0,configurable:!0}),e.prototype.beforeCreate=function(){this.form=this.$form.createForm(this)},e.prototype.normFile=function(t){return console.log("Upload event:",t),f()(t)?t:t&&t.fileList},e.prototype.handleCancel=function(t){this.onCancel()},e.prototype.handleSubmit=function(t){var e=this;t.preventDefault(),this.form.validateFields(function(t,a){t||(console.log("Received values of form: ",a),e.onSubmit(a))})},u["b"]([Object(p["b"])({default:!1})],e.prototype,"visible",void 0),u["b"]([Object(p["b"])({default:"add"})],e.prototype,"bannerModelType",void 0),u["b"]([Object(p["b"])({default:null})],e.prototype,"rowData",void 0),u["b"]([Object(p["b"])({default:function(){}})],e.prototype,"onSubmit",void 0),u["b"]([Object(p["b"])({default:function(){}})],e.prototype,"onCancel",void 0),e=u["b"]([p["a"]],e),e}(p["c"])),v=h,g=v,y=a("2877"),w=Object(y["a"])(g,d,b,!1,null,"f62a5a88",null),C=w.exports,D=a("d443"),_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isShowPagination=!1,e.inputVisible=!1,e.bannerModelType="",e.uploadData={source:"banner"},e.rowData=null,e.inputValue="",e.visible=!1,e.columns=[{dataIndex:"id",key:"id",title:"编号"},{dataIndex:"tit",key:"tit",slots:{title:"customTitle"},scopedSlots:{customRender:"tit"}},{title:"图片",dataIndex:"imgUrl",key:"imgUrl",scopedSlots:{customRender:"imgUrl"}},{title:"标签",key:"label",dataIndex:"label",scopedSlots:{customRender:"label"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],e}return u["c"](e,t),c()(e.prototype,"bannerConfig",{get:function(){return this.$store.state.config.banner},enumerable:!0,configurable:!0}),e.prototype.onBannerTypeClick=function(t){this.$store.commit("setBannerType",t.target.value)},e.prototype.onFileDel=function(t){this.$store.commit("setBannerBg","")},e.prototype.onFileChange=function(t){this.$store.commit("setBannerBg",t),this.$message.success("图片自动保存成功")},e.prototype.handleClose=function(t){this.$store.commit("delBannerLabel",t)},e.prototype.showInput=function(){var t=this;this.inputVisible=!0,this.$nextTick(function(){t.$refs.input.focus()})},e.prototype.handleInputChange=function(t){this.inputValue=t.target.value},e.prototype.handleInputConfirm=function(){var t=this.inputValue;t&&-1===this.bannerConfig.label.indexOf(t)&&this.$store.commit("addBannerLabel",t),r()(this,{inputVisible:!1,inputValue:""})},e.prototype.showModal=function(){this.visible=!0,this.rowData={},this.bannerModelType="add"},e.prototype.handleCloseModal=function(){this.visible=!1,this.rowData={}},e.prototype.handleSubmit=function(t){var e=this.bannerConfig.bannerList.length;if("add"===this.bannerModelType)this.$store.commit("addBanner",{id:"H000"+(e+1),tit:t.title,label:t.label,imgUrl:t.bannerImg[0].response.url});else{this.rowData.id.slice(-1);this.$store.commit("editBanner",{id:t.id,tit:t.title||this.rowData.title,label:t.label||this.rowData.label,imgUrl:t.bannerImg&&t.bannerImg[0].response?t.bannerImg[0].response.url:this.rowData.imgUrl})}this.visible=!1},e.prototype.editData=function(t){this.visible=!0,this.rowData=t,this.bannerModelType="edit"},e.prototype.saveBanner=function(){this.$store.dispatch("saveBanner",this.$store.state.config.banner)},e.prototype.deleteData=function(t){var e=this;o["a"].confirm({title:"提示",content:"确定要删除吗？",okText:"确认",cancelText:"取消",onOk:function(){e.$store.commit("delBanner",+t.id.slice(-1)-1),e.saveBanner()}})},e=u["b"]([Object(p["a"])({components:{ManageBannerModal:C,Upload:D["a"]}})],e),e}(p["c"]),k=_,x=k,V=Object(y["a"])(x,n,i,!1,null,"aa970866",null);e["default"]=V.exports},d443:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-upload",{attrs:{action:t.action,listType:"picture-card",fileList:t.fileList,remove:t.delFile,data:t.data},on:{preview:t.handlePreview,change:t.handleChange}},[!t.fileList.length&&t.defaultValue?[a("img",{staticStyle:{width:"100%"},attrs:{src:t.defaultValue,alt:""}})]:[t.fileList.length<2?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1):t._e()]],2),a("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)},i=[],o=a("9ab4"),l=a("60a3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.previewVisible=!1,e.previewImage="",e.fileList=[],e}return o["c"](e,t),e.prototype.handlePreview=function(t){this.previewImage=t.url||t.thumbUrl,this.previewVisible=!0},e.prototype.delFile=function(t){this.fileList=[],this.onFileDel()},e.prototype.handleChange=function(t){var e=t.file;this.fileList=[e],console.log(e.status,e.response),"done"===e.status?this.onFileChange(e.response.url):"error"===e.status&&this.$message.error(e.response.msg)},e.prototype.handleCancel=function(){this.previewVisible=!1},o["b"]([Object(l["b"])({default:"https://www.mocky.io/v2/5cc8019d300000980a055e76"})],e.prototype,"action",void 0),o["b"]([Object(l["b"])()],e.prototype,"defaultValue",void 0),o["b"]([Object(l["b"])()],e.prototype,"data",void 0),o["b"]([Object(l["b"])({default:function(){}})],e.prototype,"onFileDel",void 0),o["b"]([Object(l["b"])({default:function(){}})],e.prototype,"onFileChange",void 0),e=o["b"]([l["a"]],e),e}(l["c"]),s=r,c=s,u=a("2877"),p=Object(u["a"])(c,n,i,!1,null,null,null);e["a"]=p.exports}}]);
//# sourceMappingURL=banner.6a5d7c20.js.map