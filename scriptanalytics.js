

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
var cnt = []
var entr = []


firebase.initializeApp(config);

var database = firebase.database();

var ref = firebase.database().ref('general/');
ref.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      cnt.push(childData.Count)
      entr.push(childData.Entry)

      
console.log(entr)

new Chart(document.getElementById("myChart"), {
      "type": "line",
      "data": {
        "labels": entr,


        "datasets": [{
          "label": "Number of People",
          "data": cnt,
          "fill": true,
          "borderColor": "#fffcdc",
          "lineTension": .4,
          "pointBorderColor": "blue",
          "spanGaps": true,
        }]
      },
      "options": {
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 16
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "white"
            },
            gridLines: {
              display: true,
              color: "#ffc3a0"
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "white",
            },
            gridLines: {
              display: true,
              color: "#ffc3a0"
            }
          }]
        }
      }
    });

    });
});


}


  // Get a reference to the database service




