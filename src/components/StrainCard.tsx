import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Leaf, Droplets, Dna } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { translateFloweringTime } from '@/lib/mockData';
import type { Strain } from '@/lib/mockData';

interface StrainCardProps {
  strain: Strain;
  onEffectClick?: (effect: string) => void;
  onFlavorClick?: (flavor: string) => void;
  onTerpeneClick?: (terpene: string) => void;
}

const StrainCard: React.FC<StrainCardProps> = ({ 
  strain, 
  onEffectClick, 
  onFlavorClick, 
  onTerpeneClick 
}) => {
  const { addToCart } = useCart();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    try {
      await addToCart({
        id: strain.id,
        name: strain.name,
        price: parseFloat(strain.price.replace('$', '')),
        image: strain.image,
        type: strain.type,
        thc: strain.thc
      });
      
      toast.success(`${strain.name} ${t('strain.added.cart')}`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Ошибка при добавлении в корзину');
    } finally {
      setIsAdding(false);
    }
  };

  const handleCardClick = () => {
    navigate(`/strain/${strain.id}`);
  };

  const handleTagClick = (e: React.MouseEvent, callback?: (value: string) => void, value?: string) => {
    e.stopPropagation();
    if (callback && value) {
      callback(value);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легкий': return 'text-green-300 border-green-500/50 bg-green-500/80';
      case 'Средний': return 'text-yellow-300 border-yellow-500/50 bg-yellow-500/80';
      case 'Сложный': return 'text-red-300 border-red-500/50 bg-red-500/80';
      default: return 'text-gray-300 border-gray-500/50 bg-gray-500/80';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Indica': return 'text-purple-300 border-purple-500/50 bg-purple-500/80';
      case 'Sativa': return 'text-orange-300 border-orange-500/50 bg-orange-500/80';
      case 'Hybrid': return 'text-blue-300 border-blue-500/50 bg-blue-500/80';
      default: return 'text-gray-300 border-gray-500/50 bg-gray-500/80';
    }
  };

  const getFloweringTypeColor = (floweringType: string) => {
    switch (floweringType) {
      case 'Photoperiod': return 'text-yellow-300 border-yellow-500/50 bg-yellow-500/100';
      case 'Autoflower': return 'text-green-300 border-green-500/50 bg-green-500/100';
      case 'Early': return 'text-orange-300 border-orange-500/50 bg-orange-500/100';
      default: return 'text-gray-300 border-gray-500/50 bg-gray-500/100';
    }
  };

  const getVarietyColor = (variety: string) => {
    switch (variety) {
      case 'Feminized': return 'text-pink-300 border-pink-500/50 bg-pink-500/100';
      case 'Regular': return 'text-cyan-300 border-cyan-500/50 bg-cyan-500/100';
      default: return 'text-gray-300 border-gray-500/50 bg-gray-500/100';
    }
  };

  return (
    <Card 
      className="premium-card group hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={strain.image} 
            alt={strain.name}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Значки в углах */}
          <div className="absolute top-3 left-3 flex gap-2">
            {strain.featured && (
              <Badge className="bg-green-600/90 text-yellow-100 border-yellow-500/50">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
            <Badge className={`${getTypeColor(strain.type)}`}>
              {strain.type}
            </Badge>
          </div>
          
          <div className="absolute top-3 right-3">
            <Badge className={`${getFloweringTypeColor(strain.floweringType)}`}>
              {strain.floweringType === 'Photoperiod' ? t('catalog.flowering.photo') :
               strain.floweringType === 'Autoflower' ? t('catalog.flowering.auto') :
               t('catalog.flowering.early')}
            </Badge>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{strain.name}</h3>
              <div className="flex gap-2">
                <Badge className={`${getDifficultyColor(strain.difficulty)} text-xs`}>
                  {t(`strain.difficulty.${strain.difficulty.toLowerCase()}`)}
                </Badge>
                <Badge className={`${getVarietyColor(strain.variety)} text-xs`}>
                  {strain.variety === 'Feminized' ? t('catalog.variety.feminized') : t('catalog.variety.regular')}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-400 drop-shadow-lg">{strain.price}</div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-4">
        {/* Основная информация */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">{t('strain.thc')}:</span>
              <span className="text-green-400 font-medium">{strain.thc}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">{t('strain.cbd')}:</span>
              <span className="text-blue-400 font-medium">{strain.cbd}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">{t('strain.flowering.time')}:</span>
              <span className="text-purple-400 font-medium text-xs">{translateFloweringTime(strain.floweringTime, language)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">{t('strain.yield')}:</span>
              <span className="text-orange-400 font-medium text-xs">{strain.yield}</span>
            </div>
          </div>
        </div>

        {/* Генетик а */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Dna className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">{t('strain.genetics')}:</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">{strain.genetics}</p>
        </div>

        {/* Эффекты */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">{t('strain.effects')}:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {strain.effects.slice(0, 3).map((effect, index) => (
              <Badge 
                key={index} 
                className="text-xs border-green-500/50 text-green-300 bg-green-500/20 cursor-pointer hover:bg-green-400/30 transition-colors"
                onClick={(e) => handleTagClick(e, onEffectClick, effect)}
              >
                {t(`effect.${effect}`)}
              </Badge>
            ))}
            {strain.effects.length > 3 && (
              <Badge className="text-xs border-gray-500/50 text-gray-300 bg-gray-500/20">
                +{strain.effects.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Вкусы */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">{t('strain.flavors')}:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {strain.flavors.map((flavor, index) => (
              <Badge 
                key={index} 
                className="text-xs border-blue-500/50 text-blue-300 bg-blue-500/20 cursor-pointer hover:bg-blue-400/30 transition-colors"
                onClick={(e) => handleTagClick(e, onFlavorClick, flavor)}
              >
                {t(`flavor.${flavor}`)}
              </Badge>
            ))}
          </div>
        </div>

        {/* Терпены */}
        {strain.terpenes && strain.terpenes.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-purple-400/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>
              <span className="text-sm font-medium text-purple-400">{t('strain.terpenes')}:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {strain.terpenes.slice(0, 3).map((terpene, index) => (
                <Badge 
                  key={index} 
                  className="text-xs border-purple-500/50 text-purple-300 bg-purple-500/20 cursor-pointer hover:bg-purple-400/30 transition-colors"
                  onClick={(e) => handleTagClick(e, onTerpeneClick, terpene)}
                >
                  {t(`terpene.${terpene}`)}
                </Badge>
              ))}
              {strain.terpenes.length > 3 && (
                <Badge className="text-xs border-gray-500/50 text-gray-300 bg-gray-500/20">
                  +{strain.terpenes.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Описание */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
          
        </p>

        {/* Кнопки действий */}
        <div className="flex gap-2 pt-2">
          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="flex-1 gold-button"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {isAdding ? t('common.loading') : t('strain.add.cart')}
          </Button>
          <Button 
            variant="outline" 
            className="border-yellow-600/30 text-yellow-400 hover:bg-yellow-400/10"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/strain/${strain.id}`);
            }}
          >
            {t('strain.details')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrainCard;