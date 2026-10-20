import { ProjectCard } from "./ProjectCard";
import { projects } from "./projs";

export function Projects() {
    const cards = projects.map(proj => {
        return <ProjectCard key={proj.id} project={proj}></ProjectCard>
    })
    return (
        <section id="projects" className="flex flex-col gap-5 px-10 text-2xl">
            <a href="https://github.com/d1gitale">
                <h2 className="flex flex-col active:bg-black active:text-white text-4xl hover:underline">
                    Projects
                </h2>
            </a>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cards}
            </section>
        </section>
    );
}
