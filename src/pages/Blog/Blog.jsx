import styles from "./Blog.module.css"

import { Link } from "react-router-dom"

const Blog = () => {
    const posts = [
        { 
            title: "Inteligencia Artificial: Os maleficios e os beneficios na programação",
            name: "artigo-IA",
            description: "Os beneficios da IA na programação parecem maravilhosos mas os maleficios podem ser tão prejudiciais quanto, você esta sendo afetado por ela ou usando ela de forma eficaz e eficiente descubra..." 
        },

        {
            title: "A decacencia do front end",
            name: "artigo-frontend",
            description: "Os beneficios da IA na programação parecem maravilhosos mas os maleficios podem ser tão prejudiciais quanto, você esta sendo afetado por ela ou usando ela de forma eficaz e eficiente descubra..."
        }
    ]

    return (
        <section className={styles.blog_container}>
            <ul className={styles.blog_post_list}>
                {
                    posts.map((post) => {
                        return (
                            <li key={post.name} className={styles.blog_post_item}>
                                <Link to={`/blog/${post.name}`} className={styles.blog_post_link}>
                                    <h3>{post.title}</h3>

                                    <p>{post.description}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Blog
