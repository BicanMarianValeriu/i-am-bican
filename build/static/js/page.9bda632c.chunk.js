(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{488:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=n(0),c=n.n(r);t.a=function(e){var t=a({},e).pageTitle;return c.a.createElement("section",{className:"page-intro"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"page-intro__headline"},t||"Lorem ipsum dolor sit")))))}},548:function(e,t,n){"use strict";n.r(t);var a=n(106),r=n.n(a),c=n(144),o=n(23),s=n(24),i=n(27),l=n(25),u=n(26),p=n(0),d=n.n(p),m=n(20),g=n(19),f=n(82),v=n(81),h=n.n(v),b=n(142),w=n.n(b),O=n(488),j=n(491),y=n(15),E=n(54),P=n(489),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(e){if(e.location.pathname!==this.props.location.pathname){var t=this.props,n=t.match.params.slug,a=t.getPage;return window.scrollTo(0,0),a({slug:n})}}},{key:"shouldComponentUpdate",value:function(e){return this.props.selectedPage!==e.selectedPage}},{key:"render",value:function(){var e=this.props,t=e.selectedPage,n=e.location.pathname,a=t||{},r=a.title,c=(r=void 0===r?{}:r).rendered,o=void 0===c?"":c;return d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,Object(P.c)(a,n)),d.a.createElement("div",{id:"content",className:"content content--page content--single"},d.a.createElement(O.a,{pageTitle:o}),d.a.createElement("div",{className:"container"},d.a.createElement(j.a,{posts:[t],className:"py-3 py-md-5",isSingle:!0,loading:!t}))))}}]),t}(p.Component),k=function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.match.params.slug,a=t.updatePages,e.next=3,y.d.get("wp/v2/pages?slug=".concat(n)).then(function(e){return e.data[0]});case 3:return c=e.sent,e.abrupt("return",a(c));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=Object(g.c)(function(e,t){var n=e.pages,a=e.ui.pending,r=t.match.params.slug;return{selectedPage:w()(n,{slug:r}),pending:a}},function(e){return Object(m.b)({getPage:E.e,updatePages:E.f},e)})(Object(f.frontloadConnect)(k,{onMount:!0,onUpdate:!1})(N))}}]);
//# sourceMappingURL=page.9bda632c.chunk.js.map