<template>
    <div class="singlebar">
        <p>multi bar</p>
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
                type: 'bar',
                data: [63, 75, 24, 92]
                },
                {
                type: 'bar',
                data: [13, 25, 54, 32]
                },
                {
                type: 'bar',
                data: [63, 55, 44, 92]
                },
                {type: 'line',
                data: [63, 55, 44, 92]
                }
            ]
            }
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