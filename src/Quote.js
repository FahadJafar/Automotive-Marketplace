import { useState } from "react";
import city from './city3.jpg'
const Quote = () => {
    const [quote,setQuote]=useState('');
const handleclick = ()=>
{ 
   fetch('https://dummyjson.com/quotes/random')
   .then((response)=>
   {
    return response.json();
   }
   
   ).then((data)=>{
    
    setQuote(data);
   })
   .catch((err)=>
   {
    console.log(err);
   })
}
    return (  
        <div className="imgg">
                <img src={city} alt="city"></img>
        <div className="Quote">
  
            {quote.quote}<br/>
            <button onClick={handleclick}>Generate Quote</button>
        </div>
        </div>
    );
}
 
export default Quote;