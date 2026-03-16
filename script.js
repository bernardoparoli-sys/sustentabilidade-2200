// ===== SCRIPT PRINCIPAL =====

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    inicializarSite();
});

function inicializarSite() {
    // Elementos do DOM
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menuLista = document.querySelector('.menu-lista');
    const btnDescobrir = document.getElementById('btnDescobrir');
    const curiosidadeCard = document.getElementById('curiosidadeCard');
    const btnTopo = document.getElementById('btnTopo');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.menu-lista a');
    
    // ===== MENU HAMBURGUER (para mobile) =====
    if (menuHamburguer) {
        menuHamburguer.addEventListener('click', function() {
            menuLista.classList.toggle('mostrar');
            
            // Animação do ícone hamburguer
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('ativo'));
        });
    }
    
    // ===== BOTÃO DESCOBRIR (mostra curiosidade) =====
    if (btnDescobrir) {
        btnDescobrir.addEventListener('click', function() {
            curiosidadeCard.classList.toggle('mostrar');
            
            // Muda o texto da curiosidade
            const curiosidades = [
                "🌍 A cada minuto, perdemos o equivalente a 30 campos de futebol de florestas.",
                "💧 Até 2025, metade da população mundial viverá em áreas com escassez de água.",
                "🐝 As abelhas são responsáveis por 70% da polinização das culturas agrícolas.",
                "🌊 8 milhões de toneladas de plástico vão parar nos oceanos todos os anos.",
                "🌱 Uma árvore pode absorver até 150kg de CO2 por ano."
            ];
            
            const textoElemento = document.getElementById('curiosidadeTexto');
            const indice = Math.floor(Math.random() * curiosidades.length);
            textoElemento.textContent = curiosidades[indice];
        });
    }
    
    // ===== ANIMAÇÃO DO GRÁFICO =====
    function animarGrafico() {
        const progressBar = document.querySelector('.progresso-preenchimento');
        if (progressBar) {
            progressBar.style.width = '175%';
        }
        
        // Contador de dias
        const contadorDias = document.getElementById('contadorDias');
        if (contadorDias) {
            let dias = 214; // Dias até a sobrecarga (exemplo)
            const interval = setInterval(() => {
                if (dias <= 0) {
                    clearInterval(interval);
                } else {
                    contadorDias.textContent = dias;
                    dias--;
                }
            }, 50);
        }
    }
    
    // ===== BOTÕES "SAIBA MAIS" (modal) =====
    const modal = document.getElementById('solucaoModal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const modalImagens = document.getElementById('modalImagens');
    
    const botoesSaibaMais = document.querySelectorAll('.btn-saiba-mais');
    
    // Dados das soluções
    const solucoesDetalhes = {
        circular: {
            titulo: 'Economia Circular',
            descricao: 'A economia circular é um modelo de produção e consumo que envolve compartilhar, alugar, reutilizar, reparar, renovar e reciclar materiais e produtos existentes pelo maior tempo possível. Isso reduz o desperdício ao mínimo.',
            imagens: [
                'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ]
        },
        energias: {
            titulo: 'Energias Limpas',
            descricao: 'Energias renováveis são aquelas obtidas de fontes naturais que se regeneram naturalmente, como sol, vento, água e biomassa. A transição para essas energias é crucial para reduzir as emissões de carbono.',
            imagens: [
                'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ]
        },
        agricultura: {
            titulo: 'Agricultura Regenerativa',
            descricao: 'A agricultura regenerativa é um sistema de práticas agrícolas que visa regenerar o solo, aumentar a biodiversidade, melhorar o ciclo da água e aumentar a matéria orgânica do solo, sequestrando carbono da atmosfera.',
            imagens: [
                'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ]
        }
    };
    
    botoesSaibaMais.forEach(botao => {
        botao.addEventListener('click', function() {
            const solucao = this.getAttribute('data-solucao');
            const detalhes = solucoesDetalhes[solucao];
            
            if (detalhes) {
                modalTitulo.textContent = detalhes.titulo;
                modalDescricao.textContent = detalhes.descricao;
                
                // Adiciona imagens ao modal
                modalImagens.innerHTML = '';
                detalhes.imagens.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.style.width = '100%';
                    img.style.marginTop = '1rem';
                    img.style.borderRadius = '5px';
                    modalImagens.appendChild(img);
                });
                
                modal.classList.add('mostrar');
            }
        });
    });
    
    // Fechar modal
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.classList.remove('mostrar');
        });
    }
    
    // Fechar modal clicando fora
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('mostrar');
        }
    });
    
    // ===== ANIMAÇÃO SCROLL =====
    const elementosAnimar = document.querySelectorAll('.animate-on-scroll');
    
    function verificarScroll() {
        elementosAnimar.forEach(elemento => {
            const elementoTopo = elemento.getBoundingClientRect().top;
            const elementoVisivel = elementoTopo < window.innerHeight - 100;
            
            if (elementoVisivel) {
                elemento.classList.add('animar');
            }
        });
        
        // Verificar se a seção do gráfico está visível para animar
        const graficoSection = document.getElementById('grafico');
        if (graficoSection) {
            const graficoTopo = graficoSection.getBoundingClientRect().top;
            if (graficoTopo < window.innerHeight - 100) {
                animarGrafico();
            }
        }
        
        // Botão voltar ao topo
        if (window.scrollY > 500) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
        
        // Menu ativo
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', verificarScroll);
    window.addEventListener('load', verificarScroll);
    
    // ===== BOTÃO VOLTAR AO TOPO =====
    if (btnTopo) {
        btnTopo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== EFEITO DE TILT NOS CARDS (3D) =====
    const cardsTilt = document.querySelectorAll('[data-tilt]');
    
    cardsTilt.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    // ===== CONTADOR DE TEMPO =====
    function atualizarContador() {
        const agora = new Date();
        const fimAno = new Date(agora.getFullYear(), 11, 31);
        const diasRestantes = Math.ceil((fimAno - agora) / (1000 * 60 * 60 * 24));
        
        const contadorElemento = document.getElementById('contadorDias');
        if (contadorElemento) {
            contadorElemento.textContent = diasRestantes;
        }
    }
    
    atualizarContador();
    
    // ===== GALERIA DE IMAGENS COM LIGHTBOX =====
    const galeriaItens = document.querySelectorAll('.galeria-item');
    
    galeriaItens.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                const lightbox = document.createElement('div');
                lightbox.style.position = 'fixed';
                lightbox.style.top = '0';
                lightbox.style.left = '0';
                lightbox.style.width = '100%';
                lightbox.style.height = '100%';
                lightbox.style.backgroundColor = 'rgba(0,0,0,0.9)';
                lightbox.style.display = 'flex';
                lightbox.style.alignItems = 'center';
                lightbox.style.justifyContent = 'center';
                lightbox.style.zIndex = '3000';
                lightbox.style.cursor = 'pointer';
                
                const imgGrande = document.createElement('img');
                imgGrande.src = img.src;
                imgGrande.style.maxWidth = '90%';
                imgGrande.style.maxHeight = '90%';
                imgGrande.style.borderRadius = '10px';
                
                lightbox.appendChild(imgGrande);
                document.body.appendChild(lightbox);
                
                lightbox.addEventListener('click', function() {
                    document.body.removeChild(lightbox);
                });
            }
        });
    });
    
    // ===== EFEITO DE DIGITAÇÃO NO TÍTULO =====
    const titulo = document.querySelector('.home-content h1');
    if (titulo) {
        const textoOriginal = titulo.textContent;
        titulo.textContent = '';
        
        let i = 0;
        function digitar() {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(digitar, 100);
            }
        }
        
        // Começa a digitar após 1 segundo
        setTimeout(digitar, 1000);
    }
    
    // ===== ANIMAÇÃO DAS PARTÍCULAS =====
    function criarParticulas() {
        const particulas = document.querySelector('.particulas');
        if (!particulas) return;
        
        for (let i = 0; i < 20; i++) {
            const particula = document.createElement('div');
            particula.classList.add('particula');
            particula.style.left = Math.random() * 100 + '%';
            particula.style.animationDuration = (Math.random() * 10 + 5) + 's';
            particula.style.animationDelay = Math.random() * 5 + 's';
            particula.style.width = Math.random() * 20 + 5 + 'px';
            particula.style.height = particula.style.width;
            particulas.appendChild(particula);
        }
    }
    
    criarParticulas();
}