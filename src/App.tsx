import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { About } from './components/About';
import { CSR } from './components/csr';
import { Gallery } from './components/Gallery';
import { BackToTop } from './components/ui/arrowup';
// App.tsx
import GAD from './components/GAD';
import HR from './components/HR';

// Define the possible views
export type View = 'home' | 'services' | 'about' | 'csr' | 'gad' | 'hr';

function App() {
  const [activeView, setActiveView] = useState<View>('home');

  const navigateTo = (view: View) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'services':
        return <Services />;
      case 'announcements':
        return <div className="min-h-screen flex items-center justify-center p-8"><h1 className="text-4xl font-bold text-blue-900">Announcements - Coming Soon</h1></div>;
      case 'images':
        return <Gallery />;
      case 'news':
        return <div className="min-h-screen flex items-center justify-center p-8"><h1 className="text-4xl font-bold text-blue-900">Latest News - Coming Soon</h1></div>;
      case 'about':
        return <About />;
      case 'csr':
        return <CSR />;
      case 'gad':
        return <GAD />;
      case 'hr':
        return <HR />;
      case 'contact':
        return <div className="min-h-screen flex items-center justify-center p-8"><h1 className="text-4xl font-bold text-blue-900">Contact Page - Coming Soon</h1></div>;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentView={activeView} onNavigate={navigateTo} />
      <main className={`grow ${activeView === 'home' ? '' : 'bg-blue-100'}`}>
        {renderView()}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;