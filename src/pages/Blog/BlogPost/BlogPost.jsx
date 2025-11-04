import styles from "./BlogPost.module.css"

import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"

import GoBack from "../../../components/GoBack/GoBack"

const files = import.meta.glob("./posts/*.md", { as: "raw" })

const BlogPost = () => {
    const { slug } = useParams()
    const filePath = `./posts/${slug}.md`

    const [content, setContent] = useState("")

        useEffect(() => {
            if(files[filePath]) {
                files[filePath]().then((md) => setContent(md))
            }

            else {
                setContent("# Artigo Não Encontrado")
            }
        }, [slug])

    return (
        <article className={styles.article_container}>
            <GoBack />

            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    )
}

export default BlogPost
