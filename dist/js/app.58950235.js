(function(t){function e(e){for(var a,i,c=e[0],l=e[1],r=e[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,r||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,c=1;c<o.length;c++){var l=o[c];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/testing-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("7323"),s=o.n(a);s.a},"27dc":function(t,e,o){"use strict";var a=o("82d0");e["a"]={path:"/testing-vue/create-note",name:"CreateNote",component:a["a"],props:!0}},"41cb":function(t,e,o){"use strict";(function(t){var a=o("2b0e"),s=o("8c4f"),n=o("f76a"),i=o("27dc"),c=o("cd87"),l=o("d3fc");a["a"].use(s["a"]);var r=new s["a"]({mode:"history",base:t,routes:[n["a"],i["a"],c["a"],l["a"]]});e["a"]=r}).call(this,"/")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),s=o("8c4f"),n=o("2f62"),i={namespaced:!0,state:{toggleState:!1},mutations:{updateToggle:function(t,e){t.toggleState=e}},actions:{doToggle:function(t){var e=t.state,o=t.commit;o("updateToggle",!e.toggleState)}}},c=(o("4de4"),o("c740"),o("45fc"),o("d3b7"),o("07ac"),{namespaced:!0,state:{notes:JSON.parse(localStorage.getItem("notes"))||[],lastChangedNotes:JSON.parse(localStorage.getItem("lastChangedNotes"))||[],currentNotes:[]},mutations:{updateNote:function(t,e){t.notes=e,localStorage.setItem("notes",JSON.stringify(e))},updateLastChangedNotes:function(t,e){t.lastChangedNotes=e,localStorage.setItem("lastChangedNotes",JSON.stringify(e))}},actions:{createNote:function(t,e){var o=t.commit,a=JSON.parse(localStorage.getItem("notes"))||[];a.push(e),o("updateNote",a)},editNote:function(t,e){var o=t.state,a=t.commit,s=JSON.parse(localStorage.getItem("lastChangedNotes"))||[];if(Object.values(s).some((function(t){return t.id===e.oldNote.id}))){var n=s.findIndex((function(t){return t.id===e.oldNote.id}));s[n]=e.oldNote}else s.push(e.oldNote);a("updateLastChangedNotes",s);var i=Object.values(o.notes).findIndex((function(t){return t.id===e.updatedNote.id}));o.notes[i]=e.updatedNote,a("updateNote",o.notes)},deleteNote:function(t,e){var o=t.state,a=t.dispatch,s=t.commit;return new Promise((function(t){var n=Object.values(o.notes).filter((function(t){return t.id!==e.noteId}));switch(e.type){case"deleteOne":if(a("setModalState",{type:e.type,noteId:e.noteId},{root:!0}),"true"!==e.answer)return;s("updateNote",n),t();break;case"deleteAll":if(a("setModalState",{type:e.type,noteId:e.noteId},{root:!0}),"true"!==e.answer)return void console.log("not delete");s("updateNote",[]),t();break}}))},resetLastChange:function(t,e){var o=t.state,a=t.commit,s=Object.values(o.lastChangedNotes).filter((function(t){return t.id===e.noteId}))[0],n=Object.values(o.notes).findIndex((function(t){return t.id===e.noteId}));o.notes[n]=s,a("updateNote",o.notes)}}});a["a"].use(n["a"]);var l=new n["a"].Store({namespaced:!0,state:{modalState:!1,modalType:"",noteId:""},mutations:{updateModalState:function(t,e){t.modalState=e.modalState,t.noteId=e.noteId,t.modalType=e.modalType}},actions:{setModalState:function(t,e){var o=t.state,a=t.commit;a("updateModalState",{noteId:e.noteId,modalState:!o.modalState,modalType:e.type})}},modules:{Header:i,Notes:c}}),r=o("41cb"),d=o("1dce"),u=o.n(d),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-wrapper",class:t.modalState?"page-wrapper--hidden":"",on:{click:t.toggle}},[o("Aside"),o("div",{staticClass:"page-wrapper__content"},[o("Header"),o("main",{staticClass:"main"},[o("div",{staticClass:"main__container"},[o("router-view")],1)])],1),o("Modal")],1)},p=[],v=o("5530"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__content"},[a("div",{staticClass:"header__logo"},[a("router-link",{staticClass:"logo",attrs:{to:{name:"Home"}}},[a("img",{staticClass:"img-responsive",attrs:{src:o("b8c8"),alt:"Logo"}})])],1),a("div",{staticClass:"header__toggle"},[a("div",{staticClass:"toggle",attrs:{"data-active":t.toggleState},on:{click:t.toggle}},[t._m(0)])])])])},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toggle__icon"},[o("span",{staticClass:"toggle__line"}),o("span",{staticClass:"toggle__line"}),o("span",{staticClass:"toggle__line"}),o("span",{staticClass:"toggle__line"})])}],_={computed:Object(v["a"])({},Object(n["c"])("Header",["toggleState"])),methods:Object(v["a"])(Object(v["a"])({},Object(n["b"])({doToggle:"Header/doToggle"})),{},{toggle:function(){this.doToggle()}})},g=_,b=o("2877"),C=Object(b["a"])(g,f,h,!1,null,null,null),N=C.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aside",attrs:{"data-active":t.toggleState}},[o("div",{staticClass:"aside__menu"},[o("MainMenu")],1)])},O=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"main-menu"},[o("li",{staticClass:"main-menu__item",on:{click:t.closeAside}},[o("router-link",{staticClass:"main-menu__link",attrs:{to:{name:"CreateNote",params:{type:"create",pageTitle:"Creating a note"}}}},[o("font-awesome-icon",{attrs:{icon:"plus-square"}}),o("div",{staticClass:"main-menu__link-name"},[t._v(" Create a note ")])],1)],1),o("li",{directives:[{name:"show",rawName:"v-show",value:Object.keys(t.notes).length,expression:"Object.keys(notes).length"}],staticClass:"main-menu__item",on:{click:t.deleteAll}},[o("div",{staticClass:"main-menu__link"},[o("font-awesome-icon",{attrs:{icon:"trash-alt"}}),o("div",{staticClass:"main-menu__link-name"},[t._v(" Remove all notes ")])],1)])])},j=[],k={computed:Object(v["a"])({},Object(n["c"])("Notes",["notes"])),methods:Object(v["a"])(Object(v["a"])({},Object(n["b"])({deleteNote:"Notes/deleteNote",doToggle:"Header/doToggle"})),{},{closeAside:function(){this.doToggle()},deleteAll:function(){this.deleteNote({type:"deleteAll"}),this.closeAside()}})},S=k,x=Object(b["a"])(S,y,j,!1,null,null,null),T=x.exports,$={computed:Object(v["a"])({},Object(n["c"])("Header",["toggleState"])),components:{MainMenu:T}},I=$,A=Object(b["a"])(I,w,O,!1,null,null,null),M=A.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal",attrs:{"data-active":t.modalState},on:{click:t.closeModal}},[o("div",{staticClass:"modal__content"},[o("h1",{staticClass:"modal__title"},[t._v(" Are you sure? ")]),o("div",{staticClass:"modal__form"},[o("div",{staticClass:"form-radio"},[o("div",{staticClass:"radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.modalAnswer,expression:"modalAnswer"}],attrs:{type:"radio",id:"confirmYes",value:"true"},domProps:{checked:t._q(t.modalAnswer,"true")},on:{change:function(e){t.modalAnswer="true"}}}),o("label",{attrs:{for:"confirmYes"}},[t._v(" Yes ")])]),o("div",{staticClass:"radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.modalAnswer,expression:"modalAnswer"}],attrs:{type:"radio",id:"confirmNo",value:"false"},domProps:{checked:t._q(t.modalAnswer,"false")},on:{change:function(e){t.modalAnswer="false"}}}),o("label",{attrs:{for:"confirmNo"}},[t._v(" No ")])])]),o("button",{staticClass:"modal__button",on:{click:t.send}},[t._v(" accept ")])])])])},H=[],P={data:function(){return{modalAnswer:"false"}},computed:Object(v["a"])({},Object(n["c"])(["modalState","noteId","modalType"])),methods:Object(v["a"])(Object(v["a"])({},Object(n["b"])({setModalState:"setModalState",deleteNote:"Notes/deleteNote"})),{},{closeModal:function(t){"modal"===t.target.className&&this.setModalState()},send:function(){var t=this;this.deleteNote({type:this.modalType,noteId:this.noteId,answer:this.modalAnswer}).then((function(){t.$router.push({name:"Home"})}))}})},L=P,J=Object(b["a"])(L,E,H,!1,null,null,null),q=J.exports,D={computed:Object(v["a"])({},Object(n["c"])(["modalState"])),methods:Object(v["a"])(Object(v["a"])({},Object(n["b"])({setToggle:"Header/setToggle"})),{},{toggle:function(t){t.target||this.setToggle()}}),components:{Header:N,Aside:M,Modal:q}},R=D,V=(o("034f"),Object(b["a"])(R,m,p,!1,null,null,null)),Y=V.exports,z=o("ecee"),B=o("c074"),F=o("ad3d");z["c"].add(B["a"]),a["a"].component("font-awesome-icon",F["a"]),a["a"].config.productionTip=!1,a["a"].use(u.a),new a["a"]({store:l,VueRouter:s["a"],router:r["a"],render:function(t){return t(Y)}}).$mount("#app")},7323:function(t,e,o){},"82d0":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"note-page",class:"note-page--"+t.type},[o("h1",{staticClass:"note-page__title"},[t._v(" "+t._s(t.pageTitle)+" ")]),o("div",{staticClass:"note-page__form"},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:" "},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("label",{staticClass:"control-label",attrs:{for:"title"}},[t._v(" title ")])]),t.submitted&&t.$v.title.$error?o("div",{staticClass:"form-group-validate"},[t._v(" The input is required! ")]):t._e(),o("div",{staticClass:"note-page__todos"},[o("Todos",{attrs:{type:t.type,existNote:t.note},on:{sendTodos:function(e){t.todos=e}}})],1),o("div",{staticClass:"note-page__buttons"},[o("button",{staticClass:"note-page__button",on:{click:function(e){return e.preventDefault(),t.send(e)}}},[t._v(" "+t._s(t.type)+" ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:"edit"===t.type,expression:"type === 'edit'"}],staticClass:"note-page__icon",on:{click:t.doDeleteNote}},[o("font-awesome-icon",{attrs:{icon:"trash-alt"}}),o("span",{staticClass:"note-page__icon-text"},[t._v("Delete note")])],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"edit"===t.type,expression:"type === 'edit'"}],staticClass:"note-page__icon",on:{click:t.doResetLastChange}},[o("font-awesome-icon",{attrs:{icon:"trash-restore-alt"}}),o("span",{staticClass:"note-page__icon-text"},[t._v("Reset last change")])],1),o("router-link",{staticClass:"note-page__button note-page__button--back",attrs:{to:{name:"Home"}}},[t._v(" back ")])],1)])])},s=[],n=(o("7db0"),o("b0c0"),o("d3b7"),o("07ac"),o("25f0"),o("5530")),i=o("2f62"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos"},[o("button",{staticClass:"todos__add-todo",on:{click:function(e){return t.doTodo("add")}}},[o("font-awesome-icon",{staticClass:"icon icon--svg",attrs:{icon:"plus-circle"}}),o("div",{staticClass:"todos__add-todo-text"},[t._v(" add a todo ")])],1),o("div",{directives:[{name:"show",rawName:"v-show",value:Object.keys(t.todos).length,expression:"Object.keys(todos).length"}],staticClass:"todos__todo-field"},t._l(t.todos,(function(e,a){return o("div",{key:a,staticClass:"todo-field",class:e.editing?"form-group":"checkbox"},[e.editing?o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value.value"}],staticClass:"form-control",attrs:{type:"text",id:e.id,placeholder:" "},domProps:{value:e.value},on:{input:function(o){o.target.composing||t.$set(e,"value",o.target.value)}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"value.checked"}],attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.checked)?t._i(e.checked,null)>-1:e.checked},on:{change:function(o){var a=e.checked,s=o.target,n=!!s.checked;if(Array.isArray(a)){var i=null,c=t._i(a,i);s.checked?c<0&&t.$set(e,"checked",a.concat([i])):c>-1&&t.$set(e,"checked",a.slice(0,c).concat(a.slice(c+1)))}else t.$set(e,"checked",n)}}}),e.editing?o("label",{staticClass:"control-label",attrs:{for:e.id}},[t._v(" New note* ("+t._s(a+1)+") ")]):o("label",{staticClass:"control-label",attrs:{for:e.id}},[t._v(" "+t._s(e.value||"New note* ("+(a+1)+")")+" ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.editing,expression:"value.editing"}],staticClass:"todo-field__save",on:{click:function(t){e.editing=!e.editing}}},[o("font-awesome-icon",{staticClass:"icon icon--svg",attrs:{icon:"save"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.editing,expression:"!value.editing"}],staticClass:"todo-field__edit",on:{click:function(t){e.editing=!e.editing}}},[o("font-awesome-icon",{staticClass:"icon icon--svg",attrs:{icon:"edit"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.editing,expression:"!value.editing"}],staticClass:"todo-field__remove",on:{click:function(e){return t.doTodo("remove",a)}}},[o("font-awesome-icon",{staticClass:"icon icon--svg",attrs:{icon:"minus-circle"}})],1)])})),0)])},l=[],r=(o("a434"),{props:["type","existNote"],data:function(){return{todos:[]}},created:function(){"edit"===this.type&&this.getTodos()},watch:{todos:function(t){this.$emit("sendTodos",t)}},computed:Object(n["a"])({},Object(i["c"])("Notes",["notes"])),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])({doAddTodo:"Notes/addTodo"})),{},{getTodos:function(){this.todos=this.existNote.todos},doTodo:function(t,e){switch(t){case"add":this.todos.push({id:"f".concat((+new Date).toString(16)),value:"",editing:!1});break;case"remove":this.todos.splice(e,1);break}}})}),d=r,u=o("2877"),m=Object(u["a"])(d,c,l,!1,null,null,null),p=m.exports,v=o("b5ae"),f={props:["id"],data:function(){return{submitted:!1,type:"",pageTitle:"",title:"",todos:[]}},created:function(){this.setVariables(this.$route.name)},validations:{title:{required:v["required"]}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])("Notes",["notes"])),{},{note:function(){var t=this;return this.notes?Object.values(this.notes).find((function(e){return e.id===t.id})):{}}}),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])({createNote:"Notes/createNote",editNote:"Notes/editNote",deleteNote:"Notes/deleteNote",resetLastChange:"Notes/resetLastChange",setModalState:"setModalState"})),{},{setVariables:function(t){var e=this;switch(t){case"CreateNote":this.type="create",this.pageTitle="Creating a note";break;case"EditNote":this.type="edit",this.pageTitle="Edit note",this.title=Object.values(this.notes).find((function(t){return t.id===e.id})).title;break}},send:function(){if(this.submitted=!0,this.$v.$touch(),!this.$v.$invalid){switch(this.$route.name){case"CreateNote":this.createNote({title:this.title,id:"f".concat((+new Date).toString(16)),todos:this.todos});break;case"EditNote":this.editNote({updatedNote:{title:this.title,id:this.note.id,todos:this.todos},oldNote:Object(n["a"])({},this.note)});break}this.$router.push({name:"Home"})}},doDeleteNote:function(){this.deleteNote({type:"deleteOne",noteId:this.id})},doResetLastChange:function(){this.resetLastChange({noteId:this.note.id})}}),components:{Todos:p}},h=f,_=Object(u["a"])(h,a,s,!1,null,null,null);e["a"]=_.exports},b8c8:function(t,e,o){t.exports=o.p+"img/journal.40cb425c.svg"},cd87:function(t,e,o){"use strict";var a=o("82d0");e["a"]={path:"/testing-vue/edit-note/:id",name:"EditNote",component:a["a"],props:!0}},d3fc:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"note-show"},[o("h1",{staticClass:"note-show__title"},[t._v(" "+t._s(t.note.title)+" ")]),o("ul",{staticClass:"note-show__list"},t._l(t.note.todos,(function(e){return o("li",{key:e.id,staticClass:"note-show__item",class:[e.checked?"note-show__item--checked":"",e.value?"":"note-show__item--empty"]},[t._v(" "+t._s(e.value||"*Todo is empty")+" ")])})),0),o("div",{staticClass:"note-show__navigation"},[o("router-link",{staticClass:"note-show__button",attrs:{to:{name:"Home"}}},[t._v(" back ")]),o("button",{staticClass:"note-show__button",on:{click:t.toEdit}},[o("font-awesome-icon",{attrs:{icon:"edit"}}),t._v(" Edit the note ")],1)],1)])},s=[],n=(o("7db0"),o("07ac"),o("5530")),i=o("2f62"),c={props:["id"],computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])("Notes",["notes"])),{},{note:function(){var t=this;return Object.values(this.notes).find((function(e){return e.id===t.id}))}}),methods:{toEdit:function(){this.$router.push({name:"EditNote",params:{id:this.id}})}}},l=c,r=o("2877"),d=Object(r["a"])(l,a,s,!1,null,null,null),u=d.exports;e["a"]={path:"/testing-vue/note/:id",name:"NoteShow",component:u,props:!0}},f76a:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notes"},[o("div",{staticClass:"notes__row"},[Object.keys(t.notes).length?o("ul",{staticClass:"notes__cards"},[t._l(t.notes,(function(t){return o("li",{key:t.id,staticClass:"notes__card"},[o("NoteCard",{attrs:{note:t}})],1)})),o("li",{staticClass:"notes__card"},[o("router-link",{staticClass:"note-card note-card--custom",attrs:{to:{name:"CreateNote",params:{type:"create",pageTitle:"Creating a note"}}}},[o("div",{staticClass:"note-card__title"},[t._v(" Click to create one more note... ")])])],1)],2):o("div",{staticClass:"notes__empty"},[o("h1",{staticClass:"notes__title"},[t._v(" There's no exist notes. Click down to create a note. ")]),o("router-link",{staticClass:"note-page__button",attrs:{to:{name:"CreateNote",params:{type:"create",pageTitle:"Creating a note"}}}},[o("font-awesome-icon",{attrs:{icon:"plus-square"}}),o("div",{staticClass:"main-menu__link-name"},[t._v(" Create a note ")])],1)],1)])])},s=[],n=o("5530"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"note-card"},[o("div",{staticClass:"note-card__edit",on:{click:function(e){return t.toNote("edit")}}},[o("font-awesome-icon",{staticClass:"icon icon--svg",attrs:{icon:"edit"}})],1),o("div",{staticClass:"note-card__content",on:{click:function(e){return t.toNote("show")}}},[o("div",{staticClass:"note-card__title"},[t._v(" "+t._s(t.note.title)+" ")]),o("ul",{staticClass:"note-card__todos"},t._l(t.note.todos,(function(e){return o("li",{key:e.id,staticClass:"note-card__todo"},[t._v(" "+t._s(e.value)+" ")])})),0)])])},c=[],l={props:["note"],methods:{toNote:function(t){switch(t){case"show":this.$router.push({name:"NoteShow",params:{id:this.note.id}});break;case"edit":this.$router.push({name:"EditNote",params:{id:this.note.id}});break}}}},r=l,d=o("2877"),u=Object(d["a"])(r,i,c,!1,null,null,null),m=u.exports,p=o("2f62"),v={computed:Object(n["a"])({},Object(p["c"])("Notes",["notes"])),components:{NoteCard:m}},f=v,h=Object(d["a"])(f,a,s,!1,null,null,null),_=h.exports;e["a"]={path:"/testing-vue",name:"Home",component:_}}});
//# sourceMappingURL=app.58950235.js.map