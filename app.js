
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpg' 
    },
    {
        name: 'cheesburger',
        img: 'images/cheesburger.jpg' 
    },
    {
        name: 'hot dog',
        img: 'images/hot dog.jpg' 
    },
    {
        name: 'ice cream',
        img: 'images/ice cream.jpg' 
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg' 
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg' 
    },
    {
        name: 'fries',
        img: 'images/fries.jpg' 
    },
    {
        name: 'cheesburger',
        img: 'images/cheesburger.jpg' 
    },
    {
        name: 'hot dog',
        img: 'images/hot dog.jpg' 
    },
    {
        name: 'ice cream',
        img: 'images/ice cream.jpg' 
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg' 
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg' 
    }
    
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay =  document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for(let i=0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optioTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if (optionOneId == optioTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optioTwoId].setAttribute('src', 'images/blank.jpg')
        alert('you have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optioTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optioTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optioTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you found them all!'
    }
}

function flipCard() {
    const cardID = this.getAttribute('data-id')
    Number(cardID)
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}