(this["webpackJsonpiambican-v2"]=this["webpackJsonpiambican-v2"]||[]).push([[5],{584:function(e,t,a){},607:function(e,t,a){"use strict";a.r(t);var n=a(81),r=a.n(n),o=a(9),c=a(10),l=a(13),i=a(11),s=a(12),m=a(0),p=a.n(m),u=a(103),f=a.n(u),d=a(21),v=a(25),b=a(79),h=a(7),j=a(29),E=a(125),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"renderLink",value:function(e){var t=this.props.navigation,a=void 0===t?{}:t,n=a&&a[e],r=["portfolio-prev-next__item","portfolio-prev-next__item--"+e];r=[].concat(Object(h.a)(r),n?["portfolio-prev-next__item--has-obj"]:["portfolio-prev-next__item--disabled"]);var o=["fas"];"next"===e&&(o=[].concat(Object(h.a)(o),["fa-arrow-right"])),"prev"===e&&(o=[].concat(Object(h.a)(o),["fa-arrow-left"]));var c="prev"===e?"PREVIOUS PROJECT":"NEXT PROJECT",l=n?"/portfolio/".concat(n.slug,"/"):"/",i=n?n.title:"Lorem ipsum dolor",s="{}"===JSON.stringify(a);return p.a.createElement(j.a,{className:r.join(" "),to:l},p.a.createElement("div",{className:"d-flex align-items-center"},"prev"===e&&p.a.createElement("i",{className:o.join(" ")}),p.a.createElement("div",{className:"text-right d-none d-sm-block"},p.a.createElement("span",{className:"portfolio-prev-next__subtitle text-color--primary"},c),p.a.createElement("h4",{className:"portfolio-prev-next__title font-weight-bold mb-0"},i)),"next"===e&&p.a.createElement("i",{className:o.join(" ")}),s&&p.a.createElement(E.a,null)))}},{key:"render",value:function(){return p.a.createElement("div",{className:"portfolio-prev-next"},p.a.createElement("div",{className:"container-fluid"},p.a.createElement("div",{className:"row align-items-center justify-content-between py-4"},p.a.createElement("div",{className:"col-auto col-sm-4"},this.renderLink("prev")),p.a.createElement("div",{className:"col-auto text-center"},p.a.createElement("ul",{className:"portfolio-prev-next__breadcrumbs justify-content-center mb-0 list-inline"},p.a.createElement("li",{className:"list-inline-item"},p.a.createElement(j.a,{to:"/"},"Home")),p.a.createElement("li",{className:"list-inline-item text-muted active"},"Portfolio")),p.a.createElement(j.a,{to:"/portfolio/",className:"portfolio-prev-next__all font-weight-bold"},p.a.createElement("i",{className:"fas fa-th-large mr-2","aria-label":"view all"}),p.a.createElement("span",null,"VIEW ALL"))),p.a.createElement("div",{className:"col-auto col-sm-4 text-right"},this.renderLink("next")))))}}]),t}(m.Component),N=a(63),O=a.n(N),x=a(169),w=a(55),_=a(22),y=a(95),P=(a(584),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match.params.slug,a=e.getProjects;window.scrollTo(0,0),a({slug:t})}},{key:"componentDidUpdate",value:function(e){if(this.props.location.pathname!==e.location.pathname){var t=this.props,a=t.match.params.slug,n=t.getProjects;return window.scrollTo(0,0),n({slug:a})}}},{key:"shouldComponentUpdate",value:function(e){return this.props.selectedProject!==e.selectedProject}},{key:"render",value:function(){var e=this.props,t=e.selectedProject,a=e.location.pathname,n=t||{},r=t&&Object(y.c)(t,a);return p.a.createElement(p.a.Fragment,null,p.a.createElement(f.a,r),p.a.createElement("div",{id:"content",className:"content content--portfolio content--single"},p.a.createElement(g,n),p.a.createElement(x.a,{posts:[t],isSingle:!0,loading:!t})))}}]),t}(m.Component)),k=Object(b.frontloadConnect)((function(e){var t,a,n;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.match.params.slug,a=e.updateProjects,o.next=3,r.a.awrap(_.d.get("wp/v2/portfolios?slug=".concat(t)).then((function(e){return e.data})));case 3:return n=o.sent,o.abrupt("return",a(n));case 5:case"end":return o.stop()}}))}),{onMount:!0,onUpdate:!1})(P);t.default=Object(d.c)((function(e,t){var a=e.projects,n=t.match.params.slug;return{selectedProject:O()(a,{slug:n})}}),(function(e){return Object(v.b)({getProjects:w.e,updateProjects:w.f},e)}))(k)}}]);
//# sourceMappingURL=portfolio-single.b912e104.chunk.js.map