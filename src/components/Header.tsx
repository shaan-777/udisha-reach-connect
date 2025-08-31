import { useState } from 'react';

export const Header = () => {
  const [currentLang, setCurrentLang] = useState('hindi');

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'hindi' ? 'english' : 'hindi');
  };

  return (
    <header className="bg-background shadow-header sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-udisha rounded-full flex items-center justify-center text-white font-bold text-lg">
              U
            </div>
            <span className="text-xl font-bold text-udisha">Udisha Foundation</span>
          </div>
          
          <button
            onClick={toggleLanguage}
            className="bg-udisha text-white px-4 py-2 rounded-full font-medium hover:bg-udisha-dark transition-all duration-300 hover:scale-105"
          >
            {currentLang === 'hindi' ? 'English' : 'हिंदी'}
          </button>
        </div>
      </nav>
    </header>
  );
};