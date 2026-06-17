export default function LargeComponent() {
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px", borderRadius: "8px" }}>
            <h2>Componente Pesado</h2>
            <p>
                Este componente ha sido cargado dinámicamente para mejorar el rendimiento
                y reducir el tamaño del bundle inicial.
            </p>
        </div>
    );
}
