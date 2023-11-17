import { useState } from "react"
import { useLocalstorage } from "./Uselocalstorage"
const App = () => {
  const [value , setValue] = useState("")
  const { setItem , getItem , removeItem }= useLocalstorage('value')
  const local = getItem()
  return (
    <div>
    <div>
      <input onChange={(e)=>setValue(e.target.value)} type="text" />
     <button onClick={()=>setItem(value)}>setItem</button>
     <button onClick={()=>console.log(getItem())}>getItem</button>
     <button onClick={()=>removeItem()}>removeItem</button>
    </div>
    <div>{local}</div>
    </div>
  )
}

export default App