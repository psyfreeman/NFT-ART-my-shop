import { Button } from '@/components/ui/button';
import { Crown, Shield, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Index() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Crown,
      title: t('home.features.genetics.title'),
      description: t('home.features.genetics.desc')
    },
    {
      icon: Shield,
      title: t('home.features.quality.title'),
      description: t('home.features.quality.desc')
    },
    {
      icon: Award,
      title: t('home.features.recognition.title'),
      description: t('home.features.recognition.desc')
    },
    {
      icon: Zap,
      title: t('home.features.power.title'),
      description: t('home.features.power.desc')
    }
  ];

  return (
    <div className="min-h-screen in-h-screen bg-gradient-to-br from-black via-gray-900 ">

      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-yellow-400/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="w-72 h-72 bg-white rounded-full p-6 mx-auto mb-8 shadow-lg">
              <img 
                src="/assets/logo.png" 
                alt="Dima Sudarewskii" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">{t('home.hero.title')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <Link to="/catalog">
              <Button size="lg" className="gold-button text-lg px-8 py-4 h-auto">
                {t('home.hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="premium-card p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <feature.icon className="h-16 w-16 text-yellow-500 mx-auto relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="premium-card p-12">
            <div className="w-20 h-20 bg-white rounded-full p-2 mx-auto mb-8 shadow-lg">
              <img 
                src="/assets/logo.png" 
                alt="Strong and Powerful Genetics Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">{t('home.cta.title')}</span>
              <br />
              <span className="gold-text">{t('home.cta.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('home.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" className="gold-button">
                  {t('home.cta.button')}
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-yellow-600/30 text-yellow-400 hover:bg-yellow-400/10">
                  {t('nav.about')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}