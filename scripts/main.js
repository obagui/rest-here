// add the cat facts API functionality
function displayCatFact() {
  fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {document.getElementById("cat_fact").innerHTML = data.fact})
}
document.getElementById("button_cat").addEventListener("click", displayCatFact)

// add the dog breed API functionality
function displayDogBreed() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {0
      document.getElementById("img_dog").src = data.message
      let message = document.getElementById("dog_message")
      message.innerHTML = "Bam! Look at that dog!"
    })
}
document.getElementById("button_dog").addEventListener("click", displayDogBreed)