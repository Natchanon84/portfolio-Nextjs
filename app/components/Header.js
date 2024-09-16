import Style from "@/app/Style/Header.module.css"
import Link from "next/link"
import Image from "next/image"
import img1 from "@/app/public/portfolio1.1.png"

function Header() {

    return (
        <div className={Style.container}>
            <div className={Style.icon}>
                {/* <Link href='/'>
                    <Image src={img1} width={40} height={40} alt="logo" />
                </Link> */}
            </div>
            <div className={Style.navi}>

                <Link href='/' className={Style.itemNavi}>Home</Link>
                <Link href='/project' className={Style.itemNavi}>Project</Link>
                <Link href='/about' className={Style.itemNavi}>About Me</Link>
                <Link href='/contact' className={Style.itemNavi}>Contact</Link>

            </div>
        </div>
    )
}

export default Header 