import Head from "next/head";
import Image from "next/image";
import app from '@/app/Detail.module.css';

// Generate static paths using `generateStaticParams` for pre-rendering pages
export async function generateStaticParams() {
    const res = await fetch("https://dummyjson.com/products?skip=21&limit=21");;
    const data = await res.json();

    return data.products.map((item) => ({
        id: String(item.id),
    }));
}

// Component to display product details
export default async function ProductDetail({ params }) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    const product = await res.json();

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <>
            {/* Move Head component outside the main JSX content */}
            <Head>
                <title>{product.title}</title>
            </Head>
            
            <div className={app.container}>
                <div>
                    <Image src={product.thumbnail} width={300} height={300} alt={product.title} />
                </div>
                <div className={app.detail}>
                    <h1>ชื่อสินค้า : {product.title}</h1>
                    <h2>ราคา : ${product.price}</h2>
                    <h2>หมวดหมู่ : {product.category}</h2>
                    <h3>แบรนด์ : {product.brand}</h3>
                    <h4>ข้อมูลพื้นฐาน : {product.description}</h4>
                    <h4>เรดติ้ง : {product.rating}/5</h4>
                </div>
            </div>
        </>
    );
}
