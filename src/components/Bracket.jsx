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

const qf = Array(4).fill(null)
const sf = Array(2).fill(null)

return (

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,200px)",
gap:"40px",
overflowX:"auto"
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


{/* QUARTERFINALS */}

<div>
<h3>Quarterfinal</h3>

{qf.map((_,i)=>(

<Game
key={i}
team1={pred["r16_"+(i*2)]}
team2={pred["r16_"+(i*2+1)]}
selected={pred["qf_"+i]}
onPick={(team)=>onPick("qf_"+i,team)}
/>

))}

</div>


{/* SEMIFINALS */}

<div>
<h3>Semifinal</h3>

{sf.map((_,i)=>(

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

<h2 style={{marginTop:"30px"}}>
🏆 Champion
</h2>

<button
style={{
padding:"10px",
borderRadius:"10px",
fontWeight:"bold"
}}
onClick={()=>onPick("champion",pred["final"])}
>

{pred["champion"] || "Select Champion"}

</button>

</div>

</div>

)
}
