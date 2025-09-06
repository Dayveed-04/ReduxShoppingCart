import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartTile from "../components/cart-tile"

export default function Cart(){
    const[totalCart,setTotalCart]=useState(0)

    const cart = useSelector(state=>state.cart) 

    useEffect(()=>{
        const total = cart.reduce((acc,curr)=>acc +curr.price,0)
          setTotalCart(Number(total.toFixed(2)))
    },[cart])
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {
                cart && cart.length ?
                <>
                 <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto px-4 py-8">
                    <div className="flex flex-col justify-start items-center p-6">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                            Your Cart Items
                        </h2>
                        {
                            cart.map(cartItem=><CartTile key={cartItem.id} cartItem={cartItem}/>)
                        }
                    </div>
                    
                    <div className="flex flex-col justify-start items-center p-6">
                        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 w-full max-w-md border border-blue-100">
                            <h1 className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
                                Cart Summary
                            </h1>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-700 font-semibold">Total Items:</span>
                                    <span className="text-xl font-bold text-blue-600">{cart.length}</span>
                                </div>
                                
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-700 font-semibold">Total Amount:</span>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                                        ${totalCart}
                                    </span>
                                </div>
                            </div>
                            
                            <button className="w-full mt-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                <span className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    <span>Proceed to Checkout</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                 
                </>: 
                <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
                    <div className="text-center bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-12 max-w-md border border-blue-100">
                        <div className="mb-6">
                            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5m0 0h7.5a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5H7.5" />
                            </svg>
                        </div>
                        
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent mb-4">
                            Your Cart is Empty
                        </h1>
                        
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
                        </p>
                        
                        <Link to={'/'}>
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                <span className="flex items-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <span>START SHOPPING</span>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}