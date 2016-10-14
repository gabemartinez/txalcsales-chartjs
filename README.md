# txalcsales-chartjs
El Paso, Texas Mixed Beverage Sales Tax Receipts - A single-page Chart.js project.

The visualizations represent the mixed beverage tax data reported by El Paso County taxpayers (bars/restaurants) under Chapter 183 of the Texas Tax Code.
Using the form, enter a Mixed Beverage Sales Tax (MBST) Greater Than threshold (not required), zip code (not required), and then click a month of data to update visualization.

On initial load, the most recent month of data with no options selected will be shown in the chart. Hover over a bar to view establishment name, and other details.

[Data Source](https://www.comptroller.texas.gov/transparency/open-data/search-datasets/)

# Using Chart.js

[Chart.js](http://www.chartjs.org/)

# Run Locally With SimpleHTTPServer

python -m SimpleHTTPServer 8888

# View the app online

[http://www.txalcsales.martinezgabriel.com/](http://www.txalcsales.martinezgabriel.com/)

# csvtojson was used to convert data

Sweet utility that you can see [here](https://www.npmjs.com/package/csvtojson).

I removed default headers by using the command below:

$ csvtojson MIXEDBEV_07_2016.CSV > MIXEDBEV_07_2016.json --noheader=true
