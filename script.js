/* ===================================
   MENU MOBILE
=================================== */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("active");

});


/* Fechar menu ao clicar em um link */

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});


/* ===================================
   BUSCA DE LOCAIS
=================================== */

const busca = document.getElementById("buscarLocal");
const locais = document.querySelectorAll(".location-card");

busca.addEventListener("input", function () {

    const texto = busca.value.toLowerCase();

    locais.forEach(function (local) {

        const conteudo =
            local.textContent.toLowerCase();

        if (conteudo.includes(texto)) {

            local.style.display = "flex";

        } else {

            local.style.display = "none";

        }

    });

});


/* ===================================
   FORMULÁRIO DE RELATO
=================================== */

const formulario =
    document.getElementById("formDenuncia");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    const nome =
        document.getElementById("nome").value.trim();

    const local =
        document.getElementById("local").value.trim();

    const descricao =
        document.getElementById("descricao").value.trim();


    if (
        nome === "" ||
        local === "" ||
        descricao === ""
    ) {

        alert(
            "Por favor, preencha todos os campos."
        );

        return;

    }


    alert(
        "Relato registrado apenas como demonstração. " +
        "Este formulário não envia uma denúncia oficial."
    );


    formulario.reset();

});


/* ===================================
   MODO CONTRASTE
=================================== */

const contraste =
    document.getElementById("contraste");

contraste.addEventListener("click", function () {

    document.body.classList.toggle("contraste");

});


/* ===================================
   TAMANHO DA FONTE
=================================== */

const aumentarFonte =
    document.getElementById("aumentarFonte");

const diminuirFonte =
    document.getElementById("diminuirFonte");


let tamanhoFonte = 100;


aumentarFonte.addEventListener("click", function () {

    if (tamanhoFonte < 130) {

        tamanhoFonte += 10;

        document.documentElement.style.fontSize =
            tamanhoFonte + "%";

    }

});


diminuirFonte.addEventListener("click", function () {

    if (tamanhoFonte > 80) {

        tamanhoFonte -= 10;

        document.documentElement.style.fontSize =
            tamanhoFonte + "%";

    }

});


/* ===================================
   BOTÃO VOLTAR AO TOPO
=================================== */

const topo =
    document.getElementById("topo");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topo.style.display = "block";

    } else {

        topo.style.display = "none";

    }

});


topo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ===================================
   ANIMAÇÃO DOS CARDS
=================================== */

const elementos =
    document.querySelectorAll(
        ".card, .location-card, .step"
    );


const observador =
    new IntersectionObserver(
        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(20px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});
