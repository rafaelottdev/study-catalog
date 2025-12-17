import styles from "./ProjectsPage.module.css"

import Project from "./Project/Project"

const Projects = () => {
    const ProjectListInfo = [
        {
            id: 1,
            title: "Cinemidia",
            imgPath: "cinemidia-project-home.jpg",
            description: "Site completo de filmes e séries, com informações detalhadas , avaliações, recomendações e trailers.",
            features: "Utiliza a API TMDB, me permitindo treinar o consumo e tratamento de dados de todos os tipos.",
            iconList: [
                {
                    vBox: "0 0 18 20",
                    rule: "",
                    svgPath: "M0 0.418213L1.578 17.351L9 19.4182L16.467 17.352L18 0.418213H0ZM14.049 6.16381H6.075L6.247 8.07901H13.944L13.318 14.3158L9.072 15.6277L4.791 14.2455L4.503 11.4601H6.527L6.687 12.8005L9.087 13.5748L11.433 12.8499L11.73 9.99516H4.416L3.854 4.24766H14.266L14.049 6.16381Z",
                },
                {
                    vBox: "0 0 18 21",
                    rule: "",
                    svgPath: "M0 0.918213L1.578 18.7522L9 20.9182L16.468 18.7532L18 0.918213H0ZM13.3 15.6402L9.007 16.8442H9L4.703 15.6402L4.406 12.4732H6.514L6.664 13.9992L8.999 14.6382L11.339 13.9982L11.584 10.9482H4.314L4.127 8.94221H11.767L11.941 6.93621H3.924L3.748 4.93021H14.254L13.3 15.6402Z",
                },
                {
                    vBox: "0 0 18 17",
                    rule: "",
                    svgPath: "M14.3355 0.918213H11.25L9 4.65155L7.07175 0.918213H0L9 16.9182L18 0.918213H14.3355ZM2.25 2.25155H4.4355L9 10.5182L13.5645 2.25155H15.75L9 14.2515L2.25 2.25155Z",
                }
            ]
        },
    ]

    return (
        <section className={styles.projects_container}>
            <div className={styles.projects_title}>
                <h2>Projetos</h2>
            </div>

            <section className={styles.projects_wrapp}>
                {
                    ProjectListInfo.map((project) => {
                        return (
                            <Project
                                key={project.id}
                                id={project.id}
                                title={project.title} 
                                imgPath={project.imgPath}
                                description={project.description}
                                features={project.features}
                                iconList={project.iconList}
                            />
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Projects
