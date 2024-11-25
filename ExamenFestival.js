const bd_juego = [
    {

        id: 0,
        pregunta: " She______ ready for the meeting?",
        op0: "a) Am",
        op1: "b) Are",
        op2: "c)Is ",
        correcta: "2"
    },
    {
        id: 1,
        pregunta: " _______ your sister play the guitar?",
        op0: "a) Do",
        op1: "b) Did",
        op2: "c) Does",
        correcta: "2"
    },
    {
        id: 2,
        pregunta: "The sun _____ in the east?",
        op0: "a) Rises",
        op1: "b) Rise",
        op2: "c) Rising",
        correcta: "0"
    },
    {
        id: 3,
        pregunta: " Charlie _______ on weekends",
        op0: "a) Doesn't work",
        op1: "b) Doesn't works",
        op2: "c) Don't work",
        correcta: "0"
    },
    {
        id: 4,
        pregunta: " _______ is your best friend? Maria",
        op0: "a) Why",
        op1: "b) When",
        op2: "c) Who",
        correcta: "2"
    },
    {
        id: 5,
        pregunta: " _______ do you get to school? I get to school by bus",
        op0: "a) How",
        op1: "b) What",
        op2: "c) Where",
        correcta: "0"
    },
    {
        id: 6,
        pregunta: " The cat is licking _______ paws.",
        op0: "a) Her",
        op1: "b) Its",
        op2: "c) His",
        correcta: "1"
    },
    {
        id: 7,
        pregunta: " The ______ chocolate.",
        op0: "a) Hot, delicious",
        op1: "b) Delicius, hot",
        op2: "c) Hottest, delicious",
        correcta: "1"
    },
    {
        id: 8,
        pregunta: " _____ front yard is beautiful.",
        op0: "a) A",
        op1: "b) The",
        op2: "c) An",
        correcta: "1"
    },
    {
        id: 9,
        pregunta: " We have _____ hour to finish the Project.",
        op0: "a) A",
        op1: " b) The",
        op2: "c) An",
        correcta: "2"
    },
    {
        id: 10,
        pregunta: " _____ bags of chips are there on the table?",
        op0: "a) How many",
        op1: "b) How much",
        op2: "c) Is there",
        correcta: "0"
    },
    {
        id: 11,
        pregunta: " ______ chicken do we have?",
        op0: "a) How Many",
        op1: "b)  How Much",
        op2: "c) Are there",
        correcta: "1"
    },
    {
        id: 12,
        pregunta: " How many _____ do you have?",
        op0: "a) Childs",
        op1: "b) Childrens",
        op2: "c) Children",
        correcta: "2"
    },
    {
        id: 13,
        pregunta: " The police officer is ___ the cars.",
        op0: "a) Stoping",
        op1: "b) Stopping",
        op2: "c) Stops",
        correcta: "1"
    },
    {
        id: 14,
        pregunta: " I live ____ Oxford Street ____ London.",
        op0: "a) On / In",
        op1: "b) In / On",
        op2: "c) At / Under",
        correcta: "0"
    },
    {
        id: 15,
        pregunta: " Don't make ___ noise. She wants to get ___ sleep.",
        op0: "a) Any / Some",
        op1: "b) Some / Any",
        op2: "c) Many / A lot",
        correcta: "0"
    },
    {
        id: 16,
        pregunta: " 'Hi, Chris. ____ is my friend Jona.'' Hi, Jona. Nice to meet you'",
        op0: "a) That",
        op1: "b) These",
        op2: "c) This",
        correcta: "0"
    },
    {
        id: 17,
        pregunta: " I need to find Mandy. I took ____ jacket by mistake. ",
        op0: "a) Are / Aren't",
        op1: "b) Is / Aren't ",
        op2: "c) Is / Isn't",
        correcta: "2"
    },
    {
        id: 18,
        pregunta: " I need to find Mandy. I took _____ jacket by mistake. ",
        op0: "a) Her's",
        op1: "b) Its",
        op2: "c) Her",
        correcta: "2"
    },
    {
        id: 19,
        pregunta: " Do you ______ the avocado? ",
        op0: "a) Like",
        op1: "b) Likes",
        op2: "c) Linking",
        correcta: "0"
    },
    {
        id: 20,
        pregunta: ".- He _____ swim. He's afraid of water. ",
        op0: "a) Can",
        op1: "b) Cans",
        op2: "c) Can't",
        correcta: "2"
    },
    {
        id: 21,
        pregunta: " We should _______ begin tests in 48 hours",
        op0: "a) Be able to",
        op1: "b) Will be able to",
        op2: "c) Are able to",
        correcta: "1"
    },
    {
        id: 22,
        pregunta: " They _______ get home before midnigth. ",
        op0: "a) Go",
        op1: "b) Never",
        op2: "c) Always go",
        correcta: "2"
    },
    {
        id: 23,
        pregunta: " The children _______ stay up late. ",
        op0: "a) Sometimes ",
        op1: "b)  Rarely go",
        op2: "c) Go",
        correcta: "0"
    },


];


