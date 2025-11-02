import styles from "./Working.module.css"

import Card from "./Card/Card"

const Working = () => {
    return (
        <section className={styles.working_container}>
            <div className={styles.working_title_wrapp}>
                <h2>Trabalhando</h2>
            </div>

            <section className={styles.working_cards_container}>
                <Card 
                    title="Projeto" 
                    subtitle="Study Catalog" 
                    description="Site para estudantes autodidatas, que da acesso a recomendações, meus pojetos, anotações de estudo, desafios e muito mais." 
                    porcentage="41,32%" 
                />

                <Card 
                    title="Estudos" 
                    subtitle="Typescript" 
                    description="Vi um video de typescript para iniciantes, fiz anotações, pratiquei e agora estou lendo a documentação, estou no começo da documentação ainda." 
                    porcentage="41,32%" 
                />

                <Card 
                    title="Livro" 
                    subtitle="Habitos Atômicos" 
                    description="Um livro que ensina diversas tecnicas para criar e continuar bons habitos e como se livrar dos maus. Possui 300 paginas, estou na pagina 218." 
                    porcentage="72,67%" 
                />
            </section>
        </section>
    )
}

export default Working
