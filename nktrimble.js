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
                s.removeSubmenu = function(e, t) {
                    e.preventDefault(),
                    e.stopPropagation();
                    var n = Object(d.a)(s.state.subMenuItems);
                    n.splice(t, 1),
                    s.setState({
                        subMenuItems: Object(d.a)(n)
                    })
                }
                ,
                s.toggle = function() {
                    return s.setState({
                        modal: !s.state.modal
                    })
                }
                ,
                s.editSubmenu = function(e, t) {
                    e.preventDefault(),
                    e.stopPropagation();
                    var n = Object(j.a)({}, s.state.subMenuItems[t]);
                    s.setState({
                        modal: !0,
                        editMenu: "subMenuItems",
                        editIndex: t,
                        formData: n
                    })
                }
                ,
                s.editMainMenu = function() {
                    var e = Object(j.a)({}, s.state.mainMenu);
                    s.setState({
                        modal: !0,
                        editMenu: "mainMenu",
                        formData: e
                    })
                }
                ,
                s.onChange = function(e) {
                    s.setState({
                        formData: Object(j.a)(Object(j.a)({}, s.state.formData), {}, Object(l.a)({}, e.target.name, e.target.value))
                    })
                }
                ,
                s.addSubMenu = function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.onCancel(),
                    s.setState({
                        modal: !0,
                        formData: {
                            title: "",
                            icon: "",
                            command: ""
                        }
                    })
                }
                ,
                s.onSave = function() {
                    var e = s.state
                      , t = e.formData
                      , n = e.editMenu
                      , c = e.editIndex
                      , a = void 0 === c ? 0 : c
                      , i = e.subMenuItems
                      , r = void 0 === i ? [] : i;
                    if (t) {
                        if ("mainMenu" === n)
                            s.setState({
                                mainMenu: Object(j.a)({}, t)
                            });
                        else if ("subMenuItems" === n) {
                            if (0 === r.length)
                                return;
                            var o = r.map((function(e, n) {
                                return n === a ? Object(j.a)({}, t) : e
                            }
                            ));
                            s.setState({
                                subMenuItems: Object(d.a)(o)
                            })
                        } else
                            s.setState({
                                subMenuItems: [].concat(Object(d.a)(r), [Object(j.a)({}, t)])
                            });
                        s.onCancel()
                    }
                }
                ,
                s.onCancel = function() {
                    s.setState({
                        modal: !1,
                        editMenu: void 0,
                        formData: void 0,
                        editIndex: void 0
                    })
                }
                ,
                s.updateStatus = function() {
                    var e = s.state.statusMessage
                      , t = void 0 === e ? "" : e;
                    s.API && s.API.extension.setStatusMessage(t)
                }
                ,
                s.getProjectDetails = function() {
                    s.API && s.API.project.getCurrentProject().then((function(e) {
                        return s.setState({
                            projectInfo: e
                        })
                    }
                    ))
                }
                ,
                s.getUserSettings = function() {
                    s.API && s.API.user.getUserSettings().then((function(e) {
                        return s.setState({
                            userSettings: e
                        })
                    }
                    ))
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
                s.goTo = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "settings-extensions";
                    s.API && s.API.extension.goTo(e)
                }
                ,
                s.state = {
                    mainMenu: {
                        title: "Test React app",
                        icon: "https://components.stage.connect.trimble.com/trimble-connect-project-workspace-api/logo192.png",
                        command: "main_nav_menu_cliked"
                    },
                    subMenuItems: [{
                        title: "Sub menu 1",
                        icon: "https://components.stage.connect.trimble.com/trimble-connect-project-workspace-api/logo192.png",
                        command: "submenu_1_clicked"
                    }, {
                        title: "Sub menu 2",
                        icon: "https://components.stage.connect.trimble.com/trimble-connect-project-workspace-api/logo192.png",
                        command: "submenu_2_clicked"
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
            }, {
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
                    return Object(U.jsxs)(O.a, {
                        children: [Object(U.jsxs)(p.a, {
                            className: "section",
                            children: [l && Object(U.jsx)(g.a, {
                                md: "12",
                                children: Object(U.jsx)(f.a, {
                                    color: "success",
                                    isOpen: !!l,
                                    toggle: function() {
                                        return e.setState({
                                            alertMessage: void 0
                                        })
                                    },
                                    fade: !1,
                                    children: l
                                })
                            }), Object(U.jsxs)(g.a, {
                                md: "12",
                                children: [Object(U.jsxs)("h3", {
                                    children: ["Example: ", Object(U.jsx)("i", {
                                        children: "ui.setMenu"
                                    }), " & ", Object(U.jsx)("i", {
                                        children: "ui.setActiveMenuItem"
                                    })]
                                }), Object(U.jsxs)("p", {
                                    children: ["Dynamically manage the submenu items. (", Object(U.jsx)("strong", {
                                        children: "Menu Title"
                                    }), ":", Object(U.jsx)("i", {
                                        children: "command"
                                    }), ")", " ", Object(U.jsx)(v.a, {
                                        color: "primary",
                                        size: "sm",
                                        style: {
                                            marginLeft: "2rem"
                                        },
                                        onClick: this.addSubMenu,
                                        children: "Add sub-menu"
                                    })]
                                })]
                            }), Object(U.jsx)(g.a, {
                                md: "12",
                                children: Object(U.jsxs)(M.a, {
                                    children: [Object(U.jsxs)(y.a, {
                                        tag: "div",
                                        className: "menu-item",
                                        children: [Object(U.jsxs)("div", {
                                            children: [n.icon && Object(U.jsx)("img", {
                                                src: n.icon,
                                                className: "sml-img",
                                                alt: ""
                                            }), Object(U.jsx)("strong", {
                                                children: n.title
                                            }), ":", Object(U.jsx)("i", {
                                                children: n.command
                                            }), Object(U.jsx)(v.a, {
                                                color: "info",
                                                size: "sm",
                                                style: {
                                                    marginLeft: "2rem"
                                                },
                                                onClick: this.editMainMenu,
                                                children: "Edit"
                                            })]
                                        }), Object(U.jsx)("div", {
                                            children: "Main-menu"
                                        })]
                                    }), c.map((function(t, n) {
                                        return Object(U.jsxs)(y.a, {
                                            tag: "a",
                                            href: "#",
                                            className: "menu-item submenu",
                                            active: a && a === t.command,
                                            onClick: function(n) {
                                                return e.setActiveCommand(n, t.command)
                                            },
                                            children: [Object(U.jsxs)("div", {
                                                children: [t.icon && Object(U.jsx)("img", {
                                                    src: t.icon,
                                                    className: "sml-img",
                                                    alt: ""
                                                }), Object(U.jsx)("strong", {
                                                    children: t.title
                                                }), ":", Object(U.jsx)("i", {
                                                    children: t.command
                                                }), " ", Object(U.jsx)(v.a, {
                                                    color: "info",
                                                    size: "sm",
                                                    style: {
                                                        marginLeft: "2rem"
                                                    },
                                                    onClick: function(t) {
                                                        return e.editSubmenu(t, n)
                                                    },
                                                    children: "Edit"
                                                }), Object(U.jsx)(v.a, {
                                                    color: "danger",
                                                    size: "sm",
                                                    style: {
                                                        marginLeft: "2rem"
                                                    },
                                                    onClick: function(t) {
                                                        return e.removeSubmenu(t, n)
                                                    },
                                                    children: "Remove"
                                                })]
                                            }), Object(U.jsx)("div", {
                                                children: "Sub-menu"
                                            })]
                                        }, t.command)
                                    }
                                    ))]
                                })
                            })]
                        }), Object(U.jsx)(p.a, {
                            children: Object(U.jsxs)(g.a, {
                                md: "12",
                                children: [Object(U.jsxs)("h3", {
                                    children: ["Example: ", Object(U.jsx)("i", {
                                        children: "ui.setActiveMenuItem"
                                    }), " with query param support"]
                                }), Object(U.jsxs)("p", {
                                    children: ["ui.setActiveMenuItem will be triggered with the following query param.", " "]
                                }), Object(U.jsxs)("p", {
                                    children: [!this.state.editParams && Object(U.jsxs)(U.Fragment, {
                                        children: [Object(U.jsx)(v.a, {
                                            outline: !0,
                                            color: "primary",
                                            size: "sm",
                                            className: "mx-2",
                                            children: this.state.queryParams
                                        }), Object(U.jsx)(v.a, {
                                            outline: !0,
                                            color: "info",
                                            size: "sm",
                                            onClick: function() {
                                                return e.setState({
                                                    editParams: !0
                                                })
                                            },
                                            children: "edit"
                                        })]
                                    }), " ", this.state.editParams && Object(U.jsx)(S.a, {
                                        value: this.state.queryParams,
                                        onChange: function(t) {
                                            e.setState({
                                                queryParams: t.target.value
                                            })
                                        },
                                        onBlur: function() {
                                            return e.setState({
                                                editParams: !1
                                            })
                                        }
                                    })]
                                }), Object(U.jsx)("p", {
                                    children: this.state.subMenuItems.map((function(t) {
                                        return Object(U.jsx)(v.a, {
                                            color: "primary",
                                            onClick: function() {
                                                return e.setState({
                                                    activeCommand: t.command + e.state.queryParams
                                                })
                                            },
                                            className: "mx-2",
                                            children: t.title
                                        }, t.command + "_query")
                                    }
                                    ))
                                })]
                            })
                        }), Object(U.jsxs)(p.a, {
                            className: "section",
                            children: [Object(U.jsxs)(g.a, {
                                md: "12",
                                children: [Object(U.jsxs)("h3", {
                                    children: ["Example: ", Object(U.jsx)("i", {
                                        children: "extension.setStatusMessage"
                                    })]
                                }), Object(U.jsx)("p", {
                                    children: "Dynamically update the extension status message."
                                })]
                            }), Object(U.jsx)(g.a, {
                                md: "12",
                                children: Object(U.jsxs)(k.a, {
                                    children: [Object(U.jsx)(S.a, {
                                        onChange: function(t) {
                                            return e.setState({
                                                statusMessage: t.target.value
                                            })
                                        },
                                        value: d
                                    }), Object(U.jsx)(C.a, {
                                        addonType: "append",
                                        children: Object(U.jsx)(v.a, {
                                            color: "primary",
                                            onClick: this.updateStatus,
                                            children: "Update"
                                        })
                                    })]
                                })
                            })]
                        }), Object(U.jsxs)(p.a, {
                            className: "section",
                            children: [Object(U.jsxs)(g.a, {
                                md: "12",
                                children: [Object(U.jsxs)("h3", {
                                    children: ["Example: ", Object(U.jsx)("i", {
                                        children: "project.getCurrentProject"
                                    })]
                                }), Object(U.jsxs)("p", {
                                    children: ["Get the current project details.", " ", Object(U.jsx)(v.a, {
                                        color: "primary",
                                        size: "sm",
                                        style: {
                                            marginLeft: "2rem"
                                        },
                                        onClick: this.getProjectDetails,
                                        children: "Get Project"
                                    })]
                                })]
                            }), Object(U.jsx)(g.a, {
                                md: "12",
                                children: Object(U.jsx)(L.a, {
                                    src: h
                                })
                            })]
                        }), Object(U.jsxs)(p.a, {
                            className: "section",
                            children: [Object(U.jsxs)(g.a, {
                                md: "12",
                                children: [Object(U.jsxs)("h3", {
                                    children: ["Example: ", Object(U.jsx)("i", {
                                        children: "user.getUserSettings"
                                    })]
                                }), Object(U.jsxs)("p", {
                                    children: ["Get the current user settings details.", " ", Object(U.jsx)(v.a, {
                                        color: "primary",
                                        size: "sm",
                                        style: {
                                            marginLeft: "2rem"
                                        },
                                        onClick: this.getUserSettings,
                                        children: "Get User Settings"
                                    })]
                                })]
                            }), Object(U.jsx)(g.a, {
                                md: "12",
                                children: Object(U.jsx)(I.a, {
                                    children: Object.keys(x).map((function(e) {
                                        var t = x[e];
                                        return Object(U.jsxs)(P.a, {
                                            row: !0,
                                            style: {
                                                marginBottom: "1rem"
                                            },
                                            children: [Object(U.jsx)(A.a, {
                                                for: e,
                                                sm: 2,
                                                className: "capz",
                                                children: e
                                            }), Object(U.jsx)(g.a, {
                                                sm: 10,
                                                children: Object(U.jsx)(S.a, {
                                                    type: "text",
                                                    name: e,
                                                    id: e,
                                                    value: t,
                                                    readOnly: !0
                                                })
                                            })]
                                        }, e)
                                    }
                                    ))
                                })
                            })]
                        }), Object(U.jsxs)(p.a, {
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
                        }), Object(U.jsx)(p.a, {
                            className: "section",
                            children: Object(U.jsxs)(g.a, {
                                md: "12",
                                children: [Object(U.jsxs)("h3", {
                                    children: ["Example: ", Object(U.jsx)("i", {
                                        children: "extension.goTo"
                                    })]
                                }), Object(U.jsxs)("p", {
                                    children: ["Go to a specific route/page.", " ", Object(U.jsx)(v.a, {
                                        color: "primary",
                                        size: "sm",
                                        style: {
                                            marginLeft: "2rem"
                                        },
                                        onClick: function() {
                                            return e.goTo()
                                        },
                                        children: "Click here"
                                    })]
                                }), Object(U.jsxs)("p", {
                                    children: ["Go to the project settings page.", " ", Object(U.jsx)(v.a, {
                                        color: "primary",
                                        size: "sm",
                                        style: {
                                            marginLeft: "2rem"
                                        },
                                        onClick: function() {
                                            return e.goTo("settings-details")
                                        },
                                        children: "Click here"
                                    })]
                                })]
                            })
                        }), Object(U.jsxs)(T.a, {
                            isOpen: r,
                            toggle: this.toggle,
                            children: [Object(U.jsx)("div", {
                                className: "modal-header",
                                children: Object(U.jsx)("h5", {
                                    className: "modal-title",
                                    children: "Modal title"
                                })
                            }), Object(U.jsx)(w.a, {
                                children: Object(U.jsx)(I.a, {
                                    children: Object.keys(m).map((function(t) {
                                        var n = m[t];
                                        return Object(U.jsxs)(P.a, {
                                            row: !0,
                                            style: {
                                                marginBottom: "1rem"
                                            },
                                            children: [Object(U.jsx)(A.a, {
                                                for: t,
                                                sm: 2,
                                                className: "capz",
                                                children: t
                                            }), Object(U.jsx)(g.a, {
                                                sm: 10,
                                                children: Object(U.jsx)(S.a, {
                                                    type: "text",
                                                    name: t,
                                                    id: t,
                                                    placeholder: "Enter ".concat(t),
                                                    value: n,
                                                    onChange: e.onChange
                                                })
                                            })]
                                        }, t)
                                    }
                                    ))
                                })
                            }), Object(U.jsxs)(D.a, {
                                children: [Object(U.jsx)(v.a, {
                                    color: "primary",
                                    onClick: this.onSave,
                                    children: "Submit"
                                }), " ", Object(U.jsx)(v.a, {
                                    color: "secondary",
                                    onClick: this.onCancel,
                                    children: "Cancel"
                                })]
                            })]
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


// Render the app
ReactDOM.render(<MyApp />, document.getElementById("root"));
</script>
