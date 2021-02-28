//variables
const addStory = document.querySelector(".fa-plus");
const stories = document.querySelector(".stories")
const deletePost = document.querySelectorAll(".fa-trash-alt")
const megaProfilePic = document.querySelector(".megaprofilepic");
const tinyPic = document.querySelector(".imgbox");
const createArticleDiv = document.querySelector("#createArticleDiv");
const form = document.querySelector("#articleForm");
const formHeader = document.querySelector("#header");
const formBody = document.querySelector("#body");
const formSubmit = document.querySelector("#submit");
const formQuit = document.querySelector("#quit");
const overlay = document.querySelector("#overlay");

//Event listeners - Fuctions

tinyPic.addEventListener("click",(e) =>{
megaProfilePic.style.display="block"; 
});
megaProfilePic.addEventListener("click",(e) =>{
    megaProfilePic.style.display="none";
});

formQuit.addEventListener("click", (e) => {

    overlay.style.display="none"

})




addStory.addEventListener("click", () => {

    overlay.style.display="block"


})


formSubmit.addEventListener("click", (e) => {
 if(formBody.value ==="" || formHeader.value ===""){
    
    formHeader.style.borderColor="#DB524D"
    formBody.style.borderColor="#DB524D"
 }
 
 else{
newFeed()
overlay.style.display="none"

e.preventDefault()
}
})

function newFeed() { 
const newArticle=document.createElement("li")
let articleHeader = formHeader.value
let articleBody = formBody.value
newArticle.className= "article"
newArticle.innerHTML = `<div class="articleHeader">
<h4>${articleHeader}</h4>
<i class="fas fa-trash-alt"></i>
</div>
<div class="articleBody">
<p>
${articleBody} <small>More</small>
</p>
</div>`
formBody.value =""
formHeader.value =""

stories.appendChild(newArticle)
let deletePosts=document.querySelectorAll(".fa-trash-alt");
addClickEventToButton(deletePosts);
}

function addClickEventToButton(deletePosts){
    deletePosts.forEach((element)=>{
        element.addEventListener("click", (e) => {
            debugger;
            element.parentElement.parentElement.remove()
        });
    })
}
addClickEventToButton(deletePost);


// deletePost.forEach( element =>{
//     element.addEventListener("click", (e) => {
//         debugger;
//         element.parentElement.parentElement.remove()
//     })})
    



