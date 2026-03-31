// script.js

// 1. La base de datos de tu historia
const storyData = {
    inicio: {
        text: "¡Hola! Bienvenido a tu primera novela visual en HTML.",
        speaker: "Guía",
        next: "pregunta_nombre"
    },
    pregunta_nombre: {
        text: "¿Estás listo para aprender a programar esto?",
        speaker: "Guía",
        options: [
            { text: "¡Sí, claro!", next: "camino_si" },
            { text: "No estoy seguro...", next: "camino_no" }
        ]
    },
    camino_si: {
        text: "¡Excelente! El código es tu mejor aliado.",
        speaker: "Guía",
        next: "inicio"
    },
    camino_no: {
        text: "No te preocupes, paso a paso se llega lejos.",
        speaker: "Guía",
        next: "inicio"
    }
};

let currentScene = "inicio";

// 2. Elementos del DOM
const textElement = document.getElementById("dialogue-text");
const nameElement = document.getElementById("speaker-name");
const optionsElement = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");

// 3. Función para renderizar la escena
function renderScene() {
    const scene = storyData[currentScene];
    
    textElement.innerText = scene.text;
    nameElement.innerText = scene.speaker;
    
    // Limpiar opciones anteriores
    optionsElement.innerHTML = "";

    if (scene.options) {
        nextBtn.style.display = "none"; // Escondemos el botón "Siguiente"
        scene.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt.text;
            btn.onclick = () => {
                currentScene = opt.next;
                renderScene();
            };
            optionsElement.appendChild(btn);
        });
    } else {
        nextBtn.style.display = "block";
        nextBtn.onclick = () => {
            currentScene = scene.next;
            renderScene();
        };
    }
}

// Iniciar el juego
renderScene();