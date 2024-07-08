// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    const idiomas = {
        es: {
            titulo_calculadora: 'Calculadora de Desplazamiento Máximo',
            tooltip_desplazamiento: 'Esta calculadora permite determinar el desplazamiento máximo utilizando una ecuación específica basada en varios factores como la calidad del material, la frecuencia de mantenimiento y la localización geográfica.',
            calidad_material: 'X1=Calidad del Material (PSI):',
            frecuencia_mantenimiento: 'X2=Frecuencia de Mantenimiento (%):',
            localizacion_geografica: 'X3=Localización Geográfica (Lux):',
            resultado: 'Desplazamiento Máximo: ',
            debil: 'Débil',
            medio: 'Medio',
            fuerte: 'Fuerte',
            clasificacion_debil: 'Débil (Desplazamiento menor a 5 mm) - Adecuado para estructuras pequeñas o bien protegidas.',
            clasificacion_media: 'Moderada (5 mm - 15 mm) - Requiere consideraciones adicionales en el diseño y construcción.',
            clasificacion_fuerte: 'Fuerte (Mayor a 15 mm) - Puede causar daños significativos a las estructuras.'
        },
        en: {
            titulo_calculadora: 'Maximum Displacement Calculator',
            tooltip_desplazamiento: 'This calculator allows you to determine the maximum displacement using a specific equation based on several factors such as material quality, maintenance frequency, and geographic location.',
            calidad_material: 'X1=Material Quality (PSI):',
            frecuencia_mantenimiento: 'X2=Maintenance Frequency (%):',
            localizacion_geografica: 'X3=Geographic Location (Lux):',
            resultado: 'Maximum Displacement: ',
            debil: 'Weak',
            medio: 'Medium',
            fuerte: 'Strong',
            clasificacion_debil: 'Weak (Displacement less than 5 mm) - Suitable for small or well-protected structures.',
            clasificacion_media: 'Moderate (5 mm - 15 mm) - Requires additional considerations in design and construction.',
            clasificacion_fuerte: 'Strong (Greater than 15 mm) - May cause significant damage to structures.'
        },
        pt: {
            titulo_calculadora: 'Calculadora de Deslocamento Máximo',
            tooltip_desplazamiento: 'Esta calculadora permite determinar o deslocamento máximo usando uma equação específica baseada em vários fatores como a qualidade do material, a frequência de manutenção e a localização geográfica.',
            calidad_material: 'X1=Qualidade do Material (PSI):',
            frecuencia_mantenimiento: 'X2=Frequência de Manutenção (%):',
            localizacion_geografica: 'X3=Localização Geográfica (Lux):',
            resultado: 'Deslocamento Máximo: ',
            debil: 'Fraco',
            medio: 'Médio',
            fuerte: 'Forte',
            clasificacion_debil: 'Fraco (Deslocamento menor que 5 mm) - Adequado para estruturas pequenas ou bem protegidas.',
            clasificacion_media: 'Moderado (5 mm - 15 mm) - Requer considerações adicionais no projeto e construção.',
            clasificacion_fuerte: 'Forte (Maior que 15 mm) - Pode causar danos significativos às estruturas.'
        },
        de: {
            titulo_calculadora: 'Maximale Verschiebungsberechner',
            tooltip_desplazamiento: 'Dieser Rechner ermöglicht die Bestimmung der maximalen Verschiebung unter Verwendung einer spezifischen Gleichung, die auf verschiedenen Faktoren basiert, wie z. B. Materialqualität, Wartungshäufigkeit und geografischer Lage.',
            calidad_material: 'X1=Materialqualität (PSI):',
            frecuencia_mantenimiento: 'X2=Wartungshäufigkeit (%):',
            localizacion_geografica: 'X3=Geografische Lage (Lux):',
            resultado: 'Maximale Verschiebung: ',
            debil: 'Schwach',
            medio: 'Mittel',
            fuerte: 'Stark',
            clasificacion_debil: 'Schwach (Verschiebung kleiner als 5 mm) - Geeignet für kleine oder gut geschützte Strukturen.',
            clasificacion_media: 'Mäßig (5 mm - 15 mm) - Erfordert zusätzliche Überlegungen in Bezug auf Design und Konstruktion.',
            clasificacion_fuerte: 'Stark (Größer als 15 mm) - Kann erhebliche Schäden an Strukturen verursachen.'
        },
        zh: {
            titulo_calculadora: '最大位移计算器',
            tooltip_desplazamiento: '此计算器允许您使用基于多种因素的特定方程式确定最大位移，例如材料质量、维护频率和地理位置。',
            calidad_material: 'X1=材料质量（PSI）：',
            frecuencia_mantenimiento: 'X2=维护频率（%）：',
            localizacion_geografica: 'X3=地理位置（勒克斯）：',
            resultado: '最大位移：',
            debil: '弱',
            medio: '中',
            fuerte: '强',
            clasificacion_debil: '弱（位移小于 5 毫米） - 适用于小型或受保护良好的结构。',
            clasificacion_media: '中等（5 毫米 - 15 毫米） - 在设计和施工中需要额外考虑。',
            clasificacion_fuerte: '强（大于 15 毫米） - 可能对结构造成重大损害。'
        }
    };

    const idiomaSeleccionado = idiomas[idioma];

    document.getElementById('titulo_calculadora').innerText = idiomaSeleccionado.titulo_calculadora;
    document.getElementById('tooltip_desplazamiento').querySelector('p').innerText = idiomaSeleccionado.tooltip_desplazamiento;

    // Actualizar etiquetas de los campos de entrada
    document.getElementById('calidad_material').parentNode.previousElementSibling.innerText = idiomaSeleccionado.calidad_material;
    document.getElementById('frecuencia_mantenimiento').parentNode.previousElementSibling.innerText = idiomaSeleccionado.frecuencia_mantenimiento;
    document.getElementById('localizacion_geografica').parentNode.previousElementSibling.innerText = idiomaSeleccionado.localizacion_geografica;

    // Actualizar texto de resultado
    document.getElementById('resultado').innerText = idiomaSeleccionado.resultado;

    // Actualizar etiquetas de la barra de color
    document.querySelectorAll('.color-segment')[0].innerText = idiomaSeleccionado.debil;
    document.querySelectorAll('.color-segment')[1].innerText = idiomaSeleccionado.medio;
    document.querySelectorAll('.color-segment')[2].innerText = idiomaSeleccionado.fuerte;

    // Actualizar etiquetas de clasificación
    document.querySelectorAll('.classification-item')[0].querySelector('p').innerText = idiomaSeleccionado.clasificacion_debil;
    document.querySelectorAll('.classification-item')[1].querySelector('p').innerText = idiomaSeleccionado.clasificacion_media;
    document.querySelectorAll('.classification-item')[2].querySelector('p').innerText = idiomaSeleccionado.clasificacion_fuerte;
}

