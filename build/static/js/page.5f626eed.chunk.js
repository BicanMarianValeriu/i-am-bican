(this["webpackJsonpiambican-v2"]=this["webpackJsonpiambican-v2"]||[]).push([[4],{606:function(e,t,n){"use strict";n.r(t);var a=n(77),c=n.n(a),r=n(105),o=n(11),s=n(12),i=n(14),u=n(13),l=n(0),p=n.n(l),m=n(25),d=n(22),g=n(76),h=n(104),f=n(59),v=n.n(f),b=n(174),j=n(65),O=n(95),w=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(e){if(e.location.pathname!==this.props.location.pathname){var t=this.props,n=t.match.params.slug,a=t.getPage;return window.scrollTo(0,0),a(n)}}},{key:"shouldComponentUpdate",value:function(e){return e.selectedPage!==this.props.selectedPage}},{key:"render",value:function(){var e=this.props,t=e.selectedPage,n=e.location.pathname,a=(t||{}).title,c=(a=void 0===a?{}:a).rendered,r=t&&Object(O.c)(t,n);return p.a.createElement(l.Fragment,null,p.a.createElement(h.a,r),p.a.createElement("div",{id:"content",className:"content content--page content--single"},p.a.createElement(b.c,{title:c}),p.a.createElement("div",{className:"container"},p.a.createElement(b.a,{posts:[t],className:"py-3 py-md-5",isSingle:!0,loading:!t}))))}}]),n}(l.Component),y=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.match.params.slug,a=t.getPage,e.next=3,a(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(g.frontloadConnect)(y,{onMount:!0,onUpdate:!1})(w);t.default=Object(d.c)((function(e,t){var n=e.pages,a=t.match.params.slug;return{selectedPage:v()(n,{slug:a})}}),(function(e){return Object(m.b)({getPage:j.e},e)}))(k)}}]);
//# sourceMappingURL=page.5f626eed.chunk.js.map