(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(13),a(1));a(15),a(16);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},"About")))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable dark mode"),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.togmode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable blue mode")))))}function m(e){var t=Object(n.useState)("Enter text here"),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"box",className:"form-label"},e.titlehead),l.a.createElement("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#00001a":"white",color:"dark"===e.mode?"white":"black"},id:"mybox",rows:"5"}),"'",l.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var t=c.toUpperCase();r(t),e.showAlert("Uppercase","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var t=c.toLowerCase();r(t),e.showAlert("Lowercase","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){r(""),e.showAlert("Reset","success")}},"Reset")),l.a.createElement("div",{className:"container my-3 ",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,c.split(" ").length," words and ",c.length," character"),l.a.createElement("p",null,"time required to read the text",.008*c.split(" ").length,"miniutes"),l.a.createElement("p",null,"Preview",c.length>0?c:"Enter any text to preview it here"))))}function i(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.ty," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.ty)),":   ",e.alert.msg,l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))}var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),u=Object(o.a)(r,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,ty:t}),setTimeout(function(){b(null)},32e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TexTer",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#00001a",h("Darkmode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",h("Lightmode has been enabled","success"))},togmode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#005ea6",h("bluemode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",h("Lightmode has been enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("br",null),l.a.createElement("div",{className:"container my-3"},l.a.createElement("div",{className:"container"},l.a.createElement(m,{titlehead:"Enter text ",mode:a,showAlert:h}))))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,20)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(18)}},[[4,3,2]]]);
//# sourceMappingURL=main.23212dc9.chunk.js.map