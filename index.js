import { initializeApp  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase,ref,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    DatabaseURL:"https://playground-c629e-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const EmailsInDB = ref(database,"Emails");



//grabbibg elements and assigning 

let myRegister = [];
const inputEl = document.querySelector('#input-el');
const btnSubmitEl =  document.querySelector('#btn-submit');
const ulEl = document.getElementById('ul-el');



// Retrieve data from localStorage
const fromLocal = JSON.parse(localStorage.getItem("myRegister"));


// Function to render and store the input value
function renderRegister() {
  
    myRegister.push(inputEl.value);
   for(let i  = 0 ; i < myRegister.length; i++){
    inputEl.value = "";
   
    let newLi = document.createElement('li');
    newLi.addEventListener('dblclick', () =>{
        localStorage.clear();
       ulEl.removeChild(newLi);
    })
    newLi.textContent = myRegister[i];
    ulEl.appendChild(newLi);
   }
   myRegister = []; 

    // Store the updated myRegister array in localStorage
    localStorage.setItem("myRegister", JSON.stringify(myRegister));
}

// Attaching an event listener to the submit button
btnSubmitEl.addEventListener('click', () => {
    renderRegister();
});














