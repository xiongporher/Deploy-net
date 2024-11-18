import app from "@/app/About.module.css"
import Image from "next/image"

export default function About() {
    return (
        <>
            <div className={app.container}>
            <h1 className={app.title}>เกี่ยวกับเรา</h1>
            <Image src="/about.svg" width={500} height={500} alt='logo' />
      </div>
        </>
    )
}