let respuestas = [];
let cantiCorrectas = 0;
let numPregunta = 0;

// Cargar preguntas dinámicamente
function cargarPreguntas() {
    const pregunta = bd_juego[numPregunta];
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = "pregunta-" + pregunta.id;

    const h2 = document.createElement("h2");
    h2.textContent = (pregunta.id + 1) + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);

    const opciones = document.createElement("div");
    opciones.className = "opciones";

    for (let i = 0; i < 3; i++) { // Suponemos que cada pregunta tiene 3 opciones
        const label = crearLabel(i, pregunta[`op${i}`]);
        opciones.appendChild(label);
    }

    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

function crearLabel(num, txtOpcion) {
    const label = document.createElement("label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "p" + numPregunta; // Cada pregunta tiene un grupo único
    input.value = num;

    // Usar closure para asociar correctamente la pregunta y la opción
    input.onclick = (function (preguntaId, opcionSeleccionada) {
        return function () {
            seleccionar(preguntaId, opcionSeleccionada);
        };
    })(numPregunta, num);

    const span = document.createElement("span");
    span.textContent = txtOpcion;

    label.appendChild(input);
    label.appendChild(span);
    return label;
}

// Guardar la respuesta seleccionada
function seleccionar(pos, opElegida) {
    respuestas[pos] = opElegida;
    console.log(`Respuesta seleccionada para la pregunta ${pos}: ${opElegida}`);
}
// Calcular resultados correctos
function calcularResultados() {
    cantiCorrectas = 0; // Reinicia los aciertos

    for (let i = 0; i < bd_juego.length; i++) {
        const pregunta = bd_juego[i];
        console.log(`Pregunta ${i}: Correcta: ${pregunta.correcta}, Elegida: ${respuestas[i]}`);

        if (pregunta.correcta == respuestas[i]) {
            cantiCorrectas++;
        }
    }

    document.getElementById("aciertos").value = cantiCorrectas; // Mostrar el total
    console.log(`Total respuestas correctas: ${cantiCorrectas}`);
}

// Verificar que todas las preguntas estén respondidas
function verificarRespuestas() {
    for (let i = 0; i < bd_juego.length; i++) {
        if (respuestas[i] === undefined) {
            alert(`Por favor, responde la pregunta ${i + 1}.`);
            return false;
        }
    }
    return true;
}

// Manejo del botón "Enviar Resultados"
document.addEventListener('DOMContentLoaded', function () {
    // Cargar preguntas al iniciar
    for (let i = 0; i < bd_juego.length; i++) {
        cargarPreguntas();
        numPregunta++;
    }

    const boton = document.getElementById('enviarResultados');
    if (!boton) {
        console.error('El botón "enviarResultados" no existe en el DOM.');
        return;
    }

    boton.onclick = async function () {
        if (!verificarRespuestas()) {
            return; // Detener si hay preguntas sin responder
        }

        calcularResultados();

        const userName = document.getElementById('nombre').value.trim();
        const userGroup = document.getElementById('grupo').value.trim();

        if (!userName || !userGroup) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const data = { nombre: userName, grupo: userGroup, aciertos: cantiCorrectas };
        localStorage.setItem('userName', userName);
        localStorage.setItem('userGroup', userGroup);
        localStorage.setItem('cantiCorrectas', cantiCorrectas);

        console.log("Enviando datos:", data);

        try {
            const response = await fetch('http://localhost:3000/resultados', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Resultados enviados correctamente.');
            } else {
                alert('Error al enviar los resultados.');
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
            alert('Error al conectar con el servidor.');
        }
    };
});
