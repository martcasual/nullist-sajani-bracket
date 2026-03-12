import { useState } from "react"
import Bracket from "./components/Bracket"
import Leaderboard from "./components/Leaderboard"

export default function App(){

const teams = [
{name:"Lääts / Tomson"},
{name:"Aatonen / Meite"},
{name:"Tänav / Lill"},
{name:"Koemets / Randmets"},
{name:"Hiiemaa / Kütt"},
{name:"Kalde / Raidma"},
{name:"Veetõusme / Pajupuu"},
{name:"Sosenko / Kösler"},
{name:"Valting / Haidla"},
{name:"Madiberg / Õunapuu"},
{name:"Minkkinen / Leinstrep"},
{name:"Kalle / Härma"},
{name:"Randmets / Tiidus"},
{name:"Haikal / Khalifa"},
{name:"Klettenberg / Meier"},
{name:"Loorits / Valk"}
]

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
