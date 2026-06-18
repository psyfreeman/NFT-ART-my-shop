import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Users, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

function Chat() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{id: string, text: string, sender: 'user' | 'bot', timestamp: Date}>>([]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setIsRegistered(true);
      // Добавляем приветственное сообщение
      setMessages([{
        id: '1',
        text: `${t('chat.registered')} ${name}! ${t('chat.how.help')}`,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Добавляем сообщение пользователя
      const userMessage = {
        id: Date.now().toString(),
        text: message,
        sender: 'user' as const,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setMessage('');
      
      // Симулируем ответ бота через 1 секунду
      setTimeout(() => {
        const botMessage = {
          id: (Date.now() + 1).toString(),
          text: t('chat.bot.response'),
          sender: 'bot' as const,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="premium-card p-8 mb-8">
          <div className="text-center">
            <MessageCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">
              {t('chat.general.title')}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-yellow-500" />
                <span>1 {t('chat.online.count')}</span>
              </div>
            </div>
          </div>
        </div>

        {!isRegistered ? (
          <Card className="premium-card max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="gold-text text-center">{t('chat.join.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">
                    {t('chat.register.name')}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('chat.register.name.placeholder')}
                    required
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
                    {t('chat.register.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('chat.register.email.placeholder')}
                    required
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>
                <Button type="submit" className="gold-button w-full">
                  {t('chat.register.button')}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="gold-text">{t('chat.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Область сообщений */}
                <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-800/50 rounded-lg">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.sender === 'user'
                            ? 'bg-yellow-600 text-white'
                            : 'bg-gray-700 text-gray-100'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {msg.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Форма отправки сообщения */}
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('chat.message.placeholder')}
                    className="flex-1 bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                  <Button type="submit" className="gold-button">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;