import { Fragment, useState } from 'react'
import { GetColors } from './Card.styles'
import PowerList from '../PowerList/PowerList'

/**
 * Componente Card - Renderiza una tarjeta con información de cada Pokémon.
 * @param {Object} data - Array de objetos Pokémon con propiedades como id, nombre, avatar, y poderes.
 * @param {string} type - Tipo de Pokémon para definir el color de la tarjeta.
 * @returns {JSX.Element} Fragmento que contiene una lista de tarjetas de Pokémon.
 */
export default function Card({ data, type }) {
  // Estado para rastrear la tarjeta en hover
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Fragment>
      {
        // Itera sobre el array de Pokémon y renderiza una tarjeta para cada uno
        data.map(pokemon => (
          <div
            key={pokemon.id}
            // Aplica estilos obtenidos según el tipo de Pokémon y si la tarjeta está en hover
            style={GetColors(type, hoveredCard === pokemon.id)}
            // Muestra una alerta al hacer clic sobre la tarjeta
            onClick={() => alert(`Has seleccionado a ${pokemon.pokemonName}`)}
            // Cambia el estado de hover al pasar el mouse por encima
            onMouseEnter={() => setHoveredCard(pokemon.id)}
            // Limpia el estado de hover al retirar el mouse de la tarjeta
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2>{pokemon.pokemonName}</h2> {/* Muestra el nombre del Pokémon */}
            <div style={{ width: "120px", margin: "0 auto" }}>
              <img
                style={{ width: "100%" }}
                src={pokemon.avatar}
                alt={pokemon.pokemonName} // Corrige el alt para reflejar el nombre del Pokémon
              />
            </div>
            {
              // Si el Pokémon tiene poderes, renderiza la lista usando PowerList
              pokemon.power && (
                <PowerList list={pokemon.power} />
              )
            }
          </div>
        ))
      }
    </Fragment>
  );
}
