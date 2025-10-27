
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    {
      name: 'Toptex / Winnertex',
      description: 'Best quality uniform fabric for schools aur industries',
      features: ['Durable Construction', 'Comfortable Wear', 'Professional Look', 'Easy Care'],
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=400&fit=crop',
      category: 'Premium'
    },
    {
      name: 'Nichiee Blend',
      description: 'Smooth touch aur long-lasting shine ke sath',
      features: ['Smooth Touch', 'Long-lasting Shine', 'Wrinkle Resistant', 'Color Fast'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      category: 'Blend'
    },
    {
      name: 'Blended (36/2)',
      description: 'Strong aur reliable fabric everyday use ke liye',
      features: ['High Strength', 'Reliable Quality', 'Everyday Use', 'Cost Effective'],
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=400&fit=crop',
      category: 'Standard'
    },
    {
      name: '18/20 Double Suiting',
      description: 'Soft, elegant aur professional appearance ke sath',
      features: ['Soft Feel', 'Elegant Look', 'Professional Finish', 'Premium Quality'],
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop',
      category: 'Suiting'
    },
    {
      name: 'KT White',
      description: 'Premium white fabric for school aur corporate uniforms',
      features: ['Pure White', 'School Uniforms', 'Corporate Use', 'Stain Resistant'],
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=400&fit=crop',
      category: 'White'
    },
    {
      name: 'DM Shirting',
      description: 'Neat, fine aur comfortable feel ke liye perfect choice',
      features: ['Fine Texture', 'Comfortable Feel', 'Neat Appearance', 'Breathable'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      category: 'Shirting'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">Our Products</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold">Premium Uniform Fabrics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Har fabric hum khud manufacture karte hain aur strict quality standards ke sath inspect karte hain, 
            taake har roll perfection ka misaal bane.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{product.category}</Badge>
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Custom Requirements?</h2>
          <p className="text-muted-foreground mb-6">
            Hum aapke specific requirements ke according custom fabric solutions provide karte hain. 
            Bulk orders ke liye special rates available hain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/923323804080" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              WhatsApp for Quote
            </a>
            <a 
              href="tel:03211660362" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;