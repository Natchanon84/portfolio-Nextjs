import Image from "next/image"
import Link from "next/link"
import Style from "@/app/page.module.css"

import line from "@/app/public/line1.svg"
import github from "@/app/public/github.svg"
import email from "@/app/public/email.svg"
import img from "@/app/public/3657664w3.jpg"
function pageSection2() {

    return (
        <div className={Style.section2Container}>
            <div className={Style.content}>
                <h2>LET ME INTRODUCE MYSELF</h2>
                <br />
                <p>The beginning of becoming a web developer was a challenge that made me want to learn new things. I studied and practiced many languages ​​and frameworks such as HTML, CSS, JavaScript and frameworks like to create websites that are easy to use and efficient.</p>
                <br />
                <p>I've built this portfolio to showcase my projects and document my learning journey as I continue to develop my skills in HTML, CSS, and JavaScript. Through experimentation with React, I've gained experience in creating basic user interfaces and demonstrated my potential to deliver innovative web solutions.

                </p>
            </div>
            <div className={Style.imageSection2}>
                <Image src={img} width={430} height={430}/>
            </div>

            <div className={Style.contactSection2}>
                <h1>FIND ME ON</h1>
                <h5>Feel free to <span className={Style.color}>connect </span>with me</h5>
                <div className={Style.iconContact}>
                    <Link href="https://github.com/Natchanon84" target="_blank">
                        <Image src={github} widtd={30} height={30} />
                    </Link>
                    <Link href="mailto:natchanon.77777@gmail.com">
                        <Image src={email} width={30} height={30} />
                    </Link>

                    <Link href="https://line.me/ti/p/qJRw8UJtJk" target="_blank">
                        <Image src={line} widtd={30} height={30} />
                    </Link>
                </div>
                <h5>Tel:080-663-2918</h5>
            </div>
        </div>
    )
}

export default pageSection2
