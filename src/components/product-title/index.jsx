import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../store/slices/cart-slice"

export default function ProductTitle({product}){
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart) 
    
    function handleAddToCart(){
        dispatch(addToCart(product))
    }

    function handleRemoveFromCart(){
        dispatch(removeFromCart(product.id))
    }
    
    const isInCart = cart.some(item => item.id == product.id)
    
    return (
        <div>
            <div className="group flex flex-col items-center bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 gap-4 p-6 h-96 mt-6 ml-3 mr-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                
                <div className="h-48 w-full overflow-hidden rounded-lg">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300 rounded-lg"
                    />
                </div>
                
                <div className="text-center px-3 w-full">
                    <h1 className="truncate mt-2 text-gray-800 font-bold text-lg max-w-full">
                        {product?.title}
                    </h1>
                    <p className="text-xl font-bold text-green-600 mt-1">
                        ${product?.price}
                    </p>
                </div>
                
                <div className="flex items-center justify-center w-full mt-auto">
                    <button 
                        className={`px-6 py-3 rounded-lg font-bold cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                            isInCart 
                                ? 'bg-red-500 hover:bg-red-600 text-white' 
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                        onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
                    >
                        {isInCart ? "Remove from cart" : "Add to cart"}
                    </button>
                </div>
            </div>
        </div>
    )
}