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
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/">
               <Home></Home>
            </Route>
            <Route exact path="/home">
               <Home></Home>
            </Route>
            <PrivateRoute exact path="/about">
               <About></About>
            </PrivateRoute>
            <PrivateRoute exact path="/departments">
               <Departments></Departments>
            </PrivateRoute>
            <Route exact path="/login">
               <Login></Login>
            </Route>
            <Route exact path="/register">
               <Register></Register>
            </Route>
            <PrivateRoute exact path="/:serviceId">
               <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route exact path="*">
               <PageNotFound></PageNotFound>
            </Route>
            
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
