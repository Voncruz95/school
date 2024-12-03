input = document.getElementById("js-input");
mywatch = document.getElementById("watch");
mycontainer = document.querySelector(".container")
whitecontainer = document.querySelector(".white-container");
mybanner = document.querySelector(".banner");

function enter() {
  if (input.value === "wristwatch") {
    mybanner.style.display = "none"
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "white"
    whitecontainer.style.display = "none"
    mycontainer.style.display = "none"
    mywatch.style.display = "block"
  } else {
   setTimeout(() => {
    mybanner.style.display = "none"
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "white"
    whitecontainer.style.display = "none"
    mycontainer.style.display = "none"
    mywatch.style.display = "none"
    console.error("wrong input")
   },3000)
  }


}


create();