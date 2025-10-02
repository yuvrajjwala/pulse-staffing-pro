import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VerifiedWorkers from "@/components/VerifiedWorkers";
import RealTimeShifts from "@/components/RealTimeShifts";
import FavoritesATeam from "@/components/FavoritesATeam";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <VerifiedWorkers />
      <RealTimeShifts />
      <FavoritesATeam />
    </div>
  );
};

export default Index;
