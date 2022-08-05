const MatchScrollLeft = document.querySelector('#MatchScrollLeft')
const MatchCardFlow = document.querySelector('#MatchScrollDiv')
const MatchRightArrow = document.querySelector('#MatchScrollRight')

const LeftMatchScroll = (event) => {
    MatchCardFlow.scrollLeft -= 100
    event.preventDefault();
}

MatchScrollLeft.addEventListener("click", LeftMatchScroll)

const RigthMatchScroll = (event) => {
    MatchCardFlow.scrollLeft += 100
    event.preventDefault();
}

MatchRightArrow.addEventListener("click", RigthMatchScroll)

///////match second scroll
const MatchScrollLeft2 = document.querySelector('#MatchScrollLeft2')
const MatchCardFlow2 = document.querySelector('.MatchCardFlow2')
const MatchRightArrow2 = document.querySelector('#MatchRightArrow2')

const LeftMatchScroll2 = (event) => {
    MatchCardFlow2.scrollLeft -= 100
    event.preventDefault();
}

MatchScrollLeft2.addEventListener("click", LeftMatchScroll2)

const RigthMatchScroll2 = (event) => {
    MatchCardFlow2.scrollLeft += 100
    event.preventDefault();
}

MatchRightArrow2.addEventListener("click", RigthMatchScroll2)


///////match third scroll
const MatchScrollLeft3 = document.querySelector('.ShoprightArrow')
const MatchCardFlow3 = document.querySelector('.ShopCardHolder')
const MatchRightArrow3 = document.querySelector('.ShopleftArrow')

const LeftMatchScroll3 = (event) => {
    MatchCardFlow3.scrollLeft -= 100
    // event.preventDefault();
}

MatchScrollLeft3.addEventListener("click", LeftMatchScroll3)

const RigthMatchScroll3 = (event) => {
    MatchCardFlow3.scrollLeft += 100
    event.preventDefault();
}

MatchRightArrow3.addEventListener("click", RigthMatchScroll3)
