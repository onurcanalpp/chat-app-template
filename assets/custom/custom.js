


const homeTabItem = document.querySelectorAll(".home-tab-list li");

function clearHomeTabClass(){
    for(let i = 0; i<homeTabItem.length; i++){
        homeTabItem[i].classList.remove("active");
    }
}

for(let i = 0; i < homeTabItem.length; i++){
    
    homeTabItem[i].addEventListener("click", function(){
        clearHomeTabClass();
        this.classList.add("active");
    });
}
