(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={nav:"Navbar_nav__Wxjpr",item:"Navbar_item__2I-ty",a:"Navbar_a__3bpcg",activeLink:"Navbar_activeLink__V9yNX"}},22:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__28s54",posts:"MyPosts_posts__31sS3"}},26:function(e,t,a){e.exports={header:"Header_header__17-Tj",item:"Header_item__1FSB1"}},28:function(e,t,a){e.exports={item:"Post_item__3_S4W"}},29:function(e,t,a){e.exports={discriptionBlock:"ProfileInfo_discriptionBlock__1Xyxl"}},30:function(e,t,a){e.exports={userPhoto:"users_userPhoto__2SooR"}},31:function(e,t,a){e.exports=a(48)},37:function(e,t,a){},38:function(e,t,a){},47:function(e,t,a){e.exports={item:"Profile_item__Uf_NP"}},48:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(15),s=a(13),l=a(2),o={posts:[{id:1,message:"Hi! How are you?",likesCount:0},{id:2,message:"It's my first post",likesCount:23}],newPostText:""},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:e.newPostText,likesCount:0};return Object(l.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[a]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(l.a)({},e,{newPostText:t.newText});default:return e}},i={dialogs:[{id:1,name:"Lesha"},{id:2,name:"Katya"},{id:3,name:"Misha"},{id:4,name:"Zhenya"},{id:5,name:"Dima"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"All ok!"},{id:4,message:"Yo"},{id:5,message:"Yo!"}],newMessageBody:""},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(l.a)({},e,{newMessageBody:t.body});case"SEND-MESSAGE":var a=e.newMessageBody;return Object(l.a)({},e,{newMessageBody:"",messages:[].concat(Object(s.a)(e.messages),[{id:6,message:a}])});default:return e}},u={},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return e},d={users:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(l.a)({},e,{users:e.users.map(function(e){return e.id===t.userID?Object(l.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(l.a)({},e,{users:e.users.map(function(e){return e.id===t.userID?Object(l.a)({},e,{followed:!1}):e})});case"SET-USERS":return Object(l.a)({},e,{users:[].concat(Object(s.a)(e.users),Object(s.a)(t.users))});default:return e}},f=Object(n.b)({profilePage:r,dialogsPage:c,sidebar:m,usersPage:E}),p=Object(n.c)(f),g=a(0),v=a.n(g),_=a(17),w=a.n(_),h=(a(37),a(38),a(26)),y=a.n(h),N=function(){return v.a.createElement("header",{className:y.a.header},v.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}))},b=a(11),P=a.n(b),O=a(7),k=function(){return v.a.createElement("nav",{className:P.a.nav},v.a.createElement("div",{className:P.a.item},v.a.createElement(O.b,{to:"/profile",activeClassName:P.a.activeLink},"Profile")),v.a.createElement("div",{className:"${s.item} ${s.active}"},v.a.createElement(O.b,{to:"/dialogs",activeClassName:P.a.activeLink},"Messages")),v.a.createElement("div",{className:P.a.item},v.a.createElement("a",null,"News")),v.a.createElement("div",{className:P.a.item},v.a.createElement("a",null,"Music")),v.a.createElement("div",{className:P.a.item},v.a.createElement("a",null,"Settings")))},x=(a(47),a(22)),S=a.n(x),j=a(28),T=a.n(j),D=function(e){return v.a.createElement("div",{className:T.a.item},v.a.createElement("img",{src:"https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg"}),e.message,v.a.createElement("div",null,v.a.createElement("span",null,"Likes ",e.likesCount)))},U=function(e){var t=e.posts.map(function(e){return v.a.createElement(D,{message:e.message,likesCount:e.likesCount})}),a=v.a.createRef();return v.a.createElement("div",{className:S.a.postsBlock},v.a.createElement("h3",null,"My posts"),v.a.createElement("div",null,v.a.createElement("div",null,v.a.createElement("textarea",{onChange:function(){var t=a.current.value;e.updateNewPostText(t)},ref:a,value:e.newPostText})),v.a.createElement("div",null,v.a.createElement("button",{onClick:function(){e.addPost()}},"Add post"))),v.a.createElement("div",{className:S.a.posts},t))},B=a(10),L=Object(B.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{updateNewPostText:function(t){var a=function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t);e(a)},addPost:function(){e({type:"ADD-POST"})}}})(U),M=a(29),A=a.n(M),C=function(){return v.a.createElement("div",null,v.a.createElement("div",null,v.a.createElement("img",{src:"https://www.w3schools.com/howto/img_snow.jpg"})),v.a.createElement("div",{className:A.a.discriptionBlock},"ava + discription"))},W=function(e){return v.a.createElement("div",null,v.a.createElement(C,null),v.a.createElement(L,null))},I=a(9),R=a.n(I),F=function(e){var t="/dialogs/"+e.id;return v.a.createElement("div",{className:R.a.dialog+""+R.a.active},v.a.createElement(O.b,{to:t},e.name))},G=function(e){return v.a.createElement("div",{className:R.a.dialog},e.message)},H=function(e){var t=e.dialogsPage,a=t.dialogs.map(function(e){return v.a.createElement(F,{name:e.name,key:e.id,id:e.id})}),n=t.messages.map(function(e){return v.a.createElement(G,{message:e.message,key:e.id})}),s=t.newMessageBody;return v.a.createElement("div",{className:R.a.dialogs},v.a.createElement("div",{className:R.a.dialogsItems},a),v.a.createElement("div",{className:R.a.messages},v.a.createElement("div",null,n),v.a.createElement("div",null,v.a.createElement("div",null,v.a.createElement("textarea",{value:s,onChange:function(t){var a=t.target.value;e.updateNewMessageBody(a)},placeholder:"Enter your message"})),v.a.createElement("div",null,v.a.createElement("button",{onClick:function(){e.sendMessage()}},"Send")))))},K=Object(B.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",body:e}}(t))},sendMessage:function(){e({type:"SEND-MESSAGE"})}}})(H),Y=a(12),z=a(30),X=a.n(z),J=function(e){return 0===e.users.length&&e.setUsers([{id:1,photoURL:"https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585",followed:!1,fullName:"Alex",status:"Blablabla",location:{city:"Minsk",country:"Belarus"}},{id:2,photoURL:"https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585",followed:!0,fullName:"Katya",status:"Yyoyoyo",location:{city:"Warsaw",country:"Poland"}},{id:3,photoURL:"https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585",followed:!0,fullName:"Zhenya",status:"AaAaAaAa",location:{city:"Kiev",country:"Ukraine"}},{id:4,photoURL:"https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585",followed:!1,fullName:"Sergey",status:"UuUuUuUu",location:{city:"Riga",country:"Latvia"}}]),v.a.createElement("div",null,e.users.map(function(t){return v.a.createElement("div",{key:t.id},v.a.createElement("span",null,v.a.createElement("div",null,v.a.createElement("img",{src:t.photoURL,className:X.a.userPhoto})),v.a.createElement("div",null,t.followed?v.a.createElement("button",{onClick:function(){e.unfollow(t.id)}},"UnFollow"):v.a.createElement("button",{onClick:function(){e.follow(t.id)}},"Follow"))),v.a.createElement("span",null,v.a.createElement("span",null,v.a.createElement("div",null,t.fullName),v.a.createElement("div",null,t.status)),v.a.createElement("span",null,v.a.createElement("div",null,t.location.country),v.a.createElement("div",null,t.location.city))))}))},$=Object(B.b)(function(e){return{users:e.usersPage.users}},function(e){return{follow:function(t){e({type:"FOLLOW",userID:t})},unfollow:function(t){e({type:"UNFOLLOW",userID:t})},setUsers:function(t){e(function(e){return{type:"SET-USERS",users:e}}(t))}}})(J),Z=function(e){return v.a.createElement(O.a,null,v.a.createElement("div",{className:"app-wrapper"},v.a.createElement(N,null),v.a.createElement(k,null),v.a.createElement("div",{className:"app-wrapper-content"},v.a.createElement(Y.a,{path:"/dialogs",render:function(){return v.a.createElement(K,null)}}),v.a.createElement(Y.a,{path:"/profile",render:function(){return v.a.createElement(W,null)}}),v.a.createElement(Y.a,{path:"/users",render:function(){return v.a.createElement($,null)}}))),";")};w.a.render(v.a.createElement(O.a,null,v.a.createElement(B.a,{store:p},v.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__JOYKC",dialogsItems:"Dialogs_dialogsItems__1xyBp",active:"Dialogs_active__KK4sm",messages:"Dialogs_messages__3tzlz",message:"Dialogs_message__2F5bO"}}},[[31,1,2]]]);
//# sourceMappingURL=main.ea4771ed.chunk.js.map