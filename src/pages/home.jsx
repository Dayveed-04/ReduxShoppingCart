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
        <div className="min-h-screen w-full flex justify-center items-center">
            {
                loading ? (
                    <div className="flex justify-center items-center w-full h-40">
                       <div className="animate-spin rounded-full h-10 w-10 border-4 border-black border-t-transparent"></div>
                   </div>
                ): null
            }

            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
                {
                    products && products.length ? 
                    products.map ((Item,index)=> <ProductTitle key={index} product={Item}/>): null
                }

            </div>
            </div>
    )
}