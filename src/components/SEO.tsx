import Head from "next/head"

interface ISEOProps {
    title: string
    description?: string
    image?: string
    excludeTiteSiffix?: boolean
    indexPage?: boolean
}

export default function SEO({
    title,
    description,
    image,
    excludeTiteSiffix = false,
    indexPage = true
}: ISEOProps) {

    const pageTitle = `${title} ${!excludeTiteSiffix ? "|Dev experiment" : ""}`
    const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}` : null
    return (
        <Head>

            <title>{pageTitle}</title>
            {description && (<meta name="description" content={description} />)}
            {pageImage && (<meta name="image" content={pageImage} />)}
            {!indexPage && (<meta name="robots" content="noindec , nofollow" />)}
            <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
            <meta name="MobileOptimized" content="320" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="theme-color" content="#302F38" />
            <meta name="msapplication-TileColor" content="#302F38" />
            <meta name="referrer" content="no-referrer-when-downgrade" />
            <meta name="google" content="notranslate" />

            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={pageTitle} />

            <meta property="og:image:alt" content="Thumbnail" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ContactstSmart" />
            <meta name="twitter:creator" content="@ContactstSmart" />

            <meta name="twitter:image:alt" content="Thumbnail" />
            <meta name="twitter:image:width" content="1200" />
            <meta name="twitter:image:height" content="620" />

        </Head>
    )
}