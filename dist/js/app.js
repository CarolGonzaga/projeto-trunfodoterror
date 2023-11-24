"use strict";
function shuffleArray(array) {
    var _a;
    for (var indexA = array.length - 1; indexA > 0; indexA--) {
        var indexB = Math.floor(Math.random() * (indexA + 1));
        _a = [array[indexB], array[indexA]], array[indexA] = _a[0], array[indexB] = _a[1];
    }
}
var villains = [
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
var villainsPlayer = villains.slice(0, villains.length / 2);
var villainsMachine = villains.slice(villains.length / 2);
var btnHome = document.querySelector('#btn-home');
btnHome.addEventListener('click', function () {
    document.body.classList.add('body-cards');
    startGame();
});
function startGame() {
    var main = document.querySelector('main');
    if (main) {
        main.innerHTML = generateGameHTML();
        var btnReset = document.getElementById('btn-reset');
        if (btnReset) {
            btnReset.addEventListener('click', resetGame);
        }
        var listAttPlayer = document.querySelectorAll('.att-item');
        listAttPlayer.forEach(function (item) {
            item.addEventListener('click', function () {
                handleAttributeClick(item);
                highlightAttribute(item);
            });
        });
    }
}
function resetGame() {
    shuffleArray(villains);
    villainsPlayer = villains.slice(0, villains.length / 2);
    villainsMachine = villains.slice(villains.length / 2);
    startGame();
}
function resultView(result) {
    var popUp = document.getElementById('result-view');
    var popUpText = document.getElementById('result-text');
    if (popUp && popUpText) {
        setTimeout(function () {
            popUp.style.display = 'block';
            popUpText.textContent = result;
        }, 800);
        var resultClose = document.getElementById('result-close');
        if (resultClose) {
            resultClose.addEventListener('click', function () {
                popUp.style.display = 'none';
                if (result === 'Fim de Jogo!') {
                    resetGame();
                }
                else {
                    startGame();
                }
            });
        }
    }
}
function handleAttributeClick(item) {
    var cardMaskMa = document.getElementById('card-mask-ma');
    if (cardMaskMa) {
        cardMaskMa.style.display = 'none';
    }
    var attType = item.getAttribute('data-attribute');
    if (attType) {
        var attPlayer = villainsPlayer[0][attType];
        var attMachine = villainsMachine[0][attType];
        if (attPlayer > attMachine) {
            playerWin();
        }
        else if (attPlayer === attMachine) {
            playerDraw();
        }
        else {
            playerLose();
        }
    }
}
function highlightAttribute(item) {
    // Remove a classe de destaque de todos os itens
    var allItems = document.querySelectorAll('.att-item');
    allItems.forEach(function (item) { return item.classList.remove('card-highlight'); });
    // Adiciona a classe de destaque ao item correspondente no card-machine
    var attribute = item.getAttribute('data-attribute');
    var machineItem = document.querySelector(".card-front#card-machine .att-item[data-attribute=\"".concat(attribute, "\"]"));
    if (machineItem) {
        machineItem.classList.add('card-highlight');
    }
}
function playerWin() {
    if (villainsMachine.length === 0) {
        resultView('Fim de Jogo!');
    }
    else {
        villainsPlayer.push(villainsMachine.shift());
        villainsPlayer.push(villainsPlayer.shift());
        resultView('Você Ganhou!');
    }
}
function playerLose() {
    if (villainsPlayer.length === 0) {
        resultView('Fim de Jogo!');
    }
    else {
        villainsMachine.push(villainsPlayer.shift());
        villainsMachine.push(villainsMachine.shift());
        resultView('Você Perdeu!');
    }
}
function playerDraw() {
    villainsMachine.push(villainsMachine.shift());
    villainsPlayer.push(villainsPlayer.shift());
    resultView('Empatou');
}
function generateCardHTML(lista, player) {
    var cardMask = '';
    if (player == 'machine') {
        cardMask = 'card-mask-ma';
    }
    else {
        cardMask = 'card-mask-pl';
    }
    var imageSource = window.innerWidth <= 800
        ? "./src/imagens/personagens/".concat(lista.Villain.replace(/\s/g, ''), "-sm.jpg")
        : "./src/imagens/personagens/".concat(lista.Villain.replace(/\s/g, ''), ".jpg");
    return "\n      <div class=\"card-front\" id=\"card-".concat(player, "\">\n        <div class=\"card-mask\" id=\"").concat(cardMask, "\"></div>\n        <div class=\"card-title\">\n          <p class=\"card-name\">").concat(lista.Villain, "</p>\n          <p class=\"card-name-movie\">").concat(lista.Movie, "</p>\n        </div>\n        <div class=\"card-img\">\n          <img src=\"").concat(imageSource, "\" alt=\"").concat(lista.Villain, "\">\n        </div>\n        <div class=\"card-att\">\n          <ul class=\"card-list-att\">\n            <li class=\"att-item\" data-attribute=\"DamageForce\">\n                <span>Dano F\u00EDsico:</span>\n                <span>").concat(lista.DamageForce, "</span>\n            </li>\n            <li class=\"att-item\" data-attribute=\"DamageHorror\">\n                <span>Dano Mental:</span>\n                <span>").concat(lista.DamageHorror, "</span>\n            </li>\n            <li class=\"att-item\" data-attribute=\"Speed\">\n                <span>Velocidade:</span>\n                <span>").concat(lista.Speed, "</span>\n            </li>\n            <li class=\"att-item\" data-attribute=\"Regeneration\">\n                <span>Taxa de Regenera\u00E7\u00E3o:</span>\n                <span>").concat(lista.Regeneration, "</span>\n            </li>\n            <li class=\"att-item\" data-attribute=\"Intelligence\">\n                <span>Intelig\u00EAncia:</span>\n                <span>").concat(lista.Intelligence, "</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    ");
}
function generateGameHTML() {
    var playerCard = generateCardHTML(villainsPlayer[0], 'player');
    var machineCard = generateCardHTML(villainsMachine[0], 'machine');
    return "\n        <div class=\"result\" id=\"result-view\">\n            <span id=\"result-text\"></span>\n            <span id=\"result-close\">x</span>\n        </div>\n        <div class=\"container-cards\">\n            <div class=\"box-cards\">\n                <div class=\"cards reverse\">\n                    <div class=\"deck-container\">\n                        <p>M\u00E1quina</p>\n                        <div class=\"btn-deck\">Total de cartas: <span id=\"deck-count\">".concat(villainsMachine.length, "</span></div>\n                    </div>\n                    ").concat(machineCard, "\n                </div>\n                <div class=\"cards\">\n                    <div class=\"deck-container\">\n                        <p>Voc\u00EA</p>\n                        <div class=\"btn-deck\">Total de cartas: <span id=\"deck-count\">").concat(villainsPlayer.length, "</span></div>\n                    </div>\n                    ").concat(playerCard, "\n                </div>\n                <div class=\"btns-cards\">\n                    <button id=\"btn-reset\" class=\"btn-draw\">Reiniciar</button>\n                </div>\n            </div>\n        </div>\n    ");
}
