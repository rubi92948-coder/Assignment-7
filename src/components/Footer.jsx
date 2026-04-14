import logo from "../assets/logo-xl.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

function Footer() {
  return (
    <footer className="mt-10 bg-green-900 text-white">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-green-800 text-center">

        {/* Logo */}
        <img
          src={logo}
          alt="KeenKeeper Logo"
          className="mx-auto w-72 md:w-96"
        />

        {/* Description */}
        <p className="text-green-100 mt-4 max-w-1xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        {/* Social Title */}
        <h3 className="text-xl font-semibold mt-6">
          Social Links
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-4">

          <a href="#">
            <img
              src={facebook}
              alt="Facebook"
              className="w-8 h-8 hover:scale-110 transition"
            />
          </a>

          <a href="#">
            <img
              src={twitter}
              alt="Twitter"
              className="w-8 h-8 hover:scale-110 transition"
            />
          </a>

          <a href="#">
            <img
              src={instagram}
              alt="Instagram"
              className="w-8 h-8 hover:scale-110 transition"
            />
          </a>

        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">

        {/* Left Side */}
        <div className="mb-3 md:mb-0">
          © 2026 KeenKeeper. All rights reserved.
        </div>

        {/* Right Side */}
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;