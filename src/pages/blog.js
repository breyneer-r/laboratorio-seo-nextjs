import Head from "next/head";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog | Novedades y Artículos SEO</title>
                <meta name="description" content="Lee nuestros artículos más recientes sobre estrategias avanzadas de SEO y desarrollo web en Next.js." />
                <meta name="keywords" content="Blog, Artículos, SEO, Next.js, Desarrollo Web" />
                <meta property="og:title" content="Blog | Novedades y Artículos SEO" />
                <meta property="og:description" content="Lee nuestros artículos más recientes sobre estrategias avanzadas de SEO y desarrollo web." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mi-sitio.com/blog" />
            </Head>
            <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
                <h1>Nuestro Blog</h1>
                <p>Aquí encontrarás las últimas novedades, guías y tutoriales sobre desarrollo web y posicionamiento en buscadores.</p>
                <ul>
                    <li>Cómo optimizar imágenes en Next.js</li>
                    <li>Sitemaps dinámicos y robots.txt</li>
                    <li>Mejorando el LCP (Largest Contentful Paint)</li>
                </ul>
            </div>
        </>
    );
}
