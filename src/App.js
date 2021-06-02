import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import "./components/Contact";
// import { makeStyles } from "@material-ui/core/styles";

//import Todo from './components/Todo';
//import './components/Todo';

//import Header from './commonent/Header'; //HelooReact.JS를 가져오고 HelloReact라는 이름으로 사용
//import Counter from "./commonent/Counter";

// // React 컴포넌트
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
// APP.JS 커멘트 추가
