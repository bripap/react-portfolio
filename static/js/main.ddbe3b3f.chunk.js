(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/cover-image.402a471b.jpg"},function(e,a,t){e.exports=t.p+"static/media/profile-photo.c9b5ef52.jpg"},function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){var n={"./coding-quiz.png":15,"./day-planner.png":16,"./food-tracker.png":17,"./tech-blog.png":18,"./tech-takeout.png":19,"./weather-dashboard.png":20};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=14},function(e,a,t){e.exports=t.p+"static/media/coding-quiz.cc02215d.png"},function(e,a,t){e.exports=t.p+"static/media/day-planner.a370e159.png"},function(e,a,t){e.exports=t.p+"static/media/food-tracker.5f056ead.png"},function(e,a,t){e.exports=t.p+"static/media/tech-blog.2fa0cef0.png"},function(e,a,t){e.exports=t.p+"static/media/tech-takeout.3e482bb6.png"},function(e,a,t){e.exports=t.p+"static/media/weather-dashboard.b647559f.png"},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),i=(t(13),t(1)),o=t(6),m=t.n(o);var s=function(e){return r.a.createElement("header",{className:"flex-row space-between px-1"},r.a.createElement("h1",null,"Brianna Pappas"),r.a.createElement("img",{src:m.a,alt:"wooden background"}),e.children)};function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var d=function(e){var a=e.pages,t=void 0===a?[]:a,l=e.setCurrentPage,c=e.currentPage;return Object(n.useEffect)((function(){document.title=u(c.name)}),[c]),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},t.map((function(e){return r.a.createElement("li",{className:"mx-5 ".concat(c.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){return l(e)}},u(e.name)))}))))},f=function(e){return r.a.createElement("div",null,e.children)},h=t(7),E=t.n(h);var g=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("div",{className:"my-5"},r.a.createElement("img",{className:"profile-img",src:E.a,alt:"Brianna Pappas profile"})),r.a.createElement("p",null,"Hi! I'm Brianna Pappas. I am a Roger Williams University Bachelor's Degree graduate and experienced Contract Specialist with a demonstrated history of working in the Information Technology and Services industry."),r.a.createElement("p",null,"Additionally, I am a current student of the UNH Coding Bootcamp where I will receive a certificate in Full Stack Web Development with skills in HTML, CSS, Javascript, React, SQL and more. I am eager to join a web development team where I can share these skills and also contribute my real life and corporate experience.")))};var b=function(e){var a=e.project,n=a.name,l=a.repo,c=a.link,i=a.description;return r.a.createElement("div",{className:"project",key:n},r.a.createElement("img",{src:t(14)("./".concat(n,".png")),alt:p(n),className:"project-bg"}),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,r.a.createElement("a",{href:c},p(n))," ",r.a.createElement("a",{href:l},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,i)))};var v=function(){var e=Object(n.useState)([{name:"tech-takeout",description:"express.js/node.js/passport.js/sequalize/mySQL/bcrypt/express-handlebars/express-sessions",link:"https://tech-takeout.herokuapp.com/",repo:"https://github.com/kathrynneal221/Project2_TechTakeout"},{name:"food-tracker",description:"APIs/Materialize/HTML/CSS/Javascript/JQuery",link:"https://bripap.github.io/food-tracker/",repo:"https://github.com/bripap/food-tracker"},{name:"coding-quiz",description:"Javascript Coding Quiz",link:"https://bripap.github.io/coding-quiz/",repo:"https://github.com/bripap/coding-quiz"},{name:"day-planner",description:"Node.js",link:"https://bripap.github.io/daily-planner/",repo:"https://github.com/bripap/daily-planner"},{name:"tech-blog",description:"handlebars.js/Sequalize,express-session",link:"https://polar-chamber-71511.herokuapp.com/",repo:"https://github.com/bripap/14-MVC-Tech-Blog"},{name:"weather-dashboard",description:"HTML/CSS/API",link:"https://bripap.github.io/weather_dashboard/",repo:"https://github.com/bripap/weather_dashboard"}]),a=Object(i.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},a.map((function(e,a){return r.a.createElement(b,{project:e,key:"project"+a})}))))},k=t(2),w=t(3);var y=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),m=o[0],s=o[1],u=t.name,p=t.email,d=t.message,f=function(e){if("email"===e.target.name){var a=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);s(a?"":"Your email is invalid.")}else e.target.value.length?s(""):s("".concat(e.target.name," is required."));m||(l(Object(w.a)(Object(w.a)({},t),{},Object(k.a)({},e.target.name,e.target.value))),console.log("Handle Form",t))};return r.a.createElement("section",null,r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),m||console.log("Submit Form",t)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:u,onBlur:f})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:p,onBlur:f})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:d,onBlur:f})),m&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},m)),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("p",null,"Please submit form or contact me at:"),r.a.createElement("p",null,"email: bpappas302@gmail.com"),r.a.createElement("p",null,"phone: 603.660.1054"))};var j=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"Download my ",r.a.createElement("a",{href:"https://www.linkedin.com/in/brianna-pappas-66a7b920/overlay/1635482671591/single-media-viewer/",target:"_blank"},"resume")),r.a.createElement("h3",null,"Front-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"responsive design"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Bootstrap")),r.a.createElement("h3",null,"Back-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"APIs"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"MySQL, Sequelize"),r.a.createElement("li",null,"MongoDB, Mongoose"),r.a.createElement("li",null,"REST"),r.a.createElement("li",null,"GraphQL"))))};var x=function(e){var a=e.currentPage;return r.a.createElement("section",null,r.a.createElement("h2",null,u(a.name)),r.a.createElement(f,null,function(){switch(a.name){case"about me":return r.a.createElement(g,null);case"portfolio":return r.a.createElement(v,null);case"contact":return r.a.createElement(y,null);case"resume":return r.a.createElement(j,null);default:return r.a.createElement(g,null)}}()))};var S=function(){return r.a.createElement("footer",{className:"flex-row px-1"},[{name:"fab fa-github",link:"https://github.com/bripap"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/brianna-pappas-66a7b920/"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/users/16209532/bri-pappas"}].map((function(e){return r.a.createElement("a",{href:e.link,key:e.name,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.name}))})))};var N=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),a=Object(i.a)(e,1)[0],t=Object(n.useState)(a[0]),l=Object(i.a)(t,2),c=l[0],o=l[1];return r.a.createElement("div",null,r.a.createElement(s,null,r.a.createElement(d,{pages:a,setCurrentPage:o,currentPage:c})),r.a.createElement("main",null,r.a.createElement(x,{currentPage:c})),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ddbe3b3f.chunk.js.map