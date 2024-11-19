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
                        title: "Create excel",
                        icon: "https://components.stage.connect.trimble.com/trimble-connect-project-workspace-api/logo192.png",
                        command: "main_nav_menu_cliked"
                    },
                    subMenuItems: [{
                        title: "Export to excel",
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
       
        n(51);
        i.a.render(Object(U.jsx)(c.a.StrictMode, {
            children: Object(U.jsx)(G, {})
        }), document.getElementById("root")),
        B()
    }
}, [[52, 1, 2]]]);

          setActiveCommand = async function(e, command) {
               e.preventDefault();
               e.stopPropagation();
               this.setState({ activeCommand: command });

               if (command === "submenu_1_cliked") {
                   alert("hi");
                  try {
                      const pdfLinks = await this.getPDFLinks(); // Fetch PDF links
                      if (pdfLinks.length > 0) {
                          this.exportToExcel(pdfLinks); // Export to Excel
                      } else {
                           alert("No PDFs found on the page!");
                      }
                  } catch (err) {
                     console.error("Error fetching PDFs or exporting to Excel:", err);
                 }
               }
            };
           getPDFLinks = async function() {
                const pdfLinks = [];
                // Replace with Trimble Connect API call if available
                const anchors = document.querySelectorAll('a[href$=".pdf"]');
                anchors.forEach(anchor => {
                    pdfLinks.push({
                        name: anchor.textContent.trim() || "Untitled",
                        url: anchor.href
                    });
                });
                return pdfLinks;
           };

            exportToExcel = function(pdfLinks) {
                const worksheetData = [["Name", "URL"]]; // Header row
                pdfLinks.forEach(link => {
                    worksheetData.push([link.name, link.url]);
                });
            
                const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "PDF Links");
            
                // Export as Excel file
                XLSX.writeFile(workbook, "PDF_Links.xlsx");
             };                                       
//# sourceMappingURL=main.4e71e8da.chunk.js.map




