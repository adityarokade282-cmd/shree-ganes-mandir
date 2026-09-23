import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Darshan } from '@/components/Darshan';
import { AartiPuja } from '@/components/AartiPuja';
import { Events } from '@/components/Events';
import { Booking } from '@/components/Booking';
import { Donation } from '@/components/Donation';
import { Gallery } from '@/components/Gallery';
import { Prasad } from '@/components/Prasad';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Darshan />
        <AartiPuja />
        <Events />
        <Booking />
        <Donation />
        <Gallery />
        <Prasad />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
