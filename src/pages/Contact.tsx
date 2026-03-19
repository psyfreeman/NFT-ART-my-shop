import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      content: 'strongandpowerfulgenetics@gmail.com',
      description: t('contact.email.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero секция */}
      <div className="premium-card mx-4 mt-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <MessageCircle className="h-20 w-20 text-yellow-500 mx-auto mb-8" />
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-white">{t('contact.title')}</span>
              <br />
              <span className="gold-text">{t('contact.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('contact.hero.desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Контактная информация */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="gold-text">{t('contact.info')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-yellow-500" />
                        
                      </div>
                      <div className="h-12 w-12 600/20 mt-2 rounded-lg flex items-center justify-center">
                      <a href="https://t.me/+ai4pfynORlgzN2Y6"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="" /></a>
                        
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-yellow-400 font-medium">{item.content}</p>
                     
                      <a href="https://t.me/+ai4pfynORlgzN2Y6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-3 group"                             >
                                <h3 className="font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                                  Наш чат
                                </h3>
                              </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Дополнительная информация */}
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="gold-text">{t('contact.important.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                
                <p className="text-sm">{t('contact.important.1')}</p>
                <p className="text-sm">{t('contact.important.2')}</p>
                <p className="text-sm">{t('contact.important.3')}</p>
                <p className="text-sm">{t('contact.important.4')}</p>
              </CardContent>
            </Card>
          </div>

          {/* Форма обратной связи */}
          <div className="lg:col-span-2">
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="gold-text">{t('contact.form.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">
                        {t('contact.form.name')} {t('common.required')}
                      </label>
                      <Input
                        id="name"
                        placeholder={t('contact.form.name.placeholder')}
                        className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
                        {t('contact.form.email')} {t('common.required')}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('contact.form.email.placeholder')}
                        className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-yellow-400 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <Input
                      id="subject"
                      placeholder={t('contact.form.subject.placeholder')}
                      className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-2">
                      {t('contact.form.message')} {t('common.required')}
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder={t('contact.form.message.placeholder')}
                      className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500 resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="gold-button w-full">
                    <Send className="h-4 w-4 mr-2" />
                    {t('contact.form.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}