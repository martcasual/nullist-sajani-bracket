import { useState } from "react"
import Bracket from "./components/Bracket"
import Leaderboard from "./components/Leaderboard"

export default function App(){

const [teams] = useState([
{name:"Team 1"},
{name:"Team 2"},
{name:"Team 3"},
{name:"Team 4"},
{name:"Team 5"},
{name:"Team 6"},
{name:"Team 7"},
{name:"Team 8"},
{name:"Team 9"},
{name:"Team 10"},
{name:"Team 11"},
{name:"Team 12"},
{name:"Team 13"},
{name:"Team 14"},
{name:"Team 15"},
{name:"Team 16"},
])

const [pred,setPred]=useState({})
const [entries,setEntries]=useState([])
const [name,setName]=useState("")
const [submitted,setSubmitted]=useState(false)

function pick(id,team){
if(submitted) return
setPred({...pred,[id]:team})
}

function submit(){
if(!name) return alert("Enter name")
setEntries([...entries,{name,score:0}])
setSubmitted(true)
}

return (
<div>
<h1>NULLIST SAJANI</h1>

<Bracket teams={teams} pred={pred} onPick={pick} />

{!submitted &&
<div style={{marginTop:20}}>
<input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
<button onClick={submit}>Submit</button>
</div>
}

<Leaderboard data={entries} />

</div>
)
}
