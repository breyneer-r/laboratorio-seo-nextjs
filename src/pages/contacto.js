import Head from "next/head";

export default function Contacto() {
    return (
        <>
            <Head>
                <title>Contacto | Hablemos de tu Proyecto</title>
                <meta name="description" content="Ponte en contacto con nosotros para recibir asesoramiento personalizado sobre optimización SEO y desarrollo frontend." />
                <meta name="keywords" content="Contacto, Asesoramiento, Servicios SEO, Desarrollo Next.js" />
                <meta property="og:title" content="Contacto | Hablemos de tu Proyecto" />
                <meta property="og:description" content="Ponte en contacto con nosotros para recibir asesoramiento personalizado sobre optimización SEO." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mi-sitio.com/contacto" />
            </Head>
            <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
                <h1>Contacto</h1>
                <p>¿Tienes dudas o necesitas ayuda con tu sitio web? Envíanos un mensaje y te responderemos a la brevedad posible.</p>
                <form style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                    <input type="text" placeholder="Tu nombre" style={{ padding: '8px' }} />
                    <input type="email" placeholder="Tu correo electrónico" style={{ padding: '8px' }} />
                    <textarea placeholder="Tu mensaje..." style={{ padding: '8px', minHeight: '100px' }}></textarea>
                    <button type="button" style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}>Enviar</button>
                </form>
            </div>
        </>
    );
}
