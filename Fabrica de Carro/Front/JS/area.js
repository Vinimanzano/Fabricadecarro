const mostrarDetalhesArea = async (areaNum) => {
    const modalArea = document.getElementById('modal-area');
    const areaTitle = document.getElementById('area-title');
    const carList = document.getElementById('car-list');
    const carCount = document.getElementById('car-count');
    const emptyMessage = document.getElementById('empty-message');
    const areas = document.querySelectorAll('.area');

    try {
        const response = await fetch('http://localhost:3000/alocacao');
        const alocacoes = await response.json();
        const alocacao = alocacoes.find(a => a.id === parseInt(areaNum));

        areaTitle.textContent = `Área ${areaNum}`;
        carList.innerHTML = '';

        areas.forEach(area => {
            area.style.backgroundColor = area.getAttribute('data-area') === areaNum ? 'blue' : 'gray';
        });

        if (alocacao && alocacao.automovel && alocacao.automovel.length > 0) {
            carCount.textContent = `Quantidade de carros nesta área: ${alocacao.quantidade}`;
            emptyMessage.style.display = 'none'; 

            alocacao.automovel.forEach(automovel => {
                const carItem = document.createElement('div');
                carItem.classList.add('car-item');
                carItem.innerHTML = `
                    <strong>Modelo:</strong> ${automovel.modelo}<br>
                    <strong>Preço:</strong> R$ ${automovel.preco.toFixed(2)}<br> 
                    <strong>Cliente:</strong> ${automovel.cliente ? automovel.cliente.nome : 'N/A'}<br>
                    <strong>Concessionária:</strong> ${automovel.concessionaria ? automovel.concessionaria.nome : 'N/A'}<br>
                    <button class="sell-button">Vender</button>
                `;

                const sellButton = carItem.querySelector('.sell-button');
                sellButton.addEventListener('click', () => {
                    alert(`Vender ${automovel.modelo}`);
                });

                carList.appendChild(carItem);
            });
        } else {
            emptyMessage.style.display = 'block'; 
            carCount.textContent = '';
        }

        modalArea.style.display = 'block';

    } catch (error) {
        console.error('Erro ao buscar alocações:', error);
    }
};

const closeModal = () => {
    const modalArea = document.getElementById('modal-area');
    modalArea.style.display = 'none';

    document.querySelectorAll('.area').forEach(area => {
        area.style.backgroundColor = 'gray';
    });
};

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('click', () => {
        const areaNum = area.getAttribute('data-area');
        mostrarDetalhesArea(areaNum);
    });
});

document.querySelector('.close').addEventListener('click', closeModal);

window.onclick = function(event) {
    const modalArea = document.getElementById('modal-area');
    if (event.target === modalArea) {
        closeModal();
    }
};
