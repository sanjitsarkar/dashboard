import React, { useState,useEffect,createContext,useReducer } from 'react'
import {BrowserRouter,Route,Switch,Link, Router} from 'react-router-dom'
import logo from './logo.svg'
import './App.scss'
import Dashboard from './components/pages/Dashboard'
import { authReducer,initialAuthState } from './Store/AuthStore.js'
import Login from './components/pages/Login'

export const AuthContext = createContext()
function App() {


  const [authState,authDispatch] = useReducer(authReducer,initialAuthState);
  const value = {authState, authDispatch};
  
   useEffect(() => {
     console.log(localStorage?.getItem("username"))
     if(localStorage?.getItem("username"))
     authDispatch({type:"SUCCESS",payload:localStorage?.getItem("username")})
     else
     authDispatch({type:"SUCCESS",payload:""})
  }, [])

  useEffect(()=>{
    console.log(authState)
  })
  return (
    <AuthContext.Provider value={value}>
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
        <>
            {
           
            
            authState.loading && (<h1>Loading...</h1>)}
            {
authState.data!==""?
      <Dashboard/>:
      <Login/>
            
            
}
</>

</Route>
      </Switch>
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  )
}

export default App
