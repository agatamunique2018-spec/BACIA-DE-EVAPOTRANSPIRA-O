// ===================================
// CONTADORES
// ===================================

function animarContador(id, valorFinal) {

    const elemento = document.getElementById(id);

    if (!elemento) return;

    let valor = 0;

    const intervalo = setInterval(() => {

        valor++;

        elemento.innerText = valor;

        if (valor >= valorFinal) {

            clearInterval(intervalo);

        }

    }, 150);

}

animarContador("beneficiosContador", 6);
animarContador("etapasContador", 5);
animarContador("odsContador", 4);


// ===================================
// MENU
// ===================================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 100) {

        nav.style.background = "#1b5e20";

        nav.style.boxShadow =
            "0 4px 20px rgba(0,0,0,.3)";

    } else {

        nav.style.background =
            "rgba(0,0,0,.75)";

        nav.style.boxShadow = "none";

    }

});


// ===================================
// ANIMAÇÃO DOS CARDS
// ===================================

const cards = document.querySelectorAll(
    ".card, .foto, .saiba-card, .grupo-card"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0px)";

            }

        });

    }

);

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all 0.8s ease";

    observer.observe(card);

});


// ===================================
// FOLHAS CAINDO
// ===================================

for (let i = 0; i < 15; i++) {

    const folha =
        document.createElement("div");

    folha.innerHTML = "🍃";

    folha.classList.add("folha");

    folha.style.position = "fixed";

    folha.style.top = "-50px";

    folha.style.left =
        Math.random() * 100 + "vw";

    folha.style.fontSize =
        (20 + Math.random() * 15) + "px";

    folha.style.opacity =
        Math.random() * 0.7 + 0.3;

    folha.style.pointerEvents = "none";

    folha.style.zIndex = "1";

    folha.style.animation =
        `cair ${5 + Math.random() * 8}s linear infinite`;

    document.body.appendChild(folha);

}


// ===================================
// KEYFRAMES DAS FOLHAS
// ===================================

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes cair{

    0%{

        transform:
        translateY(-50px)
        rotate(0deg);

    }

    100%{

        transform:
        translateY(110vh)
        rotate(360deg);

    }

}

`;

document.head.appendChild(style);


// ===================================
// BENEFÍCIOS INTERATIVOS
// ===================================

function mostrarInfo(id) {

    document
        .querySelectorAll(".info-beneficio")
        .forEach(info => {

            if (info.id !== id) {

                info.style.display = "none";

            }

        });

    const atual =
        document.getElementById(id);

    if (atual.style.display === "block") {

        atual.style.display = "none";

    } else {

        atual.style.display = "block";

    }

}


// ===================================
// SAIBA MAIS
// ===================================

function abrirSaibaMais() {

    const area =
        document.getElementById(
            "areaSaibaMais"
        );

    if (!area) return;

    if (

        area.style.display === "none" ||
        area.style.display === ""

    ) {

        area.style.display = "block";

    } else {

        area.style.display = "none";

    }

}


// ===================================
// CONSOLE
// ===================================

console.log(
    "🌱 Site carregado com sucesso!"
);

document.querySelectorAll('.foto img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');

        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.9)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';

        const imagem = document.createElement('img');
        imagem.src = img.src;
        imagem.style.maxWidth = '90%';
        imagem.style.maxHeight = '90%';
        imagem.style.borderRadius = '15px';

        overlay.appendChild(imagem);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);
    });
});