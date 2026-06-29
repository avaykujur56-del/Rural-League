import "./Standings.css";

function Standings() {
  const standings = [
    {
      team: "Pacca Line",
      played: 3,
      win: 3,
      draw: 0,
      loss: 0,
      gf: 8,
      ga: 2,
      gd: 6,
      points: 9,
    },
    {
      team: "New Line",
      played: 3,
      win: 2,
      draw: 0,
      loss: 1,
      gf: 5,
      ga: 3,
      gd: 2,
      points: 6,
    },
    {
      team: "Khudia Line",
      played: 3,
      win: 1,
      draw: 1,
      loss: 1,
      gf: 4,
      ga: 4,
      gd: 0,
      points: 4,
    },
    {
      team: "Velwa Line",
      played: 3,
      win: 0,
      draw: 1,
      loss: 2,
      gf: 2,
      ga: 7,
      gd: -5,
      points: 1,
    },
  ];

  return (
    <section className="standings">
      <h2>📊 Points Table</h2>

      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {standings.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{team.team}</td>
              <td>{team.played}</td>
              <td>{team.win}</td>
              <td>{team.draw}</td>
              <td>{team.loss}</td>
              <td>{team.gf}</td>
              <td>{team.ga}</td>
              <td>{team.gd}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Standings;