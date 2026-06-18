import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface AgeDisclaimerProps {
  onAccept: () => void;
}

const AgeDisclaimer: React.FC<AgeDisclaimerProps> = ({ onAccept }) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('age-disclaimer-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    } else {
      onAccept();
    }
  }, [onAccept]);

  const handleAccept = () => {
    localStorage.setItem('age-disclaimer-accepted', 'true');
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="premium-card max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="gold-text text-2xl mb-4">
            {t('disclaimer.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="text-6xl mb-4">🔞</div>
          
          <div className="space-y-4 text-gray-300">
            <p className="text-lg font-medium">
              {t('disclaimer.message')}
            </p>
            
            <div className="text-sm space-y-2">
              <p>{t('disclaimer.warning.1')}</p>
              <p>{t('disclaimer.warning.2')}</p>
              <p>{t('disclaimer.warning.3')}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleAccept}
              className="gold-button flex-1"
            >
              {t('disclaimer.accept')}
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-red-600/30 text-red-400 hover:bg-red-400/10 flex-1"
            >
              {t('disclaimer.decline')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeDisclaimer;