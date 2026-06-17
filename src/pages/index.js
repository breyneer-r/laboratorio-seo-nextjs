import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
    return (
        <>
            <Head>
                <title>Inicio | Mi Proyecto SEO</title>
                <meta name="description" content="Bienvenido a la página principal de nuestro proyecto SEO construido con Next.js. Descubre cómo optimizar tu web." />
                <meta name="keywords" content="Next.js, SEO, Inicio, Optimización Web" />
                <meta property="og:title" content="Inicio | Mi Proyecto SEO" />
                <meta property="og:description" content="Bienvenido a la página principal de nuestro proyecto SEO construido con Next.js." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mi-sitio.com/" />
            </Head>
            <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
                <h1>Bienvenido a Mi Proyecto SEO</h1>
                <p>Página de inicio optimizada para buscadores.</p>
                <DynamicComponent />
            </div>
        </>
    );
}