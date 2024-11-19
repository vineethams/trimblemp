// Check if the current window is not the top window (e.g., iframe context).
function isIframe() {
    try {
        return window.self !== window.top;
    } catch (error) {
        return true;
    }
}

// Main React Component
class MyApp extends React.Component {
    constructor(props) {
        super(props);

        // State initialization
        this.state = {
            mainMenu: {
                title: "Create excel",
                icon: "https://components.stage.connect.trimble.com/trimble-connect-project-workspace-api/logo192.png",
                command: "main_nav_menu_clicked",
            },
          
            queryParams: "?taskId=16&navigate=true",
            editParams: false,
            activeCommand: null,
            modal: false,
            formData: null,
            editMenu: null,
            editIndex: null,
            alertMessage: null,
            statusMessage: "",
            projectInfo: null,
            userSettings: null,
            accessToken: null,
        };

        // Bind methods to class
        this.setActiveCommand = this.setActiveCommand.bind(this);
        this.addSubMenu = this.addSubMenu.bind(this);
        this.removeSubmenu = this.removeSubmenu.bind(this);
        this.editSubmenu = this.editSubmenu.bind(this);
        this.editMainMenu = this.editMainMenu.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.getProjectDetails = this.getProjectDetails.bind(this);
        this.getUserSettings = this.getUserSettings.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    // Lifecycle method: After the component is mounted
    async componentDidMount() {
        if (isIframe()) {
            this.API = await parentAPI(window.parent, (event, data) => {
                switch (event) {
                    case "extension.command":
                        this.setState({ alertMessage: `Command executed: ${data.command}` });
                        break;
                    case "extension.accessToken":
                        this.setState({ accessToken: data });
                        break;
                    case "extension.userSettingsChanged":
                        this.setState({ alertMessage: "User settings changed!" });
                        this.getUserSettings();
                        break;
                }
            }, 30000); // Timeout
        }
    }

    // Add submenu dynamically
    addSubMenu(event) {
        event.preventDefault();
        const newSubMenu = {
            title: "New submenu",
            icon: "",
            command: "new_submenu_command",
        };
        this.setState((prevState) => ({
            subMenuItems: [...prevState.subMenuItems, newSubMenu],
        }));
    }

    // Set active command
    setActiveCommand(event, command) {
        event.preventDefault();
        this.setState({ activeCommand: command });
    }

    // Edit submenu
    editSubmenu(event, index) {
        event.preventDefault();
        const submenuToEdit = this.state.subMenuItems[index];
        this.setState({
            modal: true,
            editMenu: "subMenuItems",
            editIndex: index,
            formData: submenuToEdit,
        });
    }

    // Remove submenu
    removeSubmenu(event, index) {
        event.preventDefault();
        this.setState((prevState) => {
            const updatedSubMenus = [...prevState.subMenuItems];
            updatedSubMenus.splice(index, 1);
            return { subMenuItems: updatedSubMenus };
        });
    }

    // Save submenu changes
    onSave() {
        const { formData, editMenu, editIndex, subMenuItems } = this.state;

        if (editMenu === "subMenuItems") {
            const updatedSubMenus = [...subMenuItems];
            updatedSubMenus[editIndex] = formData;
            this.setState({ subMenuItems: updatedSubMenus });
        }
        this.onCancel();
    }

    // Cancel editing
    onCancel() {
        this.setState({
            modal: false,
            editMenu: null,
            formData: null,
            editIndex: null,
        });
    }

    // Update extension status message
    updateStatus() {
        if (this.API) {
            this.API.extension.setStatusMessage(this.state.statusMessage);
        }
    }

    // Fetch project details
    getProjectDetails() {
        if (this.API) {
            this.API.project.getCurrentProject().then((projectInfo) =>
                this.setState({ projectInfo })
            );
        }
    }

    // Fetch user settings
    getUserSettings() {
        if (this.API) {
            this.API.user.getUserSettings().then((userSettings) =>
                this.setState({ userSettings })
            );
        }
    }

    // Get access token
    getAccessToken() {
        if (this.API) {
            this.API.extension.getPermission("accesstoken").then((token) =>
                this.setState({ accessToken: token })
            );
        }
    }

    // Navigate to a specific page
    goTo(page = "settings-extensions") {
        if (this.API) {
            this.API.extension.goTo(page);
        }
    }

    render() {
        const { mainMenu, subMenuItems, activeCommand, modal, formData } = this.state;

        return (
            <div>
                <h3>Main Menu</h3>
                <div>{mainMenu.title}</div>
                <button onClick={this.addSubMenu}>Add Submenu</button>

                <h3>Submenus</h3>
                {subMenuItems.map((submenu, index) => (
                    <div key={index}>
                        <span>{submenu.title}</span>
                        <button onClick={(e) => this.editSubmenu(e, index)}>Edit</button>
                        <button onClick={(e) => this.removeSubmenu(e, index)}>Remove</button>
                    </div>
                ))}

                {modal && (
                    <div>
                        <h3>Edit Menu</h3>
                        <input
                            type="text"
                            value={formData?.title || ""}
                            onChange={(e) =>
                                this.setState({
                                    formData: { ...formData, title: e.target.value },
                                })
                            }
                        />
                        <button onClick={this.onSave}>Save</button>
                        <button onClick={this.onCancel}>Cancel</button>
                    </div>
                )}
            </div>
        );
    }
}

// Render the app
ReactDOM.render(<MyApp />, document.getElementById("root"));
