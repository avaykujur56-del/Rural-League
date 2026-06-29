import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TournamentCard from "../components/TournamentCard/TournamentCard";
import UpcomingMatches from "../components/UpcomingMatches/UpcomingMatches";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TournamentCard />
      <UpcomingMatches />
    </>
  );
}

export default Home;