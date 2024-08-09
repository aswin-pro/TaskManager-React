import { useState } from "react"
import Listitem from "./Listitem"
function List() {

    const [listact,setlistitem]=useState(["Yoga at 6 Am","Have a Tea at 7am","Having Brakfast at 8:30","Going to Work"])
    const [input,setinput]=useState("")
    function handleinput(evt){
        setinput(evt.target.value)
    }
    function update(){
        setlistitem([...listact,input])
        setinput([""])
    }
    function clear(){
        setlistitem([])
    }
    return (
        <div className="main">
            <h1>TaskMaster</h1>
            <div>
                <input type="text" placeholder="Add Your Task..." value={input}  onChange={handleinput}></input>
                <button className="addbtn" onClick={update} >Add</button>
            </div>
            {
                listact.map(function (item) {
                    return (<Listitem activity={item}></Listitem>)
                })
            }
            <button className="clrbtn" onClick={clear}>Clear All</button>
        </div>
    )
}
export default List