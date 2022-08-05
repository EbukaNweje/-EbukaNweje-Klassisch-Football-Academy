const News1 = [
    {
        Image: './assets/image/news/news1.jpg',
        NewsHeading: ' UNDER-18S FIXTURES RELEASED',
        NewsBody: ' The Academy season takes shape as the calendar is announced for 2022/23.',
    },
    {
        Image: './assets/image/news/news1.jpg',
        NewsHeading: ' UNDER-18S FIXTURES RELEASED',
        NewsBody: ' The Academy season takes shape as the calendar is announced for 2022/23.',
    },

]


News1.forEach((element) => {
    const adding = `
    <div class="News1Card"> 
        <div class="Cardphoto"> <img src="${element.Image}" alt="NewsImage"> </div>
        <div class="Cardtext"> 
            <div class="CardText1">
                <h2>  ${element.NewsHeading} </h2>
                <span> ${element.NewsBody} </span>
            </div>
            <div class="CardText2">
                <h2> News </h2>
                <span><i class="fa fa-share-alt" aria-hidden="true"></i></span>
            </div>
        </div>
    </div>
    `
    document.querySelector('#New1Row1').innerHTML += adding
    document.querySelector('#New1Row2').innerHTML += adding
    document.querySelector('#News1Row3').innerHTML += adding
    document.querySelector('#News1Row4').innerHTML += adding
})
