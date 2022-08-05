const News2 = [
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


News2.forEach((element) => {
    const adding = `
    <div class="News2Card"> 
        <div class="News2Cardphoto"> <img src="${element.Image}" alt="NewsImage"> </div>
        <div class="News2Cardtext"> 
            <div class="News2CardText1">
                <h2> ${element.NewsHeading} </h2>
                <span> ${element.NewsBody} </span>
            </div>
            <div class="News2CardText2">
                <h2> News </h2>
                <span><i class="fa fa-share-alt" aria-hidden="true"></i></span>
            </div>
        </div>
    </div>
    `
    document.querySelector('#New2Row1').innerHTML += adding
    document.querySelector('#New2Row2').innerHTML += adding
    document.querySelector('#News2Row3').innerHTML += adding
    document.querySelector('#News2Row4').innerHTML += adding
})

