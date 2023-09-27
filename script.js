const editableInput = document.querySelector(".editable");
const placeHolder = document.querySelector(".placeholder");
const counter = document.querySelector(".counter");
const tweetBtn = document.querySelector(".button");
const readonly= document.querySelector(".readonly");


editableInput.onfocus = () => {
    placeHolder.style.color = "#c5ccd3";
};

editableInput.addEventListener("blur", ()=>{
    placeHolder.style.color = "#98a5b1";
});

editableInput.onkeypress = (e) => {
    placeHolder.style.display ="none";
    validateTweet(e.target);
};

editableInput.onkeyup = (e) => {
    validateTweet(e.target);
};

const validateTweet = (element) => {
    let text;
    let tweetLimit = 10;
    let tweetLengt = element.innerText.length;

    if(tweetLengt <= 0){
        placeHolder.style.display= "block";
        counter.style.display= "none";
        tweetBtn.classList.remove("active");

    }else{
        tweetBtn.classList.add("active");
        counter.style.display = "block";
        placeHolder.style.display = "none";

    }

    counter.innerText = tweetLimit - tweetLengt;

    if(tweetLengt > tweetLimit){
        let overText = element.innerText.substr(tweetLimit, tweetLengt);

        overText = `<span class="overSpan">${overText}</span>`;
        text= element.innerText.substr(0, tweetLimit) + overText;
        readonly.style.zIndex= "1";
        tweetBtn.classList.remove("active");
        counter.style.color = "#e0245e";
    }else {
        counter.style.color = "#333";
    }

    readonly.innerHTML = text

}
