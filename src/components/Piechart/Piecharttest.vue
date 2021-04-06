<template>
    <div class="singlebar">
        <p>piechart</p>
         <chart class="chart" :option="chartOptionsBar" />
    </div>
</template>
<script>
import "echarts";
import a from '../../assets/imgs/a.jpeg';
import d from '../../assets/imgs/d.png';

var piePatternImg = new Image();
piePatternImg.src = d;
var bgPatternImg = new Image();
bgPatternImg.src = a;

var itemStyle = {
    normal: {
        opacity: 0.7,
        color: {
            image: piePatternImg,
            repeat: 'repeat'
        },
        borderWidth: 3,
        borderColor: '#235894'
    }
};

export default {
    data:()=>{
        return ({
            chartOptionsBar: {
                    backgroundColor: {
        image: bgPatternImg,
        repeat: 'repeat'
    },
    title: {
        text: 'Chris',
        textStyle: {
            color: '#235894'
        }
    },
    tooltip: {},
    series: [{
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
            fontSize: 18,
            color: '#235894'
        },
        labelLine: {
            lineStyle: {
                color: '#235894'
            }
        },
        data: [
            {value: 1048, name: 'A'},
            {value: 735, name: 'B'},
            {value: 580, name: 'C'},
            {value: 484, name: 'D'},
            {value: 300, name: 'E'}
        ],
        itemStyle: itemStyle
    }]
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