import Head from "next/head";
import Image from "next/image";
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
                <meta property="og:image" content="/images/seo-image.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mi-sitio.com/" />
            </Head>
            <main style={{ 
                minHeight: '100vh', 
                padding: '60px 20px', 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
                color: '#1e293b'
            }}>
                <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em', color: '#0f172a' }}>
                        Bienvenido a Mi Proyecto SEO
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: '#64748b', lineHeight: '1.6' }}>
                        Página de inicio ultra optimizada para buscadores, con carga rápida, diseño moderno y componentes dinámicos.
                    </p>
                    
                    <div style={{ 
                        borderRadius: '24px', 
                        overflow: 'hidden', 
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                        marginBottom: '3rem',
                        position: 'relative',
                        width: '100%',
                        height: '400px',
                        backgroundColor: '#e2e8f0'
                    }}>
                        <Image
                            src="/images/seo-image.webp"
                            alt="Estrategia y Optimización SEO en Next.js"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>

                    <DynamicComponent />
                </div>
            </main>
        </>
    );
}