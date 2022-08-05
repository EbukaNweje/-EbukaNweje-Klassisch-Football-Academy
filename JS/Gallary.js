const Gallay1Contain = document.querySelector('.Gallary1')

const Gallay1ContainArray = [
    {
        GallaryImage: './assets/image/logo.png',
        GallaryName: ' Highlight: Man.U VS Chelseas'
    },
    {
        GallaryImage: './assets/image/logo.png',
        GallaryName: ' Highlight: Man.U VS Chelseas'
    },
    {
        GallaryImage: './assets/image/logo.png',
        GallaryName: ' Highlight: Man.U VS Chelseas'
    }
]

.forEach((element) => {
    const Addddd = `
    <div class="Gallary1Card"> 
        <div class="Gallary1Cardphoto"> <img src="${element.GallaryImage}" alt="NewsImage"> </div>
        <div class="Gallary1Cardtext"> 
                <h2>  ${element.GallaryName} </h2>
        </div>
    </div>
    `

    Gallay1Contain.innerHTML += Addddd
});


///////////// Galary2 /////////////////

const Gallary2contain = document.querySelector('.Gallary2')

const Gallay2ContainArray = [
    {
        GallaryImage2: './assets/image/logo.png',
        GallaryName2: 'Player 1 '
    },
    {
        GallaryImage2: './assets/image/logo.png',
        GallaryName2: ' Highlight: Man.U VS Chelseas'
    },
    {
        GallaryImage2: './assets/image/logo.png',
        GallaryName2: ' Highlight: Man.U VS Chelseas'
    },
    {
        GallaryImage2: './assets/image/logo.png',
        GallaryName2: ' 2022 internationa cup'
    },
]

Gallay2ContainArray.forEach((aaaa) => {
    const Addddd2 = `
    <div class="Gallary2Card"> 
        <div class="Gallary2Cardphoto"> <img src="${aaaa.GallaryImage2}" alt="NewsImage"> </div>
        <div class="Gallary2Cardtext"> 
                <h2>  ${aaaa.GallaryName2}  </h2>
        </div>
    </div>
    `

    Gallary2contain.innerHTML += Addddd2
});