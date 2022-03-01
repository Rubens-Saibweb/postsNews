import Prismic from "@prismicio/client"

export function getPrismicClient(req?: unknown) {
    const client = Prismic.client(String(process.env.PRISMIC_ENDPOINT), {
        req,
        accessToken: String(process.env.PRISMIC_ACCESS_TOKEN)
    }

    )

    return client

}