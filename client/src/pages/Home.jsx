import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TournamentCard from "../components/TournamentCard/TournamentCard";
import UpcomingMatches from "../components/UpcomingMatches/UpcomingMatches";
import Standings from "../components/Standings/Standings";
import TopScorers from "../components/TopScorers/TopScorers";
import Sponsors from "../components/Sponsors/Sponsors";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TournamentCard />
      <UpcomingMatches />
      <Standings />
      <TopScorers />
      <Sponsors />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;