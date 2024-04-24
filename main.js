//step-> quotable api

const URL ="https://api.quotable.io/random";

const para =document.querySelector('.quote');
const auth= document.querySelector('#authorName');
const button = document.querySelector("button");

const read =document.querySelector('.sound');
const copy =document.querySelector('.copy');
const social=document.querySelector('.twitter');

async function getQuote(){
    button.classList.add('loading');
    button.innerText="loading quote...."
    const promiseResponse= await fetch(URL);
    const response = await promiseResponse.json();

    let txt = response.content;
    let aut= response.author;
    para.innerText=txt;
    auth.innerText=aut;

    button.classList.remove('loading');
    button.innerText="New Quote";


}

// speak synthesis api
read.addEventListener('click',()=>{
    
    let speechobj= new SpeechSynthesisUtterance(`${para.innerText} by ${auth.innerText}`);
    speechSynthesis.speak(speechobj);

})

//clipboard api
copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(para.innerText);
})

//share twiiter api
social.addEventListener('click',()=>{
    let twitterurl=` https://twitter.com/intent/tweet?text=${para.innerText}`;
    window.open(twitterurl,"_blank")
})  
 
button.addEventListener('click',()=>{
    getQuote();
})
