import "./UpcomingMatches.css";

function UpcomingMatches() {
  const matches = [
    {
      date: "28 Jun 2026",
      team1: "Pacca Line",
      team2: "New Line",
    },
    {
      date: "29 Jun 2026",
      team1: "Khudia Line",
      team2: "Velwa Line",
    },
    {
      date: "30 Jun 2026",
      team1: "Hatkhola Line",
      team2: "D.F.B.S.H",
    },
  ];

  return (
    <section className="matches">
      <h2>📅 Upcoming Matches</h2>

      {matches.map((match, index) => (
        <div key={index} className="match-card">
          <h3>{match.team1}</h3>

          <span>VS</span>

          <h3>{match.team2}</h3>

          <p>{match.date}</p>
        </div>
      ))}
    </section>
  );
}

export default UpcomingMatches;