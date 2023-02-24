import React,{useState,useEffect} from 'react';
import Center from './center.jsx'
import Counter from './counter.jsx'
import Todo from './todo.jsx'
// import Time from './time.jsx'
import "./App.css"




function App(){
  const [isLoggedIn,setlogin] = useState(false)
  const [text,settext] = useState("login")

  const toggle = () =>{
     setlogin(!isLoggedIn)
     console.log( isLoggedIn ? "logged in":"logged out");
    if(isLoggedIn){
      settext("login")
    }
    else{
      settext("logout")
    }

  }

  

 useEffect(()=>{
   
 },[text])


  return(
<div className='App'>
      {/* <Time/> */}
      <button className="login" onClick={()=>toggle()}>{text}</button>
      {isLoggedIn ? <Center/> : <h1>You are not logged in.</h1>}
       {isLoggedIn ? <Counter/> : null}

       <Todo/>

   


</div>
    
  

  )
}
export default App
