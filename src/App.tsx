import { Community } from './components/Community';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Roadmap } from './components/Roadmap';
import { WhySoroban } from './components/WhySoroban';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhySoroban />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
