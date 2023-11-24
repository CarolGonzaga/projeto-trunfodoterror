const villains = [
    {
        Villain: "A Coisa",
        Movie: "O Enigma do Outro Mundo - 1982",
        DamageForce: 50,
        DamageHorror: 90,
        Speed: 30,
        Regeneration: 80,
        Intelligence: 60,
    },
    {
        Villain: "Babadook",
        Movie: "O Babadook - 2014",
        DamageForce: 40,
        DamageHorror: 70,
        Speed: 30,
        Regeneration: 50,
        Intelligence: 60,
    },
    {
        Villain: "Black Phillip",
        Movie: "A Bruxa - 2015",
        DamageForce: 40,
        DamageHorror: 80,
        Speed: 30,
        Regeneration: 60,
        Intelligence: 60,
    },
    {
        Villain: "Ben Willis",
        Movie: "Eu Sei o que Vocês Fizeram no Verão Passado - 1997",
        DamageForce: 60,
        DamageHorror: 60,
        Speed: 40,
        Regeneration: 20,
        Intelligence: 50,
    },
    {
        Villain: "Daniel Robitaille",
        Movie: "Candyman - 1992",
        DamageHorror: 60,
        DamageForce: 70,
        Speed: 40,
        Regeneration: 40,
        Intelligence: 70,
    },
    {
        Villain: "Carrietta White",
        Movie: "Carrie, a Estranha - 1976",
        DamageForce: 20,
        DamageHorror: 70,
        Speed: 30,
        Regeneration: 40,
        Intelligence: 80,
    },
    {
        Villain: "Charles Lee Ray",
        Movie: "Chucky, o Brinquedo Assassino - 1988",
        DamageForce: 30,
        DamageHorror: 60,
        Speed: 40,
        Regeneration: 20,
        Intelligence: 70,
    },
    {
        Villain: "Christine",
        Movie: "Christine, o Carro Assassino - 1983",
        DamageForce: 70,
        DamageHorror: 30,
        Speed: 40,
        Regeneration: 20,
        Intelligence: 50,
    },
    {
        Villain: "Creeper",
        Movie: "Olhos Famintos - 2001",
        DamageForce: 80,
        DamageHorror: 40,
        Speed: 70,
        Regeneration: 30,
        Intelligence: 60,
    },
    {
        Villain: "Edith Brennan",
        Movie: "Mama - 2013",
        DamageForce: 20,
        DamageHorror: 80,
        Speed: 30,
        Regeneration: 40,
        Intelligence: 70,
    },
    {
        Villain: "Leena Klammer",
        Movie: "A Órfã - 2009",
        DamageForce: 40,
        DamageHorror: 70,
        Speed: 30,
        Regeneration: 40,
        Intelligence: 60,
    },
    {
        Villain: "Frederick Krueger",
        Movie: "A Hora do Pesadelo - 1984",
        DamageForce: 30,
        DamageHorror: 90,
        Speed: 50,
        Regeneration: 70,
        Intelligence: 80,
    },
    {
        Villain: "Ghostface",
        Movie: "Pânico - 1996",
        DamageForce: 40,
        DamageHorror: 70,
        Speed: 60,
        Regeneration: 30,
        Intelligence: 60,
    },
    {
        Villain: "Hannibal Lecter",
        Movie: "O Silêncio dos Inocentes - 1991",
        DamageForce: 30,
        DamageHorror: 90,
        Speed: 30,
        Regeneration: 80,
        Intelligence: 90,
    },
    {
        Villain: "Jack Torrance",
        Movie: "O Iluminado - 1980",
        DamageForce: 60,
        DamageHorror: 70,
        Speed: 30,
        Regeneration: 20,
        Intelligence: 60,
    },
    {
        Villain: "Jason Voorhees",
        Movie: "Sexta-Feira 13 - 1980",
        DamageForce: 90,
        DamageHorror: 30,
        Speed: 50,
        Regeneration: 10,
        Intelligence: 30,
    },
    {
        Villain: "John Kramer",
        Movie: "Jogos Mortais - 2004",
        DamageForce: 20,
        DamageHorror: 90,
        Speed: 30,
        Regeneration: 70,
        Intelligence: 80,
    },
    {
        Villain: "John Doe",
        Movie: "Seven: Os Sete Crimes Capitais - 1995",
        DamageForce: 30,
        DamageHorror: 90,
        Speed: 20,
        Regeneration: 70,
        Intelligence: 90,
    },
    {
        Villain: "Leatherface",
        Movie: "O Massacre da Serra Elétrica - 1974",
        DamageForce: 80,
        DamageHorror: 30,
        Speed: 50,
        Regeneration: 10,
        Intelligence: 40,
    },
    {
        Villain: "Michael Myers",
        Movie: "Halloween - 1978",
        DamageForce: 80,
        DamageHorror: 30,
        Speed: 40,
        Regeneration: 10,
        Intelligence: 50,
    },
    {
        Villain: "Norman Bates",
        Movie: "Psicose - 1960",
        DamageForce: 30,
        DamageHorror: 70,
        Speed: 30,
        Regeneration: 40,
        Intelligence: 80,
    },
    {
        Villain: "Pazuzu",
        Movie: "O Exorcista - 1973",
        DamageForce: 50,
        DamageHorror: 90,
        Speed: 20,
        Regeneration: 80,
        Intelligence: 70,
    },
    {
        Villain: "Patrick Bateman",
        Movie: "Psicopata Americano - 2000",
        DamageForce: 30,
        DamageHorror: 80,
        Speed: 50,
        Regeneration: 20,
        Intelligence: 90,
    },
    {
        Villain: "Pennywise",
        Movie: "It - A Coisa - 1990",
        DamageForce: 50,
        DamageHorror: 90,
        Speed: 40,
        Regeneration: 70,
        Intelligence: 80,
    },
    {
        Villain: "Pinhead",
        Movie: "Hellraiser - 1987",
        DamageForce: 40,
        DamageHorror: 80,
        Speed: 20,
        Regeneration: 60,
        Intelligence: 90,
    },
    {
        Villain: "Predador",
        Movie: "Predador - 1987",
        DamageForce: 90,
        DamageHorror: 40,
        Speed: 60,
        Regeneration: 30,
        Intelligence: 70,
    },
    {
        Villain: "Samara Morgan",
        Movie: "O Chamado - 2002",
        DamageForce: 10,
        DamageHorror: 80,
        Speed: 10,
        Regeneration: 80,
        Intelligence: 70,
    },
    {
        Villain: "Sil",
        Movie: "A Experiência - 1995",
        DamageForce: 70,
        DamageHorror: 50,
        Speed: 60,
        Regeneration: 30,
        Intelligence: 50,
    },
    {
        Villain: "Sweeney Todd",
        Movie: "O Barbeiro Demoníaco da Rua Fleet - 2007",
        DamageForce: 40,
        DamageHorror: 70,
        Speed: 30,
        Regeneration: 30,
        Intelligence: 80,
    },
    {
        Villain: "Tristana Medeiros",
        Movie: "REC - 2007",
        DamageForce: 60,
        DamageHorror: 80,
        Speed: 40,
        Regeneration: 50,
        Intelligence: 50,
    },
    {
        Villain: "Tubarão Branco",
        Movie: "Tubarão - 1975",
        DamageForce: 90,
        DamageHorror: 40,
        Speed: 60,
        Regeneration: 10,
        Intelligence: 30,
    },
    {
        Villain: "Xenomorfo",
        Movie: "Alien, o Oitavo Passageiro - 1979",
        DamageForce: 80,
        DamageHorror: 60,
        Speed: 40,
        Regeneration: 20,
        Intelligence: 50,
    },
];