// Función para cambiar a modo oscuro
function toggleDarkMode() {
    const body = document.body;
    const container = document.querySelector('.container');
    const languageBar = document.querySelector('.language-bar');

    // Agregar una clase al cuerpo para aplicar los estilos del modo oscuro
    body.classList.toggle('dark-mode');

    // Agregar una clase al contenedor para aplicar los estilos del modo oscuro
    container.classList.toggle('dark-mode');

    // Agregar una clase a la barra de idiomas para aplicar los estilos del modo oscuro
    languageBar.classList.toggle('dark-mode');
}

// Función para mostrar/ocultar tooltip
function toggleTooltip(id) {
  let tooltip = document.getElementById(id);
  tooltip.style.display = tooltip.style.display === "none" ? "block" : "none";
}

// Función para cerrar tooltip
function closeTooltip(id) {
  let tooltip = document.getElementById(id);
  tooltip.style.display = "none";
}

// Función para calcular el desplazamiento máximo
function calcularDesplazamiento() {
  // Obtener los valores de los campos de entrada
  let calidadMaterial = parseFloat(document.getElementById("calidad_material").value);
  let frecuenciaMantenimiento = parseFloat(document.getElementById("frecuencia_mantenimiento").value);
  let localizacionGeografica = parseFloat(document.getElementById("localizacion_geografica").value);

  // Calcular el desplazamiento
  let desplazamiento = 9.4230 - 0.0034 * calidadMaterial - 0.1185 * frecuenciaMantenimiento + 0.0212 * localizacionGeografica;

  // Mostrar el resultado
  document.getElementById("resultado").textContent = "Desplazamiento Máximo: " + desplazamiento.toFixed(2) + " mm";

  return desplazamiento;
}

// Función para actualizar el gráfico
function actualizarGrafico(desplazamiento) {
  // Datos para el gráfico
  let data = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: desplazamiento,
      gauge: {
        axis: { range: [0, 20], tickwidth: 1, tickcolor: "black" },
        bar: { color: "#81c784" },
        steps: [
          { range: [0, 5], color: "#81c784" },
          { range: [5, 15], color: "#fff176" },
          { range: [15, 20], color: "#e57373" }
        ]
      },
      domain: { x: [0, 1], y: [0, 1] }
    }
  ];

  // Diseño del gráfico
  let layout = {
    width: 400,
    height: 300,
    title: "Desplazamiento Máximo",
    margin: { t: 30, b: 30, l: 30, r: 30 }
  };

  // Actualizar el gráfico
  Plotly.newPlot("chart", data, layout);
}

// Función para calcular y actualizar el gráfico
function calcularYActualizarGrafico() {
  let desplazamiento = calcularDesplazamiento();
  actualizarGrafico(desplazamiento);
}

// Función para resetear los valores
function resetearValores() {
  document.getElementById("calidad_material").value = 100;
  document.getElementById("frecuencia_mantenimiento").value = 10;
  document.getElementById("localizacion_geografica").value = 100;
  document.getElementById("resultado").textContent = "";
  calcularYActualizarGrafico();
}

// Inicializar el gráfico al cargar la página
window.onload = function() {
  calcularYActualizarGrafico();
};