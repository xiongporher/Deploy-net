import app from '@/app/page.module.css'
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      
      <div className={app.container}>
          <h1 className={app.title}>หน้าแรกของเว็บไซต์</h1>
          <Image src="/shopping.svg" width={400} height={400} alt='logo' />
          <p>ยินดีต้อนรับสู่ร้านค้า</p>
          <Link href="/products" className={app.btn}>ดูสินค้าทั้งหมด</Link>
      </div>
    </>
  );
}
