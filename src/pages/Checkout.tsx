import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CreditCard, Truck, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

function Checkout() {
  const { items = [], getTotalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const safeItems = Array.isArray(items) ? items : [];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
    paymentMethod: 'card'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch("public/order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: formData,
          items: safeItems,
          total: getTotalPrice(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) throw new Error("Order failed");

      clearCart();
      toast.success("Заказ отправлен! 📩");
      navigate("/");
    } catch (error) {
      toast.error("Ошибка при отправке заказа");
    } finally {
      setIsProcessing(false);
    }
  };

  if (safeItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Корзина пуста</h1>
          <p className="text-gray-400 mb-8">Добавьте товары для оформления заказа</p>
          <Link to="/catalog"><Button className="gold-button">Перейти в каталог</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" onClick={() => navigate('/cart')} className="text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back')}
        </Button>

        <h1 className="text-4xl font-bold text-white mb-8">{t('checkout.title')}</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Форма покупателя и доставки */}
            <div className="lg:col-span-2 space-y-6">

              {/* Покупатель */}
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text flex items-center gap-2"><User className="w-5 h-5"/> {t('checkout.customer.info')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-yellow-400 mb-2">{t('checkout.first.name')} *</label>
                      <Input required value={formData.firstName} onChange={(e)=>handleInputChange('firstName', e.target.value)} className="bg-gray-900 border-yellow-600/30 text-white"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-yellow-400 mb-2">{t('checkout.last.name')} *</label>
                      <Input required value={formData.lastName} onChange={(e)=>handleInputChange('lastName', e.target.value)} className="bg-gray-900 border-yellow-600/30 text-white"/>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-yellow-400 mb-2">{t('checkout.email')} *</label>
                    <Input type="email" required value={formData.email} onChange={(e)=>handleInputChange('email', e.target.value)} className="bg-gray-900 border-yellow-600/30 text-white"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-yellow-400 mb-2">{t('checkout.phone')}</label>
                    <Input type="tel" value={formData.phone} onChange={(e)=>handleInputChange('phone', e.target.value)} className="bg-gray-900 border-yellow-600/30 text-white"/>
                  </div>
                </CardContent>
              </Card>

              {/* Доставка */}
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text flex items-center gap-2"><Truck className="w-5 h-5"/> {t('checkout.shipping.info')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-yellow-400 mb-2">{t('checkout.country')} *</label>
                      <Select value={formData.country} onValueChange={(value)=>handleInputChange('country', value)}>
                        <SelectTrigger className="bg-gray-900 border-yellow-600/30 text-white"><SelectValue placeholder="Выберите страну" /></SelectTrigger>
                        <SelectContent className="bg-gray-900 border-yellow-600/30">
                          <SelectItem value="ru">Россия</SelectItem>
                          <SelectItem value="by">Беларусь</SelectItem>
                          <SelectItem value="kz">Казахстан</SelectItem>
                          <SelectItem value="ua">Украина</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-yellow-400 mb-2">{t('checkout.city')} *</label>
                      <Input required value={formData.city} onChange={(e)=>handleInputChange('city', e.target.value)} className="bg-gray-900 border-yellow-600/30 text-white"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-400 mb-2">{t('checkout.address')} *</label>
                    <Input required value={formData.address} onChange={(e)=>handleInputChange('address', e.target.value)} className="bg-gray-900 border-yellow-600/30 text-white"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-400 mb-2">{t('checkout.postal.code')}</label>
                    <Input value={formData.postalCode} onChange={(e)=>handleInputChange('postalCode', e.target.value)} className="bg-gray-900 border-yellow-600/30 text-white"/>
                  </div>
                </CardContent>
              </Card>

              {/* Оплата */}
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text flex items-center gap-2"><CreditCard className="w-5 h-5"/> Способы оплаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {formData.paymentMethod === 'card' && (
                    <>
                      <div className="space-y-2">
                        <p className="text-yellow-400 font-semibold">Bitcoin</p>
                        <p className="text-gray-300 text-sm">Внимание, выбирайте сеть «BTC». Принимаем переводы со всех адресов (начинающихся с «1», «3», «bc1p» и «bc1q»).</p>
                        <p className="text-gray-200 bg-gray-800 p-2 rounded">12tsv8rwtBErN7dQpS12PQaG98vhLWYQhC</p>

                        <p className="text-yellow-400 font-semibold mt-4">USDT - сеть TRX (TRON - TRC20)</p>
                        <p className="text-gray-200 bg-gray-800 p-2 rounded">TJEGJMzGSUzer7PE3GLE941wUDu2JuhirF</p>
                      </div>

                      <Card className="premium-card mt-4">
                        <CardHeader>
                          <CardTitle className="gold-text flex items-center gap-2">💳 Контакты для оплаты</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-yellow-100">
                          <p>Если вы хотите оплатить на карту или другую криптовалюту, пожалуйста, свяжитесь с администрацией в нашей <a href="https://t.me/+ai4pfynORlgzN2Y6" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300 transition-colors">Telegram-группе</a> или напишите на почту:</p>
                          <p className="text-lg text-yellow-300 font-semibold">📩 Strongandpowerfulgenetics@gmail.com</p>
                          <div className="flex flex-wrap gap-4 mt-6">
                            <a href="https://t.me/+ai4pfynORlgzN2Y6" target="_blank" rel="noopener noreferrer">✈️ Написать в Telegram</a>
                            <a href="mailto:Strongandpowerfulgenetics@gmail.com">📩 Отправить на почту</a>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Сводка заказа */}
            <div className="lg:col-span-1">
              <Card className="premium-card sticky top-8">
                <CardHeader>
                  <CardTitle className="gold-text">{t('checkout.order.summary')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {safeItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{item.name}</p>
                        <p className="text-gray-400 text-xs">Количество: {item.quantity}</p>
                      </div>
                      <p className="text-yellow-400 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="border-t border-gray-700 pt-4 space-y-2">
                    <div className="flex justify-between"><span className="text-gray-400">Subtotal:</span><span className="text-white">${getTotalPrice?.().toFixed(2)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Shipping:</span><span className="text-green-400">Free</span></div>
                    <div className="flex justify-between text-lg font-bold"><span className="text-white">Total:</span><span className="text-yellow-400">${getTotalPrice?.().toFixed(2)}</span></div>
                  </div>
                  <Button type="submit" className="gold-button w-full" disabled={isProcessing}>{isProcessing ? 'Обработка...' : 'Оформить заказ'}</Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
