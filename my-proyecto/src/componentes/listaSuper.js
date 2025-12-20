export function ListaProductos(props){
    return(
        <div>
            <h2>Lista productos del super</h2>
            <ul>

                {props.items.map(item => (

                    <li key={item.id}>
                        Producto: {item.nombre} - Precio: ${item.precio}
                    </li>
                ))}

            </ul>
        </div>
    );
}