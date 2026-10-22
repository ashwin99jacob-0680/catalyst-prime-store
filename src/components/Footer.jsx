import React from 'react';
import { Globe, DollarSign, Cloud, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#232f3e] text-white select-none">
      
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-xs font-semibold py-3.5 text-center text-gray-200 hover:text-white transition-colors cursor-pointer"
      >
        Back to top
      </button>

      {/* Directory Columns */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          <div>
            <h4 className="font-bold text-sm text-white mb-3">Get to Know Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:underline">About Catalyst Store</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#press" className="hover:underline">Press Releases</a></li>
              <li><a href="#science" className="hover:underline">Catalyst Science</a></li>
              <li><a href="#devices" className="hover:underline">Prime Devices</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">Make Money with Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#sell" className="hover:underline">Sell on Catalyst</a></li>
              <li><a href="#affiliate" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#fulfilment" className="hover:underline">Fulfillment by Catalyst</a></li>
              <li><a href="#advertise" className="hover:underline">Advertise Your Products</a></li>
              <li><a href="#self-publish" className="hover:underline">Self-Publish with Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">Catalyst Payment</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#cards" className="hover:underline">Catalyst Rewards Visa</a></li>
              <li><a href="#points" className="hover:underline">Shop with Points</a></li>
              <li><a href="#reload" className="hover:underline">Reload Your Balance</a></li>
              <li><a href="#currency" className="hover:underline">Catalyst Currency Converter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">Let Us Help You</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#account" className="hover:underline">Your Account</a></li>
              <li><a href="#orders" className="hover:underline">Your Orders</a></li>
              <li><a href="#shipping" className="hover:underline">Shipping Rates & Policies</a></li>
              <li><a href="#returns" className="hover:underline">Returns & Replacements</a></li>
              <li><a href="#help" className="hover:underline">Customer Service & Help</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Middle Bar: Logo & Language */}
      <div className="border-t border-[#3a4553] py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-white">catalyst</span>
            <span className="text-xs font-bold text-[#febd69]">prime</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 border border-gray-600 rounded px-2.5 py-1 text-gray-200">
              <Globe className="w-3.5 h-3.5" />
              <span>English</span>
            </div>
            <div className="flex items-center gap-1 border border-gray-600 rounded px-2.5 py-1 text-gray-200">
              <DollarSign className="w-3.5 h-3.5" />
              <span>USD - U.S. Dollar</span>
            </div>
            <div className="flex items-center gap-1.5 border border-emerald-700 bg-emerald-950/40 rounded px-2.5 py-1 text-emerald-400">
              <Cloud className="w-3.5 h-3.5" />
              <span>Hosted on Zoho Catalyst Slate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-[#131a22] py-8 text-center text-[11px] text-gray-400">
        <div className="max-w-[1200px] mx-auto px-6 space-y-2">
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <a href="#conditions" className="hover:underline">Conditions of Use</a>
            <a href="#privacy" className="hover:underline">Privacy Notice</a>
            <a href="#ads" className="hover:underline">Interest-Based Ads</a>
          </div>
          <p>&copy; 2026, Catalyst Prime Store, Inc. or its affiliates. Built for Zoho Catalyst Slate Hosting via GitHub.</p>
        </div>
      </div>

    </footer>
  );
}
