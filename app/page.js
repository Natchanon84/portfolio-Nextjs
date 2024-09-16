import Style from "@/app/page.module.css"
import Section1 from "@/app/components/Page.section1"
import Section2 from "@/app/components/Page.section2"

export const metadata = {
  title: "Portfolio | Natchanon"
}

export default function Home() {
  return (

    <div className={Style.container}>
      <Section1 />
      <Section2 />
    </div>


  )
}
