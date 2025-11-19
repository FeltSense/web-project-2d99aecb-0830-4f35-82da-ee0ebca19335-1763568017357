import React from 'react';
import Link from 'next/link';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">Prestige Legal</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Excellence in legal representation. Trusted by clients across the nation for over 25 years.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/corporate-law" className="text-gray-400 hover:text-white transition-colors">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link href="/litigation" className="text-gray-400 hover:text-white transition-colors">
                  Litigation
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="text-gray-400 hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/intellectual-property" className="text-gray-400 hover:text-white transition-colors">
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link href="/employment-law" className="text-gray-400 hover:text-white transition-colors">
                  Employment Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/attorneys" className="text-gray-400 hover:text-white transition-colors">
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link href="/case-results" className="text-gray-400 hover:text-white transition-colors">
                  Case Results
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Legal Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Justice Boulevard<br />
                  New York, NY 10013
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-gray-400 hover:text-white transition-colors text-sm">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:contact@prestigelegal.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  contact@prestigelegal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Prestige Legal Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
