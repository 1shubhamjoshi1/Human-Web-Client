
setTimeout(function(){
  var config = {
    apiKey: "AIzaSyCnthmPVf-LprbEkBg_y6aU6C53cmtarrE",
    authDomain: "humanjiit.firebaseapp.com",
    databaseURL: "https://humanjiit.firebaseio.com",
    storageBucket: "humanjiit.appspot.com",
    messagingSenderId: "507854496028"
  };
  firebase.initializeApp(config);

  const dbRefObj = firebase.database().ref().child('posts1');
  dbRefObj.on('child_added', function(childsnapshot){
    var link = JSON.stringify(childsnapshot.val().imageUrl);

    var gallery = document.getElementById('show-case');

    /*container for the columen */
    var col = document.createElement("column");
    gallery.appendChild(col);
    col.id="fun"
    var shade = document.createElement("div");
   shade.className += " shade";
   col.appendChild(shade);
  $("#fun").css('overflow','hidden');

    /*image adding */
    var img = document.createElement("img");
    img.src =  link.substr(1,link.length-2);
  img.className += " image_";


  col.appendChild(img);

   //console.log($('#image_'));
   $(".shade").hover(function(){

       $(this).css('opacity','1');
  $(this).css({ y: '-30px' });
   },
 function(){
   console.log('sj o');
          $(this).css('opacity','0');
$(this).css({ y: '0px' });

 });

 $(".shade").click(function(){
   console.log(link);
 });

  });

},1000);
