import React ,{useEffect , useContext} from 'react';
import {  BrowserRouter , Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import { AuthContext, FirebaseContext } from './store/Context';
function App() {
  const {user , setUser} = useContext(AuthContext)
  const {firebase } = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/signup'><Signup /></Route>
       <Route exact path='/login'><Login/></Route>
       <Route exact path='/create'><Create/></Route>

     </BrowserRouter>
    
    </div>
  );
}

export default App;
