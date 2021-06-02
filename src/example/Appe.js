import logo from "./logo.svg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

import { makeStyles } from "@material-ui/core/styles";
// core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Hidden } from "@material-ui/core";

import Home from "./components/Home";
import Drawer from "@material-ui/core/Drawer";
// Icons
// https://material-ui.com/components/material-icons/
import { Menu as MenuIcon } from "@material-ui/icons";
//import Contact from './components/Contact';
//import Todo from "./components/TodoMod";
const Todo = lazy(() => import("./components/TodoMod"));
const Contact = lazy(() => import("./components/Contact"));

const drawerWidth = "240px";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: drawerWidth,
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
}));

function App() {
  const classes = useStyles(); // css 클래스목록이 생성됨

  const drawer = (
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/todo">To-do</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  );
  return (
    <Router>
      <div className={classes.root}>
        <header>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              {/* color="inherit" 부모 요소의 폰트컬러를 사용함*/}
              <IconButton
                color="inherit"
                edge="start"
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                MY WORKSPACE
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden lgup implementation="css">
            <Drawer
              variant="temporary"
              classes={{ paper: classes.drawerPaper }}
            ></Drawer>
            {drawer}
          </Hidden>
          {/* 화면이 1280px 이상일 때 숨기는 서랍*/}
          {/* 화면이 1280px 미만일 때 숨기는 서랍*/}
          <Hidden mdDown implementation="css">
            <Drawer
              open
              variant="permanent"
              classes={{ paper: classes.drawerPaper }}
            >
              {drawer}
            </Drawer>{" "}
          </Hidden>
        </header>
        <main>
          <div className={classes.toolbar} />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/todo" component={Todo}></Route>
              <Route path="/contacts" component={Contact}></Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
