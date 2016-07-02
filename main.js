$(document).ready(function() {

  $('#decemberData').click(function() {
      var totalcheck = $('#totalcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_12_2015.json', 'EL PASO', totalcheck);
  });

  $('#januaryData').click(function() {
      var totalcheck = $('#totalcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_01_2016.json', 'EL PASO', totalcheck);
  });

  $('#februaryData').click(function() {
      var totalcheck = $('#totalcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_02_2016.json', 'EL PASO', totalcheck);
  });

  $('#marchData').click(function() {
      var totalcheck = $('#totalcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_03_2016.json', 'EL PASO', totalcheck);
  });

  $('#aprilData').click(function() {
      var totalcheck = $('#totalcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_04_2016.json', 'EL PASO', totalcheck);
  });

  $('#mayData').click(function() {
      var totalcheck = $('#totalcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_05_2016.json', 'EL PASO', totalcheck);
  });

  $('#juneData').click(function() {
      var totalcheck = $('#totalcheck').val();
      myBar.destroy();
      myBar.update();
      runmychart('data/MIXEDBEV_06_2016.json', 'EL PASO', totalcheck);
  });

  var runmychart = function(datafile, countycheck, totalcheck){

    $.getJSON(datafile, function(json) {

      var ourlabels = function() {
          //return ["January", "February", "March", "April", "May", "June", "July", "August"];
          var thisarray = [];
          for (i = 0; i < json.length; i++) {
            if (json[i].field10 > totalcheck && $.trim(json[i].field4) == countycheck){
              thisarray.push(json[i].field2);
            }
          }
          return thisarray;
      };

      var ourvalues = function() {
          //return [20, 30, 40, 50, 60, 70, 80, 90];
          var thisarray = [];
          for (i = 0; i < json.length; i++) {
            if (json[i].field10 > totalcheck && $.trim(json[i].field4) == countycheck){
              thisarray.push(json[i].field10);
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
                  display: true,
                  text: 'Data: ' + datafile + ' || ' + 'County: ' + countycheck + ' || ' + 'Total greater than: $' +  totalcheck
              }
          }
      });

    });

  };

  runmychart('data/MIXEDBEV_06_2016.json', 'EL PASO', 1000);

});
