import styles from "./Project.module.css"

const Project = ({ id, title, imgPath, description, features, iconList }) => {
    return (
        <section className={styles.project_container}>
            <div className={styles.project_wrapp}>
                <div className={styles.title_wrapp}>
                    <h3>{title}</h3>
                </div>

                <div className={styles.img_wrapp}>
                    <img src={`/img/${imgPath}`} alt={`Imagem do projeto ${id}`} />
                </div>

                <div className={styles.info_container}>
                    <p>{description}</p>

                    <div className={styles.feature_wrapp}>
                        <p><span>Funcionalidades Principais:</span> {features}</p>
                    </div>

                    <div className={styles.tecnology_container}>
                        <p>Tecnologia Usadas:</p>

                        <div className={styles.tecnology_icon_wrapp}>
                            {
                                iconList.map((iconProps, id) => {
                                    return (
                                        <svg key={id} viewBox={iconProps.vBox}>
                                            <path fillRule={iconProps.rule} clipRule={iconProps.clipRule} d={iconProps.svgPath} />
                                        </svg>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                <div className={styles.button_wrapp}>
                    <button>
                        Site
                    </button>

                    <button>
                        Código
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Project
