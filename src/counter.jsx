import {useState} from 'react'

const Counter = () => {
     const [num,setNum] = useState(0);

     const inc = ()=>{
        setNum(num + 1);
     }
     const dec = ()=>{
        setNum(num - 1);
     }

    return ( 
         <div className='counter' style={{border:'1px solid black' , marginLeft:50,marginRight:50}}>
           
            <button onClick={()=>inc()}>increment</button>
            <h1>{num}</h1>
            <button onClick={()=>dec()}>decrement</button>

         </div>
 
     );
}
 
export default Counter;