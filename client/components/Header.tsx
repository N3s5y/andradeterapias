import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="px-6 py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fe7aabf8df4f14ee888b3b92af9b9197b%2Fca3636890bab4661aedbbe77d527eaa9?format=webp&width=800"
            alt="Andrade Terapias - Circular Logo"
            className="h-16 w-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fe7aabf8df4f14ee888b3b92af9b9197b%2F955135ddf82349ea8c51c0d428a04412?format=webp&width=800"
            alt="Andrade Terapias - Brand Name"
            className="h-12 w-auto hidden sm:block"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
