			var Chart0 = echarts.init(document.getElementById("centre-top-left-0"));
			var Chart1 = echarts.init(document.getElementById("centre-top-left-1"));
			var Chart2 = echarts.init(document.getElementById("centre-top-left-2"));
			var Chart3 = echarts.init(document.getElementById("centre-top-right-1"));
			var Chart4 = echarts.init(document.getElementById("centre-footer-1-chart"));
			var Chart5 = echarts.init(document.getElementById("centre-footer-2-chart"));
			var Chart6 = echarts.init(document.getElementById("centre-footer-3-chart"));
			var name_title = "Market Value";
			var subname = '$20,467';
			option0 = {
				color: ['#5dd054','#f5f5f5'],
				tooltip: {
				show: false
			},
			series: [{
			name: '任务进度',
			type: 'pie',
			radius: ['60%', '70%'],
			label: {
            normal: {
                position: 'center'
            }
			},
			hoverAnimation: false,
			data: [{
            value: 180,
            name: '任务进度',
            itemStyle:{
                normal:{
                    
                }
            },
            label: {
                normal: {
                    formatter: function(){
						return 2124
					},
                    textStyle: {
                        color:'#15ce56',
                        fontSize: 20,
                        fontWeight:'bold'
                    }
                }
            },
        }, {
            value:60,
            name: '占位',
            label: {
                normal: {
                    formatter: '\nAPPLICANTS',
                    textStyle: {
                        color: '#a5b3ef',
                        fontSize: 8
                    }
                }
            },
            itemStyle:{
                normal:{
                    
                }
            },
        }]
    }]
};
			option1 = {
				color: ['#69a5e1','#f5f5f5'],
				tooltip: {
					show: false
				},
				series: [{
					name: '任务进度',
					type: 'pie',
					radius: ['60%', '70%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					hoverAnimation: false,
					data: [{
						value: 180,
						name: '任务进度',
						itemStyle:{
							normal:{
								
							}
						},
						label: {
							normal: {
								formatter: function(){
									return 1467
								},
								textStyle: {
									color:'#15ce56',
									fontSize: 20,
									fontWeight:'bold'
								}
							}
						},
					}, {
						value:60,
						name: '占位',
						label: {
							normal: {
								formatter: '\nINTERVIEWS',
								textStyle: {
									color: '#a5b3ef',
									fontSize: 8
								}
							}
						},
						itemStyle:{
							normal:{
								
							}
						},
					}]
				}]
			};
			option2 = {
				color: ['#fdba4f','#f5f5f5'],
				tooltip: {
					show: false
				},
				series: [{
					name: '任务进度',
					type: 'pie',
					radius: ['60%', '70%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					hoverAnimation: false,
					data: [{
						value: 180,
						name: '任务进度',
						itemStyle:{
							normal:{
								
							}
						},
						label: {
							normal: {
								formatter: function(){
									return 296
								},
								textStyle: {
									color:'#15ce56',
									fontSize: 20,
									fontWeight:'bold'
								}
							}
						},
					}, {
						value:60,
						name: '占位',
						label: {
							normal: {
								formatter: '\nFORWARDS',
								textStyle: {
									color: '#a5b3ef',
									fontSize: 8
								}
							}
						},
						itemStyle:{
							normal:{
								
							}
						},
					}]
				}]
			};
			option3 = {
    color: ['#5dd054'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisTick: {
                alignWithLabel: false
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '45%',
            data:[10, 52, 100, 34, 89, 67, 22,42,75,8]
        }
    ]
};
			option4 = {
    color:['#5dd054','#bbe2e8'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    
    series: [
        {
            
            type:'pie',
            //饼状图
            avoidLabelOverlap: false,
            //标签
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{d}%',
                   textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 15,
                    fontWeight : 'bolder'
                 }
                },
            },
            data:[
                {value:635},
                {value:310}
                
            ]
        }
    ]
};
			option5 = {
	visualMap: {
			type: 'piecewise',
			orient: 'horizontal',
			right:10,
			bottom: 10,
			pieces: [{
				color: '#5dd054',
				label: 'Day'
			}, {
				color:'#69a5e1',
				label: 'Night'
			}, ],
			seriesIndex: 1,
			dimension: 1
		},
   title: {
        text: name_title,
        subtext: subname,
        x: 'left',
        textStyle: {
            color: '#262b2e',
        },
        subtextStyle:{
            color:'#262b2e',
			fontSize:35
        },
		itemGap:10
    },
    legend: {
        bottom: '10',
        left: '33',
        textStyle: {
            color: '#3e4956',
            fontSize: 16,
        },
        itemWidth: 10,
        itemHeight: 18,
        data: ['4 ', '6']

    },
    yAxis: [{
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#3e4956',
            fontSize: 12,
        },
        type: 'category',
        position: 'left',
        data: ['July', 'June', 'May', 'April', 'March']

    }],

    xAxis: [{
        show: false,
        axisTick: {
            show: false
        },
        type: 'value',
        name: '',
        min: 0,
        max: 1300,
        inverse: false,
        axisLine: {
            show: false,
        },
    }],
	
    series: [{

            name: 'Day',
            align: 'left',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#69a5e1'
                }
            },
            barWidth: '10',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#69a5e1'
                    }
                }
            },
            data: [321, 457, 789, 1244, 1322],
        },


        {
            name: 'Night',
            align: 'left',
            type: 'bar',
            barGap: '99%',
            barWidth: '10',
            itemStyle: {
                normal: {
                    color: '#5dd054'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#5dd054'
                    }
                }
            },
            data: [347, 347, 654, 873, 897],
        },

    ]
};
			option6 = {
// 		<-- 提示-->
//         tooltip: {
//             trigger: 'axis'
//         },
        
		xAxis: [{
            type: 'category',
			
			boundaryGap:false,
			axisTick:{
				show:false
			},
			axisLine:{
				show:false
			},
            data: ['JUNE 20','JULY 15','AUGUST 3']
        }],
        yAxis: [{
			splitNumber:2,
			axisLabel:{
				show:false
			},
			axisTick:{
				show:false
			},
			axisLine:{
				show:false
			}
        }],
        series: [{
            name: '',
			color:'#69a5e1',
            type: 'line',
			symbol:'none',
			smooth:0.6,
            data: [1, 8,10]
        }]
    };
			Chart0.setOption(option0);
			Chart1.setOption(option1);
			Chart2.setOption(option2);
			Chart3.setOption(option3);
			Chart4.setOption(option4);
			Chart5.setOption(option5);
			Chart6.setOption(option6);