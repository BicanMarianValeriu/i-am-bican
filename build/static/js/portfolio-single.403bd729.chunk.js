(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{514:function(e,t,n){},543:function(e,t,n){"use strict";n.r(t);var a=n(106),r=n.n(a),o=n(144),c=n(23),i=n(24),l=n(27),s=n(25),m=n(26),p=n(0),u=n.n(p),d=n(80),f=n.n(d),v=n(19),h=n(20),b=n(81),E=n(142),j=n.n(E),g=n(42),w=n(76),x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderLink",value:function(e){var t=this.props.current,n=void 0===t?{}:t,a=n.prev_next,r=void 0===a?{}:a,o=r&&r[e],c=["portfolio-prev-next__item","portfolio-prev-next__item--"+e];o?c.push(["portfolio-prev-next__item--has-obj"]):c.push(["portfolio-prev-next__item--disabled"]);var i=["fas"];"next"===e&&i.push(["fa-arrow-right"]),"prev"===e&&i.push(["fa-arrow-left"]);var l="prev"===e?"PREVIOUS PROJECT":"NEXT PROJECT",s=o?"/portfolio/".concat(o.slug):"/",m=o?o.title:"Lorem ipsum dolor",p="{}"===JSON.stringify(n);return u.a.createElement(g.a,{className:c.join(" "),to:s},u.a.createElement("div",{className:"d-flex align-items-center"},"prev"===e&&u.a.createElement("i",{className:i.join(" ")}),u.a.createElement("div",{className:"text-right d-none d-sm-block"},u.a.createElement("span",{className:"portfolio-prev-next__subtitle text-color--primary"},l),u.a.createElement("h4",{className:"portfolio-prev-next__title font-weight-bold mb-0"},m)),"next"===e&&u.a.createElement("i",{className:i.join(" ")}),p&&u.a.createElement(w.a,null)))}},{key:"render",value:function(){return u.a.createElement("div",{className:"portfolio-prev-next"},u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"row align-items-center justify-content-between py-4"},u.a.createElement("div",{className:"col-auto col-sm-4"},this.renderLink("prev")),u.a.createElement("div",{className:"col-auto text-center"},u.a.createElement("ul",{className:"portfolio-prev-next__breadcrumbs justify-content-center mb-0 list-inline"},u.a.createElement("li",{className:"list-inline-item"},u.a.createElement(g.a,{to:"/"},"Home")),u.a.createElement("li",{className:"list-inline-item text-muted active"},"Portfolio")),u.a.createElement(g.a,{to:"/portfolio",className:"portfolio-prev-next__all font-weight-bold"},u.a.createElement("i",{className:"fas fa-th-large mr-2","aria-label":"view all"}),u.a.createElement("span",null,"VIEW ALL"))),u.a.createElement("div",{className:"col-auto col-sm-4 text-right"},this.renderLink("next")))))}}]),t}(p.Component),N=n(488),_=n(49),O=n(14),y=(n(514),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(e){if(this.props.location.pathname!==e.location.pathname){var t=this.props,n=t.match.params.slug,a=t.getProjects;return window.scrollTo(0,0),a({slug:n})}}},{key:"shouldComponentUpdate",value:function(e){return this.props.selectedProject!==e.selectedProject}},{key:"render",value:function(){var e=this.props,t=e.selectedProject,n=e.location.pathname,a={title:t&&t.yoast_meta.title||t&&t.title.rendered,description:t&&t.yoast_meta.description,canonical:"https://www.iambican.com"+n};return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{title:a.title,meta:[{name:"theme-color",content:"#fbfbfb"},a.description?{name:"description",content:a.description}:{}],link:[a.canonical?{rel:"canonical",href:a.canonical}:{}]}),u.a.createElement("div",{id:"content",className:"content content--portfolio content--single"},u.a.createElement(x,{current:t}),u.a.createElement(N.a,{posts:[t],isSingle:!0,loading:!t})))}}]),t}(p.Component)),k=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.match.params.slug,a=t.updateProjects,e.next=3,O.d.get("wp/v2/portfolios?slug=".concat(n)).then(function(e){return e.data});case 3:return o=e.sent,e.abrupt("return",a(o));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=Object(v.c)(function(e,t){var n=e.projects,a=e.ui.pending,r=t.match.params.slug;return{selectedProject:j()(n,{slug:r}),pending:a}},function(e){return Object(h.b)({getProjects:_.e,updateProjects:_.f},e)})(Object(b.frontloadConnect)(k,{onMount:!0,onUpdate:!1})(y))}}]);
//# sourceMappingURL=portfolio-single.403bd729.chunk.js.map