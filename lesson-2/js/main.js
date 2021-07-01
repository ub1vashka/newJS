class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }


    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());

//           block.innerHTML += item.render();
        }
    }
    calcSum() {
        let s = 0;
        for (let product of this.goods) {
            s += product.price; 
        }
        console.log(s); 
    }
}


class ProductItem{
    constructor(product,img='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product__item">
                <img class="product__img" src="${this.img}" width="250" height="150">
                <h3 class="product__title">${this.title}</h3>
                <p class="product__price">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.calcSum ();

class Cart {
    //добавить товар в корзину
    plusGoods () { 

    }
    //вычислить сумму товаров в корзине
    cartSum () {

    }
    //удалить товар из корзины
    deleteGoods () {

    }
    //сохроняем корзину в localStorage
    saveCart () {

    }
}



// const products = [
//     {id: 1, title: 'notebook', price: 2000},
//     {id: 2, title: 'mouse', price: 20},
//     {id: 3, title: 'keyboard', price: 200},
//     {id: 4, title: 'gamepad', price: 50},
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (product,img='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg') =>{
//     return `<div class="product__item">
//                 <img class="product__img" src="${img}" width="250" height="150">
//                 <h3 class="product__title">${product.title}</h3>
//                 <p class="product__price">${product.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };

// const renderPage = list => {
//     document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
// }; // Когда преобразуется массив в строку, JS выводит элементы в строку через запятую. 
// //  Для этого использую Join с пустыми кавычками, чтобы был пробел между элементами.

// // const renderPage = list => {
// //     const productsList = list.map(item => renderProduct(item.title,item.price));
// //     console.log(productsList);
// //     document.querySelector('.products').innerHTML = productsList;
// // };

// renderPage(products);




