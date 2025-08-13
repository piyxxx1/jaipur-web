import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-secondary-blue to-primary-blue text-white font-secondary">
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-2 lg:col-span-1">
                         <div className="mb-3">
               <Image
                 src="/logo.png"
                 alt="MoniDay Logo"
                 width={260}
                 height={90}
                 className="h-16 w-auto object-contain"
                 priority
               />
             </div>
            <p className="text-white leading-relaxed text-sm pr-4">
              Your trusted partner in Ayurvedic wellness. We blend ancient wisdom with modern science to bring you natural, effective healthcare solutions for a balanced life.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-primary font-semibold text-base mb-3 tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white hover:text-blue-200 transition-colors">Home</Link></li>
              <li><Link href="/shop" className="text-white hover:text-blue-200 transition-colors">Shop</Link></li>
              <li><Link href="/about" className="text-white hover:text-blue-200 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white hover:text-blue-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-primary font-semibold text-base mb-3 tracking-wider text-white">Contact Us</h3>
            <div className="text-white space-y-3">
              <div>
                <p className="font-medium text-white mb-1">Head Office:</p>
                <p className="leading-snug text-white text-sm">Aashirwad Apartment, A - 415<br />Sector 3, Sanganer, Pratap Nagar,<br />Jaipur (Rajasthan) - 302033</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Corporate Office:</p>
                <p className="leading-snug text-white text-sm">Green Oasis<br />Madanpur, Bahadurpur,<br />Darbhanga (Bihar) - 847101</p>
              </div>
              <div className="pt-2">
                <p className="text-white">Email: <a href="mailto:info@monidayhealthcare.com" className="text-white hover:text-blue-200 transition-colors">info@monidayhealthcare.com</a></p>
                <p className="text-white">Phone: <a href="tel:+918862930725" className="text-white hover:text-blue-200 transition-colors">+91-8862930725</a></p>
                <p className="text-white">Website: <a href="https://monidayhealthcare.com" className="text-white hover:text-blue-200 transition-colors">monidayhealthcare.com</a></p>
              </div>
            </div>
          </div>

          {/* Column 4: Working Hours */}
          <div>
            <h3 className="font-primary font-semibold text-base mb-3 tracking-wider text-white">Working Hours</h3>
            <ul className="text-white space-y-2">
              <li className="text-white"><span className="font-medium text-white">Weekdays:</span> 10AM – 5.30PM</li>
              <li className="text-white"><span className="font-medium text-white">Saturday:</span> 10AM – 4PM</li>
              <li className="text-white"><span className="font-medium text-white">Sunday:</span> Holiday</li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-blue-400/30 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-sm text-white mb-4 sm:mb-0">
            Copyright © {currentYear} MoniDay Healthcare. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-5">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-white hover:text-blue-200 transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-white hover:text-blue-200 transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-white hover:text-blue-200 transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-white hover:text-blue-200 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
