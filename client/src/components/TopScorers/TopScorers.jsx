import "./TopScorers.css";
import players from "../../data/players";

function TopScorers() {
  return (
    <section className="top-scorers">

      <h2>⚽ Top Scorers</h2>

      {players.map((player, index) => (

        <div className="player-card" key={player.id}>

          <span>{index + 1}</span>

          <h3>{player.name}</h3>

          <p>{player.team}</p>

          <strong>{player.goals} Goals</strong>

        </div>

      ))}

    </section>
  );
}

export default TopScorers;