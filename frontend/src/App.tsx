import teamsData from '../src/CollegeBasketballTeams.json';
import './App.css';

function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

function TeamCard({
  team,
}: {
  team: {
    school: string;
    name: string;
    abbrev: string;
    city: string;
    state: string;
  };
}) {
  return (
    <div className="team-card">
      <h2>
        {team.school} ({team.abbrev})
      </h2>
      <h3>Mascot: {team.name}</h3>
      <p>
        Location: {team.city}, {team.state}
      </p>
      <br></br>
    </div>
  );
}

function TeamList() {
  return (
    <div className="team-list">
      {teamsData.teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
