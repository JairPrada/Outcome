(this.webpackJsonpreactfirebase=this.webpackJsonpreactfirebase||[]).push([[0],{105:function(e,t,a){e.exports=a(128)},110:function(e,t,a){},115:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=(a(110),a(14)),l=(a(115),a(186)),s=a(184),u=a(51),m=a.n(u),d=(a(116),a(120),m.a.initializeApp({apiKey:"AIzaSyBM7AtWVYcshqqwT1lObZHKLMYJyTgkx2Q",authDomain:"reactfirebase-e716a.firebaseapp.com",databaseURL:"https://reactfirebase-e716a.firebaseio.com",projectId:"reactfirebase-e716a",storageBucket:"reactfirebase-e716a.appspot.com",messagingSenderId:"572459586365",appId:"1:572459586365:web:cc7256b540a36982de2b54",measurementId:"G-FB6E3M3LFG"})),p=d.firestore(),E=d.auth(),f=new m.a.auth.FacebookAuthProvider,h=new m.a.auth.GoogleAuthProvider,b=new m.a.auth.GithubAuthProvider,g=function(e){return{type:"MENSAJE_ALERTA",open:e.open,contenido:e.contenido,tipo:e.tipo}},O=Object(c.b)((function(e){return{alerta:{open:e.alerta.open,contenido:e.alerta.contenido,tipo:e.alerta.tipo}}}),(function(e){return{handleClose:function(){e({type:"CERRAR_ALERTA"})}}}))((function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{open:e.alerta.open,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:e.handleClose},r.a.createElement(s.a,{id:e.alerta.tipo,onClose:e.handleClose,severity:e.alerta.tipo},e.alerta.contenido)))})),x=a(20),v=a(13),j=a(170),y=a(171),w=a(172),I=a(80),A=a.n(I),S=a(81),C=a.n(S),R=a(82),W=a.n(R),N=a(83),P=a.n(N),k=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("video",{className:"mq",src:A.a,width:"100%",muted:!0,autoPlay:!0,loop:!0}),r.a.createElement(j.a,{maxWidth:"xl"},r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(w.a,{direction:"down",in:!0,timeout:1e3},r.a.createElement(y.a,{item:!0,xs:12,md:!0},r.a.createElement("img",{src:P.a,width:"100%",alt:"Casa"}))),r.a.createElement(w.a,{direction:"down",in:!0,timeout:2e3},r.a.createElement(y.a,{item:!0,xs:12,md:!0},r.a.createElement("img",{src:C.a,width:"100%",alt:"Casa"}))),r.a.createElement(w.a,{direction:"down",in:!0,timeout:3e3},r.a.createElement(y.a,{item:!0,xs:12,md:!0},r.a.createElement("img",{src:W.a,width:"100%",alt:"Casa"}))))))},F=a(26),T=a.n(F),U=a(45),_=a(6),L=a(22),z=a(99),D=a(173),B=a(183),M=a(174),q=a(85),G=a.n(q),H=a(31),J=a.n(H),Y=a(86),V=a.n(Y),K=a(41),Q=a.n(K),Z=a(84),$=a.n(Z),X=function(){return r.a.createElement("img",{src:$.a,height:"20px",alt:"IconoGoogle"})},ee=Object(c.b)((function(e){return{sesion:e.sesion}}),(function(e){return{estadoSesion:function(t){var a;e({type:"ESTADO_SESION",data:(a=t).data,usuario:a.usuario,sesion:a.sesion})},estadoAlerta:function(t){e(g(t))},iniciarSesion:function(t){e(function(e){return function(t){E.signInWithEmailAndPassword(e.correo,e.contrase\u00f1a).then((function(e){if(!0!==e.user.emailVerified)return E.signOut(),t({type:"INICIAR_SESION",sesion:!1,alerta:{open:!0,contenido:"No ha verificado su cuenta de correo electronico",tipo:"error"}});p.collection("Usuarios").doc(e.user.uid).get().then((function(a){return t({type:"INICIAR_SESION",usuario:{id:e.user.uid,nombre:a.data().nombre,apellido:a.data().apellido,pais:a.data().pais,bandera:a.data().bandera,correo:a.data().correo},sesion:!0,alerta:{open:!0,contenido:"Ha iniciado sesion correctamente bienvenido",tipo:"success"}})}))})).catch((function(e){return"auth/wrong-password"===e.code?t({type:"INICIAR_SESION",alerta:{open:!0,contenido:"La contrase\xf1a no concide con la direccion de correo electronico",tipo:"error"}}):"auth/user-not-found"===e.code?t({type:"INICIAR_SESION",alerta:{open:!0,contenido:"No hay ning\xfan registro de usuario que corresponda a este identificador.",tipo:"error"}}):void 0}))}}(t))}}}))((function(e){var t=Object(n.useState)({email:"jairprada9@gmail.com",password:"123456"}),a=Object(L.a)(t,2),o=a[0],i=a[1];Object(n.useEffect)((function(){e.sesion&&e.history.push("/perfil")}));var c=function(e){"email"===e.target.name?i(Object(_.a)(Object(_.a)({},o),{},{email:e.target.value})):"password"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{password:e.target.value}))},l=function(){var t=Object(U.a)(T.a.mark((function t(a){var n,r,o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Ingrese"),t.prev=1,t.next=4,E.signInWithPopup(f);case 4:return(n=t.sent)&&(e.estadoSesion(n.user),r={open:!0,contenido:"Ha iniciado sesion correctamente bienvenido",tipo:"success"},e.estadoAlerta(r),e.history.push("/logeado")),t.next=8,console.log(n);case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),"auth/account-exists-with-different-credential"===t.t0.code&&(o={open:!0,contenido:"Ya existe una cuenta con la misma direcci\xf3n de correo electr\xf3nico de un proveedor asociado con esta direcci\xf3n de correo electr\xf3nico.",tipo:"error"},e.estadoAlerta(o));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(U.a)(T.a.mark((function t(a){var n,r,o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Ingrese"),t.next=4,E.signInWithPopup(h);case 4:return(n=t.sent)&&(e.estadoSesion(n.user),r={open:!0,contenido:"Ha iniciado sesion correctamente bienvenido",tipo:"success"},e.estadoAlerta(r),e.history.push("/logeado")),t.next=8,console.log(n);case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),"auth/account-exists-with-different-credential"===t.t0.code&&(o={open:!0,contenido:"Ya existe una cuenta con la misma direcci\xf3n de correo electr\xf3nico de un proveedor asociado con esta direcci\xf3n de correo electr\xf3nico.",tipo:"error"},e.estadoAlerta(o));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(U.a)(T.a.mark((function t(a){var n,r,o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Ingrese"),t.next=4,E.signInWithPopup(b);case 4:return(n=t.sent)&&(e.estadoSesion(n.user),r={open:!0,contenido:"Ha iniciado sesion correctamente bienvenido",tipo:"success"},e.estadoAlerta(r),e.history.push("/logeado")),t.next=8,console.log(n);case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),"auth/account-exists-with-different-credential"===t.t0.code&&(o={open:!0,contenido:"Ya existe una cuenta con la misma direcci\xf3n de correo electr\xf3nico de un proveedor asociado con esta direcci\xf3n de correo electr\xf3nico.",tipo:"error"},e.estadoAlerta(o));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{maxWidth:"sm",className:"m"},r.a.createElement(z.a,{elevation:3,style:{padding:"30px 50px",background:"#F5F5F5"}},r.a.createElement(w.a,{direction:"down",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",null,r.a.createElement(D.a,{className:"text-center",variant:"h3",gutterBottom:!0},"Inicio de Sesion"),r.a.createElement(D.a,{className:"text-center",varian:"h1"}," ",r.a.createElement(Q.a,{style:{fontSize:80,color:"#648DAE"},id:"menuC",color:"secondary",className:"icono"})),r.a.createElement(B.a,{fullWidth:!0,required:!0,onChange:c,name:"email",type:"email",helperText:"Ingresa tu correo",variant:"outlined",label:"Email"}),r.a.createElement(B.a,{fullWidth:!0,required:!0,onChange:c,name:"password",type:"password",helperText:"Ingresa tu contrase\xf1a",variant:"outlined",label:"Password"}))),r.a.createElement(w.a,{direction:"right",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(M.a,{endIcon:r.a.createElement(J.a,null),onClick:function(){var t={correo:o.email,"contrase\xf1a":o.password};e.iniciarSesion(t)},variant:"contained",fullWidth:!0,color:"primary"},"Iniciar Sesion")),r.a.createElement("div",{className:"mt-3"},r.a.createElement(y.a,{container:!0,spacing:1},r.a.createElement(w.a,{direction:"right",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{item:!0,xs:!0},r.a.createElement(M.a,{startIcon:r.a.createElement(G.a,{style:{color:"blue"}}),fullWidth:!0,onClick:l,variant:"contained"},"Facebook"))),r.a.createElement(w.a,{direction:"up",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{item:!0,xs:!0},r.a.createElement(M.a,{startIcon:r.a.createElement(V.a,null),onClick:u,fullWidth:!0,variant:"contained"},"Github"))),r.a.createElement(w.a,{direction:"left",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{item:!0,xs:!0},r.a.createElement(M.a,{startIcon:r.a.createElement(X,null),fullWidth:!0,onClick:s,variant:"contained"},"Google"))))))))})),te=a(64),ae=function e(t,a,n,r,o,i){Object(te.a)(this,e),this.nombre=t,this.apellido=a,this.pais=n,this.bandera=r,this.correo=o,this.contrase\u00f1a=i},ne=Object(c.b)((function(){return{}}),(function(e){return{estadoAlerta:function(t){e(g(t))},nuevoUsuarioP:function(t){var a;e((a=t,function(e){E.createUserWithEmailAndPassword(a.correo,a.contrase\u00f1a).then((function(t){t.user.sendEmailVerification({url:"https://reactfirebase-e716a.web.app"}),p.collection("Usuarios").doc(t.user.uid).set(Object.assign({},a)).then((function(t){return e({type:"CREAR_USUARIO",alerta:{open:!0,contenido:"Estas a un paso de crear tu cuenta, verifica tu correo electronico",tipo:"success"}})}))})).catch((function(t){return"auth/email-already-in-use"===t.code?e({type:"CREAR_USUARIO",alerta:{open:!0,contenido:"La direcci\xf3n de correo electr\xf3nico ya est\xe1 siendo utilizada por otra cuenta",tipo:"error"}}):"auth/weak-password"===t.code?e({type:"CREAR_USUARIO",alerta:{open:!0,contenido:"La contrase\xf1a debe tener al menos 6 caracteres",tipo:"error"}}):void 0}))}))}}}))((function(e){var t=Object(n.useState)({nombre:"",apellido:"",correo:"","contrase\xf1a":"",pais:"",bandera:""}),a=Object(L.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)({paises:[]}),l=Object(L.a)(c,2),s=l[0],u=l[1];Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){u({paises:e})}))}),[]);var m=function(e){var t="";"pais"===e.target.name&&(s.paises.forEach((function(a){a.name===e.target.value&&(t=a.flag)})),i(Object(_.a)(Object(_.a)({},o),{},{pais:e.target.value,bandera:t}))),"nombre"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{nombre:e.target.value})),"apellido"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{apellido:e.target.value})),"correo"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{correo:e.target.value})),"contrase\xf1a"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{"contrase\xf1a":e.target.value}))};return r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{maxWidth:"sm",className:"m"},r.a.createElement(z.a,{elevation:3,style:{padding:"40px 50px",background:"#F5F5F5"}},r.a.createElement("div",null,r.a.createElement(w.a,{direction:"left",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(D.a,{className:"text-center",variant:"h3",gutterBottom:!0},"Registrate")))),r.a.createElement(w.a,{direction:"right",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(D.a,{className:"text-center",varian:"h1"}," ",r.a.createElement(Q.a,{style:{fontSize:80,color:"#648DAE"},color:"secondary",id:"menuC",className:"icono"}))))),r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(w.a,{direction:"right",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(B.a,{fullWidth:!0,label:"Nombre",name:"nombre",onChange:m,helperText:"Ingresa tu nombre",variant:"outlined"}))),r.a.createElement(w.a,{direction:"left",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(B.a,{fullWidth:!0,label:"Apellido",name:"apellido",onChange:m,helperText:"Ingresa tu apellido",variant:"outlined"})))),r.a.createElement(w.a,{direction:"left",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:9},r.a.createElement(B.a,{select:!0,fullWidth:!0,label:"Pais",name:"pais",value:o.pais,onChange:m,SelectProps:{native:!0},variant:"outlined"},r.a.createElement("option",{key:"error",value:"error"},"seleccione un pais"),s.paises.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)})))),r.a.createElement(y.a,{item:!0,xs:3},r.a.createElement("img",{src:o.bandera,alt:o.name,height:"50px"})))),r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(w.a,{direction:"right",in:!0,timeout:2100,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(B.a,{fullWidth:!0,label:"Correo",typeof:"email",name:"correo",onChange:m,type:"email",helperText:"Ingresa tu correo",variant:"outlined"}))),r.a.createElement(w.a,{direction:"left",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(B.a,{fullWidth:!0,label:"Contrase\xf1a",name:"contrase\xf1a",onChange:m,type:"password",helperText:"Ingresa tu nombre",variant:"outlined"}))))),r.a.createElement(w.a,{direction:"right",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(M.a,{variant:"contained",id:"menu",color:"primary",endIcon:r.a.createElement(J.a,null),onClick:function(t){var a=new ae(o.nombre,o.apellido,o.pais,o.bandera,o.correo,o.contrase\u00f1a);e.nuevoUsuarioP(a)},fullWidth:!0},"Registrarse")))))})),re=a(175),oe=a(176),ie=a(185),ce=a(187),le=a(88),se=a.n(le),ue=a(87),me=a.n(ue),de=Object(v.f)(Object(c.b)((function(e){return{sesion:e.sesion,usuario:e.usuario}}),(function(e){return{cerrarSesion:function(){e((function(e){return E.signOut(),e({type:"CERRAR_SESION",usuario:{id:"",nombre:"",pais:"",bandera:"",correo:""},alerta:{open:!0,contenido:"Has cerrado sesion correctamente",tipo:"success"}})}))}}}))((function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(re.a,{color:"primary"},r.a.createElement(oe.a,null,r.a.createElement(D.a,{variant:"h4"},r.a.createElement(x.b,{id:"text-white",to:"/"},r.a.createElement(M.a,{startIcon:r.a.createElement("img",{src:me.a,alt:"icono",height:"50px"})},r.a.createElement(D.a,{variant:"h5",id:"text-white"},"OUTCOME")))),r.a.createElement("div",{style:{flexGrow:"1"}}),r.a.createElement(ie.a,{smDown:!0},e.sesion?r.a.createElement(n.Fragment,null,r.a.createElement(x.b,{id:"text-white",to:"/crearProblema"},r.a.createElement(M.a,{id:"text-white",fullWidth:!0},"Crear Problema")),r.a.createElement(x.b,{id:"text-white",to:"/listaProblemas"},r.a.createElement(M.a,{id:"text-white",fullWidth:!0},"Lista Problemas")),r.a.createElement(x.b,{id:"text-white",to:"/perfil"},r.a.createElement(M.a,{id:"text-white",fullWidth:!0},"Jair")),r.a.createElement(M.a,{id:"text-white",onClick:function(){window.confirm("\xbf Esta seguro que desea cerrar su sesion actual ?")&&(e.cerrarSesion(),e.history.push("/"))}},"SALIR"),r.a.createElement(ce.a,{alt:"perfil"})):r.a.createElement(n.Fragment,null,r.a.createElement(x.b,{id:"text-white",to:"/"},r.a.createElement(M.a,{id:"text-white",fullWidth:!0},"Inicio")),r.a.createElement(x.b,{id:"text-white",to:"/registro"},r.a.createElement(M.a,{fullWidth:!0,id:"text-white"},"Registrarse")),r.a.createElement(x.b,{id:"text-white",to:"/login"},r.a.createElement(M.a,{id:"text-white",fullWidth:!0},"IniciarSesion")))),r.a.createElement(ie.a,{mdUp:!0},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:9}),r.a.createElement(y.a,{item:!0,xs:3},r.a.createElement(x.b,{id:"text-white",to:"/Registro"},r.a.createElement(M.a,{endIcon:r.a.createElement(se.a,null),fullWidth:!0,id:"text-white"}))))))))}))),pe=Object(v.f)(Object(c.b)((function(e){return{usuario:e.usuario,sesion:e.sesion}}),(function(e){return{editarUsuario:function(t){e(function(e){return function(t){p.collection("Usuarios").doc(e.id).set(Object.assign({},e)).then((function(a){return t({type:"EDITAR_USUARIO",alerta:{open:!0,contenido:"Informacion de perfil actualizada correctamente",tipo:"success"},usuario:{id:e.id,nombre:e.nombre,apellido:e.apellido,correo:e.correo,pais:e.pais,bandera:e.bandera}})}))}}(t))},mostrarAlerta:function(t){e(g(t))}}}))((function(e){Object(n.useEffect)((function(){if(!1===e.sesion){e.mostrarAlerta({open:!0,contenido:"Tu sesion se ha terminado, vuelve a iniciar para acceder a las funcionalidades de Outcome",tipo:"error"}),e.history.push("/")}})),Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){u({paises:e})}))}),[]);var t=Object(n.useState)({id:e.usuario.id,nombre:e.usuario.nombre,apellido:e.usuario.apellido,correo:e.usuario.correo,pais:e.usuario.pais,bandera:e.usuario.bandera}),a=Object(L.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)({paises:[]}),l=Object(L.a)(c,2),s=l[0],u=l[1],m=function(e){var t="";"pais"===e.target.name&&(s.paises.forEach((function(a){a.name===e.target.value&&(t=a.flag)})),i(Object(_.a)(Object(_.a)({},o),{},{pais:e.target.value,bandera:t}))),"nombre"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{nombre:e.target.value})),"apellido"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{apellido:e.target.value})),"correo"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{correo:e.target.value})),"contrase\xf1a"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{"contrase\xf1a":e.target.value}))};return r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{maxWidth:"sm",className:"m"},r.a.createElement(z.a,{elevation:3,style:{padding:"40px 50px",background:"#F5F5F5"}},r.a.createElement("div",null,r.a.createElement(w.a,{direction:"left",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(D.a,{className:"text-center",variant:"h3",gutterBottom:!0},"Editar Perfil")))),r.a.createElement(w.a,{direction:"right",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(D.a,{className:"text-center",varian:"h1"}," ",r.a.createElement(Q.a,{style:{fontSize:80,color:"#648DAE"},color:"secondary",id:"menuC",className:"icono"}))))),r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(w.a,{direction:"right",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(B.a,{fullWidth:!0,label:"Nombre",value:o.nombre,name:"nombre",onChange:m,helperText:"Ingresa tu nombre",variant:"outlined"}))),r.a.createElement(w.a,{direction:"left",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(B.a,{fullWidth:!0,label:"Apellido",value:o.apellido,name:"apellido",onChange:m,helperText:"Ingresa tu apellido",variant:"outlined"})))),r.a.createElement(w.a,{direction:"left",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:9},r.a.createElement(B.a,{select:!0,fullWidth:!0,label:"Pais",name:"pais",value:o.pais,onChange:m,SelectProps:{native:!0},variant:"outlined"},r.a.createElement("option",{key:"error",value:"error"},"seleccione un pais"),s.paises.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)})))),r.a.createElement(y.a,{item:!0,xs:3},r.a.createElement("img",{src:o.bandera,alt:o.name,height:"50px"})))),r.a.createElement("br",null)),r.a.createElement(w.a,{direction:"right",in:!0,timeout:2e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(M.a,{variant:"contained",onClick:function(t){window.confirm("Esta seguro que desea cambiar la informacion de su perfil")&&(e.editarUsuario(o),e.history.push("/perfil"))},id:"menu",color:"primary",endIcon:r.a.createElement(J.a,null),fullWidth:!0},"Actualizar Informacion")))))}))),Ee=a(89),fe=a.n(Ee),he=a(90),be=a.n(he),ge=Object(c.b)((function(e){return{usuario:e.usuario,sesion:e.sesion}}),(function(e){return{crearProblema:function(t){var a;e((a=t,function(e){p.collection("Problemas").doc().set(Object.assign({},a)).then((function(t){return e({type:"CREAR_PROBLEMA",alerta:{open:!0,contenido:"Problema creado correctamente",tipo:"success"}})}))}))},mostrarAlerta:function(t){e(g(t))}}}))((function(e){Object(n.useEffect)((function(){if(!1===e.sesion){e.mostrarAlerta({open:!0,contenido:"Tu sesion se ha terminado, vuelve a iniciar para acceder a las funcionalidades de Outcome",tipo:"error"}),e.history.push("/")}}));var t=Object(n.useState)({titulo:"",categoria:"",descripcion:"","due\xf1o":e.usuario.id,fotos:[]}),a=Object(L.a)(t,2),o=a[0],i=a[1],c=function(e){"titulo"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{titulo:e.target.value})),"categoria"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{categoria:e.target.value})),"descripcion"===e.target.name&&i(Object(_.a)(Object(_.a)({},o),{},{descripcion:e.target.value}))};return r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{maxWidth:"md",className:"m"},r.a.createElement(z.a,{elevation:3,style:{padding:"90px",background:"#F5F5F5"}},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(D.a,{variant:"h3",align:"center"},"Crear problema")),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(D.a,{align:"center",varian:"h1"}," ",r.a.createElement(be.a,{style:{fontSize:80,color:"#648DAE"},color:"secondary",id:"menuC",className:"icono"})))),r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(B.a,{label:"Titulo",fullWidth:!0,variant:"outlined",onChange:c,name:"titulo",helperText:"Titulo problema"})),r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(B.a,{select:!0,fullWidth:!0,label:"Categoria",name:"categoria",value:o.pais,onChange:c,SelectProps:{native:!0},variant:"outlined"},r.a.createElement("option",{key:"error",value:"error"},"seleccione una categoria"),["Matematicas","Lenguas","Quimica","Informatica"].map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(B.a,{label:"Descripcion",name:"descripcion",multiline:!0,rows:4,onChange:c,fullWidth:!0,variant:"outlined",helperText:"Ingresa la descripcion del problema"}))),r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(fe.a,{withIcon:!0,buttonText:"Seleccionar Imagenes",onChange:function(e){i(Object(_.a)(Object(_.a)({},o),{},{fotos:e}))},imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880})),r.a.createElement(y.a,{item:!0,xs:6},o.fotos.map((function(e){return r.a.createElement("img",{src:e.name,width:"200px",alt:e.name})})))),r.a.createElement("br",null),r.a.createElement(y.a,{container:!0,justify:"center"},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(M.a,{variant:"contained",color:"primary",endIcon:r.a.createElement(J.a,null),onClick:function(){e.crearProblema(o),e.history.push("/listaProblemas")},fullWidth:!0},"Crear problema"))))))})),Oe=a(177),xe=a(178),ve=a(181),je=a(180),ye=a(179),we=function(e){return r.a.createElement(Oe.a,{style:{height:"370px"}},r.a.createElement(xe.a,null,r.a.createElement(ye.a,{component:"img",alt:"Contemplative Reptile",height:"200",image:"https://images.pexels.com/photos/5563180/pexels-photo-5563180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:e.titulo}),r.a.createElement(je.a,null,r.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.titulo),r.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"p"},e.descripcion))),r.a.createElement(ve.a,null,r.a.createElement(M.a,{size:"small",color:"primary"},"Solucionar"),r.a.createElement(M.a,{size:"small",color:"primary"},"Ver")))},Ie=Object(c.b)((function(e){return{usuario:e.usuario,sesion:e.sesion}}),(function(e){return{obtenerProblemas:function(){e((function(e){}))},mostrarAlerta:function(t){e(g(t))}}}))((function(e){var t=Object(n.useState)([]),a=Object(L.a)(t,2),o=a[0],i=a[1],c=function(){var e=Object(U.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],p.collection("Problemas").onSnapshot((function(e){e.forEach((function(e){t.push(Object(_.a)(Object(_.a)({},e.data()),{},{id:e.id}))})),i(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{maxWidth:"lg",style:{marginTop:"100px"}},r.a.createElement(z.a,{elevation:3,style:{padding:"40px"}},r.a.createElement(y.a,{container:!0,spacing:2},o.map((function(e){return r.a.createElement(y.a,{item:!0,xs:4},r.a.createElement(we,{titulo:e.titulo,descripcion:e.descripcion,id:e.id}))}))))))})),Ae=a(91),Se=a.n(Ae),Ce=a(92),Re=a.n(Ce),We=a(93),Ne=a.n(We),Pe=Object(v.f)(Object(c.b)((function(e){return{usuario:e.usuario,sesion:e.sesion}}),(function(e){return{mostrarAlerta:function(t){e(g(t))}}}))((function(e){Object(n.useEffect)((function(){if(!1===e.sesion){e.mostrarAlerta({open:!0,contenido:"Tu sesion se ha terminado, vuelve a iniciar para acceder a las funcionalidades de Outcome",tipo:"error"})}}));return r.a.createElement(n.Fragment,null,r.a.createElement("video",{video:!0,src:Se.a,className:"mq",loop:!0,width:"100%",muted:!0,autoPlay:!0}),r.a.createElement(j.a,{maxWidth:"md"},r.a.createElement(w.a,{direction:"down",in:!0,timeout:3e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(z.a,{elevation:3,id:"Perfil",style:{padding:"100px 0px",margin:"40px"}},r.a.createElement(y.a,{container:!0,justify:"center"},r.a.createElement(y.a,{item:!0,xs:9},r.a.createElement(D.a,{variant:"h4",align:"center"},"".concat(e.usuario.nombre," ")))),r.a.createElement(y.a,{container:!0,justify:"center",className:"mt-3"},r.a.createElement(y.a,{item:!0},r.a.createElement(ce.a,{alt:"imagen",style:{width:"100px",height:"100px",background:"purple"}},"O"))),r.a.createElement(y.a,{container:!0,justify:"center",className:"mt-3"},r.a.createElement(y.a,{item:!0},r.a.createElement(Re.a,null)),r.a.createElement(y.a,{item:!0},r.a.createElement(D.a,null,e.usuario.correo))),r.a.createElement("br",null),r.a.createElement(y.a,{container:!0,justify:"center"},r.a.createElement(y.a,{item:!0,xs:1},r.a.createElement("img",{src:e.usuario.bandera,width:"100%",alt:"colombia"})),r.a.createElement(y.a,{item:!0,style:{padding:"25px"}},r.a.createElement(D.a,{variant:"body2"},e.usuario.pais))),r.a.createElement(y.a,{container:!0,justify:"center",className:"mt-3"},r.a.createElement(y.a,{item:!0,xs:5},r.a.createElement(M.a,{color:"primary",variant:"contained",onClick:function(){e.history.push("/auth/editarPerfil")},fullWidth:!0,endIcon:r.a.createElement(Ne.a,null)},"Editar Perfil")))))))}))),ke=Object(c.b)((function(e){return{usuario:e}}),(function(e){return{}}))((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(de,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:k}),r.a.createElement(v.a,{path:"/login",component:ee}),r.a.createElement(v.a,{path:"/registro",exact:!0,component:ne}),r.a.createElement(v.a,{path:"/perfil",exact:!0,component:Pe}),r.a.createElement(v.a,{path:"/auth/editarPerfil",exact:!0,component:pe}),r.a.createElement(v.a,{path:"/crearProblema",exact:!0,component:ge}),r.a.createElement(v.a,{path:"/listaProblemas",exact:!0,component:Ie}))))})),Fe=a(39),Te=a(94),Ue=a(95),_e={usuario:{id:"",nombre:"",pais:"",bandera:"",correo:""},problema:[],sesion:!1,alerta:{open:!1,contenido:"",tipo:""}},Le=Object(Fe.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ESTADO_SESION":return Object(_.a)(Object(_.a)({},e),{},{data:t.data,usuario:t.usuario,sesion:t.sesion});case"MENSAJE_ALERTA":return Object(_.a)(Object(_.a)({},e),{},{alerta:{open:t.open,contenido:t.contenido,tipo:t.tipo}});case"CERRAR_ALERTA":return Object(_.a)(Object(_.a)({},e),{},{alerta:{open:!1,contenido:"",tipo:""}});case"CREAR_USUARIO":return Object(_.a)(Object(_.a)({},e),{},{alerta:t.alerta});case"EDITAR_USUARIO":return Object(_.a)(Object(_.a)({},e),{},{alerta:t.alerta,usuario:t.usuario});case"INICIAR_SESION":return Object(_.a)(Object(_.a)({},e),{},{usuario:t.usuario,alerta:t.alerta,sesion:t.sesion});case"CREAR_PROBLEMA":return Object(_.a)(Object(_.a)({},e),{},{alerta:t.alerta});case"CERRAR_SESION":return Object(_.a)(Object(_.a)({},e),{},{usuario:t.usuario,alerta:t.alerta,sesion:!1});default:return e}}),Object(Te.composeWithDevTools)(Object(Fe.applyMiddleware)(Ue.a))),ze=a(182),De=a(96),Be=Object(De.a)({palette:{primary:{light:"#9427bc",main:"#67008a",dark:"#470060",contrastText:"#f9f9f9"},secondary:{light:"#6b6868",main:"#424040",dark:"#1c1c1c"}}});var Me=function(e){return r.a.createElement(ze.a,{theme:Be},r.a.createElement(n.Fragment,null,r.a.createElement(c.a,{store:Le},r.a.createElement(ke,null),r.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a.p+"static/media/Banner.51538cf6.mp4"},81:function(e,t,a){e.exports=a.p+"static/media/1.03efc52a.svg"},82:function(e,t,a){e.exports=a.p+"static/media/2.227481d5.svg"},83:function(e,t,a){e.exports=a.p+"static/media/3.89661de3.svg"},84:function(e,t,a){e.exports=a.p+"static/media/Google.c7259fe4.svg"},87:function(e,t,a){e.exports=a.p+"static/media/Outcome.057b522a.svg"},91:function(e,t,a){e.exports=a.p+"static/media/Perfil.bcb09535.mp4"}},[[105,1,2]]]);
//# sourceMappingURL=main.b7e2777b.chunk.js.map