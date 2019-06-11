

var dets = []

   var config = {
  apiKey: 'AIzaSyBphWxbqcfWEJ0YfiVzp50dspNx88qG_xw',
  authDomain: 'linuxdesign-cb5f2.firebaseapp.com',
  projectId: "linuxdesign-cb5f2",
  databaseURL: 'https://linuxdesign-cb5f2.firebaseio.com/',
  storageBucket: 'gs://linuxdesign-cb5f2.appspot.com'

};

document.addEventListener("DOMContentLoaded", function(event) {
firebase.initializeApp(config);
var x = document.getElementById("myTable");

  // Get a reference to the database service
var database = firebase.database();

var ref = firebase.database().ref('general/');
ref.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      dets.push([childData.Count,childData.Entry])
      console.log(childData.Count)
        var row = x.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = childData.Count;
        cell2.innerHTML = childData.Entry;
    });
});



})



