import Image from "next/image";
import app from '@/app/Product.module.css'
import Link from "next/link";
export default async function Product() {
    let products = [];
    try {
        const res = await fetch("https://dummyjson.com/products?skip=21&limit=21", { cache: 'no-store' });
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        products = data.products;
        // console.log(data)
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }

    return (
        <>
            {products && products.length > 0 ? (
                <div className={app.container}>
                    {products.map(item => (
                        <div key={item.id}>
                            <Link href={'/products/'+item.id}>
                                <h2 className={app.title}>{item.title}</h2>
                                <Image src={item.thumbnail} width={300} height={300} alt={item.title}/>    
                            </Link>
                        </div>
                    
                    ))}
                </div>
            ) : (
                <p>Unable to load products at this time.</p>
            )}
        </>
    );
}
