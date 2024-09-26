const storyParts = {
    start: {
        text: "Você acorda em um mundo devastado. O que você faz?",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: [
            { text: "Sair de casa", next: "city" },
            { text: "Permanecer e se esconder", next: "hide" }
        ]
    },
    city: {
        text: "Você decide sair de casa e vê uma cidade em ruínas. Você encontra um grupo de sobreviventes.",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: [
            { text: "Juntar-se ao grupo", next: "joinGroup" },
            { text: "Ignorá-los e seguir em frente", next: "continueAlone" }
        ]
    },
    hide: {
        text: "Você decide se esconder em casa com medo de ser morto por um ladrão. O que acontece depois?",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: [
            { text: "A fome te obriga a sair", next: "city" },
            { text: "Você consegue sobreviver, mas solitário.", next: "endSolo" }
        ]
    },
    joinGroup: {
        text: "Você se junta ao grupo. Juntos, vocês lutam por comida e abrigo.",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: [
            { text: "Atacar uma loja", next: "attackStore" },
            { text: "Fugir para o campo", next: "escape" }
        ]
    },
    continueAlone: {
        text: "Você ignora o grupo e segue sozinho, mas acaba cercado por zumbis.",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: [
            { text: "Lutar", next: "fight" },
            { text: "Correr", next: "run" }
        ]
    },
    attackStore: {
        text: "O ataque à loja foi bem-sucedido, mas atraiu atenção indesejada e infelizmente você não tem um final feliz.",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: []
    },
    escape: {
        text: "Você e o grupo encontram um abrigo seguro, mas você pega leptospirose e morre.",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: []
    },
    fight: {
        text: "Você luta bravamente, mas não consegue escapar.",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: []
    },
    run: {
        text: "Você consegue fugir, mas fica sozinho e perdido em uma cidade desconhecida.",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: []
    },
    endSolo: {
        text: "Você sobrevive, mas vive em solidão, sempre com medo do que pode acontecer.",
        background: "url('https://images.app.goo.gl/Ex2nXVTyenZ4Gunt8')",
        choices: []
    }
};

let currentPart = 'start';

function nextPart() {
    let part = storyParts[currentPart];
    document.getElementById('story').innerText = part.text;
    document.body.style.backgroundImage = part.background;

    let choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    part.choices.forEach(choice => {
        let button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = function() {
            currentPart = choice.next;
            nextPart();
        };
        choicesDiv.appendChild(button);
    });

    // Hide the choices container if there are no choices
    if (part.choices.length === 0) {
        choicesDiv.innerHTML = "<p>Fim da história.</p>";
    }
}

// Start the story
nextPart();

   