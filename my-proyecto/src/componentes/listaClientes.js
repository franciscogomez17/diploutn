export function ListaClientes(props){

    return(
        <div>

            <ul>

                {props.clientes.map(cliente => (

                    <li key={cliente.id}>
                        Cliente: {cliente.nombre} - DNI: {cliente.dni}
                    </li>
                )

                )}
            </ul>
        </div>
    );
}