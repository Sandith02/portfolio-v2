
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Sandith Sithmaka Thenuwara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;