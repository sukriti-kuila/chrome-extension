//! CHROME 
let body = document.querySelector("body");
let images = ["https://indianmemetemplates.com/wp-content/uploads/Bhai-kya-kar-raha-hai-tu-1024x711.jpg",
"https://img.buzzfeed.com/buzzfeed-static/static/2022-02/23/9/asset/23b92b496aa2/sub-buzz-935-1645609774-25.jpg",
"https://indianmemetemplates.com/wp-content/uploads/Bilkul-bakwas-hai-yeh-aap-band-kar-do-isey.jpg"];
let alertBox = document.createElement("div");
body.append(alertBox);
let alertImg = document.createElement("img");
alertBox.append(alertImg);
let closeBtn = document.createElement("button");
alertBox.append(closeBtn);

alertBox.className = "alert-box";
alertBox.style.position = "fixed";
alertBox.style.top = "calc(50% - 25px)";
alertBox.style.left = "calc(50% - 50px)"
alertBox.style.height= "4px";
alertBox.style.width= "100px";
alertBox.style.backgroundColor = "#fff";
alertBox.style.boxShadow = "0px 0px 20px rgba(0,0,0,02)";
alertBox.style.borderRadius = "4px";
alertBox.style.backgroundRepeat = "no-repeat";
alertBox.style.display = "none";

alertImg.style.height = "300px";
// alertImg.src=images[1];



closeBtn.textContent = "X";
closeBtn.style.fontWeight = "bold";
closeBtn.style.fontFamily = "sans-serif";

closeBtn.style.backgroundColor = "crimson";
closeBtn.style.color = "white";
closeBtn.style.padding = "10px";
closeBtn.style.border = "2px solid black";
closeBtn.style.cursor = "pointer";

closeBtn.style.height = "17px";
closeBtn.style.width = "22px";

closeBtn.style.margin = "-295px 0 0 400px";
closeBtn.style.zIndex = 1;

closeBtn.style.display = "flex";
closeBtn.style.justifyContent = "center";
closeBtn.style.alignItems = "center";
// closeBtn.style.display = "none";
closeBtn.addEventListener("mouseenter",()=>{
    closeBtn.style.transform = "scale(1.1)";
});
closeBtn.addEventListener("mouseleave",()=>{
    closeBtn.style.transform = "scale(1)";
});
closeBtn.addEventListener("click",()=>{
    alertBox.remove();
});
setTimeout(function (){
    alertBox.style.display = "flex";
    alertBox.style.justifyContent = "center";
    alertBox.style.alignItems = "center";
    alertBox.style.flexDirection = "column";
}, 20000);

alertImg.src = images[2];
// setTimeout (()=>{
//     closeBtn.style.display = "flex";
// }, 11200);