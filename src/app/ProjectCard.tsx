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
            <p key={index} className="border-black border-3 px-1 mt-3 hover:bg-black hover:text-white cursor-default select-none">
                {tech}
            </p>
        );
    });

    return (
        <div className="bg-white border-black border-5 p-5">
            <Image src={project.thumbnail} alt={project.name} width={project.thumbnail_w} height={project.thumbnail_h} className="w-full max-h-40 object-cover border-black border-5"></Image>
            <div>
                <a href={project.link}><h1 className="mt-6 font-bold text-4xl hover:underline active:bg-black active:text-white">{project.name}</h1></a>
                <p>{project.description}</p>
                <div className="flex flex-row flex-wrap gap-2 md:gap-3">
                    {techs}
                </div>
            </div>
        </div>
    );
}
