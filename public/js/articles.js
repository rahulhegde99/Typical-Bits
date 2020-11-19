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
var articleRef = firebase.database().ref('articles').orderByChild('article_id').limitToLast(3);

articleRef.once('value', function(snapshot) {
    var i = 0;
    snapshot.forEach(function(childSnapshot) {
        //var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        var article_code = childData.article_code;
        var article_desc = childData.article_desc;
        var article_title = childData.article_title;
        //document.getElementById("article_list").innerHTML += '<div class="col-sm-6 col-md-5 col-lg-12 item"><div class="box"><h3 class="name" id="a_title">article_title</h3><p class="description" id="a_desc">article_desc</p><center><div class="col-sm-6 col-md-5 col-lg-10 item" style="background-color: #eef4f7;"><p class="description" id="a_code" style="text-align: left;">article_code</p></div></center></div></div>';
        
        document.getElementById("a_title".concat(i)).innerHTML = article_title;
        document.getElementById("a_code".concat(i)).innerHTML = article_code;
        document.getElementById("a_desc".concat(i)).innerHTML = article_desc;
        i++;
        /* console.log(article_code);
        console.log(article_desc);
        console.log(article_title); */
    });
});