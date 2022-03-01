
import { GetStaticPaths, GetStaticProps } from "next/types"
import SEO from "../../components/SEO"
import styles from "./post.module.scss"

import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../services/prismic"

interface IPost {
post : {
    slug: string;
    title: string;
    content: string;
    updateAt: string;
}
    
}


const Post = ({post} :IPost ) => {




    return (
        <>
            <SEO title="Posts" />
            <main className={styles.container}>
                <article className={styles.posts}>

                    <h1>{post.title}</h1>
                    <time>{post.updateAt}</time>
                    <div className={styles.content} 
                    dangerouslySetInnerHTML = {{__html : post.content}}
                    />

                </article>
            </main>
        </>
    )
}

export default Post




export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: true,
    }
}


export const getStaticProps: GetStaticProps = async (ctx) => {

    const { slug }: any = ctx.params

    const prismic = await getPrismicClient()

    const respose: any = await prismic.getByUID('post', String(slug), {})

    const post = {
        slug,
        title: RichText.asText(respose.data.title),
        content: RichText.asText(respose.data.content),
        updateAt: new Date(respose.first_publication_date).toLocaleDateString('pt-br', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return {
        props: {
            post
        },
        revalidate: 12 * 60 * 60  // 12 horas

    }

}
