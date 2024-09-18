import Style from "@/app/Style/Project.module.css"
import Image from "next/image"
import Link from "next/link"
import dataApi from "@/app/public/data/Project.json"

export const metadata = {
    title: "Project | Natchanon"
}

function Project() {
    return (
        <div className={Style.container}>

            <div className={Style.Header}>
                <p>My Recent <strong className={Style.color}>Work</strong></p>
            </div>
            <div className={Style.tableProject}>

                {dataApi.map(Project => (
                    // <Link href={'/project/'+ Project.id}>

                    <div key={Project.id} className={Style.itemProject}>

                        <div className={Style.imageProject}>
                            <Link href={`/project/${Project.id}`}>
                                <Image
                                    key={Project.id}
                                    src={Project.image}
                                    alt="My Image"
                                    width={500}
                                    height={300}
                                />
                            </Link>
                        </div>

                        <div className={Style.detailProject}>
                            <h4>{Project.name}</h4>
                            <p>{Project.description}</p>
                        </div>

                        <div className={Style.btnProject}>
                            <Link href={Project.github} target="_blank">
                                <button>Github</button>
                            </Link>
                            <Link href={Project.demo} target="_blank">
                                <button>Demo</button>
                            </Link>

                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default Project