import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from './components/Contact';
import './components/Contact';
// import { makeStyles } from "@material-ui/core/styles";

//import Todo from './components/Todo';
//import './components/Todo';

//import Header from './commonent/Header'; //HelooReact.JS를 가져오고 HelloReact라는 이름으로 사용 
//import Counter from "./commonent/Counter";

// // React 컴포넌트
 function App() {
   return (
     <Router>
     <div className="App">
       <header className="App-header">
           <nav>
             <ul>
               <li><Link to="/">HOME</Link>
               </li>
               <li><Link to="/todo">To-do</Link>
               </li>
               <li><Link to="/contacts">Contacts</Link>
               </li>
             </ul>           
        </nav>
         </header>
         <main>
           <Suspense fallback={<div>Loading...</div>}>
             <Switch>
               <Route path="/" component={Home} exact></Route>
               <Route path="/todo" component={Todo} ></Route>
               <Route path="/contacts" component={Contact}></Route>
              </Switch>
           </Suspense>
         </main>
       </div>
       </Router>
   );
 }

export default App;
