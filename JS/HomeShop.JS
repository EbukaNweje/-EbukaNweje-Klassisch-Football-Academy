//Home Page Array and Mapping 
const HomeShop = [
    {
        Image: './assets/image/shop/jersey 1.jpg',
        Product: 'Home Jersey',
    },
    {
        Image: './assets/image/shop/jersey 1.jpg',
        Product: 'Away Jersey',
    },
    {
        Image: './assets/image/shop/jersey 1.jpg',
        Product: 'Keeper Jersey',
    },
    {
        Image: './assets/image/shop/jersey 1.jpg',
        Product: 'Keeper Jersey',
    },
    {
        Image: './assets/image/shop/jersey 1.jpg',
        Product: 'Keeper Jersey',
    },
    {
        Image: './assets/image/shop/jersey 1.jpg',
        Product: 'Keeper Jersey',
    },
]

const HomeShopContain = document.querySelector('.ShopCardHolder')
HomeShop.forEach((element) => {
    const adding = `
    <div class="cardShop"> 
        <div class="cardShop1"> 
            <div class="shopimg"> <img src='${element.Image}' alt="k"/> </div>
            <h6> ${element.Product}</h6>
            <div class="ShopNow"> Shop Now</div>
        </div>
    </div>
    `
    HomeShopContain.innerHTML += adding
})


