const Time = () => {
    let greet = "Hai";
    let d = new Date();
    let t = d.getHours();
    if(t>=0 && t<12){ 
        greet ="good morning"
    }
    if(t>=12 && t<16){
        greet  = "good afternoon"
    }
    if(t>=17){
        greet ="good evening"
    }
    
      
    return ( 
        <h1>{greet}</h1>
     );
}
 
export default Time;