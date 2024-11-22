(this["webpackJsonpmy-test-app"] = this["webpackJsonpmy-test-app"] || []).push([[0], {
    38: function(e, t, n) {},
    52: function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n(3)
          , c = n.n(s)
          , a = n(13)
          , i = n.n(a)
          , r = (n(38),
        n(8))
          , o = n.n(r)
          , m = n(15)
          , l = n(19)
          , j = n(9)
          , d = n(12)
          , u = n(17)
          , h = n(18)
          , b = n(33)
          , x = n(32)
          , O = n(54)
          , p = n(55)
          , g = n(56)
          , f = n(57)
          , v = n(58)
          , M = n(59)
          , y = n(60)
          , S = n(61)
          , k = n(62)
          , C = n(68)
          , I = n(63)
          , P = n(64)
          , A = n(65)
          , T = n(69)
          , w = n(66)
          , D = n(67)
          , N = n(22)
          , z = n.n(N)
          , E = n(30)
          , L = n.n(E)
          , q = n(31)
          , U = n(1);
        function _() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }
        var G = function(e) {
            Object(b.a)(n, e);
            var t = Object(x.a)(n);
            function n(e) {
                var s;
                return Object(u.a)(this, n),
                (s = t.call(this, e)).setActiveCommand = function(e, t) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.setState({
                        activeCommand: t
                    })
                }
                ,
                 s.getAccessToken = function() {
                    s.API && s.API.extension.getPermission("accesstoken").then((function(e) {
                        return s.setState({
                            accessToken: e
                        })
                    }
                    ))
                }
                ,
                s.state = {
                    mainMenu: {
                        title: "Export to Excel",
                        icon: "https://components.stage.connect.trimble.com/trimble-connect-project-workspace-api/logo192.png",
                        command: "main_nav_menu_cliked"
                    },
                    subMenuItems: [{
                        title: "Export",
                        icon: "https://components.stage.connect.trimble.com/trimble-connect-project-workspace-api/logo192.png",
                        command: "submenu_1_clicked"
                    }],
                    queryParams: "?taskId=16&navigate=true",
                    editParams: !1
                },
                s
            }
            return Object(h.a)(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = Object(m.a)(o.a.mark((function e() {
                        var t, n, s, c, a = this;
                        return o.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.state,
                                    n = t.mainMenu,
                                    s = t.subMenuItems,
                                    c = void 0 === s ? [] : s,
                                    !_()) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 4,
                                    q.a(window.parent, (function(e, t) {
                                        switch (e) {
                                        case "extension.command":
                                            a.setState({
                                                alertMessage: "Command executed by the user {command:".concat(t.data, "}")
                                            });
                                            break;
                                        case "extension.accessToken":
                                            a.setState({
                                                accessToken: t.data
                                            });
                                            break;
                                        case "extension.userSettingsChanged":
                                            a.setState({
                                                alertMessage: "User settings changed!"
                                            }),
                                            a.getUserSettings()
                                        }
                                    }
                                    ), 3e4);
                                case 4:
                                    this.API = e.sent,
                                    this.API.ui.setMenu(Object(j.a)(Object(j.a)({}, n), {}, {
                                        subMenus: Object(d.a)(c)
                                    })).then();
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    if (!z()(this.state.subMenuItems, t.subMenuItems) || !z()(this.state.mainMenu, t.mainMenu)) {
                        var n = this.state
                          , s = n.mainMenu
                          , c = n.subMenuItems
                          , a = void 0 === c ? [] : c;
                        if (!s)
                            return;
                        var i = Object(j.a)(Object(j.a)({}, s), {}, {
                            subMenus: Object(d.a)(a)
                        });
                        this.API && this.API.ui.setMenu(i)
                    }
                    if (this.state.activeCommand !== t.activeCommand) {
                        if (!this.state.activeCommand)
                            return;
                        this.API && this.API.ui.setActiveMenuItem(this.state.activeCommand)
                    }
                }
            },{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state
                      , n = t.mainMenu
                      , s = t.subMenuItems
                      , c = void 0 === s ? [] : s
                      , a = t.activeCommand
                      , i = t.modal
                      , r = void 0 !== i && i
                      , o = t.formData
                      , m = void 0 === o ? {} : o
                      , l = t.alertMessage
                      , j = t.statusMessage
                      , d = void 0 === j ? "" : j
                      , u = t.projectInfo
                      , h = void 0 === u ? {} : u
                      , b = t.userSettings
                      , x = void 0 === b ? {} : b
                      , N = t.accessToken
                      , z = void 0 === N ? "" : N;
                    return  Object(U.jsxs)(p.a, {
                        className: "section",
                        children: [Object(U.jsxs)(g.a, {
                            md: "12",
                            children: [Object(U.jsxs)("h3", {
                                children: ["Example: ", Object(U.jsx)("i", {
                                    children: "extension.getPermission"
                                })]
                            }), Object(U.jsxs)("p", {
                                children: ["Request the accessToken.", " ", Object(U.jsx)(v.a, {
                                    color: "primary",
                                    size: "sm",
                                    style: {
                                        marginLeft: "2rem"
                                    },
                                    onClick: this.getAccessToken,
                                    children: "Get accessToken"
                                })]
                            })]
                        }), Object(U.jsx)(g.a, {
                            md: "12",
                            children: Object(U.jsx)(I.a, {
                                children: Object(U.jsxs)(P.a, {
                                    row: !0,
                                    style: {
                                        marginBottom: "1rem"
                                    },
                                    children: [Object(U.jsx)(A.a, {
                                        for: "accessToken",
                                        sm: 2,
                                        className: "capz",
                                        children: "AccessToken"
                                    }), Object(U.jsx)(g.a, {
                                        sm: 10,
                                        children: Object(U.jsx)(S.a, {
                                            type: "text",
                                            name: "accessToken",
                                            id: "accessToken",
                                            value: z,
                                            readOnly: !0
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                }
            }]),
            n
        }(c.a.Component)
          , B = function(e) {
            e && e instanceof Function && n.e(3).then(n.bind(null, 70)).then((function(t) {
                var n = t.getCLS
                  , s = t.getFID
                  , c = t.getFCP
                  , a = t.getLCP
                  , i = t.getTTFB;
                n(e),
                s(e),
                c(e),
                a(e),
                i(e)
            }
            ))
        };
        n(51);
        i.a.render(Object(U.jsx)(c.a.StrictMode, {
            children: Object(U.jsx)(G, {})
        }), document.getElementById("root")),
        B()
    }
}, [[52, 1, 2]]]);
//# sourceMappingURL=main.4e71e8da.chunk.js.map    