shuffleArray(villains);
let villainsPlayer = villains.slice(0, villains.length / 2);
let villainsMachine = villains.slice(villains.length / 2);

const btnHome = document.querySelector('#btn-home');

btnHome.addEventListener('click', () => {
    document.body.classList.add('body-cards');
    startGame();
});

function startGame() {

    const main = document.querySelector('main');
    main.innerHTML = generateGameHTML();

    const btnReset = document.getElementById('btn-reset');
    btnReset.addEventListener('click', resetGame);

    const listAttPlayer = document.querySelectorAll('.att-item');
    listAttPlayer.forEach(item => {
        item.addEventListener('click', () => {
            handleAttributeClick(item)
            highlightAttribute(item);
        });
    });
}

function shuffleArray(array) {
    for (let indexA = array.length - 1; indexA > 0; indexA--) {
        const indexB = Math.floor(Math.random() * (indexA + 1));
        [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
    }
}

function generateGameHTML() {
    const playerCard = generateCardHTML(villainsPlayer[0], 'player');
    const machineCard = generateCardHTML(villainsMachine[0], 'machine');

    return `
        <div class="result" id="result-view">
            <span id="result-text"></span>
            <span id="result-close">x</span>
        </div>
        <div class="container-cards">
            <div class="box-cards">
                <div class="cards reverse">
                    <div class="deck-container">
                        <p>Máquina</p>
                        <div class="btn-deck">Total de cartas: <span id="deck-count">${villainsMachine.length}</span></div>
                    </div>
                    ${machineCard}
                </div>
                <div class="cards">
                    <div class="deck-container">
                        <p>Você</p>
                        <div class="btn-deck">Total de cartas: <span id="deck-count">${villainsPlayer.length}</span></div>
                    </div>
                    ${playerCard}
                </div>
                <div class="btns-cards">
                    <button id="btn-reset" class="btn-draw">Reiniciar</button>
                </div>
            </div>
        </div>
    `;
}

function generateCardHTML(lista, player) {
    let cardMask = '';
    if (player == 'machine') {
        cardMask = 'card-mask-ma';
    } else {
        cardMask = 'card-mask-pl';
    }

    const imageSource = window.innerWidth <= 800 ?
        `./src/imagens/personagens/${lista.Villain.replace(/\s/g, '')}-sm.jpg` :
        `./src/imagens/personagens/${lista.Villain.replace(/\s/g, '')}.jpg`;

    return `
      <div class="card-front" id="card-${player}">
        <div class="card-mask" id="${cardMask}"></div>
        <div class="card-title">
          <p class="card-name">${lista.Villain}</p>
          <p class="card-name-movie">${lista.Movie}</p>
        </div>
        <div class="card-img">
          <img src="${imageSource}" alt="${lista.Villain}">
        </div>
        <div class="card-att">
          <ul class="card-list-att">
            <li class="att-item" data-attribute="DamageForce">
                <span>Dano Físico:</span>
                <span>${lista.DamageForce}</span>
            </li>
            <li class="att-item" data-attribute="DamageHorror">
                <span>Dano Mental:</span>
                <span>${lista.DamageHorror}</span>
            </li>
            <li class="att-item" data-attribute="Speed">
                <span>Velocidade:</span>
                <span>${lista.Speed}</span>
            </li>
            <li class="att-item" data-attribute="Regeneration">
                <span>Taxa de Regeneração:</span>
                <span>${lista.Regeneration}</span>
            </li>
            <li class="att-item" data-attribute="Intelligence">
                <span>Inteligência:</span>
                <span>${lista.Intelligence}</span>
            </li>
        
          </ul>
        </div>
      </div>
    `;
}

function resetGame() {
    shuffleArray(villains);
    villainsPlayer = villains.slice(0, villains.length / 2);
    villainsMachine = villains.slice(villains.length / 2);

    startGame();
}

function resultView(result) {
    const popUp = document.getElementById('result-view');
    const popUpText = document.getElementById('result-text');

    setTimeout(() => {
        popUp.style.display = 'block';
        popUpText.textContent = result;
    }, 800);

    document.getElementById('result-close').addEventListener('click', () => {
        popUp.style.display = 'none';
        if (result === 'Fim de Jogo!') {
            resetGame();
        } else {
            startGame();
        }
    })
}

function handleAttributeClick(item) {
    document.getElementById('card-mask-ma').style.display = 'none';

    const attType = item.getAttribute('data-attribute');
    const attPlayer = villainsPlayer[0][attType];
    const attMachine = villainsMachine[0][attType];

    if (attPlayer > attMachine) {
        playerWin();
    } else if (attPlayer === attMachine) {
        playerDraw();
    } else {
        playerLose();
    }
}

function highlightAttribute(item) {
    // Remove a classe de destaque de todos os itens
    const allItems = document.querySelectorAll('.att-item');
    allItems.forEach(item => item.classList.remove('card-highlight'));

    // Adiciona a classe de destaque ao item correspondente no card-machine
    const attribute = item.getAttribute('data-attribute');
    const machineItem = document.querySelector(`.card-front#card-machine .att-item[data-attribute="${attribute}"]`);
    machineItem.classList.add('card-highlight');
}

// falta adicionar a mecanica de troca de cartas
// falta adicionar os quesitos de vitória ou derrota (deck zerado)
// falta adicionar a inteligência e interação da máquina

function playerWin() {
    villainsPlayer.push(villainsMachine.shift());
    villainsPlayer.push(villainsPlayer.shift());
    if (villainsMachine.length === 0) {
        resultView('Fim de Jogo!');
    } else {
        resultView('Você Ganhou!');
    }
}

function playerLose() {
    villainsMachine.push(villainsPlayer.shift());
    villainsMachine.push(villainsMachine.shift());
    if (villainsPlayer.length === 0) {
        resultView('Fim de Jogo!');
    } else {
        resultView('Você Perdeu!');
    }
}

function playerDraw() {
    villainsMachine.push(villainsMachine.shift());
    villainsPlayer.push(villainsPlayer.shift());
    resultView('Empatou');
}