// Filter menu categories
function filterMenu(category) {
    const items = document.querySelectorAll('.item');
    const buttons = document.querySelectorAll('.cat-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Customization Modal Logic
let basePrice = 0;
let currentItem = '';

function openCustomizer(itemName, price) {
    currentItem = itemName;
    basePrice = price;
    document.getElementById('modal-item-name').innerText = itemName;
    document.getElementById('modal-item-price').innerText = `Base Price: ₱${price}`;
    document.getElementById('customizer-modal').style.display = 'flex';
}

function closeCustomizer() {
    document.getElementById('customizer-modal').style.display = 'none';
    document.getElementById('customizer-form').reset();
}

function confirmOrder() {
    alert(`Added ${currentItem} to your order list!`);
    closeCustomizer();
}

// Close modal when clicking outside content area
window.onclick = function(event) {
    const modal = document.getElementById('customizer-modal');
    if (event.target === modal) {
        closeCustomizer();
    }
}
