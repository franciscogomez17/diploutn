import { TituloPrincipal } from "@/componentes/tituloprincipal";
import { ListaProductos } from "@/componentes/listaSuper";
import { NovedadItem } from "@/componentes/novedadItem";
import { Contador } from "@/componentes/contador";
import { BotonLuz } from "@/componentes/encendidoyapagado";
import { ListaClientes } from "@/componentes/listaClientes";
import { ContadorDeClicks } from "@/componentes/contadordeclicks";

const titulo2 = 'Segundo titulo'

const titulo3 = 'Modulo 4 Unidad 1'

const productos = [
  {id: 1, nombre: 'Bananas', precio: 3000},
  {id: 2, nombre: 'Manzanas', precio: 2500},
  {id: 3, nombre: 'Peras', precio: 2000},
];

const contenidoNovedad = {
  id: "1",
  titulo: "Next Js",
  subtitulo: "Tarea de Next Js",
  autor: "Francisco Gomez",
  cuerpo: "Esta es una tarea de Next Js que realize como practica para la diplomatura de la UTN"
};

const personas = [
  {id: 1, nombre: 'Federico Relancio', dni: 45637866},
  {id: 2, nombre: 'Tomas Rojas', dni: 46777823},
  {id: 2, nombre: 'Mateo Nieto', dni: 44321876},
  {id: 4, nombre: 'Pablo Ortiz', dni: 43221786},
]

export default function Home() {
  return (
    <div>
      <h2>Next Js</h2>
      {/*componente simple que se puede reutilizar*/}
      <TituloPrincipal titulo='Ejemplos de clase'/>
      <TituloPrincipal titulo={titulo2}/>
      <hr />
      {/*Componente para listar un array*/}
      <ListaProductos items={productos}/>
      <hr />
      {/*Multiples propiedades mas un destructuring*/}
      <NovedadItem 
      
      title={contenidoNovedad.titulo}
      subtitle={contenidoNovedad.subtitulo}
      author={contenidoNovedad.autor}
      body={contenidoNovedad.cuerpo}
      
      />
      <hr />
      <h2>Estados</h2>
      <Contador />
      <BotonLuz />
      <hr />
      <TituloPrincipal titulo={titulo3}/>
      <ListaClientes clientes={personas}/>
      <hr />
      <h3>Podes solicitar un turno con el siguiente boton</h3>
      <ContadorDeClicks />

    </div>
  );
}
