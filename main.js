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

// API URL
let apiURL = `https://api.funtranslations.com/translate/minion.json`

// Wiring Button Click and Output
// When the user clicks button -> "Translate to Minion Speak", We use Minion Fun Translation API to translate the input and display the output
let translateButton = document.querySelector(`#translate-button`)
let translateOutput = document.querySelector(`#translate-output`)
translateButton.addEventListener(`click`, clickOutputEventHandler())

// Display the output
function clickOutputEventHandler() {
    console.log(`Translate to Minion Speak - Button Clicked. Input Value - ${translateInput.value}`)
    let inputValue = translateInput.value
    let finalURL = constructURL(inputValue)
    console.log(finalURL)
    fetch(finalURL).then(response => response.json()).then(json => {
        translateOutput.innerText = json.contents.translated
    }).catch(() => alert(`An error occured:/ Try again after some time.`))
}

// Constructing URL
function constructURL(inputText){
    let encodedURI = encodeURI(inputText)
    return `${apiURL}?text=${encodedURI}`
}

