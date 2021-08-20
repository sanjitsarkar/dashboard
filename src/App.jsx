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
     authDispatch({type:"SUCCESS",payload:{username:localStorage.getItem("username")}})
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
authState.data.username!=="undefined"?
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
