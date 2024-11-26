const bd_juego = [
    {
        id: 0,
        pregunta: "She______ ready for the meeting?",
        op0: "a) Am",
        op1: "b) Are",
        op2: "c)Is ",
        correcta: "2"
    },
    {
        id: 1,
        pregunta: "_______ your sister play the guitar?",
        op0: "a) Do",
        op1: "b) Did",
        op2: "c) Does",
        correcta: "2"
    },
    // Aquí puedes agregar más preguntas tradicionales si lo deseas
];

// Respuestas y contador de aciertos
let respuestas = [];
let cantiCorrectas = 0;
let numPregunta = 0;

// Función para cargar preguntas normales
function cargarPreguntas() {
    const pregunta = bd_juego[numPregunta];
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = "pregunta-" + pregunta.id;

    const h2 = document.createElement("h2");
    h2.textContent = (pregunta.id + 1) + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);

    const opciones = document.createElement("div");

    // Crear las opciones de respuesta
    opciones.appendChild(crearRadioButton(pregunta.id, "0", pregunta.op0));
    opciones.appendChild(crearRadioButton(pregunta.id, "1", pregunta.op1));
    opciones.appendChild(crearRadioButton(pregunta.id, "2", pregunta.op2));

    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

// Función para crear un radio button
function crearRadioButton(idPregunta, valor, texto) {
    const div = document.createElement("div");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "p" + idPregunta;  // Asignar el mismo nombre a todas las opciones de la misma pregunta
    input.value = valor;  // Valor de la opción (0, 1, 2)
    input.id = "opcion_" + idPregunta + "_" + valor;

    // Añadir evento para guardar la respuesta seleccionada
    input.addEventListener("change", () => {
        respuestas[idPregunta] = valor; // Guardar la opción seleccionada en el array de respuestas
    });

    // Crear el label con el texto
    const label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.textContent = texto;

    // Agregar el input y el label al div
    div.appendChild(input);
    div.appendChild(label);

    return div;
}

// Función para verificar las respuestas
let resultado = document.getElementById("resultado");
resultado.onclick = function() {
    cantiCorrectas = 0;

    for (let i = 0; i < bd_juego.length; i++) {
        const pregunta = bd_juego[i];
        const respuestaSeleccionada = respuestas[i]; // Usar el array de respuestas

        if (respuestaSeleccionada == pregunta.correcta) {
            cantiCorrectas++;
            let idcorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idcorreccion).innerHTML = "&check;";
            document.getElementById(idcorreccion).className = "acierto";
        } else {
            let id = "p" + i + respuestaSeleccionada;
            let idcorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";  // Mostrar un "X" si la respuesta es incorrecta
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idcorreccion).innerHTML = "&check;";  // Mostrar un "check" en la opción correcta
            document.getElementById(idcorreccion).className = "acierto";
        }
    }
    mostrarMensajeFinal();
};

// Mostrar mensaje final con la cantidad de respuestas correctas
function mostrarMensajeFinal() {
    const totalPreguntas = bd_juego.length;
    const mensajeFinal = document.createElement("div");
    mensajeFinal.style.textAlign = "center";
    mensajeFinal.style.marginTop = "20px";
    mensajeFinal.style.fontSize = "24px";
    mensajeFinal.style.fontWeight = "bold";

    if (cantiCorrectas === totalPreguntas) {
        mensajeFinal.textContent = "¡Carajo si le Sabes :D!";
    } else {
        mensajeFinal.textContent = "¡Ups, Echale coquito :,c!";
    }

    document.getElementById("juego").appendChild(mensajeFinal);
}

// Función para cargar preguntas adicionales con audio
function cargarPreguntasAdicionales() {
    const bd_juego_adicional = [
        {
            id: 100,
            pregunta: "SCRIPT 1",
            audio: "audio1.MPEG", // Ruta al audio
            op0: "a) Tom is not in.",
            op1: "b) Sarah is not there.",
            op2: "c) Sarah called Tom.",
            op3: "d) Tom called Sarah.",
            correcta: "1",
        },
        {
            id: 101,
            pregunta: "SCRIPT 2",
            audio: "audio2.MPEG", // Ruta al audio
            op0: "a) The tour is about modern civilizations",
            op1: "b) The exhibit is about recent artifacts.",
            op2: "c) The museum is closed.",
            op3: "d) Ancient civilizations left artifacts.",
            correcta: "3",
        },
        {
            id: 102,
            pregunta: "SCRIPT 3",
            audio: "audio3.MPEG" ,
            op0: "a) The woman doesn't like the new restaurant.",
            op1: "b) The man should avoid the new restaurant.",
            op2: "c) The woman recommends trying the new restaurant.",
            op3: "d) The man thinks the food is terrible",
            correcta: "2",
        },
        {
            id: 103,
            pregunta: "SCRIPT 4",
            audio: "audio4.MPEG" ,
            op0: "a) The sale is at ABC Electronics.",
            op1: "b) The sale is only on old gadgets.",
            op2: "c) The sale is next month.",
            op3: "d) The sale is on this weekend.",
            correcta: "3",
        },
        {
            id: 104,
            pregunta: "SCRIPT 5",
            audio: "audio5.MPEG" ,
            op0: "a) The candidate has no experience in project management.",
            op1: "b) The candidate's project was late and over budget.",
            op2: "c) The candidate led a successful project in the past.",
            op3: "d) The candidate is not willing to talk about their experience",
            correcta: "1",
        },
    ];

    bd_juego_adicional.forEach((pregunta) => {
        const contenedor = document.createElement("div");
        contenedor.className = "contenedor-pregunta";
        contenedor.id = "adicional-" + pregunta.id;

        const h2 = document.createElement("h2");
        h2.textContent = pregunta.id + " - " + pregunta.pregunta;  // Aquí no sumes 1 si no lo deseas
        contenedor.appendChild(h2);

        // Crear y agregar el elemento de audio
        const audio = document.createElement("audio");
        audio.src = pregunta.audio;  // Ruta al archivo de audio
        audio.controls = true;  // Permitir que el usuario controle la reproducción
        contenedor.appendChild(audio);
        
        // Crear las opciones de respuesta
        const opciones = document.createElement("div");
        opciones.appendChild(crearRadioButton(pregunta.id, "0", pregunta.op0));
        opciones.appendChild(crearRadioButton(pregunta.id, "1", pregunta.op1));
        opciones.appendChild(crearRadioButton(pregunta.id, "2", pregunta.op2));
        opciones.appendChild(crearRadioButton(pregunta.id, "3", pregunta.op3));

        contenedor.appendChild(opciones);

        // Añadir la pregunta al contenedor principal
        document.getElementById("juego-adicional").appendChild(contenedor);
    });
}

// Cargar todas las preguntas al inicio
for (let i = 0; i < bd_juego.length; i++) {
    cargarPreguntas();
    numPregunta++;
}

// Cargar preguntas adicionales con audio
cargarPreguntasAdicionales();

