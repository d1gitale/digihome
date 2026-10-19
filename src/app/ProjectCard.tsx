import Image from "next/image";

type CardProps = {
    project: {
        id: number,
        name: string,
        thumbnail: string,
        thumbnail_w: number,
        thumbnail_h: number,
        description: string,
        stack: string[],
        link: string
    }
}

export function ProjectCard({ project }: CardProps) {
    const techs = project.stack.map((tech, index) => {
        return (
            <p key={index}>
                {tech}
            </p>
        );
    });

    return (
        <div className="bg-black text-white p-5">
            <Image src={project.thumbnail} alt={project.name} width={project.thumbnail_w} height={project.thumbnail_h}></Image>
            <div>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className="flex flex-row flex-wrap gap-2 md:gap-3">
                    {techs}
                </div>
            </div>
        </div>
    );
}
