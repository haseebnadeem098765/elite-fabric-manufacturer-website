
import { ArrowRight, CheckCircle, Star, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import logo from '@/assets/104847682_105584367877291_8820758133566622257_n.jpg';

const HomePage = () => {
  const products = [
    {
      name: 'Toptex / Winnertex',
      description: 'Best quality uniform fabric for schools aur industries',
      features: ['Durable', 'Comfortable', 'Professional'],
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop'
    },
    {
      name: 'Nichiee Blend',
      description: 'Smooth touch aur long-lasting shine ke sath',
      features: ['Smooth Touch', 'Long-lasting', 'Shine Finish'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      name: 'Blended (36/2)',
      description: 'Strong aur reliable fabric everyday use ke liye',
      features: ['Strong', 'Reliable', 'Everyday Use'],
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=300&fit=crop'
    },
    {
      name: '18/20 Double Suiting',
      description: 'Soft, elegant aur professional appearance ke sath',
      features: ['Soft', 'Elegant', 'Professional'],
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop'
    },
    {
      name: 'KT White',
      description: 'Premium white fabric for school aur corporate uniforms',
      features: ['Premium White', 'School Uniforms', 'Corporate'],
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop'
    },
    {
      name: 'DM Shirting',
      description: 'Neat, fine aur comfortable feel ke liye perfect choice',
      features: ['Neat', 'Fine', 'Comfortable'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '500+' },
    { icon: Award, label: 'Quality Products', value: '6+' },
    { icon: Clock, label: 'Years Experience', value: '4+' },
    { icon: Star, label: 'Customer Rating', value: '4.9' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-pattern py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Since 2020 🇵🇰
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Welcome to{' '}
                  <span className="text-gradient">Elite Fabric</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Pakistan ka reliable <strong>Uniform Fabric Manufacturer</strong>
                </p>
                <p className="text-lg text-muted-foreground">
                  Jahan quality, comfort aur perfection ek hi jagah milte hain.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="gradient-primary">
                  <Link to="/products">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/923323804080">
                    WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-card rounded-2xl p-8 shadow-2xl">
                <img 
                  src={logo} 
                  alt="Elite Fabric Logo" 
                  className="w-full max-w-sm mx-auto rounded-xl"
                />
              </div>
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-3xl opacity-20 scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Premium Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Har fabric hum khud manufacture karte hain aur strict quality standards ke sath inspect karte hain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Elite Fabric?</h2>
            <p className="text-lg text-muted-foreground">
              Supplying Trust, Comfort & Durability Since 2020
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Har roll perfection ka misaal bane - strict quality standards ke sath inspect karte hain
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Trusted by Many</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schools aur industries ke liye best quality uniform fabric provide karte hain
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>4+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  2020 se Pakistan mein reliable uniform fabric manufacturer hain
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Premium Uniform Fabric?
            </h2>
            <p className="text-xl opacity-90">
              "Elite Fabric — jahan har uniform ki shuruaat hoti hai ek perfect fabric se."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/923323804080">
                  WhatsApp: 0332-3804080
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:03211660362">
                  Call: 0321-1660362
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;