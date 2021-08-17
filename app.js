var txtArea=document.querySelector("#input")
var btnTranslate=document.querySelector("#btn-translate")
var outputBox=document.querySelector("#output-box")
var serverURL="https://api.funtranslations.com/translate/ferb-latin.json"

btnTranslate.addEventListener("click",clickEventHandler)


function clickEventHandler() {
     var inputText=txtArea.value
     fetch(getTranslationalURL(inputText))
     .then(response =>response.json())
     .then(json=>{
         var translatedText=json.contents.translated
         outputBox.innerText=translatedText
     })

}
function getTranslationalURL(text) {
    return serverURL +"?"+"text=" +text
}