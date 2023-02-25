const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "~,!,@#$%^&*()_-={[},]|:;<>.?"
}
const lengthSlider =  document.querySelector(".length input")
const spanValuing = document.querySelector(".length span")
copyIcon = document.querySelector(".password span")
options = document.querySelectorAll(".option input")
let password1El = document.querySelector(".password-1")
let password2El = document.querySelector(".password-2")
let generator = document.querySelector(".container button")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    let staticPassword = ""
    excludeDuplicate = false
    let passwordLength = lengthSlider.value
    
    options.forEach(option => {
        if(option.checked) {
            if(option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id]
            } else if(option.id !== "spaces") {
                staticPassword += `  ${staticPassword}  `
            } else {
                excludeDuplicate = true
            }
        }  
    });

    for (let i = 0; i < passwordLength; i++) { 
    let randomChars = staticPassword[Math.floor(Math.random() * staticPassword.length)]
        if (excludeDuplicate) {
            !randomPassword.includes(randomChars) || randomChars == " " ?  randomPassword += randomChars : i--
        } else {
            randomPassword += randomChars
        }    
    }
    
    return randomPassword
}

generator.addEventListener("click",  function(){
    password1El.value =  generateRandomPassword()
    password2El.value =  generateRandomPassword()
})

const updateSlider = () => {
    spanValuing.textContent = lengthSlider.value
    generateRandomPassword()
}
updateSlider()

const copyPassword = () => {
    navigator.clipboard.writeText(password1El.value)//write the passed text into the system's clipboard
    copyIcon.innerText = "check"
    setTimeout (() => {
        copyIcon.innerText = "copy_all"
    }, 1500)
}


function myFunction2() {
    // Get the text field
    var copyText2 = document.querySelector(".password-2");
    var copyText3 = document.getElementById("ballz")
  
    navigator.clipboard.writeText(copyText2.value);
    
    copyText3.innerText = "check"
    // alert("Copied the text: " + copyText2.value);
    setTimeout (() => {
        copyText3.innerText = "copy_all"
    }, 1500)
  }

copyIcon.addEventListener("click", copyPassword)
lengthSlider.addEventListener("input", updateSlider)  


//const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
//];
// let passwordLength = 12

// function getRandomCharacter() {
//     let randomChar = Math.floor(Math.random() * characters.length)
//     return characters[randomChar]
// }

// function generateRandomPassword() {
//     let randomPassword = ""
//     for (let i = 0; i < passwordLength; i++) {
//         randomPassword += getRandomCharacter()         
//     }
//     return randomPassword
// }

// const generatedPasswordOne = generateRandomPassword()

// console.log("Here is a random password: ", generatedPasswordOne)