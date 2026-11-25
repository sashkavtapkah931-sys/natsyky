
const input = document.querySelector('#shapka input[type="search"]');
const button = document.getElementById('search-button');
const cards = document.querySelectorAll('.card');

if (input && button) {
    function searchCards() {
        const query = input.value.trim().toLocaleLowerCase();

        cards.forEach(card => {
            const text = card.textContent.toLocaleLowerCase();
            card.style.display = !query || text.includes(query) ? '' : 'none';
        });
    }

    button.addEventListener('click', searchCards);
}
