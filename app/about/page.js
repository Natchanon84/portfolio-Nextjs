import Style from "@/app/Style/About.module.css"
import Image from "next/image"
import profile from "@/app/public/d11.jpg"
export const metadata = {
  title: "About | Natchanon"
}

function About() {

  return (
    <div className={Style.container}>

      <div className={Style.header}>
        <h1> About Me</h1>
      </div>

      <div className={Style.description}>
        <Image src={profile} width={120} height={150} className={Style.imgProfile} />
        <div >
          <p><strong>Full name:</strong> Natchanon Phomuang</p>
          <p><strong>Birthday:</strong> 8 April 1996  <strong>Age:</strong>28</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Height:</strong> 175cm<strong> Weigth:</strong> 80kg</p>
          <p><strong>Nationality:</strong> Thai</p>
          <p><strong>Religion:</strong> Buddhism</p>
          
          <p><strong>Contact:</strong> 080-663-2918 <strong>E-mail:</strong>natchanon.77777@gmail.com</p>
          <p><strong>Address:</strong> 102/20 Moo1, Khok Faed Subdistrict, Nong Chok District, Bangkok, Thailand</p>

          <br />
          <h3>Educational Background</h3>
          <br />
          <p><strong> • 2016 - 2022</strong> Bachelor of Industrial Technology in Power Electronics <strong> | King Mongkut's University of Technology North Bangkok</strong> </p>
          <p><strong> • 2014 - 2016</strong> Diploma in Electronics
            <strong> | Minburi Technical College</strong></p>
          <p><strong> • 2011 - 2014</strong> Vocational Certificate in Electronics
            <strong> | Minburi Technical College</strong></p>
          <p><strong>• 2008 - 2011</strong> Secondary education
            <strong> | Bodindecha (Sing Singhaseni) School</strong></p>

          <br />
          <h3>Working Experience</h3>
          <br />

          <p><strong>• 2022 - 2023 </strong>Electronic Technician
            <strong> | mu Space and Advanced Technology Co.,Ltd.</strong> </p>
          <p>- Developed a high-efficiency inverter for the Project "Powerbox"
            <br />
            - Implementing a DSP-based control circuit that can rapidly adapt to dynamic operating conditions and achieve precise power control, all while meeting compact size and weight requirements.</p>
          <br />

          <p><strong>• 2015 - 2016 </strong>Technician
            <strong> | K.G. Corporation Co.,Ltd
            </strong> </p>
          <p>- Check the operation of VRV air conditioning system.
            <br />
            - Preventive maintenance of VRV air conditioning system.</p>
          <br />
          <p><strong>• 2014 - 2015 </strong>Internship
            <strong> | Microchip electronic service Co.,Ltd.
            </strong> </p>
          <p>- Check and repair PCB boards used with the system Control the operation of machinery in the factory.</p>
          <br />
          <h3>Stack</h3>
          <p>- HTML</p>
          <p>- CSS</p>
          <p>- JavaScript</p>
          <p>- React</p>
          <p>- Next.js</p>
          <p>- Bootstrap</p>
          <br />
          <h3>Tool</h3>
          <p>- Visual Studio Code</p>
          <p>- Git,Github</p>
          <p>- Postman</p>
          <p>- Figma</p>
          <p>- Adobe Photoshop</p>

        </div>

      </div>
    </div>


  )
}

export default About