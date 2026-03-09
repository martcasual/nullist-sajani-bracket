export default function Game({ team1, team2, selected, onPick }) {
return (
<div className="game">
<button className={selected===team1?'selected':''} onClick={()=>onPick(team1)}>
{team1||"TBD"}
</button>
<button className={selected===team2?'selected':''} onClick={()=>onPick(team2)}>
{team2||"TBD"}
</button>
</div>
)
}
