import Style from "@/app/page.module.css"
import Image from "next/image"
import img1 from "@/app/public/3918929.jpg"

function pageSection1() {

    return (
        <div className={Style.section1Container}>


            <div className={Style.contentLeft}>
                <Image
                    src={img1}
                    alt="Picture of the author"
                    width={500}
                    height={500} />
            </div>

            <div className={Style.contentRight}>
                <h1>Hi There!</h1>
                <br />
                <h2>I'm <span className={Style.color}>Natchanon Phomuang</span></h2>
                <br/>
                <p>a recent graduate in <strong>Industrial Technology in Power Electronics</strong> from King Mongkut's University of Technology North Bangkok. With my engineering foundation, I'm excited to apply problem-solving skills to the field of web development. I'm currently developing my skills in HTML, CSS, and JavaScript, and have explored React for building user interfaces</p>
            </div>
        </div>
    )
} 

export default pageSection1