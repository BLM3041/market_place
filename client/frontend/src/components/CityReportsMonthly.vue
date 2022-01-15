<template>
    <div class="container">
        <div class="chart" ref="chartdiv"> </div>
    </div> 
</template>

<script>
import axios from 'axios'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default{
    name:'CityReportsMonthly',
    data() {
        return {
        AllSales : [],
        sellerId : this.$route.params.sellerid
        };
    },
  mounted() {
     
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            var mm1
            var yyyy1
            if(mm==1){
                mm1= 12
                yyyy1= yyyy-1; 
            }
            else{
                mm1 = mm-1;
                yyyy1 = yyyy
            }
             
            let before = yyyy1 + '-' + mm1 + '-' + dd;
            const info = {
                startDate:before , 
                 endDate: today
            }
            console.log(info)
      axios.post(`http://localhost:5000/management/reports`, info)
     
        .then(res => {
            console.log(res)
            this.AllSales = res.data
            console.log("sales are:", this.AllSales)
            })
        .then( () =>{
            let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    chart.paddingRight = 20;

    chart.data = this.AllSales;
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "productid";
    categoryAxis.title.text = "Products";
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Quantities sold";


    let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Sales";
    series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "quantity";
    series.dataFields.categoryX = "productid";

    this.chart = chart;
    
        }
                
        )
        .catch( err => console.log(err.message))

    
  },

  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
       
  },
}
</script>

<style scoped>
    
    .chart{
        width: 800px;
        height: 400px;
        margin: auto;
    }
</style>