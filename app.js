const starsEl = document.
querySelectorAll(".fa-star")

const emojisEl = document.
querySelectorAll(".far")

const btn = document.getElementById("btn")
const submitDiv = document.getElementById("submitDiv")
const textArea = document.getElementById("textAreaReview");




btn.addEventListener("click", function(){
    const d = document.createElement("div")
   d.innerHTML = "Successfully submitted your review! <br/> Thanks for the feedback!"
   d.classList.add("submit")
    submitDiv.append(d)

})

const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0)

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
          updateRating(index)
    })
})


function updateRating(index){
    starsEl.forEach((starsEl, idx) => {
         if(idx < index + 1 ){
            starsEl.classList.add("active")
         } else{
            starsEl.classList.remove("active")
         }
    })

    

    
emojisEl.forEach(emojiEl=>{
    emojiEl.style.transform = `translateX(-${index * 50}px)`

    emojiEl.style.color = colorsArray[index]
})
} 

