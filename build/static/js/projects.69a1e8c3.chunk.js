(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    220: function(t, e, n) {
      "use strict";
      n.r(e);
      var r = n(5),
        c = n(6),
        o = n(8),
        a = n(7),
        s = n(9),
        i = n(16),
        p = n.n(i),
        u = n(29),
        f = n(1),
        l = n.n(f),
        b = n(56),
        d = n(84),
        h = n(4),
        w = n(21),
        j = n(22),
        O = n(33),
        m = (function() {
          var t = Object(u.a)(
            p.a.mark(function t(e) {
              return p.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          e.fetchDispatcher(
                            "wp/v2/portfolio",
                            { per_page: 10 },
                            { success: h.e }
                          )
                        );
                      case 2:
                        return t.abrupt("return", t.sent);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })(),
        v = (function(t) {
          function e() {
            return (
              Object(r.a)(this, e),
              Object(o.a)(this, Object(a.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(e, t),
            Object(c.a)(e, [
              {
                key: "componentDidUpdate",
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { id: "content", className: "content" },
                    l.a.createElement(b.a, { pageTitle: "Portfolio" }),
                    l.a.createElement(d.a, { posts: this.props.posts })
                  );
                }
              }
            ]),
            e
          );
        })(f.Component);
      e.default = Object(w.connect)(
        function(t) {
          return { posts: t.api.posts };
        },
        function(t) {
          return Object(j.b)({ fetchDispatcher: h.j }, t);
        }
      )(Object(O.frontloadConnect)(m, { onMount: !0, onUpdate: !1 })(v));
    }
  }
]);
//# sourceMappingURL=projects.69a1e8c3.chunk.js.map
