$(document).ready(function() {

  var datafile = 'data/MIXEDBEV_06_2016.json';

  var countycheck = 'EL PASO';

  var totalcheck = 2000;

  $.getJSON( datafile, function( json ) {

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
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each bar to be 2px wide and green
            elements: {
                rectangle: {
                    borderWidth: 1,
                    borderColor: 'rgb(252,217,32)',
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
                text: 'data: ' + datafile + ' || ' + 'county: ' + countycheck + ' || ' + 'total greater than: ' +  totalcheck
            }
        }
    });

    //var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    /*var randomScalingFactor = function() {
        return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    };
    var randomColorFactor = function() {
        return Math.round(Math.random() * 255);
    };
    var randomColor = function() {
        return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
    };*/

    /*$('#randomizeData').click(function() {
        var zero = Math.random() < 0.2 ? true : false;
        $.each(barChartData.datasets, function(i, dataset) {
            dataset.backgroundColor = randomColor();
            dataset.data = dataset.data.map(function() {
                return zero ? 0.0 : randomScalingFactor();
            });

        });
        window.myBar.update();
    });

    $('#addDataset').click(function() {
        var newDataset = {
            label: 'Dataset ' + barChartData.datasets.length,
            backgroundColor: randomColor(),
            data: []
        };

        for (var index = 0; index < barChartData.labels.length; ++index) {
            newDataset.data.push(randomScalingFactor());
        }

        barChartData.datasets.push(newDataset);
        window.myBar.update();
    });

    $('#addData').click(function() {
        if (barChartData.datasets.length > 0) {
            var month = MONTHS[barChartData.labels.length % MONTHS.length];
            barChartData.labels.push(month);

            for (var index = 0; index < barChartData.datasets.length; ++index) {
                //window.myBar.addData(randomScalingFactor(), index);
                barChartData.datasets[index].data.push(randomScalingFactor());
            }

            window.myBar.update();
        }
    });

    $('#removeDataset').click(function() {
        barChartData.datasets.splice(0, 1);
        window.myBar.update();
    });

    $('#removeData').click(function() {
        barChartData.labels.splice(-1, 1); // remove the label first

        barChartData.datasets.forEach(function(dataset, datasetIndex) {
            dataset.data.pop();
        });

        window.myBar.update();
    });*/

  });

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-80253294-1', 'auto');
    ga('send', 'pageview');
  
});
