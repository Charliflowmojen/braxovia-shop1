document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Kawaii Notebook", price: 10, image: "https://source.unsplash.com/200x200/?notebook,kawaii" },
        { name: "Cute Tea Cup", price: 15, image: "https://source.unsplash.com/200x200/?tea,cup" },
        { name: "LED Night Lamp", price: 20, image: "https://source.unsplash.com/200x200/?lamp,cute" },
        { name: "Kawaii Backpack", price: 30, image: "https://source.unsplash.com/200x200/?backpack,kawaii" }
    ];

    const productContainer = document.querySelector(".products");

    products.forEach(product => {
        let productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
});

let cart = [];
function addToCart(name, price) {
    cart.push({ name, price });
    document.getElementById("cart-count").innerText = cart.length;
    alert(`${name} added to cart!`);
}
