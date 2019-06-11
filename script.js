

   var config = {
  apiKey: 'AIzaSyBphWxbqcfWEJ0YfiVzp50dspNx88qG_xw',
  authDomain: 'linuxdesign-cb5f2.firebaseapp.com',
  projectId: "linuxdesign-cb5f2",
  databaseURL: 'https://linuxdesign-cb5f2.firebaseio.com/',
  storageBucket: 'gs://linuxdesign-cb5f2.appspot.com'

};
window.onload = function() {
    // all of your code goes in here
    // it runs after the DOM is built
 
firebase.initializeApp(config);

  // Get a reference to the database service
var database = firebase.database();

var ref = firebase.database().ref('people/');
ref.on('value', function(snapshot) {
console.log(snapshot.val())
 var x = snapshot.val()
 var count = x.Count;
 var element = document.getElementById("ccc");
 element.innerHTML = count;
});
}

