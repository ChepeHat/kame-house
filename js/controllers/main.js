import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector('[data-product]')
const form = document.querySelector('[data-form]');



function createCard (name, price, image, id){
    const card = document.createElement('li');
    // card.classList.add('product__card');

    card.innerHTML = `
        <li class="product__card" id="product__elements-card">
            <img class="card__image" src="${image}" alt="${name}">
            <h3 class="card__name">${name}</h3>
            <div class="card__bottom">
                <p class="card__bottom-price">$ ${price}</p>
                <button class="card__bottom-delete" data-id=${id}">
                    <img src="assets/trash.svg" alt="Eliminar"></img>
                </button>
            </div>
        </li>
    `;
    
    // productContainer.appendChild(card);
    const deleteButton = card.querySelector('[data-id]');
    deleteButton.addEventListener("click", async () => {
        try {
            await servicesProducts.deleteProduct(id);
            card.remove(); // Elimina la tarjeta del DOM
        } catch (error) {
            console.log(error);
        }
    });

    return card;
}

const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        console.log(listProducts)

         // Limpiar el contenedor antes de agregar los productos
        productContainer.innerHTML = "";

        listProducts.forEach (product => {
            const card = createCard(product.name, product.price, product.image, product.id)
            productContainer.appendChild(card);
        });

    } catch (error) {
        console.log(error)
    }
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const image = document.querySelector('[data-image]').value;

    try{
        await servicesProducts.createProduct(name, price, image)
        render();
        } catch (error) {
            console.log(error);
    }
});



render();