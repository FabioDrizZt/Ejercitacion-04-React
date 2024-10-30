/**
 * Genera los colores de fondo, borde y hover según el tipo especificado.
 * @param {string} type - Tipo de elemento (fire, water, rock).
 * @returns {Object} Colores de fondo, borde y hover correspondientes.
 */
const CardBackgroundColor = (type) => {
  switch (type) {
    case "fire":
      return {
        borderColor: "#5A0E1A", // Color del borde para el tipo "fuego"
        bgColor: "#B3001B", // Color de fondo para el tipo "fuego"
        hoverColor: "#FF4C4C" // Color al hacer hover para el tipo "fuego"
      }
    case "water":
      return {
        borderColor: "#255C99", // Color del borde para el tipo "agua"
        bgColor: "#7EA3CC", // Color de fondo para el tipo "agua"
        hoverColor: "#A9CCE3" // Color al hacer hover para el tipo "agua"
      }
    case "rock":
      return {
        borderColor: "#262626", // Color del borde para el tipo "roca"
        bgColor: "#C6C6C6", // Color de fondo para el tipo "roca"
        hoverColor: "#E0E0E0" // Color al hacer hover para el tipo "roca"
      }
    default:
      return; // Retorna undefined si el tipo no coincide con los casos
  }
}

/**
 * Genera un objeto de estilos CSS para una tarjeta con colores según el tipo y estado de hover.
 * @param {string} type - Tipo de elemento (fire, water, rock).
 * @param {boolean} isHovered - Indica si la tarjeta está en estado de hover.
 * @returns {Object} Objeto de estilos CSS para aplicar a la tarjeta.
 */
export const GetColors = (type, isHovered) => {
  const { borderColor, bgColor, hoverColor } = CardBackgroundColor(type); // Obtiene los colores según el tipo

  const styles = {
    border: `3px solid ${borderColor}`, // Establece el color y grosor del borde
    display: "flex",
    justifyContent: "space-evenly", // Alinea el contenido de manera equitativa
    flexDirection: "column", // Organiza el contenido en columna
    padding: "20px", // Espaciado interno
    width: "200px", // Ancho de la tarjeta
    backgroundColor: isHovered ? hoverColor : bgColor, // Cambia el fondo según el estado de hover
    borderRadius: "20px", // Bordes redondeados
    cursor: "pointer", // Cambia el cursor para indicar que es interactivo
    transition: "background-color 0.3s ease" // Transición suave para el cambio de color
  }

  return styles; // Retorna el objeto de estilos CSS
}
