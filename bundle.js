(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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





window.onload = function() {

  $.getJSON( "data/MIXEDBEV_06_2016.json", function( json ) {

    countycheck = 'EL PASO';

    var ourlabels = function() {
        //return ["January", "February", "March", "April", "May", "June", "July", "August"];
        var thisarray = [];
        for (i = 0; i < json.length; i++) {
          if ($.trim(json[i].field4) == countycheck){
            thisarray.push(json[i].field2);
          }
        }
        return thisarray;
    };

    var ourvalues = function() {
        //return [20, 30, 40, 50, 60, 70, 80, 90];
        var thisarray = [];
        for (i = 0; i < json.length; i++) {
          if ($.trim(json[i].field4) == countycheck){
            thisarray.push(json[i].field10);
          }
        }
        return thisarray;
    };

    //dataarray = [];
    //dataarray.push(json[0].field10);
    //dataarray.push(json[1].field10);

    /*var a = json[0].field10;
    var b = json[1].field10;*/

    /*anotherarray = [];
    anotherarray.push(a);
    anotherarray.push(b);*/
    //console.log(json);
    /*console.log('a: '+a);
    console.log('b: '+b);
    console.log('a+b: '+(a+b));*/



  var barChartData = {
      labels: ourlabels(),
      //labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
          label: '$',
          backgroundColor: "rgba(220,220,220,0.5)",
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
                    borderWidth: 2,
                    borderColor: 'rgb(74, 150, 226)',
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
                text: 'June Alcohol Sales'
            }
        }
    });



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

};

},{}]},{},[1]);
