(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("026b33a3",content,!0,{sourceMap:!1})},104:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("2c712c39",content,!0,{sourceMap:!1})},113:function(t,e,n){"use strict";n.r(e);var o={name:"SocialMedia",props:{size:{type:String,default:"24"}}},r=(n(218),n(52)),c=n(60),l=n.n(c),d=n(124),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-media"},[n("a",{attrs:{href:"https://github.com/quirozcarlos",target:"_blank"}},[n("v-icon",{attrs:{size:t.size}},[t._v("mdi-github")])],1),n("a",{attrs:{href:"https://www.linkedin.com/in/quirozvcarlos/",target:"_blank"}},[n("v-icon",{attrs:{size:t.size}},[t._v("mdi-linkedin")])],1),n("a",{attrs:{href:"https://twitter.com/quirozvcarlos",target:"_blank"}},[n("v-icon",{attrs:{size:t.size}},[t._v("mdi-twitter")])],1),n("a",{attrs:{href:"mailto:quirozvcarlos@gmail.com",target:"_blank"}},[n("v-icon",{attrs:{size:t.size}},[t._v("mdi-email")])],1)])}),[],!1,null,"e3ed38c6",null);e.default=component.exports;l()(component,{VIcon:d.a})},175:function(t,e,n){"use strict";var o={components:{SocialMedia:n(113).default},data:function(){return{clipped:!0,drawer:!1,items:[{icon:"mdi-home-assistant",title:"Welcome",to:"/"},{icon:"mdi-information-outline",title:"About me",to:"/about"},{icon:"mdi-account-box",title:"Contact me",to:"/contact"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Carlos Quiroz 🚀"}}},r=n(52),c=n(60),l=n.n(c),d=n(298),v=n(305),m=n(299),f=n(176),h=n(300),_=n(301),x=n(124),V=n(125),w=n(82),z=n(126),k=n(61),y=n(302),C=n(304),A=n(303),I=n(172),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-spacer"),n("social-media")],1),n("v-main",[n("v-container",[n("nuxt")],1)],1),n("v-footer",{staticClass:"d-flex justify-end",attrs:{absolute:"",app:""}},[n("span",[t._v("💻 with love 💙")])])],1)}),[],!1,null,"58af01c2",null);e.a=component.exports;l()(component,{SocialMedia:n(113).default}),l()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:m.a,VBtn:f.a,VContainer:h.a,VFooter:_.a,VIcon:x.a,VList:V.a,VListItem:w.a,VListItemAction:z.a,VListItemContent:k.a,VListItemTitle:k.b,VMain:y.a,VNavigationDrawer:C.a,VSpacer:A.a,VToolbarTitle:I.a})},185:function(t,e,n){n(186),t.exports=n(187)},212:function(t,e,n){"use strict";var o=n(102);n.n(o).a},213:function(t,e,n){(e=n(11)(!1)).push([t.i,"h1[data-v-d0680786]{font-size:20px}",""]),t.exports=e},218:function(t,e,n){"use strict";var o=n(104);n.n(o).a},219:function(t,e,n){(e=n(11)(!1)).push([t.i,".social-media[data-v-e3ed38c6]{display:flex;justify-content:space-evenly;max-width:120px}.social-media a[data-v-e3ed38c6]{margin-left:5px;text-decoration:none}.social-media a[data-v-e3ed38c6]:hover{transform:scale(1.2)}",""]),t.exports=e},66:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(212),n(52)),c=n(60),l=n.n(c),d=n(298),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"d0680786",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[185,6,1,7]]]);