const refreshBtn = document.querySelector('#refresh')
const qText = document.querySelector('#quoteText')
const qAuthor = document.querySelector('#quoteAuthor')
const generateBtn = document.querySelector('#generate')

// Loading Quotes...

const loadQuote = () => {
    generateBtn.style.display = 'none'
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'json/newdata.json', true)
    xhr.onload = function() {
        let num = Math.floor(Math.random() * 100)
        if (this.status == 200) {
            let data = JSON.parse(this.responseText);
            newDatas = data.map( (newData) =>{
                if(newData.quoteAuthor != ''){
                    return newData
                }
            })
            const theAuthor = newDatas[num].quoteAuthor 
            const theQuote = newDatas[num].quoteText
            displayHTML(theQuote,theAuthor)
        }
    };   
    xhr.send();
}

// Generating function [hides the btn,and loads the loadQuote()]...

const generate = () =>{
    generateBtn.style.display = 'none'
    loadQuote()
}

// Event Listener Refresh btn...

refreshBtn.addEventListener('click', loadQuote)

// Event Listener Generate Button...

generateBtn.addEventListener('click', generate)


// Displaying HTML Data...

const displayHTML = (quoteText,quoteAuthor) =>{
    qText.textContent = quoteText
    qAuthor.textContent = `by ${quoteAuthor}`
}
