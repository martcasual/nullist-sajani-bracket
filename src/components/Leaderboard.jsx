export default function Leaderboard({data}) {
return (
<div>
<h2>Leaderboard</h2>
{data.map((e,i)=>(
<div key={i}>
{i===0?"🥇":i===1?"🥈":i===2?"🥉":""} {e.name} — {e.score} pts
</div>
))}
</div>
)
}
