import Style from "@/app/Style/Contact.module.css"
import Link from "next/link"
import Image from "next/image"

import img1 from "@/app/public/email1.svg"
import img2 from "@/app/public/telephone.svg"
import img3 from "@/app/public/address.svg"


export const metadata = {
    title: "Contact | Natchanon"
}
function Contact() {

    return (
        <div className={Style.container}>
            <div className={Style.Header}>
                <h2>Contect Me</h2>
                <h3>GET IN TOUCH</h3>
            </div>
            <form className={Style.formContact}>
                <input type="text" placeholder="Name" className={Style.inputName}></input>
                <input type="email" placeholder="Email" className={Style.inputEmail}></input>
                <textarea rows="5" placeholder="Massage" className={Style.Textarea}></textarea>
                <Link href="mailto:natchanon.77777@gmail.com">
                    <button type="submit" href="mailto:natchanon.77777@gmail.com" className={Style.btnSubmit}>Submit</button>
                </Link>
            </form>
            <div className={Style.detail}>
                <span><Image src={img1} width={30} height={30} />Natchanon.77777@gmail.com</span>
                <span><Image src={img2} width={30} height={30} />080-663-2918</span>
                <span><Image src={img3} width={30} height={30} />102/20 Moo1, Khok Faed Subdistrict, Nong Chok District, Bangkok, Thailand 10530</span>
                <div className={Style.downloadDetail}>
                    <button>Download CV</button>
                    <button>Download Resume</button>
                </div>

            </div>
        </div>
    )
}

export default Contact