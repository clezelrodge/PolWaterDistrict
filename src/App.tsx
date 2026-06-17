import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/Home';
import { Services } from './components/Services';

// Define the possible views
type View = 'home' | 'services' | 'about' | 'contact';

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
      case 'about':
        return <div className="min-h-screen flex items-center justify-center p-8"><h1 className="text-4xl font-bold text-blue-900">About Page - Coming Soon</h1></div>;
      case 'contact':
        return <div className="min-h-screen flex items-center justify-center p-8"><h1 className="text-4xl font-bold text-blue-900">Contact Page - Coming Soon</h1></div>;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentView={activeView} onNavigate={navigateTo} />
      {/* Changed flex-grow to grow to fix the Tailwind warning */}
      <main className="grow"> 
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;