(this.webpackJsonpcocinaconsciente=this.webpackJsonpcocinaconsciente||[]).push([[0],{104:function(e,c,t){},105:function(e,c,t){},184:function(e,c,t){},185:function(e,c,t){},186:function(e,c,t){},187:function(e,c,t){},188:function(e,c,t){},189:function(e,c,t){},190:function(e,c,t){},191:function(e,c,t){},192:function(e,c,t){},193:function(e,c,t){},194:function(e,c,t){},195:function(e,c,t){},196:function(e,c,t){},197:function(e,c,t){},198:function(e,c,t){},199:function(e,c,t){},201:function(e,c,t){"use strict";t.r(c);var s=t(2),a=t(57),i=t.n(a),n=(t(200),t(71),t(1));var r=function(){return Object(n.jsx)("div",{})},l=t(6),o=t(7),j=t(4),d=t(58);var m=function(e){var c=e.component,t=Object(d.a)(e,["component"]);return Object(n.jsx)(o.b,Object(j.a)(Object(j.a)({},t),{},{render:function(e){return localStorage.getItem("user")?Object(n.jsx)(c,Object(j.a)({},e)):Object(n.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))},b=t(5),u=t(25),x=t.n(u),O=t(18),h=t.n(O),g=t(26),p=t.n(g),v=(t(85),function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"form-group-btn",children:Object(n.jsxs)("button",{className:"btn",disabled:e.loading,children:[e.loading&&Object(n.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(n.jsx)("span",{children:e.texto})]})}),e.message&&Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:e.message})})]})}),f=t.p+"static/media/loginrrss.0dded1f9.svg",N=t.p+"static/media/correo.5be021fc.svg",y=t(10),S=t.n(y),w="/api/auth/",k={register:function(e,c,t,s){return S.a.post(w+"signup",{name:e,lastname:c,email:t,password:s})},login:function(e,c){return S.a.post(w+"login",{email:e,password:c}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user")},getCurrentUser:function(){return JSON.parse(localStorage.getItem("user"))}},C=(t(104),function(e){if(!e)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Campo obligatorio"})}),R=function(e,c){var t=Object(s.useRef)(),a=Object(s.useRef)(),i=Object(s.useState)(""),r=Object(b.a)(i,2),o=r[0],j=r[1],d=Object(s.useState)(""),m=Object(b.a)(d,2),u=m[0],O=m[1],g=Object(s.useState)(!1),y=Object(b.a)(g,2),S=(y[0],y[1]),w=Object(s.useState)(""),R=Object(b.a)(w,2),D=(R[0],R[1]);return Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("div",{className:"logintxt",children:Object(n.jsx)("p",{className:"logintxt-txt",children:"Iniciar sesi\xf3n"})}),Object(n.jsx)("div",{className:"logintxt",children:Object(n.jsx)("img",{src:f,className:"logintxt-img",alt:"login rrss"})}),Object(n.jsx)("div",{className:"logintxt",children:Object(n.jsx)("img",{src:N,className:"logintxt-img1",alt:"icono correo"})}),Object(n.jsxs)(x.a,{onSubmit:function(c){c.preventDefault(),D(""),S(!0),t.current.validateAll(),0===a.current.context._errors.length?k.login(o,u).then((function(){e.history.push("/home"),window.location.reload()}),(function(e){var c=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();S(!1),D(c)})):S(!1)},ref:t,children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)(h.a,{type:"text",className:"form-group-control",name:"email",placeholder:"correo electr\xf3nico",value:o,onChange:function(e){var c=e.target.value;j(c)},validations:[C]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)(h.a,{type:"password",className:"form-group-control",name:"password",placeholder:"contrase\xf1a",value:u,onChange:function(e){var c=e.target.value;O(c)},validations:[C]})}),Object(n.jsxs)("div",{className:"checkbox",children:[Object(n.jsx)("input",{className:"radio",type:"radio",name:"recuerdame",value:"Recu\xe9rdame"}),Object(n.jsx)("label",{for:"Recu\xe9rdame",children:"Recu\xe9rdame"})]}),Object(n.jsx)(p.a,{style:{display:"none"},ref:a}),Object(n.jsx)(v,{texto:"Iniciar Sesi\xf3n"})]}),Object(n.jsx)("div",{className:"txtcontrase\xf1a",children:Object(n.jsx)("p",{children:"\xbfOlvidaste tu contrase\xf1a?"})}),Object(n.jsxs)("div",{className:"checkbox-contrase\xf1a",children:[Object(n.jsxs)("p",{children:["\xbfA\xfan no est\xe1s registrado? ",Object(n.jsx)(l.b,{to:"./registro",children:"Reg\xedstrate ahora"})]}),Object(n.jsx)("p",{children:"Comienza a aprovechar tus alimentos"})]})]})})},D=t(60),E=t.p+"static/media/flechaizq.df4f84f8.svg",z=(t(105),function(e){if(!e)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Campo obligatorio"})}),F=function(e){if(!Object(D.isEmail)(e))return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"No es un email v\xe1lido"})},L=function(e){if(!e)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Por favor introduzca su nombre"})},P=function(e){if(!e)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Por favor introduzca sus apellidos"})},q=function(e){if((e.length<6||e.length>10)&&e(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/))return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Entre 6 y 10 caracteres. Debe contener al menos un n\xfamero, may\xfascula, min\xfascula y car\xe1cter especial"})},A=function(e){var c=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useState)(""),i=Object(b.a)(a,2),r=i[0],o=i[1],j=Object(s.useState)(""),d=Object(b.a)(j,2),m=d[0],u=d[1],O=Object(s.useState)(""),g=Object(b.a)(O,2),y=g[0],S=g[1],w=Object(s.useState)(""),C=Object(b.a)(w,2),R=C[0],D=C[1],A=Object(s.useState)(!1),I=Object(b.a)(A,2),J=I[0],_=I[1],T=Object(s.useState)(""),B=Object(b.a)(T,2),M=B[0],V=B[1];return Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsxs)("div",{className:"backarrow-container",children:[Object(n.jsx)("div",{className:"back",children:Object(n.jsx)(l.b,{to:"./",children:Object(n.jsx)("img",{src:E,alt:"flechaizq"})})}),Object(n.jsx)("div",{className:"logintxt",children:Object(n.jsx)("p",{className:"logintxt-txt1",children:"Crear cuenta"})})]}),Object(n.jsx)("div",{className:"logintxt",children:Object(n.jsx)("img",{src:f,className:"logintxt-img",alt:"loginrrss"})}),Object(n.jsx)("div",{className:"logintxt",children:Object(n.jsx)("img",{src:N,className:"logintxt-img1",alt:"correo"})}),Object(n.jsxs)(x.a,{onSubmit:function(e){e.preventDefault(),V(""),_(!1),c.current.validateAll(),0===t.current.context._errors.length&&k.register(r,m,y,R).then((function(e){V(e.data.message),_(!0)}),(function(e){var c=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();V(c),_(!1)}))},ref:c,children:[!J&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)(h.a,{type:"text",className:"form-group-control",name:"name",value:r,placeholder:"Nombre",onChange:function(e){var c=e.target.value;o(c)},validations:[z,L]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)(h.a,{type:"text",className:"form-group-control",name:"lastname",value:m,placeholder:"Apellidos",onChange:function(e){var c=e.target.value;u(c)},validations:[z,P]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)(h.a,{type:"text",className:"form-group-control",placeholder:"Correo electr\xf3nico",name:"email",value:y,onChange:function(e){var c=e.target.value;S(c)},validations:[z,F]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)(h.a,{type:"password",className:"form-group-control",name:"password",value:R,placeholder:"Contrase\xf1a",onChange:function(e){var c=e.target.value;D(c)},validations:[z,q]})}),Object(n.jsx)("div",{className:"form-group"})]}),M&&Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("div",{className:J?"alert alert-success":"alert alert-danger",role:"alert",children:M})}),Object(n.jsx)(p.a,{style:{display:"none"},ref:t}),Object(n.jsxs)("div",{className:"checkbox-contrase\xf1a1",children:[Object(n.jsx)("input",{type:"radio",name:"terminos",value:"terminos"}),Object(n.jsxs)("label",{for:"terminos",children:["Estoy de acuerdo con los ",Object(n.jsx)("a",{href:"#",children:"T\xe9rminos de uso"})]})]}),Object(n.jsx)("div",{className:"btnsignin",children:Object(n.jsx)(v,{texto:"Crear cuenta"})})]}),Object(n.jsx)("div",{className:"checkbox-contrase\xf1a1",children:Object(n.jsxs)("p",{for:"terminos",children:["\xbfYa tienes cuenta?",Object(n.jsx)(l.b,{to:"./",children:"Inicia sesi\xf3n"})]})})]})})},I=t.p+"static/media/perfil.e985039b.svg",J=(t(184),function(){return Object(n.jsx)("div",{className:"profile-container",children:Object(n.jsx)("img",{className:"profile",src:I,alt:"foto perfil"})})}),_=t.p+"static/media/facebook.7050aab6.svg",T=t.p+"static/media/instagram.b6d3ec0e.svg",B=t.p+"static/media/pinterest.73148676.svg",M=t.p+"static/media/google.9cb6bc16.svg",V=t.p+"static/media/copyright.37e518ab.svg",H=t.p+"static/media/logo.4f190355.svg",U=(t(185),function(){return Object(n.jsxs)("div",{className:"footer-container",children:[Object(n.jsxs)("div",{className:"txt-footer",children:[Object(n.jsx)("div",{className:"txt-footer-div",children:Object(n.jsx)("img",{src:H,alt:"logo",className:"txt-footer-div-logo"})}),Object(n.jsxs)("div",{className:"txt-footer-rrss",children:[Object(n.jsx)("img",{className:"txt-footer-rrss-1",src:T,alt:"instagram"}),Object(n.jsx)("img",{className:"txt-footer-rrss-1",src:_,alt:"facebook"}),Object(n.jsx)("img",{className:"txt-footer-rrss-1",src:B,alt:"pinterest"}),Object(n.jsx)("img",{className:"txt-footer-rrss-1",src:M,alt:"google"})]})]}),Object(n.jsxs)("div",{className:"txt-footer-links-div",children:[Object(n.jsx)("p",{className:"txt-footer-links-div-p",children:"Pol\xedtica de privacidad"}),Object(n.jsx)("p",{className:"txt-footer-links-div-p",children:"Pol\xedtica de cookies"}),Object(n.jsx)("p",{className:"txt-footer-links-div-p",children:"Aviso legal"})]}),Object(n.jsxs)("div",{className:"copyright",children:[Object(n.jsx)("img",{className:"copyright-icon",src:V,alt:"copyright"}),Object(n.jsx)("p",{className:"copyright-txt",children:"Junio 2021 Hecho en 1 semana y media pero...con mucho \u2665"})]})]})}),G=t(0),K=t(19),Y=t(61),Z=t(65),$=t(64),Q=t(63),W=t(62),X=t(66),ee=t.p+"static/media/close.eb18254a.svg";t(186);var ce=function(){var e=[{title:"Home",path:"/home",icon:Object(n.jsx)(Y.a,{}),cName:"nav-text"},{title:"Mi perfil",path:"/perfil",icon:Object(n.jsx)(W.a,{}),cName:"nav-text"},{title:"Mis recetas favoritas",path:"/misrecetas",icon:Object(n.jsx)(Q.a,{}),cName:"nav-text"},{title:"Lista de la compra",path:"/listadelacompra",icon:Object(n.jsx)($.a,{}),cName:"nav-text"},{title:"Sobre Nosotros",path:"#",icon:Object(n.jsx)(Z.a,{}),cName:"nav-text"},{title:"Cerrar sesi\xf3n",path:"#",icon:Object(n.jsx)(X.a,{}),cName:"nav-text"}],c=Object(s.useState)(!1),t=Object(b.a)(c,2),a=t[0],i=t[1],r=function(){return i(!a)};return Object(n.jsx)("div",{className:"navmenu-container",children:Object(n.jsxs)(G.b.Provider,{value:{color:" #628f22 ",size:"1.5em"},children:[Object(n.jsxs)("div",{className:"navbar-div",children:[Object(n.jsx)(l.b,{to:"#",className:"menu-bars",children:Object(n.jsx)(K.a,{onClick:r})}),Object(n.jsx)("img",{src:H,className:"navbar-div-logo",alt:"logo"})]}),Object(n.jsx)("nav",{className:a?"nav-menu active":"nav-menu",children:Object(n.jsxs)("ul",{className:"nav-menu-items",onClick:r,children:[Object(n.jsx)("li",{className:"navbar-toggle",children:Object(n.jsx)(l.b,{to:"#",className:"menu-bars"})}),Object(n.jsxs)("div",{className:"container-menu-hamb",children:[Object(n.jsx)("div",{className:"logohmb",children:Object(n.jsx)("img",{className:"logohmb-close",src:ee,alt:"cierre"})}),Object(n.jsx)("div",{className:"logohmb",children:Object(n.jsx)("img",{className:"logohmb-hmb",src:H,alt:"logo"})}),e.map((function(e,c){return Object(n.jsx)("li",{className:e.cName,children:Object(n.jsxs)(l.b,{to:e.path,children:[e.icon,Object(n.jsx)("span",{className:"hamb",children:e.title})]})},c)}))]})]})})]})})},te=function(e){var c=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)(ce,{}),Object(n.jsx)("main",{children:c}),Object(n.jsx)(U,{})]})},se=t.p+"static/media/inputbuscador.ed616eba.svg",ae=t.p+"static/media/beans.135bc2f5.svg",ie=t.p+"static/media/bacon.87f48709.svg",ne=t.p+"static/media/fish.b46b50d5.svg",re=t.p+"static/media/watermelon.8902e7dc.svg",le=t(9),oe=(t(187),function(){var e=Object(s.useState)(0),c=Object(b.a)(e,2),t=c[0],a=c[1],i=Object(s.useState)(0),r=Object(b.a)(i,2),l=r[0],o=r[1];return Object(n.jsx)("div",{children:Object(le.a)(Array(5)).map((function(e,c){var s=c+1;return Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{className:"radiostar",type:"radio",name:"rating",value:s,onClick:function(){return a(s)}}),Object(n.jsx)(K.b,{className:"star",size:20,color:s<=(l||t)?"#F2C11F":"#D7D2D2",onMouseEnter:function(){return o(s)},onMouseLeave:function(){return o(0)}})]},e)}))})}),je=t.p+"static/media/favorita.a03fd127.svg",de=t.p+"static/media/favoritarellena.a3d291e7.svg",me=(t(188),function(e){return console.log(e),Object(n.jsx)("div",{children:Object(n.jsx)(l.b,{to:"./detallerecetas?recipeid=".concat(e.id,"&activatedheart=").concat(e.activatesheart),children:Object(n.jsxs)("div",{className:"cardreceta",children:[Object(n.jsx)("div",{className:"cardreceta-imgrcp",children:Object(n.jsx)("img",{className:"cardreceta-imgrcp-img",src:e.image,alt:"cardreceta-img"})}),Object(n.jsxs)("div",{className:"cardreceta-txt-img",children:[Object(n.jsx)("div",{className:"cardreceta-txt",children:Object(n.jsx)("p",{className:"cardreceta-txt",children:e.nameRecipe})}),Object(n.jsx)("div",{className:"cardreceta-img",children:Object(n.jsx)("img",{src:!0===e.activatedheart?de:je,alt:"coraz\xf3n"})})]}),Object(n.jsx)("div",{className:"star",children:Object(n.jsx)(oe,{})})]})})})});function be(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}t(189);var ue=function(){var e=Object(o.g)(),c=Object(s.useState)([]),t=Object(b.a)(c,2),a=t[0],i=t[1];return Object(s.useEffect)((function(){console.log("culo2");S.a.get("/api/recipes/popular/4",{headers:be()}).then((function(e){console.log(e.data),i(e.data)}))}),[]),Object(n.jsxs)("div",{className:"home-container",children:[Object(n.jsxs)("div",{className:"imgcontainer",children:[Object(n.jsx)("h2",{className:"imgcontainer-txt",children:"\xbfNo sabes qu\xe9 cocinar con lo  que tienes por casa?"}),Object(n.jsx)("button",{className:"imgcontainer-btn",children:Object(n.jsx)("img",{className:"imgcontainer-btn-img",src:se,alt:"input de buscador",onClick:function(){e.push("/buscador")}})})]}),Object(n.jsxs)("div",{className:"yellowcontainer",children:[Object(n.jsx)("div",{className:"yellowcontainer-txt",children:Object(n.jsx)("p",{className:"yellowcontainer-txt-texto",children:"Los ingredientes m\xe1s populares de la semana"})}),Object(n.jsxs)("div",{className:"yellowcontainer-icons",children:[Object(n.jsxs)("div",{className:"yellowcontainer-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer-icons-img",src:ae,alt:"Jud\xedas"}),Object(n.jsx)("p",{children:"Jud\xedas"})]}),Object(n.jsxs)("div",{className:"yellowcontainer-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer-icons-img",src:ne,alt:"pescado"}),Object(n.jsx)("p",{children:"Pescado"})]}),Object(n.jsxs)("div",{className:"yellowcontainer-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer-icons-img",src:ie,alt:"beicon"}),Object(n.jsx)("p",{children:"Beicon"})]}),Object(n.jsxs)("div",{className:"yellowcontainer-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer-icons-img",src:re,alt:"Sand\xeda"}),Object(n.jsx)("p",{children:"Sand\xeda"})]})]})]}),Object(n.jsxs)("div",{className:"txthome",children:[Object(n.jsx)("p",{children:"Las recetas m\xe1s populares"}),a.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(me,{nameRecipe:e.nameRecipe,image:e.image,id:e._id})},e)}))]})]})},xe=t.p+"static/media/lupa.dff2a924.svg",Oe=t.p+"static/media/sinlactosa.e4ef7d31.svg",he=t.p+"static/media/sinhuevo.bf4ec1eb.svg",ge=t.p+"static/media/singluten.1ec8fdea.svg",pe=t.p+"static/media/vegan.e0fc806b.svg",ve=(t(190),function(e){var c=Object(s.useState)(!1),t=Object(b.a)(c,2),a=t[0],i=t[1],r=Object(s.useState)(!1),l=Object(b.a)(r,2),o=l[0],j=l[1],d=Object(s.useState)(!1),m=Object(b.a)(d,2),u=m[0],x=m[1],O=Object(s.useState)(!1),h=Object(b.a)(O,2),g=h[0],p=h[1],v=function(c,t,s,n){console.log(e),console.log(c,t,s,n),e.configfilter([].concat(Object(le.a)(e.allfilter),[{name:c,img:s,dbfilter_name:n}])),1===t&&i(!a),2===t&&j(!o),3===t&&x(!u),4===t&&p(!g)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"arrowtxt",children:Object(n.jsx)("div",{className:"filter-txt",children:Object(n.jsx)("p",{children:"Seleccione los filtros a aplicar:"})})}),Object(n.jsx)("div",{className:"filter-list",children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{className:"txt-icon-ingredient",onClick:function(){return v("Sin Gluten",1,"singluten.svg","Glutten-Free")},style:!0===a?{color:"#000",textDecoration:"underline"}:{color:"grey"},children:[Object(n.jsx)("img",{src:ge,alt:"singluten"}),"Sin gluten"]}),Object(n.jsxs)("li",{onClick:function(){return v("Vegetariano",2,"vegan.svg","Vegetarian")},style:!0===o?{color:"#000",textDecoration:"underline"}:{color:"grey"},children:[Object(n.jsx)("img",{src:pe,alt:"vegan"}),"Vegetariano"]}),Object(n.jsxs)("li",{onClick:function(){return v("Sin Huevo",3,"sinhuevo.svg","Vegan")},style:!0===u?{color:"#000",textDecoration:"underline"}:{color:"grey"},children:[Object(n.jsx)("img",{src:he,alt:"sin guevo"}),"Sin huevo"]}),Object(n.jsxs)("li",{onClick:function(){return v("Sin Lactosa",4,"sinlactosa.svg","Lactose-Free")},style:!0===g?{color:"#000",textDecoration:"underline"}:{color:"grey"},children:[Object(n.jsx)("img",{src:Oe,alt:"sin lactosa"}),"Sin lactosa"]})]})}),Object(n.jsx)("div",{className:"btn-green",children:Object(n.jsx)("button",{className:"btnfiltros",onClick:function(){console.log(e),e.togglefilter(!e.visiblefilter)},children:"Aplicar flitros"})})]})}),fe=t.p+"static/media/filtros.50211acd.svg",Ne=t.p+"static/media/ensaladera.670a5e33.svg",ye=t.p+"static/media/aspa.5d368413.svg",Se=(t(191),function(e){return console.log(e),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"messgreceipes",children:[Object(n.jsx)("h3",{className:"messgreceipes-h3",children:"Ninguna receta encontrada"===e.infoFetchRecipe.recipes.message?e.infoFetchRecipe.recipes.message:"\xa1Se han encontrado ".concat(e.infoFetchRecipe.recipes.length," recetas!")}),Object(n.jsx)("p",{className:"messgreceipes-p",children:"Para afinar m\xe1s tu b\xfasqueda te recomendamos a\xf1adir m\xe1s ingredientes"})]}),e.infoFetchRecipe.recipes.length>0?Object(n.jsx)("div",{className:"btn-recipes",children:Object(n.jsx)(l.b,{to:"./resultadosrecetas?ingredients=".concat(e.infoFetchRecipe.stringingredient,"&typeDiet=").concat(e.infoFetchRecipe.stringfilter),children:Object(n.jsx)("button",{className:"btn-recipes-btn",children:"Ver Recetas"})})}):""]})}),we=(t(192),function(){var e=Object(s.useState)([]),c=Object(b.a)(e,2),t=c[0],a=c[1],i=Object(s.useState)(t),r=Object(b.a)(i,2),o=r[0],j=r[1],d=Object(s.useState)([]),m=Object(b.a)(d,2),u=m[0],x=m[1],O=Object(s.useState)(!1),h=Object(b.a)(O,2),g=h[0],p=h[1],v=Object(s.useState)([]),f=Object(b.a)(v,2),N=f[0],y=f[1],w=Object(s.useState)(!1),k=Object(b.a)(w,2),C=k[0],R=k[1],D=Object(s.useState)([]),z=Object(b.a)(D,2),F=z[0],L=z[1],P=Object(s.useState)(!0),q=Object(b.a)(P,2),A=q[0],I=q[1],J=Object(s.useState)(!1),_=Object(b.a)(J,2),T=_[0],B=_[1],M=Object(s.useState)({}),V=Object(b.a)(M,2),H=V[0],U=V[1];Object(s.useEffect)((function(){console.log("TEST"),S()("/api/ingredients",{headers:be()}).then((function(e){console.log(e.data),a(e.data),j(e.data),e.data?a(e.data):alert("algo no va bien")})).catch((function(e){console.log(e)}))}),[]),Object(s.useEffect)((function(){console.log(u,N);var e=[];u.map((function(c){return e.push(c.name)}));var c=e.join(",");console.log(c),console.log();var t=[];N.map((function(e){return t.push(e.dbfilter_name)}));var s=t.join(",");console.log(s);var a="/api/recipes?ingredients=".concat(c,"&typeDiet=").concat(s);console.log(a),S.a.get(a,{headers:be()}).then((function(e){console.log(e.data),L(e.data),console.log(F.length),U({stringingredient:c,stringfilter:s,recipes:e.data})}))}),[u,N]);return Object(n.jsxs)("div",{className:"searchinput-container",children:[!0===C?Object(n.jsx)(ve,{configfilter:y,allfilter:N,togglefilter:R,visiblefilter:C}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"inputsearch",children:[Object(n.jsx)("div",{className:"inputsearch-img",children:Object(n.jsx)("button",{children:Object(n.jsxs)(l.b,{to:"./home",children:["  ",Object(n.jsx)("img",{className:"inputsearch-img-imagen1",src:E,alt:"icono de flecha izq"})]})})}),Object(n.jsxs)("div",{className:"input-lupa",children:[Object(n.jsx)("div",{className:"inputsearch-input",children:Object(n.jsx)("input",{onChange:function(e){return function(e){var c,s=e.target.value.toLowerCase();console.log(s),c=t.filter((function(e){return-1!==e.name.search(s)})),j(c),""===e.target.value.toLowerCase()?(p(!1),I(!0)):(p(!0),I(!1))}(e)},className:"inputsearch-input-inpt",type:"text",name:"search",placeholder:"Escribe tus ingredientes",autoComplete:"off"})}),Object(n.jsx)("div",{className:"inputsearch-img",children:Object(n.jsx)("button",{className:"inputsearch-btn",children:Object(n.jsx)(l.b,{to:"./resultadosrecetas",children:Object(n.jsx)("img",{className:"inputsearch-img-imagen2",src:xe,alt:"icono de lupa"})})})})]}),Object(n.jsx)("div",{className:"inputsearch-img",children:Object(n.jsx)("button",{onClick:function(){R(!C)},className:"inputsearch-filter",children:Object(n.jsx)("img",{className:"inputsearch-filter-img",src:fe,alt:"icono de filtros"})})})]}),Object(n.jsxs)("div",{className:"yellowcontainer-slc",children:[u.map((function(e){return Object(n.jsxs)("div",{className:"yellowcontainer1-icons-bckg-ingredients",children:[Object(n.jsx)("img",{className:"yellowcontainer1-icons-img",src:e.image,alt:e.image}),Object(n.jsx)("img",{className:"aspa",src:ye,alt:"aspa",onClick:function(){return function(e){console.log(e),console.log(u);var c=u.filter((function(c){return c._id!==e._id}));console.log(c),x(c)}(e)}}),Object(n.jsx)("p",{className:"txt-icon-ingredient",children:e.name})]},e)})),Object(n.jsx)("div",{children:N.map((function(e){return console.log(e),Object(n.jsxs)("div",{className:"filter-aspa",children:[Object(n.jsx)("div",{className:"first",children:Object(n.jsx)("img",{className:"filtro",src:"/images/".concat(e.img),alt:e.img})}),Object(n.jsxs)("div",{className:"second",children:[Object(n.jsx)("img",{className:"aspa",src:ye,alt:"aspa",onClick:function(){return function(e){console.log(e),console.log(N);var c=N.filter((function(c){return c.name!==e.name}));console.log(c),y(c)}(e)}}),Object(n.jsx)("p",{className:"txt-icon-ingredient",children:e.name})]})]},e)}))})]}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:"yellowcontainer1",children:o.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsxs)("div",{className:"yellowcontainer1-icons-bckg-ingredients",onClick:function(){return c=e,console.log(c),x([].concat(Object(le.a)(u),[c])),console.log(H),void B(!0);var c},style:!0===g?{display:"block"}:{display:"none"},children:[Object(n.jsx)("img",{className:"yellowcontainer1-icons-img",src:e.image,alt:e.image}),Object(n.jsx)("p",{className:"txt-icon-ingredient",children:e.name})]},e.id)})}))})})]}),Object(n.jsxs)("div",{className:"background",style:!0===A?{display:"block"}:{display:"none"},children:[Object(n.jsx)("div",{className:"inputsearch-txt",children:Object(n.jsx)("p",{className:"inputsearch-txt-texto",children:"\xa1A\xf1ade los ingredientes de los que dispones y encuentra las mejores recetas!"})}),Object(n.jsx)("div",{className:"inputsearch-ensaladera",children:Object(n.jsx)("img",{className:"inputsearch-ensaladera-img",src:Ne,alt:"icono ensaladera"})}),Object(n.jsxs)("div",{className:"yellowcontainer",children:[Object(n.jsx)("div",{className:"yellowcontainer-txt",children:Object(n.jsx)("p",{className:"yellowcontainer-txt-texto",children:"Los ingredientes m\xe1s populares de la semana"})}),Object(n.jsxs)("div",{className:"yellowcontainer-icons",children:[Object(n.jsxs)("div",{className:"yellowcontainer-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer-icons-img",src:ae,alt:"Jud\xedas"}),Object(n.jsx)("p",{children:"Jud\xedas"})]}),Object(n.jsxs)("div",{className:"yellowcontainer-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer-icons-img",src:ne,alt:"pescado"}),Object(n.jsx)("p",{children:"Pescado"})]}),Object(n.jsxs)("div",{className:"yellowcontainer-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer-icons-img",src:ie,alt:"beicon"}),Object(n.jsx)("p",{children:"Beicon"})]}),Object(n.jsxs)("div",{className:"yellowcontainer-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer-icons-img",src:re,alt:"Sand\xeda"}),Object(n.jsx)("p",{children:"Sand\xeda"})]})]})]})]}),!0===T?Object(n.jsx)("div",{children:Object(n.jsx)(Se,{infoFetchRecipe:H})}):""]})}),ke=t.p+"static/media/shoplist.d4305f53.svg",Ce=(t(193),function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(l.b,{to:"./home",children:["    ",Object(n.jsxs)("div",{className:"inputsearch1",children:[Object(n.jsx)("div",{className:"inputsearch1-img",children:Object(n.jsx)("button",{children:Object(n.jsx)("img",{className:"inputsearch1-img-imagen1",src:E,alt:"icono de flecha izq"})})}),Object(n.jsxs)("div",{className:"input-lupa",children:[Object(n.jsx)("div",{className:"inputsearch1-input",children:Object(n.jsx)("input",{className:"inputsearch1-input-inpt",type:"text",name:"search",placeholder:"Escribe tus ingredientes"})}),Object(n.jsx)("div",{className:"inputsearch1-img",children:Object(n.jsx)("button",{className:"inputsearch1-btn",children:Object(n.jsx)("img",{className:"inputsearch1-img-imagen2",src:xe,alt:"icono de lupa"})})})]}),Object(n.jsx)("div",{className:"inputsearch1-img",children:Object(n.jsx)("button",{className:"inputsearch1-filter",children:Object(n.jsx)("img",{className:"inputsearch1-filter-img",src:fe,alt:"icono de filtros"})})})]})]}),Object(n.jsx)("img",{className:"shoplist",src:ke,alt:""})]})}),Re=t.p+"static/media/blueberries.2aa7bcb4.svg",De=t.p+"static/media/broccoli.b888bd1c.svg",Ee=t.p+"static/media/chocolate.5397d3ca.svg",ze=t.p+"static/media/hamburguer.c2eabc23.svg",Fe=(t(194),function(){var e=Object(s.useState)([]),c=Object(b.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){S.a.get("/api/recipes/popular/7",{headers:be()}).then((function(e){console.log(e.data),a(e.data)}))}),[]),Object(n.jsxs)("div",{className:"home-container",children:[Object(n.jsx)("div",{className:"imgcontainer1",children:Object(n.jsx)("h2",{className:"imgcontainer1-txt",children:"Tus recetas favoritas siempre a tu alcance"})}),Object(n.jsxs)("div",{className:"yellowcontainer3",children:[Object(n.jsx)("div",{className:"yellowcontainer3-txt",children:Object(n.jsx)("p",{className:"yellowcontainer3-txt-texto",children:"Nam \xd1am"})}),Object(n.jsxs)("div",{className:"yellowcontainer3-icons",children:[Object(n.jsxs)("div",{className:"yellowcontainer3-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer3-icons-img",src:Re,alt:"blueberries"}),Object(n.jsx)("p",{children:"Ar\xe1ndanos"})]}),Object(n.jsxs)("div",{className:"yellowcontainer3-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer3-icons-img",src:De,alt:"broccoli"}),Object(n.jsx)("p",{children:"Br\xf3coli"})]}),Object(n.jsxs)("div",{className:"yellowcontainer3-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer3-icons-img",src:Ee,alt:"chocolate"}),Object(n.jsx)("p",{children:"Chocolate"})]}),Object(n.jsxs)("div",{className:"yellowcontainer3-icons-bckg",children:[Object(n.jsx)("img",{className:"yellowcontainer3-icons-img",src:ze,alt:"hamburguer"}),Object(n.jsx)("p",{children:"Burguer"})]})]})]}),Object(n.jsxs)("div",{className:"txthome",children:[Object(n.jsx)("p",{children:"Las recetas m\xe1s populares"}),t.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(me,{nameRecipe:e.nameRecipe,image:e.image,id:e._id,activatedheart:!0})},e)}))]})]})}),Le=(t(195),function(e){var c=new URLSearchParams(e.location.search),t=c.get("ingredients"),a=c.get("typeDiet");console.log(a);var i=Object(s.useState)([]),r=Object(b.a)(i,2),o=r[0],j=r[1];return Object(s.useEffect)((function(){var e="/api/recipes?ingredients=".concat(t,"&typeDiet=").concat(a);S.a.get(e,{headers:be()}).then((function(e){console.log(e.data),j(e.data)}))}),[t,a]),Object(n.jsx)("div",{className:"receipes-container",children:Object(n.jsxs)("div",{className:"searchinput-container",children:[Object(n.jsxs)(l.b,{to:"./buscador",children:["    ",Object(n.jsxs)("div",{className:"inputsearch",children:[Object(n.jsx)("div",{className:"inputsearch-img",children:Object(n.jsx)("button",{children:Object(n.jsx)("img",{className:"inputsearch-img-imagen1",src:E,alt:"icono de flecha izq"})})}),Object(n.jsxs)("div",{className:"input-lupa",children:[Object(n.jsx)("div",{className:"inputsearch-input",children:Object(n.jsx)("input",{className:"inputsearch-input-inpt",type:"text",name:"search",placeholder:"Escribe tus ingredientes"})}),Object(n.jsx)("div",{className:"inputsearch-img",children:Object(n.jsx)("button",{className:"inputsearch-btn",children:Object(n.jsx)("img",{className:"inputsearch-img-imagen2",src:xe,alt:"icono de lupa"})})})]}),Object(n.jsx)("div",{className:"inputsearch-img",children:Object(n.jsx)("button",{className:"inputsearch-filter",children:Object(n.jsx)("img",{className:"inputsearch-filter-img",src:fe,alt:"icono de filtros"})})})]})]}),o.map((function(e){return Object(n.jsx)("div",{className:"tarjetareceta",children:Object(n.jsx)(me,{nameRecipe:e.nameRecipe,image:e.image,id:e._id})},e)}))]})})}),Pe=t.p+"static/media/reloj.5ac3b5ff.svg",qe=(t(196),function(e){return console.log(e),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"cardreceta",children:[Object(n.jsx)("div",{className:"cardreceta-imgrcp",children:Object(n.jsx)("img",{className:"cardreceta-imgrcp-img",src:e.image,alt:"cardreceta-img"})}),Object(n.jsxs)("div",{className:"cardreceta-txt-img",children:[Object(n.jsx)("div",{className:"cardreceta-txt",children:Object(n.jsx)("p",{className:"cardreceta-txt",children:e.nameRecipe})}),Object(n.jsx)("div",{className:"cardreceta-img",children:Object(n.jsx)("img",{src:je,alt:"coraz\xf3n"})})]}),Object(n.jsxs)("div",{className:"time-difficulty",children:[Object(n.jsxs)("div",{className:"cardreceta-time",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:Pe,alt:"reloj"})}),Object(n.jsx)("div",{className:"cardreceta-tiempo",children:e.time})]}),Object(n.jsx)("div",{className:"cardreceta-dificultad",children:Object(n.jsxs)("p",{children:["Difficulty: ",e.difficulty]})})]})]})})}),Ae=t.p+"static/media/menos.2a730fe3.svg",Ie=t.p+"static/media/mas.077a9f8f.svg",Je=t.p+"static/media/recomendaciones.38a9a4d0.svg",_e=(t(197),function(){var e=Object(s.useState)(0),c=Object(b.a)(e,2),t=c[0],a=c[1],i=Object(s.useState)(0),r=Object(b.a)(i,2),l=r[0],o=r[1];return Object(n.jsx)("div",{className:"bigger",children:Object(le.a)(Array(5)).map((function(e,c){var s=c+1;return Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{className:"radiostar",type:"radio",name:"rating",value:s,onClick:function(){return a(s)}}),Object(n.jsx)(K.b,{className:"star",size:60,color:s<=(l||t)?"#F2C11F":"#D7D2D2",onMouseEnter:function(){return o(s)},onMouseLeave:function(){return o(0)}})]})}))})}),Te=(t(198),function(e){var c=new URLSearchParams(e.location.search).get("recipeid"),t=Object(s.useState)([]),a=Object(b.a)(t,2),i=a[0],r=a[1];return Object(s.useEffect)((function(){var e="/api/recipes/".concat(c);S.a.get(e,{headers:be()}).then((function(e){console.log(e.data),r([e.data])}))}),[c]),Object(n.jsxs)("div",{className:"receipedetails-container",children:[Object(n.jsxs)("div",{className:"inputsearch",children:[Object(n.jsx)("div",{className:"inputsearch-img",children:Object(n.jsx)("button",{onClick:function(){return e.history.goBack()},children:Object(n.jsx)("img",{className:"inputsearch-img-imagen1",src:E,alt:"icono de flecha izq"})})}),Object(n.jsxs)("div",{className:"input-lupa",children:[Object(n.jsx)("div",{className:"inputsearch-input",children:Object(n.jsx)("input",{className:"inputsearch-input-inpt",type:"text",name:"search",placeholder:"Escribe tus ingredientes"})}),Object(n.jsx)("div",{className:"inputsearch-img",children:Object(n.jsx)("button",{className:"inputsearch-btn",children:Object(n.jsx)(l.b,{to:"./resultadosrecetas",children:Object(n.jsx)("img",{className:"inputsearch-img-imagen2",src:xe,alt:"icono de lupa"})})})})]}),Object(n.jsx)("div",{className:"inputsearch-img",children:Object(n.jsx)("button",{className:"inputsearch-filter",children:Object(n.jsx)("img",{className:"inputsearch-filter-img",src:fe,alt:"icono de filtros"})})})]}),i.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(qe,{nameRecipe:e.nameRecipe,image:e.image,id:e._id,time:e.prepTime,difficulty:e.difficulty}),Object(n.jsxs)("div",{className:"txt",children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"txt-title1",children:"Porciones"})}),Object(n.jsxs)("div",{className:"numberportions",children:[Object(n.jsx)("div",{className:"txt",children:Object(n.jsx)("img",{className:"txthome",src:Ae,alt:"signo menos"})}),Object(n.jsx)("div",{className:"txt",children:Object(n.jsx)("p",{className:"txt-title",children:e.portions})}),Object(n.jsx)("div",{className:"txt",children:Object(n.jsx)("img",{src:Ie,alt:"signo m\xe1s"})})]}),Object(n.jsx)("div",{className:"txt",children:Object(n.jsx)("p",{className:"txt-title",children:"Ingredientes"})}),Object(n.jsx)("div",{className:"txt",children:Object(n.jsx)("p",{className:"txt-texto",children:e.ingredients.join(", ")})}),Object(n.jsx)("div",{className:"txt",children:Object(n.jsx)("p",{className:"txt-title",children:"Elaboraci\xf3n"})}),Object(n.jsx)("div",{className:"txt",children:Object(n.jsxs)("p",{className:"txt-texto",children:[" ",e.elaboration]})}),Object(n.jsxs)("div",{className:"txt",children:[Object(n.jsx)("p",{className:"txt-title",children:"Valora una receta"}),Object(n.jsx)(_e,{})]}),Object(n.jsxs)("div",{className:"recomendations",children:[Object(n.jsx)("img",{className:"imgrecomendations",src:Je,alt:"recomendaciones"}),Object(n.jsx)("p",{children:"\xbfSab\xedas que en los hogares espa\xf1oles se tira aproximadamente 1.339 millones de Kilos/litros de comida y bebida al a\xf1o y cerca de 820 millones de personas a nivel global padecen hambre? \xbfC\xf3mo podr\xedamos, desde nuestros hogares, evitar el desperdicio y ayudar a la humanidad y al planeta?: Planifica un men\xfa semanal, compra s\xf3lo lo necesario, almacena los alimentos correctamente, ten en cuenta la diferencia entre fechas de consumo preferente y caducidad, congela correctamente los alimentos, coloca los alimentos m\xe1s viejos delante de los nuevos, aprovecha los alimentos para otra comida. Busca m\xe1s recetas y encuentra consejos para aprovechar tus alimentos."})]})]})]},e)}))]})}),Be=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(m,{path:"/buscador",component:we}),Object(n.jsx)(m,{path:"/filtros",component:ve}),Object(n.jsxs)(te,{children:[Object(n.jsx)(o.b,{exact:!0,path:"/",component:R}),Object(n.jsx)(o.b,{path:"/registro",component:A}),Object(n.jsx)(o.b,{path:"/home",component:ue}),Object(n.jsx)(m,{path:"/perfil",component:J}),Object(n.jsx)(m,{path:"/listadelacompra",component:Ce}),Object(n.jsx)(m,{path:"/misrecetas",component:Fe}),Object(n.jsx)(m,{path:"/resultadosrecetas",component:Le}),Object(n.jsx)(m,{path:"/detallerecetas",component:Te})]})]})})};t(199);i.a.render(Object(n.jsxs)(l.a,{children:[Object(n.jsx)(r,{}),Object(n.jsx)(Be,{})]}),document.getElementById("root"))},71:function(e,c,t){},85:function(e,c,t){}},[[201,1,2]]]);
//# sourceMappingURL=main.12e2a77a.chunk.js.map