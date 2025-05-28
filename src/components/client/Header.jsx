import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-50">
      <header className="container mx-auto flex justify-between py-4 ">
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              to="/"
              className="text-base text-slate-700 hover:text-[#FF7B29] transition-colors duration-200 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-base text-slate-700 hover:text-[#FF7B29] transition-colors duration-200 font-medium"
            >
              Shop
            </Link>
          </li>
        </ul>
        <Link to="/" className="flex items-center">
          <p className="py-2 px-3 bg-[#FF7B29] rounded-full font-bold text-white mr-2 shadow-md">
            ST
          </p>
          <p className="font-bold text-2xl text-slate-800">Everest</p>
          <p className="font-bold text-2xl text-[#FF7B29] ml-1">.</p>
        </Link>

        <div className="flex items-center gap-4 text-xl text-slate-700">
          <button className="hover:text-[#FF7B29] transition-colors duration-200">
            <i className="ri-user-line" />
          </button>
          <button className="hover:text-[#FF7B29] transition-colors duration-200">
            <i className="ri-search-line" />
          </button>
          <button className="hover:text-[#FF7B29] transition-colors duration-200 relative">
            <i className="ri-shopping-cart-2-line" />
            {/* Badge */}
            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              2
            </span> */}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
