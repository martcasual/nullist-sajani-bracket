export default function Game({ team1, team2, selected, onPick }) {

const style = (team)=>({
padding:"10px",
marginBottom:"6px",
borderRadius:"10px",
cursor:"pointer",
background:selected===team ? "#2563eb":"white",
color:selected===team ? "white":"black",
border:"1px solid #ddd"
})

return (

<div style={{
background:"#f8fafc",
padding:"8px",
borderRadius:"12px",
boxShadow:"0 2px 6px rgba(0,0,0,0.05)",
marginBottom:"16px",
width:"180px"
}}>

<div style={style(team1)} onClick={()=>onPick(team1)}>
{team1 || "TBD"}
</div>

<div style={style(team2)} onClick={()=>onPick(team2)}>
{team2 || "TBD"}
</div>

</div>

)
}
