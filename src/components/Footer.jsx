import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2 text-[0.813rem]">
      <Link to="/home" className="text-custom-open leading-4 hover:underline">
        Hizmet Şartları
      </Link>
      <Link to="/home" className="text-custom-open leading-4 hover:underline">
        Gizlilik Politikası
      </Link>
      <Link to="/home" className="text-custom-open leading-4 hover:underline">
        Çerez Politikası
      </Link>
      <Link to="/home" className="text-custom-open leading-4 hover:underline">
        Imprint
      </Link>
      <Link to="/home" className="text-custom-open leading-4 hover:underline">
        Erişilebilirlik
      </Link>
      <Link to="/home" className="text-custom-open leading-4 hover:underline">
        Reklam bilgisi
      </Link>
      <div className="inline-flex gap-2 flex-wrap">
        <div className="relative inline-flex leading-4">
          <button className="text-white outline-none leading-4 hover:underline inline-flex items-center">
            Daha fazla
            <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </button>
        </div>
        <p className="text-custom-open leading-4">&copy; 2024 BURCUAYDIN</p>
      </div>
    </footer>
  );
}
