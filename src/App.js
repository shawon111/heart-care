import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Departments from './Components/Departments/Departments';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import UserLogin from './Components/UserLogin/UserLogin';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/">
               <Home></Home>
            </Route>
            <Route exact path="/home">
               <Home></Home>
            </Route>
            <Route exact path="/about">
               <About></About>
            </Route>
            <Route exact path="/departments">
               <Departments></Departments>
            </Route>
            <Route exact path="/userlogin">
               <UserLogin></UserLogin>
            </Route>
            <Route exact path="/login">
               <Login></Login>
            </Route>
            <Route exact path="/register">
               <Register></Register>
            </Route>
            <Route exact path="/:serviceId">
               <ServiceDetail></ServiceDetail>
            </Route>
            <Route exact path="*">
               <PageNotFound></PageNotFound>
            </Route>
            
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
