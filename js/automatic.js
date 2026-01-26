const semanasMap = {
  semana1: 5,
  semana2: 6,
  semana3: 7,
  semana4: 8
};

async function cargarSemana(semanaHtmlId, semanaNumero) {
  try {
    const response = await fetch(`data/semana${semanaNumero}.json`);
    const data = await response.json();

    // Recorremos los días de esa semana
    Object.keys(data.dias).forEach(dia => {
      const diaData = data.dias[dia];
      const contenedor = document.getElementById(`${semanaHtmlId}-${dia}`);

      if (contenedor) {
        contenedor.innerHTML = `
          <h3>${diaData.titulo}</h3>
          <ul>
            ${diaData.ejercicios.map(ej => `<li>${ej}</li>`).join("")}
          </ul>
          ${diaData.notas ? `<p><strong>Nota:</strong> ${diaData.notas}</p>` : ""}
        `;
      }
    });

  } catch (error) {
    console.error(`Error cargando ${semanaHtmlId}:`, error);
  }
}

// 🔹 Cargar todas las semanas al iniciar
Object.entries(semanasMap).forEach(([semanaHtmlId, semanaNumero]) => {
  cargarSemana(semanaHtmlId, semanaNumero);
});
