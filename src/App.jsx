import Card from "./components/Card/Card"
import { Pokemon } from "./data/pokemonData"

/**
 * Componente principal App - Renderiza una lista de tarjetas de Pokémon organizadas por tipo.
 * @returns {JSX.Element} Contenedor principal con el título y las tarjetas de Pokémon.
 */
function App() {
  // Obtiene los tipos de Pokémon (claves del objeto Pokemon)
  const typesOfPokemon = Object.keys(Pokemon);

  return (
    <div style={{ padding: "20px", alignItems: "center" }}> {/* Contenedor principal */}
      <h1>List of Pokemons</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-evenly" }}>
        {
          // Itera sobre cada tipo de Pokémon y renderiza una tarjeta
          typesOfPokemon.map(type => (
            <Card
              key={Pokemon[type].pokemonName} // Clave única basada en el nombre del Pokémon
              data={Pokemon[type]} // Pasa los datos del Pokémon a la tarjeta
              type={type} // Pasa el tipo de Pokémon para personalizar el estilo
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
