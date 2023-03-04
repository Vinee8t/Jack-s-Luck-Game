
let cards=[]
let hasBlackjack = false
let sum =0
let isAlive = false 
let message=""
let bet=0
let betWin=0
let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let betEl=document.getElementById("bet-el")
let playerEl=document.getElementById("player-el")
let player=
{
    Name: "Vin",
    chips: 200,
    
}

playerEl.textContent=player.Name+" : $"+player.chips


function getRandomCard()
{
    let a= Math.floor(Math.random() *13) +1
    if(a===1)
    {
        return 11
    }
    else if(a>10)
    {
        return 10
    }
    else
    {
    return a;
    }
}

function renderGame()
{
    cardsEl.textContent="Cards: "
    for(let i = 0;i<cards.length;++i)
    {
        cardsEl.textContent+= cards[i]+" "
    }
    sumEl.textContent="Sum: " +sum
if(sum <= 20)
{
    message="Do you want to draw a new card? "
    betWin=betWin-1
    
}
else if(sum === 21)
{
    message="You've got blackjack! "
    hasBlackjack=true
    player.chips=player.chips+betWin
    
   
    
}
else
{
    message="You're out of the game !"
    isAlive=false
    player.chips=player.chips - bet

}
playerEl.textContent=player.Name+" : $"+player.chips
messageEl.textContent=message
}

function startGame()
{
    if(bet>0){
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
     cards=[firstCard,secondCard]    
     sum=firstCard+secondCard
    isAlive=true
    renderGame()}
}

function newCard()
{
    if(isAlive===true && hasBlackjack===false)
    {
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
    }
}

function betIncrease()
{
    bet+=10
    betEl.textContent="Bet :" + bet
    betWin=bet
}
function betDecrease()
{
    if(bet>0)
    {
    bet-=10
    betEl.textContent="Bet :" + bet
    }
    betWin=bet
}