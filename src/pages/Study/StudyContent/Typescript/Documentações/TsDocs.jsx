import "../../../../../styles/studySubList.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const TsDocs = () => {
    return (
        <section className="container">
            <GoBack path="/estudando/typescript" />

            <h3>Typescript Documentação</h3>

            <ul className="list">
                <li>
                    <a href="/docs/typescript/Docs/typescript-para-programadores-javascript.pdf" target="_blank">
                        Typescript Para Programadores Javascript (pdf)
                    </a>
                </li>
                
                <li>
                    <a href="/docs/typescript/Docs/typescript-para-programadores-funcionais.pdf" target="_blank">
                        Typescript Para Programadores Funcionais (pdf)
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default TsDocs
