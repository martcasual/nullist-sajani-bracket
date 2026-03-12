import Game from "./Game"

export default function Bracket({ teams, pred, onPick }) {

const r16 = [
[teams[0], teams[1]],
[teams[2], teams[3]],
[teams[4], teams[5]],
[teams[6], teams[7]],
[teams[8], teams[9]],
[teams[10], teams[11]],
[teams[12], teams[13]],
[teams[14], teams[15]]
]

return (

<div style={{
display:"flex",
gap:"60px",
overflowX:"auto",
padding:"20px"
}}>

{/* ROUND OF 16 */}

<div>
<h3>Round of 16</h3>

{r16.map((g,i)=>(
<Game
key={i}
team1={g[0]?.name}
team2={g[1]?.name}
selected={pred["r16_"+i]}
onPick={(team)=>onPick("r16_"+i,team)}
/>
))}

</div>


{/* QUARTERFINAL */}

<div>
<h3>Quarterfinal</h3>

{Array(4).fill().map((_,i)=>(
<Game
key={i}
team1={pred["r16_"+(i*2)]}
team2={pred["r16_"+(i*2+1)]}
selected={pred["qf_"+i]}
onPick={(team)=>onPick("qf_"+i,team)}
/>
))}

</div>


{/* SEMIFINAL */}

<div>
<h3>Semifinal</h3>

{Array(2).fill().map((_,i)=>(
<Game
key={i}
team1={pred["qf_"+(i*2)]}
team2={pred["qf_"+(i*2+1)]}
selected={pred["sf_"+i]}
onPick={(team)=>onPick("sf_"+i,team)}
/>
))}

</div>


{/* FINAL */}

<div>
<h3>Final</h3>

<Game
team1={pred["sf_0"]}
team2={pred["sf_1"]}
selected={pred["final"]}
onPick={(team)=>onPick("final",team)}
/>

<h2 style={{marginTop:"20px"}}>🏆 Champion</h2>

<button
style={{
padding:"10px",
borderRadius:"12px",
background:"#2563eb",
color:"white",
border:"none",
fontWeight:"bold",
cursor:"pointer"
}}
onClick={()=>onPick("champion",pred["final"])}
>

{pred["champion"] || "Select Champion"}

</button>

</div>

</div>

)
}
