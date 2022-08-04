//Next Match Array 

const HomeNextMatchArray = [
    {
        MatchDate: ' Saturday 23 July 2023 ',
        MatchTime: '  Kick off 10:45 ',
        Image1: './assets/image/logo.png',
        Club1: 'Chelsea',
        Image2: ' ./assets/image/logo.png',
        Club2: ' Man u',
    },
    {
        MatchDate: ' Saturday 23 July 2023 ',
        MatchTime: '  Kick off 10:45 ',
        Image1: './assets/image/logo.png',
        Club1: 'Chelsea',
        Image2: ' ./assets/image/logo.png',
        Club2: ' Man u',
    },
    {
        MatchDate: ' Saturday 23 July 2023 ',
        MatchTime: '  Kick off 10:45 ',
        Image1: './assets/image/logo.png',
        Club1: 'Chelsea',
        Image2: ' ./assets/image/logo.png',
        Club2: ' Man u',
    },
    {
        MatchDate: ' Saturday 23 July 2023 ',
        MatchTime: '  Kick off 10:45 ',
        Image1: './assets/image/logo.png',
        Club1: 'Chelsea',
        Image2: ' ./assets/image/logo.png',
        Club2: ' Man u',
    },
    
]

const HomeNextMatch = document.querySelector('.MatchCardFlow2')
HomeNextMatchArray.forEach((element) => {
    const adding2 = `
    <div class="cardMATCHESALL"> 
        <article>
            <h2> ${element.MatchDate} </h2>
            <h3> ${element.MatchTime} </h3>
            <div class="Nextfixture"> 
                <div class="Nextfixtureclub"> 
                    <img src="${element.Image1}" alt="">
                    <h2> ${element.Club1} </h2>
                </div>
                <span> VS </span>
                <div class="Nextfixtureclub"> 
                    <img src="${element.Image2}" alt="">
                    <h2> ${element.Club2} </h2>
                </div>
            </div>
        </article>
    </div>
`
HomeNextMatch.innerHTML += adding2
})



//Old fixture Array

const HomeOldMatchArray = [
    {
        MatchDate: ' Saturday 23 July 2023 ',
        MatchTime: '  Kick off 10:45 ',
        Image1: './assets/image/logo.png',
        Club1: 'Chelsea',
        ScoreClub1: ' 3 ',
        Image2: ' ./assets/image/logo.png',
        Club2: ' Man u',
        ScoreClub2: ' 0',
    },
    {
        MatchDate: ' Saturday 23 July 2023 ',
        MatchTime: '  Kick off 10:45 ',
        Image1: './assets/image/logo.png',
        Club1: 'Chelsea',
        ScoreClub1: ' 3 ',
        Image2: ' ./assets/image/logo.png',
        Club2: ' Man u',
        ScoreClub2: ' 0',
    },
    {
        MatchDate: ' Saturday 23 July 2023 ',
        MatchTime: '  Kick off 10:45 ',
        Image1: './assets/image/logo.png',
        Club1: 'Chelsea',
        ScoreClub1: ' 3 ',
        Image2: ' ./assets/image/logo.png',
        Club2: ' Man u',
        ScoreClub2: ' 0',
    },
    {
        MatchDate: ' Saturday 23 July 2023 ',
        MatchTime: '  Kick off 10:45 ',
        Image1: './assets/image/logo.png',
        Club1: 'Chelsea',
        ScoreClub1: ' 3 ',
        Image2: ' ./assets/image/logo.png',
        Club2: ' Man u',
        ScoreClub2: ' 0',
    },
    


]

const HomeOddMatch = document.querySelector('.MatchCardFlow')
HomeOldMatchArray.forEach((element) => {
    const adding2 = `
    <div class="cardMATCHESALL"> 
        <article>
            <h2> Saturday 23 July 2023 </h2>
            <h3> Kick off 10:45 </h3>
            <div class="Nextfixture"> 
                <div class="Nextfixtureclub"> 
                    <img src="./assets/image/logo.png" alt="">
                    <h2> Man u </h2>
                </div>
                <span> 
                    <h2> 2 </h2>
                    <h2> : </h2>
                    <h2> 2 </h2>
                </span>
                <div class="Nextfixtureclub"> 
                    <img src="./assets/image/logo.png" alt="">
                    <h2> Man u</h2>
                </div>
            </div>
        </article>
    </div>
`
HomeOddMatch.innerHTML += adding2
})


