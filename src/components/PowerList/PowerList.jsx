/**
 * Componente PowerList - Muestra una lista de poderes.
 * @param {Object} list - Objeto con los elementos a mostrar en la lista.
 * @returns {JSX.Element} Elemento de lista desordenada (ul) con cada poder.
 */
export default function PowerList({ list }) {
  // Convierte las claves del objeto `list` en un array para iterar
  const arrOfList = Object.keys(list);

  return (
    <ul style={{ listStyle: "none", padding: "0" }}> {/* Elimina el estilo de lista por defecto */}
      {
        // Mapea cada elemento del array para crear un ítem de lista
        arrOfList.map(powerItem => (
          <li key={powerItem}>{list[powerItem]}</li> // Renderiza cada poder con su clave como key
        ))
      }
    </ul>
  );
}
