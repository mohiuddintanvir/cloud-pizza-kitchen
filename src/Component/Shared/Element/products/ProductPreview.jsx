import { useEffect, useState } from "react"
import ProductsInfo from "./ProductsInfo"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ProductPreview = () => {
    const [products, setProducts] = useState([]);

    // carusal array
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    useEffect(() => {
        fetch('https://kitchen-server-mu.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


const onAddProduct=(product)=>{
    console.log(product)
}





    return (
        <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
            <div >
                <Carousel responsive={responsive}>
                {
                    products.length > 0 && products.map((product, index) => {
                        return (
                            <div className="w-full p-4">
                                <ProductsInfo key={index} product={product} onAddProduct={onAddProduct} />
                            </div>
                            
                        )

                    })

                }</Carousel>
            </div>

        </div>
    )
}