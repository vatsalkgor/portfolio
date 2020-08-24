import React from "react";
import {
    CssBaseline,
    AppBar,
    Toolbar,
    Button,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    ListItemText,
    Hidden,
    Drawer,
} from "@material-ui/core";
import { Mail, Inbox } from "@material-ui/icons";
import { drawerStyles } from "../assets/styles";
import { withStyles } from "@material-ui/core/styles";
const TansparentButton = withStyles({ root: { background: "transparent" } })(
    Button
);

export default function Navigation({ children }) {
    const classes = drawerStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <Mail></Mail>
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <Inbox></Inbox>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classes.appBar}
                style={{ background: "transparent" }}
                elevation={0}
            >
                <Toolbar className="center">
                    <TansparentButton size="large">Home</TansparentButton>
                    <TansparentButton size="large">Home</TansparentButton>
                    <TansparentButton size="large">Home</TansparentButton>
                    <TansparentButton size="large">Home</TansparentButton>
                    <TansparentButton size="large">Home</TansparentButton>
                    <TansparentButton size="large">Home</TansparentButton>
                    <TansparentButton size="large">Home</TansparentButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main>{children}</main>
        </div>
    );
}
