<template>
    <div class="singlebar">
        <p>piechart</p>
         <chart class="chart" :option="chartOptionsBar" />
    </div>
</template>
<script>
import "echarts";
export default {
    data:()=>{
        return ({
            chartOptionsBar: {
            xAxis: {
                data: ['Q1', 'Q2', 'Q3', 'Q4']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                type: 'pie',
                labelLine:{
                    show:false
                },
                legend:{
                    show:false
                },
                data: [63, 75, 24, 92]
                },

            ]
            },

        })
    },
    props:{

    },
    methods:{
     
    }
}
</script>

<style>
.singlebar{
      display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
    .chart{
        width:400px;
        height: 400px;
    
    }
</style>