import { FaInstagram } from 'react-icons/fa';
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-4 md:flex-row md:justify-between md:text-left">
        {/* Texto principal */}
        <p className="text-sm leading-relaxed max-w-md">
          Conheça a praia mais bela do Rio Grande do Sul
        </p>

        {/* Links e contato */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-medium">
          <span className="hover:text-white transition">
            TURISMO EM TORRES
          </span>
          <span className="hidden sm:block">•</span>
          
          <span className="hidden sm:block">•</span>

          <a
            href="https://www.instagram.com/turismoemtorres/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition whitespace-nowrap"
          >
            <FaInstagram className="text-lg" />
            Turismo em Torres
          </a>
        </div>
      </div>

      {/* Linha divisória e direitos autorais */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Turismo em Torres — Todos os direitos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;