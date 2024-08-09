import React,{useState} from "react"
function Listitem(props) {
    
    const [Line,setstyle]=useState(false)
    function handleChange()
    {
        setstyle(!Line)
    }
    return (
        <>
            <div>
                <input type="checkbox" onClick={handleChange} style={{cursor:"pointer"}}></input>
                <span style={{textDecoration:Line?"line-through":"none"}}>{props.activity}</span>
            </div>
        </>
    )
}
export default Listitem