
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to discuss your uniform fabric requirements? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Our Location</h3>
                          <p className="text-muted-foreground">
                            Shop No. 01, Moljee Street<br />
                            Near Akhund Masjid, Kharadar<br />
                            Karachi, Pakistan
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Phone Numbers</h3>
                          <div className="space-y-2">
                            <a href="tel:03211660362" className="block text-muted-foreground hover:text-primary transition-colors">
                              📞 0321-1660362
                            </a>
                            <a href="https://wa.me/923323804080" className="block text-muted-foreground hover:text-primary transition-colors">
                              📱 0332-3804080 (WhatsApp)
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Business Hours</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                            <p>Sunday: 10:00 AM - 5:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <MessageCircle className="h-6 w-6 text-primary" />
                        <span>WhatsApp Chat</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Instant response ke liye WhatsApp par message karein. 
                        Hum aapko fabric samples aur pricing details provide karenge.
                      </p>
                      <Button className="w-full" asChild>
                        <a href="https://wa.me/923323804080">
                          Start WhatsApp Chat
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Phone className="h-6 w-6 text-primary" />
                        <span>Direct Call</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Immediate assistance ke liye direct call karein. 
                        Hum aapke sawal ka jawab denge aur best solution provide karenge.
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="tel:03211660362">
                          Call Now: 0321-1660362
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <MapPin className="h-6 w-6 text-primary" />
                        <span>Visit Our Shop</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Physical samples dekhne ke liye hamare shop visit karein. 
                        Kharadar, Karachi mein easily accessible location.
                      </p>
                      <Button variant="secondary" className="w-full" asChild>
                        <a href="https://maps.google.com/?q=Moljee+Street+Kharadar+Karachi" target="_blank" rel="noopener noreferrer">
                          Get Directions
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-lg opacity-90 mb-6">
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
      </div>
    </div>
  );
};

export default ContactPage;