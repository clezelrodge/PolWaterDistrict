import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img src="/PolWD_Logo.jpg" alt="Polomolok Water District Logo" className="h-16 w-16 full object-cover mb-4" />
            <h3 className="text-lg font-bold mb-4">Polomolok Water District</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Serving clean, reliable, and sustainable water solutions to the municipality of Polomolok since 1980.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><button className="hover:text-white transition-colors cursor-pointer">Online Services</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Bill Inquiry</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Water Interruptions</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Downloadable Forms</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Dulay Subdivision, National Highway, Poblacion, Polomolok, South Cotabato, Philippines</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span>(083) 552-8008</span>
                  <span>09101961330</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>pol_wd@yahoo.com.ph</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex flex-col gap-1">
                <span>Monday - Friday</span>
                <span>7:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-200">
          <p>&copy; 2026 Polomolok Water District. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}