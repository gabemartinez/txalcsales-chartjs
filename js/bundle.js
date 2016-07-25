(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {

  $('#renderData').click(function() {
      var monthcheck = $('#monthcheck').val();
      var totalcheck = $('#totalcheck').val();
      var zipcheck = $('#zipcheck').val();
      var datatext = $( "#monthcheck option:selected" ).text();
      console.log(datatext);
      myBar.destroy();
      myBar.update();
      runmychart('data/'+monthcheck+'.json', 'EL PASO', totalcheck, zipcheck, datatext);
  });

  var runmychart = function(datafile, countycheck, totalcheck, zipcheck, datatext){

    $.getJSON(datafile, function(json) {

      var ourlabels = function() {
          //return ["January", "February", "March", "April", "May", "June", "July", "August"];
          var thisarray = [];

          if (zipcheck === ''){
            for (i = 0; i < json.length; i++) {
              if (json[i].field10 > totalcheck && $.trim(json[i].field4) == countycheck){
                thisarray.push(json[i].field2 + json[i].field3);
              }
            }
          } else {
            for (i = 0; i < json.length; i++) {
              if (json[i].field10 > totalcheck && $.trim(json[i].field4) == countycheck && json[i].field6 == zipcheck){
                thisarray.push(json[i].field2 + json[i].field3);
              }
            }
          }

          return thisarray;
      };

      var ourvalues = function() {
          //return [20, 30, 40, 50, 60, 70, 80, 90];
          var thisarray = [];

          if (zipcheck === ''){
            for (i = 0; i < json.length; i++) {
              if (json[i].field10 > totalcheck && $.trim(json[i].field4) == countycheck){
                thisarray.push(json[i].field10);
              }
            }
          } else {
            for (i = 0; i < json.length; i++) {
              if (json[i].field10 > totalcheck && $.trim(json[i].field4) == countycheck && json[i].field6 == zipcheck){
                thisarray.push(json[i].field10);
              }
            }
          }

          return thisarray;
      };

    var barChartData = {
        labels: ourlabels(),
        //labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: 'Reported Tax: $',
            backgroundColor: "rgba(229,59,81,0.75)",
            //data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            //data: [20, 30, 40, 50, 60, 70, 80, 90]
            data: ourvalues()
        }]

    };

      var ctx = document.getElementById("canvas").getContext("2d");

      window.myBar = new Chart(ctx, {
          type: 'bar',
          data: barChartData,
          options: {
              elements: {
                  rectangle: {
                      borderWidth: 1,
                      borderColor: 'rgb(229,59,81)',
                      borderSkipped: 'bottom'
                  }
              },
              responsive: true,
              legend: {
                  display: true,
                  position: 'top',
              },
              title: {
                  display: true,
                  //text: datatext + ' / ' + 'County: ' + countycheck + ' / ' + 'Total greater than: $' +  totalcheck
                  text: datatext
              },
              scales:
              {
                  xAxes: [{
                      display: false
                  }],
                  yAxes: [{
                      ticks: {
                          max: 25000,
                          min: 0,
                          stepSize: 5000,
                          callback: function(value, index, values) {
                            if(parseInt(value) > 1000){
                              return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            } else {
                              return '$' + value;
                            }
                          }
                      }
                  }]
              }
          }
      });

    });

  };

  runmychart('data/MIXEDBEV_07_2016.json', 'EL PASO', 1000, '', 'July - 2016');

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80253294-1', 'auto');
  ga('send', 'pageview');

});

},{}]},{},[1]);
