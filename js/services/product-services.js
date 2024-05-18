const productList = () => {
    return fetch("http://localhost:3001/products")
            .then((response) => response.json())
            .catch ((error) => console.log(error))
}

const createProduct = (name, price, image) => {
    return fetch("http://localhost:3001/products", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    }).then((res) => res.json())
    .catch((error) => console.log(error));
};

const deleteProduct = (id)  => {
    return fetch(`http://localhost:3001/products/${id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        }
    }).then((res) => res.json())
    .catch((error) => console.log(error));
};

export const servicesProducts = {
    productList, createProduct, deleteProduct
};