
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import logo from '@/assets/104847682_105584367877291_8820758133566622257_n.jpg';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Elite Fabric" className="h-10 w-10 rounded-lg" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gradient">ELITE</span>
                <span className="text-sm text-muted-foreground -mt-1">FABRICS</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Pakistan's reliable Uniform Fabric Manufacturer since 2020. 
              Quality, comfort aur perfection ek hi jagah.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <span>Toptex / Winnertex</span>
              <span>Nichiee Blend</span>
              <span>Blended (36/2)</span>
              <span>18/20 Double Suiting</span>
              <span>KT White</span>
              <span>DM Shirting</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Shop No. 01, Moljee Street, Near Akhund Masjid, Kharadar, Karachi
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:03211660362" className="text-sm text-muted-foreground hover:text-primary">
                  0321-1660362
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a href="https://wa.me/923323804080" className="text-sm text-muted-foreground hover:text-primary">
                  0332-3804080
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Elite Fabric. All rights reserved. | Supplying Trust, Comfort & Durability Since 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;