import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Upload, Plus, X, Save, Crown, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useNavigate } from 'react-router-dom';

export default function AddStrain() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    thc: '',
    cbd: '',
    genetics: '',
    floweringTime: '',
    yield: '',
    height: '',
    description: '',
    image: '',
    price: '',
    featured: false
  });

  const [effects, setEffects] = useState<string[]>([]);
  const [flavors, setFlavors] = useState<string[]>([]);
  const [newEffect, setNewEffect] = useState('');
  const [newFlavor, setNewFlavor] = useState('');

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addEffect = () => {
    if (newEffect.trim() && !effects.includes(newEffect.trim())) {
      setEffects([...effects, newEffect.trim()]);
      setNewEffect('');
    }
  };

  const removeEffect = (effect: string) => {
    setEffects(effects.filter(e => e !== effect));
  };

  const addFlavor = () => {
    if (newFlavor.trim() && !flavors.includes(newFlavor.trim())) {
      setFlavors([...flavors, newFlavor.trim()]);
      setNewFlavor('');
    }
  };

  const removeFlavor = (flavor: string) => {
    setFlavors(flavors.filter(f => f !== flavor));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to a database or state management
    console.log('New strain data:', {
      ...formData,
      effects,
      flavors,
      id: Date.now().toString()
    });
    
    // Show success message and redirect
    alert('Элитный сорт успешно добавлен в королевскую коллекцию!');
    navigate('/catalog');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <Crown className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">
            <span className="gold-text">Добавить элитный сорт</span>
          </h1>
          <p className="text-gray-300 text-lg">Пополните королевскую коллекцию новым премиальным сортом</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="gold-text flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Основная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-yellow-400 font-medium">Название сорта *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Например: Royal Purple Haze"
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="type" className="text-yellow-400 font-medium">Тип сорта *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                    <SelectTrigger className="bg-gray-900 border-yellow-600/30 text-white">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-yellow-600/30">
                      <SelectItem value="indica">Indica</SelectItem>
                      <SelectItem value="sativa">Sativa</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="genetics" className="text-yellow-400 font-medium">Генетика *</Label>
                  <Input
                    id="genetics"
                    value={formData.genetics}
                    onChange={(e) => handleInputChange('genetics', e.target.value)}
                    placeholder="Например: Royal Skunk #1 x Elite Northern Lights"
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="price" className="text-yellow-400 font-medium">Цена *</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="Например: $25.00"
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-yellow-400 font-medium">Элитное описание</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Подробное описание элитного сорта, его королевских особенностей и премиальных характеристик..."
                  rows={4}
                  className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* Cannabinoids */}
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="gold-text">Каннабиноиды</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="thc" className="text-yellow-400 font-medium">THC уровень</Label>
                  <Input
                    id="thc"
                    value={formData.thc}
                    onChange={(e) => handleInputChange('thc', e.target.value)}
                    placeholder="Например: 25-30%"
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="cbd" className="text-yellow-400 font-medium">CBD уровень</Label>
                  <Input
                    id="cbd"
                    value={formData.cbd}
                    onChange={(e) => handleInputChange('cbd', e.target.value)}
                    placeholder="Например: <1%"
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Growing Information */}
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="gold-text">Королевское выращивание</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="floweringTime" className="text-yellow-400 font-medium">Время цветения</Label>
                  <Input
                    id="floweringTime"
                    value={formData.floweringTime}
                    onChange={(e) => handleInputChange('floweringTime', e.target.value)}
                    placeholder="Например: 8-9 недель"
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="yield" className="text-yellow-400 font-medium">Урожайность</Label>
                  <Input
                    id="yield"
                    value={formData.yield}
                    onChange={(e) => handleInputChange('yield', e.target.value)}
                    placeholder="Например: 600-700g/m²"
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <Label htmlFor="height" className="text-yellow-400 font-medium">Высота растения</Label>
                  <Input
                    id="height"
                    value={formData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                    placeholder="Например: 100-150cm"
                    className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Effects */}
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="gold-text">Элитные эффекты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newEffect}
                  onChange={(e) => setNewEffect(e.target.value)}
                  placeholder="Добавить эффект"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addEffect())}
                  className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                />
                <Button type="button" onClick={addEffect} className="gold-button">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {effects.map((effect) => (
                  <Badge key={effect} variant="secondary" className="flex items-center gap-1 bg-gray-800 text-gray-300 border-gray-700">
                    <Sparkles className="h-3 w-3" />
                    {effect}
                    <button
                      type="button"
                      onClick={() => removeEffect(effect)}
                      className="ml-1 hover:bg-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Flavors */}
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="gold-text">Изысканные вкусы</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newFlavor}
                  onChange={(e) => setNewFlavor(e.target.value)}
                  placeholder="Добавить вкус"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFlavor())}
                  className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                />
                <Button type="button" onClick={addFlavor} className="gold-button">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {flavors.map((flavor) => (
                  <Badge key={flavor} variant="outline" className="flex items-center gap-1 border-yellow-600/50 text-yellow-300">
                    {flavor}
                    <button
                      type="button"
                      onClick={() => removeFlavor(flavor)}
                      className="ml-1 hover:bg-yellow-600/30 rounded-full w-4 h-4 flex items-center justify-center text-xs"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Image */}
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="gold-text">Элитное изображение</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="image" className="text-yellow-400 font-medium">URL изображения</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  placeholder="https://example.com/royal-strain.jpg"
                  className="bg-gray-900 border-yellow-600/30 text-white placeholder-gray-400 focus:border-yellow-500"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Вставьте ссылку на высококачественное изображение элитного сорта
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => navigate('/catalog')} className="border-yellow-600/50 text-yellow-400 hover:bg-yellow-400/10">
              Отмена
            </Button>
            <Button type="submit" className="gold-button">
              <Save className="h-4 w-4 mr-2" />
              Добавить в коллекцию
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}