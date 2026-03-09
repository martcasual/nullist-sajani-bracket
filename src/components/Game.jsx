export default function Game({ team1, team2, selected, onPick }) {

const teamStyle = (team) => ({
  padding: "10px 14px",
  marginBottom: "6px",
  borderRadius: "10px",
  cursor: "pointer",
  background: selected === team ? "#2563eb" : "#ffffff",
  color: selected === team ? "white" : "#1f2937",
  border: "1px solid #e5e7eb",
  fontWeight: 500
})

return (

<div style={{
  background:"#f8fafc",
  padding:"10px",
  borderRadius:"12px",
  width:"180px",
  boxShadow:"0 2px 6px rgba(0,0,0,0.05)",
  marginBottom:"14px"
}}>

<div
style={teamStyle(team1)}
onClick={()=>onPick(team1)}
>
{team1}
</div>

<div
style={teamStyle(team2)}
onClick={()=>onPick(team2)}
>
{team2}
</div>

</div>

)
}
