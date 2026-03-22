import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="mt-20 border-t border-lime-500/10 bg-[#120916] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <img
            src="/assets/logo.png"
            alt="Psyfreeman"
            className="mb-4 h-16 w-auto object-contain"
          />
          <p className="max-w-xs text-sm leading-6 text-gray-400">
            Contemporary collector art, drops, physical works, NFTs, and phygital editions.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
            Links
          </h3>

          <div className="space-y-3 text-sm text-gray-300">
            <a
              href="https://x.com/psyfreeman"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-lime-300"
            >
              <div className="h-4 w-4 text-lime-400" />
              <span>@psyfreeman</span>
            </a>

            <a
              href="https://instagram.com/dvestibaksov"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-lime-300"
            >
              <FaInstagram className="h-4 w-4 text-lime-400" />
              <span>@dvestibaksov</span>
            </a>

            <a
              href="https://t.me/psyfreeman"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-lime-300"
            >
              <FaTelegramPlane className="h-4 w-4 text-lime-400" />
              <span>@psyfreeman</span>
            </a>

            <a
              href="mailto:psyfreeman@me.com"
              className="flex items-center gap-3 hover:text-lime-300"
            >
              <MdEmail className="h-4 w-4 text-lime-400" />
              <span>psyfreeman@me.com</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
            Email List
          </h3>
          <p className="mb-4 text-sm leading-6 text-gray-400">
            Get updates about new drops, mints, and collector releases.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-xl border border-lime-500/20 bg-[#1b1028] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
            />
            <button className="rounded-xl border border-lime-500/30 bg-lime-400 px-5 py-3 text-sm font-bold text-black hover:bg-lime-300">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-lime-500/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-gray-500 md:flex-row md:items-center md:justify-between md:px-6">
          <span>© 2026 Psyfreeman Φ</span>
          <span>Support the art · Crypto / Visa / Mastercard</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;