let books = [

];

function initialize() {
    const SELL_FORM = document.getElementById("sell-form");
    SELL_FORM.addEventListener("submit", addBook);

    showBooks();
}

function addBook(event) {
    event.preventDefault();

    const TITLE = event.target.title.value;
    const CATEGORY = event.target.category.value;
    const AUTHOR = event.target.author.value;
    const PRICE = event.target.price.value;
    const SELLER_NAME = event.target.sellername.value;
    const SELLER_MAIL = event.target.sellermail.value;
    const ADDRESS = event.target.address.value;
    const POSTAL = event.target.postal.value;

    let existsError = false;

    if (TITLE == "") {
        let TITLE_ERROR = document.getElementById("title-error");
        TITLE_ERROR.style.visibility = "visible";
        existsError = true;
    }
    else {
        let TITLE_ERROR = document.getElementById("title-error");
        TITLE_ERROR.style.visibility = "hidden";
    }
    if (CATEGORY == "") {
        let CATEGORY_ERROR = document.getElementById("category-error");
        CATEGORY_ERROR.style.visibility = "visible";
        existsError = true;
    }
    else {
        let CATEGORY_ERROR = document.getElementById("category-error");
        CATEGORY_ERROR.style.visibility = "hidden";
    }
    if (AUTHOR == "") {
        let AUTHOR_ERROR = document.getElementById("author-error");
        AUTHOR_ERROR.style.visibility = "visible";
        existsError = true;
    }
    else {
        let AUTHOR_ERROR = document.getElementById("author-error");
        AUTHOR_ERROR.style.visibility = "hidden";
    }
    if (PRICE == "") {
        let PRICE_ERROR = document.getElementById("price-error");
        PRICE_ERROR.style.visibility = "visible";
        existsError = true;
    }
    else {
        let PRICE_ERROR = document.getElementById("price-error");
        PRICE_ERROR.style.visibility = "hidden";

    }
    if (SELLER_NAME == "") {
        let SELLER_NAME_ERROR = document.getElementById("sellername-error");
        SELLER_NAME_ERROR.style.visibility = "visible";
        existsError = true;
    }
    else {
        let SELLER_NAME_ERROR = document.getElementById("sellername-error");
        SELLER_NAME_ERROR.style.visibility = "hidden";

    }
    if (SELLER_MAIL == "") {
        let SELLER_MAIL_ERROR = document.getElementById("sellermail-error");
        SELLER_MAIL_ERROR.style.visibility = "visible";
        existsError = true;
    }
    else {
        let SELLER_MAIL_ERROR = document.getElementById("sellermail-error");
        SELLER_MAIL_ERROR.style.visibility = "hidden";

    }
    if (ADDRESS == "") {
        let ADDRESS_ERROR = document.getElementById("address-error");
        ADDRESS_ERROR.style.visibility = "visible";
        existsError = true;
    }
    else {
        let ADDRESS_ERROR = document.getElementById("address-error");
        ADDRESS_ERROR.style.visibility = "hidden";

    }
    if ((POSTAL.length < 5) || (POSTAL.length > 5)) {
        let POSTAL_ERROR = document.getElementById("postal-error");
        POSTAL_ERROR.style.visibility = "visible";
        existsError = true;
    }
    else {
        let POSTAL_ERROR = document.getElementById("postal-error");
        POSTAL_ERROR.style.visibility = "hidden";

    }
    if (!existsError) {
        books.push({
            title: TITLE,
            category: CATEGORY,
            author: AUTHOR,
            price: PRICE
        })
        const booksInStringFormat = JSON.stringify(books);
        window.localStorage.setItem("books", booksInStringFormat);
        showBooks();
    }
}

function showBooks() {
    const SELL_LIST = document.getElementById("sell-list");

    let allBooks = "";
    for (let i = 0; i < books.length; i++) {
        allBooks += `<li>Title: ${books[i].title} <br>Category: ${books[i].category} <br>Author: ${books[i].author}<br>Price: ${books[i].price}€<br><button onclick="deleteBook(${i})">Remove</button></li>`;

    }

    SELL_LIST.innerHTML = allBooks;
}

function deleteBook(bookId) {
    books.splice(bookId, 1);
    const booksInStringFormat = JSON.stringify(books);
    window.localStorage.setItem("books", booksInStringFormat);
    showBooks();
}

initialize();





