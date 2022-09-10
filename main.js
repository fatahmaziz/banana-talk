// An Array Data Structure containing random phrase
let randomPhraseArray = [`Hi! I love Despicable Me!`, `I have watched Desipicable Me 100 times`, `I don't know what I a doing :/`, `Can I become a minion??`, `Minions are so cute!!!`, `Is there anything cuter than Minions??`, `How do I become a minion???`, `I want Minions to understand me`]

// Wiring Button Click and Textarea Onput
// When the user clicks button -> "Use Random Phrases", we add random values from an array to the text area
let randomPhraseButton = document.querySelector(`#random-phrase-button`)
let translateInput = document.querySelector(`#translate-input`)
randomPhraseButton.addEventListener(`click`, function clickInputEventHandler() {
    translateInput.value = ``
    let randomNumber = Math.floor(Math.random() * randomPhraseArray.length)
    let randomPhrase = randomPhraseArray[randomNumber]
    translateInput.value += `${randomPhrase}`
})