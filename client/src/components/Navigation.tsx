import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Navigation() {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLogout = async () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Juntrax Solutions
            </Typography>
            <Divider />
            <List>
                <Link to="/">
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="signup">
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={"Sign Up"} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="login">
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={"Login"} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                        Juntrax Solutions
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {!localStorage.getItem("token") ? (
                            <>
                                <Link to="/">
                                    <Button sx={{ color: "#fff" }}>Home</Button>
                                </Link>{" "}
                                <Link to="/signup">
                                    <Button sx={{ color: "#fff" }}>Sign Up</Button>
                                </Link>
                                <Link to="/login">
                                    <Button sx={{ color: "#fff" }}>Login</Button>
                                </Link>
                            </>
                        ) : (
                            <Button sx={{ color: "#fff" }} onClick={handleLogout}>
                                Logout
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}
