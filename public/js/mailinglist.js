firebaseConfig = {
    apiKey: "AIzaSyC8BdHV-qTbMwoOu9PZh8zPDXy8ONlmAyI",
    authDomain: "typical-bits.firebaseapp.com",
    databaseURL: "https://typical-bits.firebaseio.com",
    projectId: "typical-bits",
    storageBucket: "typical-bits.appspot.com",
    messagingSenderId: "713557942349",
    appId: "1:713557942349:web:3f317300f7243bb44efc04",
    measurementId: "G-WR366GBR3D"
};

//Initialize firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var mailListRef = firebase.database().ref('mail_list');

// Listen for form submit
document.getElementById("emailform").addEventListener("submit",addToMailingList);

// Submit form 
function addToMailingList(e) {
    e.preventDefault();

    // Get email value
    var email = getInputVal("email");
    console.log(email);

    firebase.database().ref('mail_list').orderByChild('email').equalTo(email).on("value", function(snapshot) {
        //console.log(snapshot.val());
        if((snapshot.val() == null)) {
            // Save message
            saveMessage(email);

            //Show alert
            document.getElementById("mailListAlertGreen").style.display = 'block';

            //Hide alert after 6.5 seconds
            setTimeout(function() {
                document.getElementById("mailListAlertGreen").style.display = 'none';    
            }, 6500);
            
            document.getElementById('emailform').reset();
            console.log("null or not repeated");
        }
        else {

            console.log("Registered");
            document.getElementById('emailform').reset();
        }
    });

    setTimeout(function() {
        if(document.getElementById("mailListAlertGreen").style.display == 'none') {
            //Show alert
            document.getElementById("mailListAlertRed").style.display = 'block';
    
            //Hide alert after 4 seconds
            setTimeout(function() {
                document.getElementById("mailListAlertRed").style.display = 'none';    
            }, 4000);
        }
    }, 1000);
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase realtime database
function saveMessage(email) {
    var newMailListRef = mailListRef.push();

    newMailListRef.set({
        email: email,
    })
}

// Object length
function countObjectKeys(obj) { 
    return Object.keys(obj).length; 
}