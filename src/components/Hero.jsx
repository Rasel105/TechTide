import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              TechTide
            </span>
          </h1>
          <p className="py-6">
            TechTide is your go-to source for the latest trends, insights, and
            tutorials in the world of technology. Stay ahead of the curve with
            in-depth articles and practical resources for developers and tech
            enthusiasts.
          </p>
          <div className="flex gap-2 justify-center">
            <Link
              to="/blogs"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white">
                Read Blogs
              </span>
            </Link>
            <Link
              to="/bookmarks"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white">
                Bookmarks
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
