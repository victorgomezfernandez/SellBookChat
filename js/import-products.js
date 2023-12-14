let products = [

];

function initialize() {
    const booksInStringFormat = window.localStorage.getItem("books");
    let books = JSON.parse(booksInStringFormat);
    const BUYABLE = document.getElementById("buyable");
    let products = "";
    for (let i = 0; i < books.length; i++) {
        products +=
        `
        <div class="product">
            <ul class="book">
                <li class="item"><span>${books[i].title}, ${books[i].category} by ${books[i].author} for ${books[i].price}€</span>
                <br>
                    <input type="number" id="quantity" name="quantity" min="0" max="5">
                    <br>
                    <span class="add-to-chart slide-right">ADD TO CART</span>
                    </li>
            </ul>
        </div>
        
        `
    }

    BUYABLE.innerHTML = products;
}

initialize();