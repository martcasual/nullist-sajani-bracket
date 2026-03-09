import Game from './Game'

export default function Bracket({teams, pred, onPick}){

return (
<div>
{teams.map((t,i)=>(i%2===0)&&
<Game
key={i}
team1={t.name}
team2={teams[i+1]?.name}
selected={pred['r16_'+(i/2)]}
onPick={(team)=>onPick('r16_'+(i/2),team)}
/>
)}
</div>
)
}
