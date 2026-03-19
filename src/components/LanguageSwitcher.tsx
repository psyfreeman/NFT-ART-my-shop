import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 flex items-center space-x-2"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'ru' ? 'EN' : 'RU'}</span>
    </Button>
  );
}