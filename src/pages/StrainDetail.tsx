import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  ShoppingCart, 
  ArrowLeft, 
  Star, 
  Leaf, 
  Droplets, 
  Dna,
  Clock,
  Target,
  Thermometer,
  Sprout,
  Sun,
  Moon
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { strains, translateFloweringTime, translateStrainDescription } from '@/lib/mockData';

function StrainDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { t, language } = useLanguage();
  const [isAdding, setIsAdding] = useState(false);

  const strain = strains.find(s => s.id === id);

  if (!strain) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Сорт не найден</h1>
            <p className="text-gray-400 mb-8">Запрашиваемый сорт не существует в нашем каталоге.</p>
            <Link to="/catalog">
              <Button className="gold-button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться в каталог
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легкий': return 'text-green-300 border-green-500/50 bg-green-500/20';
      case 'Средний': return 'text-yellow-300 border-yellow-500/50 bg-yellow-500/20';
      case 'Сложный': return 'text-red-300 border-red-500/50 bg-red-500/20';
      default: return 'text-gray-300 border-gray-500/50 bg-gray-500/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Indica': return 'text-purple-300 border-purple-500/50 bg-purple-500/20';
      case 'Sativa': return 'text-orange-300 border-orange-500/50 bg-orange-500/20';
      case 'Hybrid': return 'text-blue-300 border-blue-500/50 bg-blue-500/20';
      default: return 'text-gray-300 border-gray-500/50 bg-gray-500/20';
    }
  };

  const getFloweringTypeColor = (floweringType: string) => {
    switch (floweringType) {
      case 'Photoperiod': return 'text-yellow-300 border-yellow-500/50 bg-yellow-500/20';
      case 'Autoflower': return 'text-green-300 border-green-500/50 bg-green-500/20';
      case 'Early': return 'text-orange-300 border-orange-500/50 bg-orange-500/20';
      default: return 'text-gray-300 border-gray-500/50 bg-gray-500/20';
    }
  };

  const getVarietyColor = (variety: string) => {
    switch (variety) {
      case 'Feminized': return 'text-pink-300 border-pink-500/50 bg-pink-500/20';
      case 'Regular': return 'text-cyan-300 border-cyan-500/50 bg-cyan-500/20';
      default: return 'text-gray-300 border-gray-500/50 bg-gray-500/20';
    }
  };

  const thcValue = parseInt(strain.thc.replace('%', ''));
  const cbdValue = parseFloat(strain.cbd.replace('%', ''));

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Навигация */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('common.back')}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Изображение */}
          <div className="relative">
            <div className="premium-card overflow-hidden">
              <img 
                src={strain.image} 
                alt={strain.name}
                className="w-full h-150 object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {strain.featured && (
                  <Badge className="bg-yellow-600/90 text-yellow-100 border-yellow-500/50">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <Badge className={`${getTypeColor(strain.type)}`}>
                  {strain.type}
                </Badge>
              </div>
            </div>
          </div>

          {/* Основная информация */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{strain.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={`${getFloweringTypeColor(strain.floweringType)}`}>
                  {strain.floweringType === 'Photoperiod' ? t('catalog.flowering.photo') :
                   strain.floweringType === 'Autoflower' ? t('catalog.flowering.auto') :
                   t('catalog.flowering.early')}
                </Badge>
                <Badge className={`${getDifficultyColor(strain.difficulty)}`}>
                  {t(`strain.difficulty.${strain.difficulty.toLowerCase()}`)}
                </Badge>
                <Badge className={`${getVarietyColor(strain.variety)}`}>
                  {strain.variety === 'Feminized' ? t('catalog.variety.feminized') : t('catalog.variety.regular')}
                </Badge>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {translateStrainDescription(strain, language)}
              </p>
            </div>

            {/* Цена и покупка */}
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-1">{strain.price}</div>
                    <div className="text-sm text-gray-400">за упаковку семян </div>
                     <div className="text-3xl font-bold text-yellow-400 mb-1">{strain.seeds}</div>
                  </div>
                  <Button
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className="gold-button px-8"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {isAdding ? t('common.loading') : t('strain.add.cart')}
                  </Button>
                </div>

                {/* Быстрые характеристики */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{strain.thc}</div>
                    <div className="text-sm text-gray-400">THC</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{strain.cbd}</div>
                    <div className="text-sm text-gray-400">CBD</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-lg font-bold text-purple-400">{translateFloweringTime(strain.floweringTime, language)}</div>
                    <div className="text-sm text-gray-400">{t('strain.flowering.time')}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-lg font-bold text-orange-400">{strain.yield}</div>
                    <div className="text-sm text-gray-400">{t('strain.yield')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Детальная информация */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800/50">
            <TabsTrigger value="overview">{t('strain.detail.overview')}</TabsTrigger>
            <TabsTrigger value="characteristics">{t('strain.detail.characteristics')}</TabsTrigger>
            <TabsTrigger value="growing">{t('strain.detail.growing')}</TabsTrigger>
            <TabsTrigger value="reviews">{t('strain.detail.reviews')}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Генетическая информация */}
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text flex items-center gap-2">
                    <Dna className="w-5 h-5" />
                    {t('strain.detail.genetics.info')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{t('strain.genetics')}:</div>
                      <div className="text-white">{strain.genetics}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{t('strain.type')}:</div>
                      <Badge className={`${getTypeColor(strain.type)}`}>
                        {strain.type}
                      </Badge>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{t('strain.flowering.type')}:</div>
                      <Badge className={`${getFloweringTypeColor(strain.floweringType)}`}>
                        {strain.floweringType}
                      </Badge>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{t('strain.variety')}:</div>
                      <Badge className={`${getVarietyColor(strain.variety)}`}>
                        {strain.variety}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Профиль эффектов */}
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    {t('strain.detail.effects.profile')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {strain.effects.map((effect, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-300">{t(`${effect}`)}</span>
                        {/* <Progress 
                          value={Math.random() * 40 + 60} 
                          className="w-24 h-2"
                        /> */}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Вкусовой профиль */}
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text flex items-center gap-2">
                    <Droplets className="w-5 h-5" />
                    {t('strain.detail.flavor.profile')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {strain.flavors.map((flavor, index) => (
                      <Badge 
                        key={index} 
                        className="text-xs border-blue-500/50 text-blue-300 bg-blue-500/20"
                      >
                        {t(`${flavor}`)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Терпеновый профиль */}
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-400/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-purple-400" />
                    </div>
                    {t('strain.detail.terpene.profile')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {strain.terpenes?.map((terpene, index) => (
                      <Badge 
                        key={index} 
                        className="text-xs border-purple-500/50 text-purple-300 bg-purple-500/20"
                      >
                        {t(`${terpene}`)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="characteristics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text">Каннабиноиды</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">THC</span>
                      <span className="text-green-400 font-bold">{strain.thc}</span>
                    </div>
                    <Progress value={thcValue * 3} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">CBD</span>
                      <span className="text-blue-400 font-bold">{strain.cbd}</span>
                    </div>
                    <Progress value={cbdValue * 20} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text">Характеристики выращивания</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('strain.difficulty')}:</span>
                    <Badge className={`${getDifficultyColor(strain.difficulty)}`}>
                      {t(`strain.difficulty.${strain.difficulty.toLowerCase()}`)}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('strain.flowering.time')}:</span>
                    <span className="text-purple-400">{translateFloweringTime(strain.floweringTime, language)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('strain.yield')}:</span>
                    <span className="text-orange-400">{strain.yield}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="growing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text flex items-center gap-2">
                    <Sun className="w-5 h-5" />
                    {t('strain.detail.indoor')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Thermometer className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-300">Температура: 20-26°C</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Droplets className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">Влажность: 40-60%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">Световой режим: 18/6 - 12/12</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Урожайность: {strain.yield}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="gold-text flex items-center gap-2">
                    <Moon className="w-5 h-5" />
                    {t('strain.detail.outdoor')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Sun className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">{t('strain.detail.climate')}: Умеренный/Теплый</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sprout className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Посадка: Май-Июнь</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-300">{t('strain.detail.harvest')}: Сентябрь-Октябрь</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">Высота: 1.5-2.5м</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="gold-text">{t('strain.detail.growing.tips')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-300">
                  <p>• Этот сорт предпочитает стабильные условия выращивания с умеренной влажностью</p>
                  <p>• Рекомендуется использовать технику LST (Low Stress Training) для увеличения урожайности</p>
                  <p>• Обеспечьте хорошую вентиляцию для предотвращения плесени</p>
                  <p>• В последние недели цветения снизьте влажность до 40-45%</p>
                  <p>• Промывка корневой системы за 1-2 недели до харвеста улучшит вкус</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="gold-text">{t('strain.detail.reviews')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-bold text-white mb-2">Отзывы скоро появятся</h3>
                  <p className="text-gray-400">Станьте первым, кто оставит отзыв об этом сорте!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default StrainDetail;