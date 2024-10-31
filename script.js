const imageCount = 7;

let imageCarousel = [];

let current = 0;

let imageLinks = [
    "https://youtu.be/alHPMBNlyIE",
    "https://youtu.be/wYC6z_Hs8ww",
    "https://youtu.be/6qSE6dl0mPg",
    "https://youtu.be/LOHqcMN114s",
    "https://youtu.be/gUVey9adwtI",
    "https://youtu.be/gkjR61_LHzo",
    "https://youtu.be/E3Gpbw-tLcg"
];

for(let i = 0; i < imageCount; i++){
    imageCarousel.push(`url(./images/eldenrandom${i+1}.jpg)`);

    const dot = document.createElement("span");
    const dotDiv = document.querySelector(".dot-div");
    dot.setAttribute("class", "dot");
    dot.addEventListener("click", ()=>{
        current = i;
        showImage(current);
    })
    dotDiv.appendChild(dot);
}

function clickImage(e){
    window.open(e.srcElement.dataset.link);
}

function showImage(index){
    const imageHolder = document.querySelector(".image-carousel");
    index = index % imageCount;
    imageHolder.style.backgroundImage = imageCarousel[index];

    imageHolder.setAttribute("data-link", imageLinks[index]);
    imageHolder.removeEventListener("click", clickImage);
    imageHolder.addEventListener("click", clickImage);
    
    const dotList = document.querySelectorAll(".dot");
    for(let i = 0; i < imageCount; i++){
        if(index == i) {
            dotList[i].style.backgroundColor = ("#FFF")
        }
        else{
            dotList[i].style.backgroundColor = ("#999")
        }
    }
}

showImage(0);

function next(){
    current += 1;
    if(current == imageCount){
        current = 0
    }
    showImage(current);
}
function previous(){
    current -= 1;
    if(current == -1){
        current = imageCount - 1;
    }
    showImage(current);
}


const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
nextButton.addEventListener("click", next);
previousButton.addEventListener("click", previous);

setInterval(next, 5000);
