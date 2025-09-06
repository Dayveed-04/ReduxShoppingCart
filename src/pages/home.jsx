import { useEffect, useState } from "react"
import ProductTitle from "../components/product-title";

export default function Home(){
    const [products,setProducts]=useState([]);
    const[loading,setLoading]=useState(false);

    async function fetchProducts(){
        setLoading(true)
        const response = await fetch (`https://fakestoreapi.com/products`)
        const data = await response.json();

        if (data){
            setLoading(false);
            setProducts(data);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
           

            {/* Products Section */}
            <div className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                            Featured Products
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    {loading ? (
                        <div className="flex flex-col justify-center items-center w-full py-20">
                            <div className="relative">
                                <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600"></div>
                                <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-purple-400 opacity-20"></div>
                            </div>
                            <p className="mt-4 text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                                Loading amazing products...
                            </p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {
                                products && products.length ? 
                                products.map ((item, index) => <ProductTitle key={item.id} product={item}/>) : 
                                <div className="col-span-full text-center py-20">
                                    <div className="text-6xl mb-4">🛍️</div>
                                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                                    <p className="text-gray-500">Please try again later.</p>
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 px-4 mt-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Why Choose <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Dayveed</span>?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Quality Products</h4>
                            <p className="text-gray-300">Carefully curated items from trusted brands</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Best Prices</h4>
                            <p className="text-gray-300">Competitive pricing on all our products</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Fast Delivery</h4>
                            <p className="text-gray-300">Quick and reliable shipping worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}