import { GetStaticProps } from "next"

import Link from "next/link"
import SEO from "../../components/SEO"
import { getPrismicClient } from "../../services/prismic"
import styles from "./posts.module.scss"
import Prismic from "@prismicio/client"
import { RichText } from "prismic-dom"

interface IPost {

    slug: string;
    title: string;
    excerpt: string;
    updateAt: string;
}

interface IPostsProps {

    posts: IPost[]

}

const Post = ({ posts }: IPostsProps) => {

    return (
        <>
            <SEO title="Posts" />
            <main className={styles.container}>
                <div className={styles.posts}>


                    {posts && posts.map((post: IPost) => {
                        return <Link key={post.slug} href={`/post/${post.slug}`}>
                            <a>
                                <time>{post.updateAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                    })}

                </div>
            </main>
        </>
    )
}

export default Post


export const getStaticProps: GetStaticProps = async () => {
    const prismic = await getPrismicClient()

    const respose = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ], {
        fetch: ['post.title', 'post.content']
    })
    const posts = respose.results.map((post: any) => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find((content: any) => content.type === "paragraph")?.text ?? "",
            updateAt: new Date(post.first_publication_date).toLocaleDateString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: {
            posts
        },
        revalidate: 12 * 60 * 60  // 12 horas

    }

} 