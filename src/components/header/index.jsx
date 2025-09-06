import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 shadow-lg sticky top-0 z-50 backdrop-blur-md">
          <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto px-4">
            <Link to={'/'} className="group">
            <div className="ml-5">
                <h1 className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                DAYVEED SHOPPING CART
                </h1>
            </div>
            </Link>
            <ul className="flex items-center space-x-8 text-white font-semibold mr-5">
                <Link to={'/'} className="group relative">
                <li className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-105 active:scale-95">
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </li>
                </Link>
                <Link to={'/cart'} className="group relative">
                <li className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5m0 0h7.5a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5H7.5" />
                    </svg>
                    <span className="relative z-10">Cart</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </li>
                </Link>
            </ul>
            </nav>  
        </div>
    )
}