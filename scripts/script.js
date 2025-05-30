// window.addEventListener('scroll', function () {
//     var header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 0);
// });

let list = document.querySelectorAll('.list');
let card = document.querySelectorAll('.card');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {

        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }

        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');


        for (let k = 0; k < card.length; k++) {
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if (card[k].getAttribute('data-item') == dataFilter || dataFilter == 'Todos') {
                card[k].classList.remove('hide');
                card[k].classList.add('active');
            }
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        const filtros = document.querySelectorAll('#filtros-categorias .list');
        const jogos = document.querySelectorAll('.game-item');
        const btnVerMais = document.getElementById('ver-mais-jogos');
        let mostrandoTodos = false;
        let categoriaAtual = 'todos';

        function filtrar(categoria) {
            let count = 0;
            jogos.forEach(jogo => {
                const cat = jogo.getAttribute('data-categoria');
                if (categoria === 'todos' || cat === categoria) {
                    if (count < 3 || mostrandoTodos) {
                        jogo.style.display = '';
                    } else {
                        jogo.style.display = 'none';
                    }
                    count++;
                } else {
                    jogo.style.display = 'none';
                }
            });
            btnVerMais.style.display = (count > 3 && !mostrandoTodos) ? 'block' : 'none';
        }

        filtros.forEach(filtro => {
            filtro.addEventListener('click', function () {
                filtros.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                categoriaAtual = this.getAttribute('data-categoria');
                mostrandoTodos = false;
                filtrar(categoriaAtual);
            });
        });

        btnVerMais.addEventListener('click', function () {
            mostrandoTodos = true;
            filtrar(categoriaAtual);
            btnVerMais.style.display = 'none';
        });

        // Inicialização
        filtrar('todos');
    });
}

// --- TRAILERS EM DESTAQUE ---
const trailers = [
    "https://www.youtube.com/embed/I65a4O5U_5k",
    "https://www.youtube.com/embed/5kcdRBHM7kM",
    "https://www.youtube.com/embed/zw47_q9wbBE?si=d6ThzFh1TG7gZXFJ",
    "https://www.youtube.com/embed/hvoD7ehZPcM?si=T2Oq4d0XOvWPdog5"
];
let trailerAtual = 0;

function atualizarTrailer() {
    const iframe = document.getElementById('trailer-video');
    if (iframe) iframe.src = trailers[trailerAtual];
}

document.addEventListener('DOMContentLoaded', function () {
    // Próximo
    const btnProximo = document.getElementById('btn-proximo-trailer');
    if (btnProximo) {
        btnProximo.onclick = function () {
            trailerAtual = (trailerAtual + 1) % trailers.length;
            atualizarTrailer();
        };
    }
    // Setas
    const setaEsq = document.querySelector('.trailer-arrow.left');
    const setaDir = document.querySelector('.trailer-arrow.right');
    if (setaEsq) {
        setaEsq.onclick = function () {
            trailerAtual = (trailerAtual - 1 + trailers.length) % trailers.length;
            atualizarTrailer();
        };
    }
    if (setaDir) {
        setaDir.onclick = function () {
            trailerAtual = (trailerAtual + 1) % trailers.length;
            atualizarTrailer();
        };
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Seleciona os campos
        const nome = form.querySelector('input[placeholder="Digite seu nome"]');
        const email = form.querySelector('input[placeholder="Digite seu Email"]');
        const mensagem = form.querySelector('textarea');

        // Remove mensagens antigas
        form.querySelectorAll('.erro-form').forEach(el => el.remove());

        let valido = true;

        // Validação do nome
        if (!nome.value.trim()) {
            mostrarErro(nome, 'Digite seu nome.');
            valido = false;
        }

        // Validação do email
        if (!email.value.trim() || !/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email.value)) {
            mostrarErro(email, 'Digite um e-mail válido.');
            valido = false;
        }

        // Validação da mensagem
        if (!mensagem.value.trim()) {
            mostrarErro(mensagem, 'Digite sua mensagem.');
            valido = false;
        }

        if (valido) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        }
    });

    function mostrarErro(campo, mensagem) {
        const erro = document.createElement('div');
        erro.className = 'erro-form';
        erro.style.color = '#ff005a';
        erro.style.fontSize = '0.95em';
        erro.style.margin = '4px 0 8px 0';
        erro.textContent = mensagem;
        campo.parentNode.appendChild(erro);
    }
});

const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});
