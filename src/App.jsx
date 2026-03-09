import { useState } from "react"
import Bracket from "./components/Bracket"
import Leaderboard from "./components/Leaderboard"

export default function App(){

const [teams] = useState([
{name:"Arsenal"},
{name:"Barcelona"},
{name:"Real Madrid"},
{name:"Bayern"},
{name:"Liverpool"},
{name:"PSG"},
{name:"Juventus"},
{name:"Dortmund"},
{name:"Chelsea"},
{name:"Inter"},
{name:"AC Milan"},
{name:"Ajax"},
{name:"Porto"},
{name:"Benfica"},
{name:"Napoli"},
{name:"Atletico"}
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
