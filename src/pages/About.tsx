import Navigation from '@/components/Navigation';
import { Crown, Users, Award, Target, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Crown,
      title: t('about.elite.title'),
      description: t('about.elite.desc')
    },
    {
      icon: Shield,
      title: t('about.guarantee.title'),
      description: t('about.guarantee.desc')
    },
    {
      icon: Award,
      title: t('about.awards.title'),
      description: t('about.awards.desc')
    },
    {
      icon: Target,
      title: t('about.precision.title'),
      description: t('about.precision.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero секция */}
      <div className="premium-card mx-4 mt-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-72 h-72 bg-white rounded-full p-6 mx-auto mb-8 shadow-lg">
              <img 
                src="/assets/logo.png" 
                alt="Strong and Powerful Genetics Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-white">{t('about.title')}</span>
              <br />
              
              <span className="gold-text">{t('about.subtitle')}</span>
            </h1>
           
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('about.hero.desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Наша история */}
        <div className="premium-card p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="gold-text">{t('about.history.title')}</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>{t('about.history.p1')}</p>
                <p>{t('about.history.p2')}</p>
                <p>{t('about.history.p3')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-600/20 to-yellow-400/10 rounded-2xl flex items-center justify-center">
                <Zap className="h-32 w-32 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Наши преимущества */}
        <div className="premium-card p-12 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gold-text">{t('about.why.title')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Команда */}
        <div className="premium-card p-12">
          <div className="text-center">
            <Users className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              <span className="gold-text">{t('about.team.title')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('about.team.desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}