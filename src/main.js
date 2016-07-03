$(document).ready(function() {

  $('#decemberData').click(function() {
      var totalcheck = $('#totalcheck').val();
      var zipcheck = $('#zipcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_12_2015.json', 'EL PASO', totalcheck, zipcheck);
  });

  $('#januaryData').click(function() {
      var totalcheck = $('#totalcheck').val();
      var zipcheck = $('#zipcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_01_2016.json', 'EL PASO', totalcheck, zipcheck);
  });

  $('#februaryData').click(function() {
      var totalcheck = $('#totalcheck').val();
      var zipcheck = $('#zipcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_02_2016.json', 'EL PASO', totalcheck, zipcheck);
  });

  $('#marchData').click(function() {
      var totalcheck = $('#totalcheck').val();
      var zipcheck = $('#zipcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_03_2016.json', 'EL PASO', totalcheck, zipcheck);
  });

  $('#aprilData').click(function() {
      var totalcheck = $('#totalcheck').val();
      var zipcheck = $('#zipcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_04_2016.json', 'EL PASO', totalcheck, zipcheck);
  });

  $('#mayData').click(function() {
      var totalcheck = $('#totalcheck').val();
      var zipcheck = $('#zipcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_05_2016.json', 'EL PASO', totalcheck, zipcheck);
  });

  $('#juneData').click(function() {
      var totalcheck = $('#totalcheck').val();
      var zipcheck = $('#zipcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_06_2016.json', 'EL PASO', totalcheck, zipcheck);
  });

  var runmychart = function(datafile, countycheck, totalcheck, zipcheck){

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
            label: '$',
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
                  display: false,
                  position: 'top',
              },
              title: {
                  display: false,
                  text: 'Data: ' + datafile + ' || ' + 'County: ' + countycheck + ' || ' + 'Total greater than: $' +  totalcheck
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

  runmychart('data/MIXEDBEV_06_2016.json', 'EL PASO', 1000, '');

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80253294-1', 'auto');
  ga('send', 'pageview');

});
