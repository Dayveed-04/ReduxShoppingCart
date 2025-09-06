import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({cartItem}){
    const dispatch = useDispatch();
    
    function handleRemoveFromCart(){
        dispatch(removeFromCart(cartItem.id))
    }

    return (
        <div className="flex items-center p-6 justify-between bg-gradient-to-br from-slate-50 to-blue-50 shadow-lg hover:shadow-2xl transition-all duration-300 mt-3 mb-3 rounded-2xl border border-blue-100 group hover:border-blue-200 backdrop-blur-sm">
            <div className="flex items-center flex-1">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <img 
                        src={cartItem?.image} 
                        className="relative h-24 w-24 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 ring-2 ring-white" 
                        alt={cartItem?.title}
                    />
                </div>
                <div className="ml-6 flex-1 space-y-3">
                    <h1 className="text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent font-semibold leading-tight line-clamp-2">
                        {cartItem?.title}
                    </h1>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 font-medium">Price:</span>
                        <p className="text-2xl bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent font-bold">
                            ${cartItem?.price}
                        </p>
                    </div>
                </div>
            </div>
            <div className="ml-4">
                <button 
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0 rounded-xl font-medium px-6 py-3 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transform active:scale-95"
                    onClick={handleRemoveFromCart}
                >
                    <span className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <span>Remove From Cart</span>
                    </span>
                </button>
            </div>
        </div>
    )
}