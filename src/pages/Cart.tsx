import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from "@/components/Footer";

function Cart() {
  const { items = [], updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { t } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Симуляция обработки заказа
    setTimeout(() => {
      setIsProcessing(false);
      // Здесь можно добавить логику оформления заказа
    }, 2000);
  };

  // Безопасная проверка на пустую корзину
  const safeItems = Array.isArray(items) ? items : [];
  
  if (safeItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-yellow-500 mx-auto mb-8 opacity-50" />
            <h1 className="text-4xl font-bold text-white mb-4">{t('cart.empty.title')}</h1>
            <p className="text-xl text-gray-400 mb-8">{t('cart.empty.description')}</p>
            <Link to="/catalog">
              <Button className="gold-button">
                {t('cart.empty.continue')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{t('cart.title')}</h1>
          <p className="text-gray-400">{safeItems.length} {t('cart.items')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Товары в корзине */}
          <div className="lg:col-span-2 space-y-4">
            {safeItems.map((item) => (
              <Card key={item.id} className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                    
                      <p className="text-yellow-400 font-bold">${item.price}</p>
                      <p>12 seeds</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity && updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="border-yellow-600/30 text-yellow-400 hover:bg-yellow-400/10"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity && updateQuantity(item.id, item.quantity + 1)}
                        className="border-yellow-600/30 text-yellow-400 hover:bg-yellow-400/10"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart && removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-between items-center pt-4">
              <Link to="/catalog">
                <Button variant="outline" className="border-yellow-600/30 text-yellow-400 hover:bg-yellow-400/10">
                  {t('cart.continue.shopping')}
                </Button>
              </Link>
              
              <Button
                variant="ghost"
                onClick={() => clearCart && clearCart()}
                className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
              >
                {t('cart.clear.all')}
              </Button>
            </div>
          </div>

          {/* Итоги заказа */}
          <div className="lg:col-span-1">
            <Card className="premium-card sticky top-8">
              <CardHeader>
                <CardTitle className="gold-text">{t('cart.summary.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">{t('cart.summary.subtotal')}:</span>
                  <span className="text-white font-medium">${getTotalPrice ? getTotalPrice().toFixed(2) : '0.00'}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">{t('cart.summary.shipping')}:</span>
                  <span className="text-green-400 font-medium">{t('cart.summary.free')}</span>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-white">{t('cart.summary.total')}:</span>
                    <span className="text-lg font-bold text-yellow-400">${getTotalPrice ? getTotalPrice().toFixed(2) : '0.00'}</span>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button 
                    className="gold-button w-full" 
                    disabled={isProcessing}
                    onClick={handleCheckout}
                  >
                    {isProcessing ? t('cart.checkout.processing') : t('cart.checkout.button')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    <Footer /></div>
  );
}

export default Cart;