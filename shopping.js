import {initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import {getDatabase,ref,push,onValue,remove} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"


const appSettings = {
    DatabaseURL:"https://shopping-fb758-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyAKkcNCey27wXzFPDnGZK9HwCZ5YMVm6hw",
    authDomain: "shopping-fb758.firebaseapp.com",
    projectId: "shopping-fb758",
    storageBucket: "shopping-fb758.appspot.com",
    messagingSenderId: "940730736758",
    appId: "1:940730736758:web:8c5a51726fe8af21d8ff57"
}

const app = initializeApp(appSettings);//inrect with firebase services like realtime data , cloud stprea, the auntheticcation
const database = getDatabase(app);//getting   a data associated with the app provided
const shopingInDB = ref(database, "shoping-list");//referance to the databse


    const userInput = document.querySelector("#input-el");
    const btnSubmit = document.querySelector("#btn-submit");
    let uleEl = document.querySelector("#ul-el");

    //attach an event listener to the button
    //entries return a 2 dimensional array with key value pairs
function renderShoppingToDocumnent(){
    //let arrItems = Object.entries(snapShot.val());
    onValue(shopingInDB , function(snapShot){
   
        let shopArray = Object.entries((snapShot.val()));
         uleEl.innerHTML = "";
       
         if(snapShot.exists()){
            for(let i = 0; i < shopArray.length; i++){
        
                let items = shopArray[i];
                let itemId = items[0]
                let itemVal = items[1]

                   let newItem = document.createElement('li');
                   newItem.textContent = itemVal ;
                   uleEl.appendChild(newItem);
        
                   newItem.onclick = function (){
               
                    let exactitemLocation = ref(database,`shoping-list/${itemId}`)
                  
                    remove(exactitemLocation)
                    uleEl.removeChild(newItem);
                
    
                   }
                   
                 }
            
         }else {
            uleEl.innerHTML = "No items yet";
         }
     
   })

   userInput.value = ""
}

//onValue is a funtion used to listen for changes , at spaecific location
//allows to update userinterface  ... using the snapShot is an object that contains in a specifc location ;
//reading a data from database is the datasnapshot..


    btnSubmit.addEventListener("click",() =>{
        push(shopingInDB,userInput.value);
        
        renderShoppingToDocumnent();
     
             
    })
    
    
