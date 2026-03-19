import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SlidersHorizontal, Search, X } from 'lucide-react';
import StrainCard from '@/components/StrainCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSearchParams } from 'react-router-dom';
import { strains } from '@/lib/mockData';

function Catalog() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedFlowering, setSelectedFlowering] = useState('all');
  const [selectedVariety, setSelectedVariety] = useState('all');
  const [selectedTHC, setSelectedTHC] = useState('all');
  const [selectedYield, setSelectedYield] = useState('all');
  const [selectedEffects, setSelectedEffects] = useState<string[]>(
    searchParams.get('effect') ? [searchParams.get('effect')!] : []
  );
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>(
    searchParams.get('flavor') ? [searchParams.get('flavor')!] : []
  );
  const [selectedTerpenes, setSelectedTerpenes] = useState<string[]>(
    searchParams.get('terpene') ? [searchParams.get('terpene')!] : []
  );
  const [sortBy, setSortBy] = useState('name');

  // Получаем все уникальные эффекты, вкусы и терпены
  const allEffects = useMemo(() => {
    const effects = new Set<string>();
    strains.forEach(strain => {
      strain.effects.forEach(effect => effects.add(effect));
    });
    return Array.from(effects).sort();
  }, []);

  const allFlavors = useMemo(() => {
    const flavors = new Set<string>();
    strains.forEach(strain => {
      strain.flavors.forEach(flavor => flavors.add(flavor));
    });
    return Array.from(flavors).sort();
  }, []);

  const allTerpenes = useMemo(() => {
    const terpenes = new Set<string>();
    strains.forEach(strain => {
      strain.terpenes?.forEach(terpene => terpenes.add(terpene));
    });
    return Array.from(terpenes).sort();
  }, []);

  const filteredStrains = useMemo(() => {
    const filtered = strains.filter(strain => {
      const matchesSearch = strain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           strain.genetics.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           strain.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'all' || strain.type.toLowerCase() === selectedType;
      const matchesFlowering = selectedFlowering === 'all' || strain.floweringType.toLowerCase() === selectedFlowering;
      const matchesVariety = selectedVariety === 'all' || strain.variety.toLowerCase() === selectedVariety;
      
      const thcValue = parseInt(strain.thc.replace('%', ''));
      const matchesTHC = selectedTHC === 'all' ||
                        (selectedTHC === 'low' && thcValue < 15) ||
                        (selectedTHC === 'medium' && thcValue >= 15 && thcValue <= 25) ||
                        (selectedTHC === 'high' && thcValue > 25);
      
      const yieldValue = parseInt(strain.yield.split('-')[1]?.replace('g/m²', '') || '0');
      const matchesYield = selectedYield === 'all' ||
                          (selectedYield === 'low' && yieldValue < 500) ||
                          (selectedYield === 'medium' && yieldValue >= 500 && yieldValue <= 650) ||
                          (selectedYield === 'high' && yieldValue > 650);

      const matchesEffects = selectedEffects.length === 0 || 
                            selectedEffects.some(effect => strain.effects.includes(effect));
      const matchesFlavors = selectedFlavors.length === 0 || 
                            selectedFlavors.some(flavor => strain.flavors.includes(flavor));
      const matchesTerpenes = selectedTerpenes.length === 0 || 
                             selectedTerpenes.some(terpene => strain.terpenes?.includes(terpene));
      
      return matchesSearch && matchesType && matchesFlowering && matchesVariety && 
             matchesTHC && matchesYield && matchesEffects && matchesFlavors && matchesTerpenes;
    });

    // Сортировка
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'thc':
          return parseInt(b.thc.replace('%', '')) - parseInt(a.thc.replace('%', ''));
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedType, selectedFlowering, selectedVariety, selectedTHC, selectedYield, selectedEffects, selectedFlavors, selectedTerpenes, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('all');
    setSelectedFlowering('all');
    setSelectedVariety('all');
    setSelectedTHC('all');
    setSelectedYield('all');
    setSelectedEffects([]);
    setSelectedFlavors([]);
    setSelectedTerpenes([]);
    setSortBy('name');
    setSearchParams({});
  };

  const removeEffectFilter = (effect: string) => {
    const newEffects = selectedEffects.filter(e => e !== effect);
    setSelectedEffects(newEffects);
    const newParams = new URLSearchParams(searchParams);
    if (newEffects.length === 0) {
      newParams.delete('effect');
    } else {
      newParams.set('effect', newEffects[0]);
    }
    setSearchParams(newParams);
  };

  const removeFlavorFilter = (flavor: string) => {
    const newFlavors = selectedFlavors.filter(f => f !== flavor);
    setSelectedFlavors(newFlavors);
    const newParams = new URLSearchParams(searchParams);
    if (newFlavors.length === 0) {
      newParams.delete('flavor');
    } else {
      newParams.set('flavor', newFlavors[0]);
    }
    setSearchParams(newParams);
  };

  const removeTerpeneFilter = (terpene: string) => {
    const newTerpenes = selectedTerpenes.filter(t => t !== terpene);
    setSelectedTerpenes(newTerpenes);
    const newParams = new URLSearchParams(searchParams);
    if (newTerpenes.length === 0) {
      newParams.delete('terpene');
    } else {
      newParams.set('terpene', newTerpenes[0]);
    }
    setSearchParams(newParams);
  };

  // Функции для установки фильтров при клике на теги
  const handleEffectClick = (effect: string) => {
    if (!selectedEffects.includes(effect)) {
      const newEffects = [...selectedEffects, effect];
      setSelectedEffects(newEffects);
      const newParams = new URLSearchParams(searchParams);
      newParams.set('effect', effect);
      setSearchParams(newParams);
    }
  };

  const handleFlavorClick = (flavor: string) => {
    if (!selectedFlavors.includes(flavor)) {
      const newFlavors = [...selectedFlavors, flavor];
      setSelectedFlavors(newFlavors);
      const newParams = new URLSearchParams(searchParams);
      newParams.set('flavor', flavor);
      setSearchParams(newParams);
    }
  };

  const handleTerpeneClick = (terpene: string) => {
    if (!selectedTerpenes.includes(terpene)) {
      const newTerpenes = [...selectedTerpenes, terpene];
      setSelectedTerpenes(newTerpenes);
      const newParams = new URLSearchParams(searchParams);
      newParams.set('terpene', terpene);
      setSearchParams(newParams);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero секция */}
      <div className="premium-card mx-4 mt-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-white">{t('catalog.title')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('catalog.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Фильтры */}
          <div className="lg:col-span-1">
            <Card className="premium-card sticky top-8">
              <CardHeader>
                <CardTitle className="gold-text flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  {t('catalog.filters')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Поиск */}
                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    {t('catalog.search')}
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder={t('catalog.search.placeholder')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                    />
                  </div>
                </div>

                {/* Активные фильтры */}
                {(selectedEffects.length > 0 || selectedFlavors.length > 0 || selectedTerpenes.length > 0) && (
                  <div>
                    <label className="block text-sm font-medium text-yellow-400 mb-2">
                      {t('catalog.active.filters')}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedEffects.map((effect) => (
                        <Badge key={effect} className="bg-yellow-600/20 text-yellow-300 border-yellow-600/50">
                          {t('catalog.filter.effect')}: {t(`${effect}`)}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeEffectFilter(effect)}
                            className="ml-1 h-4 w-4 p-0 hover:bg-transparent"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                      {selectedFlavors.map((flavor) => (
                        <Badge key={flavor} className="bg-green-600/20 text-green-300 border-green-600/50">
                          {t('catalog.filter.flavor')}: {t(`${flavor}`)}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeFlavorFilter(flavor)}
                            className="ml-1 h-4 w-4 p-0 hover:bg-transparent"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                      {selectedTerpenes.map((terpene) => (
                        <Badge key={terpene} className="bg-blue-600/20 text-blue-300 border-blue-600/50">
                          {t('catalog.filter.terpene')}: {t(`${terpene}`)}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeTerpeneFilter(terpene)}
                            className="ml-1 h-4 w-4 p-0 hover:bg-transparent"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Тип сорта */}
                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    {t('catalog.type')}
                  </label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="bg-gray-900 border-yellow-600/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-yellow-600/30">
                      <SelectItem value="all">{t('catalog.type.all')}</SelectItem>
                      <SelectItem value="indica">{t('catalog.type.indica')}</SelectItem>
                      <SelectItem value="sativa">{t('catalog.type.sativa')}</SelectItem>
                      <SelectItem value="hybrid">{t('catalog.type.hybrid')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Тип цветения */}
                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    {t('catalog.flowering')}
                  </label>
                  <Select value={selectedFlowering} onValueChange={setSelectedFlowering}>
                    <SelectTrigger className="bg-gray-900 border-yellow-600/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-yellow-600/30">
                      <SelectItem value="all">{t('catalog.flowering.all')}</SelectItem>
                      <SelectItem value="photoperiod">{t('catalog.flowering.photo')}</SelectItem>
                      <SelectItem value="autoflower">{t('catalog.flowering.auto')}</SelectItem>
                      <SelectItem value="early">{t('catalog.flowering.early')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Разновидность */}
                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    {t('catalog.variety')}
                  </label>
                  <Select value={selectedVariety} onValueChange={setSelectedVariety}>
                    <SelectTrigger className="bg-gray-900 border-yellow-600/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-yellow-600/30">
                      <SelectItem value="all">{t('catalog.variety.all')}</SelectItem>
                      <SelectItem value="feminized">{t('catalog.variety.feminized')}</SelectItem>
                      <SelectItem value="regular">{t('catalog.variety.regular')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* THC уровень */}
                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    {t('catalog.thc')}
                  </label>
                  <Select value={selectedTHC} onValueChange={setSelectedTHC}>
                    <SelectTrigger className="bg-gray-900 border-yellow-600/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-yellow-600/30">
                      <SelectItem value="all">{t('catalog.thc.all')}</SelectItem>
                      <SelectItem value="low">{t('catalog.thc.low')}</SelectItem>
                      <SelectItem value="medium">{t('catalog.thc.medium')}</SelectItem>
                      <SelectItem value="high">{t('catalog.thc.high')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Урожайность */}
                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    {t('catalog.yield')}
                  </label>
                  <Select value={selectedYield} onValueChange={setSelectedYield}>
                    <SelectTrigger className="bg-gray-900 border-yellow-600/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-yellow-600/30">
                      <SelectItem value="all">{t('catalog.yield.all')}</SelectItem>
                      <SelectItem value="low">{t('catalog.yield.low')}</SelectItem>
                      <SelectItem value="medium">{t('catalog.yield.medium')}</SelectItem>
                      <SelectItem value="high">{t('catalog.yield.high')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={clearFilters} 
                  variant="outline" 
                  className="w-full border-yellow-600/30 text-yellow-400 hover:bg-yellow-400/10"
                >
                  {t('catalog.clear.filters')}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Результаты */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <p className="text-gray-300">
                  {t('catalog.found')} <span className="font-bold text-yellow-400">{filteredStrains.length}</span> {t('catalog.strains')}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">{t('catalog.sort')}:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-gray-900 border-yellow-600/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-yellow-600/30">
                    <SelectItem value="name">{t('catalog.sort.name')}</SelectItem>
                    <SelectItem value="date">{t('catalog.sort.date')}</SelectItem>
                    <SelectItem value="price">{t('catalog.sort.price')}</SelectItem>
                    <SelectItem value="thc">{t('catalog.sort.thc')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredStrains.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredStrains.map((strain) => (
                  <StrainCard 
                    key={strain.id} 
                    strain={strain}
                    onEffectClick={handleEffectClick}
                    onFlavorClick={handleFlavorClick}
                    onTerpeneClick={handleTerpeneClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('catalog.no.results')}</h3>
                <p className="text-gray-400 mb-6">{t('catalog.no.results.desc')}</p>
                <Button onClick={clearFilters} className="gold-button">
                  {t('catalog.clear.filters')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;