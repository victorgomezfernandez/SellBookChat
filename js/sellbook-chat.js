// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, onValue, push} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyB7GfnucDCIs-d6wbudRxemLvcpThApzW4",
    authDomain: "sellbook-ab5f8.firebaseapp.com",
    databaseURL: "https://sellbook-ab5f8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sellbook-ab5f8",
    storageBucket: "sellbook-ab5f8.appspot.com",
    messagingSenderId: "628968844341",
    appId: "1:628968844341:web:ddb089c74493178850d57c"

};

// Initialize Firebase
initializeApp(FIREBASE_CONFIG);
const DB = getDatabase();


function initialize(){
    const CHAT_FORM = document.getElementById("chat-form");
    CHAT_FORM.addEventListener("submit", addNewMessage);
    const MESSAGES_REF = ref (DB, "messages");
    onValue(MESSAGES_REF, showMessages);
}

function showMessages(ms){
    const MESSAGES_FROM_FIREBASE = ms.val();
    const MESSAGES_LIST = document.getElementById("messages-list");
    MESSAGES_LIST.innerHTML = "";
    for(let m in MESSAGES_FROM_FIREBASE){
        const TEXT = MESSAGES_FROM_FIREBASE[m].text;
        const SENDER = MESSAGES_FROM_FIREBASE[m].sender;

        MESSAGES_LIST.innerHTML += `<p>${SENDER}: ${TEXT}</p>`
    }
}

function addNewMessage(event){
    event.preventDefault();
    const TEXT = event.target["message-text"].value;
    const SENDER = event.target["message-sender"].value;
    const newMessage = {
        sender: SENDER,
        text: TEXT
    }
    
    const MESSAGES_REF = ref (DB, "messages/");
    push(MESSAGES_REF, newMessage);
}

initialize();