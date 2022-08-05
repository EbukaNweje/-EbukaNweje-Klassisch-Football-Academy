const BigNews = [
    {

    },

]


BigNews.forEach((element) => {
    const adding = `
    <div class="BigNews2"> 
        <h2>  United Transfer in and out</h2>
        <article>
            <h3> Features </h3>
            <i class="fa fa-share" aria-hidden="true"></i>
        </article>
    </div>
    `
    document.querySelector('.BigNews').innerHTML += adding
})