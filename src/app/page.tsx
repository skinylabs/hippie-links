"use client";
import { useState } from "react";
import Link from "next/link";
// Impor file CSS biasa

const links = [
  {
    href: "https://wa.me/6285601569136?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Hippie.%20Boleh%20dibantu%3F",
    target: "_blank",
    label: "Whatsapp",
    color: "pink",
  },
  {
    href: "https://www.tokopedia.com/hippiefactory",
    target: "_blank",
    label: "Tokopedia",
    color: "yellow",
  },
  {
    href: "https://www.tiktok.com/@hippie.factory",
    target: "_blank",
    label: "Tiktok",
    color: "blue",
  },
  {
    href: "https://www.instagram.com/hippie.factory",
    target: "_blank",
    label: "Instagram",
    color: "green",
  },
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="container">
      {/* Logo utama */}
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="60"
          viewBox="0 0 25.22 19.67"
          className="svg-icon"
        >
          <path d="M9.99 16.79c1.39,0.3 2.46,1.45 2.63,2.88 0.17,-1.43 1.24,-2.58 2.63,-2.88 -0.64,-0.5 -1.08,-1.23 -1.21,-2.07l0 -4.12 1.3 0 0 4.63c0.4,-1.47 1.49,-2.61 2.85,-2.95l0 -1.68 1.65 0c1.03,0 1.87,-0.84 1.87,-1.87l0 -0.26c-0.34,0.44 -0.88,0.72 -1.47,0.72l-2.05 0 0 -1.94 1.43 -1.43 1.64 0c2.18,0 3.96,-1.78 3.96,-3.96l0 -0.04c-0.72,0.77 -1.75,1.25 -2.88,1.25l-2.81 0 -4.19 4.19 0 1.93 -1.3 0 0 -4.24c0.12,-0.84 0.57,-1.57 1.21,-2.07 -1.39,-0.3 -2.45,-1.45 -2.63,-2.88 -0.17,1.43 -1.24,2.58 -2.63,2.88 0.64,0.5 1.08,1.23 1.21,2.07l0 4.24 -1.32 0 0 -1.93 -4.19 -4.19 -2.81 0c-1.13,0 -2.16,-0.48 -2.88,-1.25l0 0.04c0,2.18 1.78,3.96 3.96,3.96l1.64 0 1.43 1.43 0 1.94 -2.05 0c-0.6,0 -1.13,-0.28 -1.47,-0.72l0 0.26c0,1.03 0.84,1.87 1.87,1.87l1.65 0 0 1.68c1.36,0.35 2.45,1.48 2.85,2.95l0 -4.63 1.32 0 0 4.12c-0.12,0.84 -0.57,1.57 -1.21,2.07z" />
        </svg>
      </div>

      {/* Grid link */}
      <div className="link-grid">
        {links.map(({ href, label, color }, index) => (
          <Link key={index} href={href} className={`link ${color}`}>
            {label}
          </Link>
        ))}
        <button onClick={() => setShowPopup(true)} className="link purple">
          Website
        </button>
      </div>

      <footer className="footer">
        Made with ❤️ by Hippie Factory | © 2025
      </footer>

      {/* Popup Coming Soon */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Coming Soon!</h2>
            <p>Stay tuned for something awesome.</p>
            <button onClick={() => setShowPopup(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
