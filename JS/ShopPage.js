//Array Page Array and Mapping 
const ShopArray = [
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

const MainShop = document.querySelector('.MainShop')
ShopArray.forEach((element) => {
    const adding2 = `
    <div class="MainShopcard"> 
        <div class="Mainshopimg"> <img src='${element.Image}' alt="k"/> </div>
        <h6> ${element.Product}</h6> 
        <div class="MainShopNow"> Shop Now</div>
    </div>
    `
    MainShop.innerHTML += adding2
})


// let ShopPop = document.getElementById('ShopPop')
// let ShopNow = document.querySelectorAll('.MainShopNow')

// ShopNow.forEach((Show)=>{
//     // ShopPop.style.display = 'flex'
// })