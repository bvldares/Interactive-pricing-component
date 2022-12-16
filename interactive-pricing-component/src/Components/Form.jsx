import React, {useState} from "react";

export default function Form(){
    
    const[price, setPrice] = useState(5)
    
    function handleChange(e){
        setPrice(e.target.value)
    }
    
    
    
    return (
        <form>
            <h4 className="views">{price * 2}k PAGEVIEWS</h4>
            <input type="range" min="5" max="100" step="5" value={price} onChange={handleChange}/>
        </form>
    )
}