import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { items = [] } = useCart(); // Добавляем значение по умолчанию
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.catalog'), href: '/catalog' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  // Безопасное получение количества товаров
  const itemCount = Array.isArray(items) ? items.length : 0;

  return (
    <nav className="premium-card sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="h-12 w-12 rounded-full p-1 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/assets/logo.png" 
                  alt="Dima Sudarewskii" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold gold-text group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                Dima Sudarewskii
              </span>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/chat">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-yellow-400">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-yellow-600/30">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <LanguageSwitcher />
                  </div>
                  
                  <Link to="/chat" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      {t('nav.chat')}
                    </Button>
                  </Link>
                  
                  <Link to="/cart" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 relative">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      {t('nav.cart')}
                      {itemCount > 0 && (
                        <span className="ml-auto bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                          {itemCount}
                        </span>
                      )}
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;