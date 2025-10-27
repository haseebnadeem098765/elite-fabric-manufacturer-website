
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Award, Users, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">About Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">About Elite Fabric</h1>
            <p className="text-xl text-muted-foreground">
              Pakistan's trusted uniform fabric manufacturer since 2020
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Elite Fabric ki shuruaat 2020 mein hui thi ek simple vision ke sath - 
                Pakistan mein best quality uniform fabric provide karna. Aaj hum schools, 
                industries aur corporate sector ke liye trusted supplier hain.
              </p>
              <p className="text-muted-foreground">
                Hamare har fabric mein quality, comfort aur durability ka perfect combination hai. 
                Hum strict quality standards follow karte hain taake har customer ko best product mile.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                Hamara mission hai Pakistan mein uniform fabric industry ko aage badhana 
                aur customers ko world-class quality provide karna. Hum believe karte hain 
                ke har uniform ki shuruaat ek perfect fabric se hoti hai.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">4+ Years</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Experience in fabric manufacturing</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Satisfied customers</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">6+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Premium fabric varieties</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Karachi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Based in Pakistan</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Location</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="text-lg">
                  Shop No. 01, Moljee Street, Near Akhund Masjid, Kharadar, Karachi
                </p>
              </div>
              <p className="text-muted-foreground">
                Easily accessible location in the heart of Karachi's textile district
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;