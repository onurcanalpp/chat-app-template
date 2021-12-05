


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



function getBaseUrl(segment){
    // get the segments
    pathArray = window.location.pathname.split( '/' );
    // find where the segment is located
    indexOfSegment = pathArray.indexOf(segment);
    // make base_url be the origin plus the path to the segment
    var baseUrl = window.location.origin + pathArray.slice(0,indexOfSegment).join('/') + '/';
    return baseUrl;
}



function redirectToDetail(){
    window.location = getBaseUrl() + "messageDetail.html";
}



 
 