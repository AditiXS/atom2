$(document).ready(function(){
    const menu = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');

    menu.addEventListener('click', function(){
        sidebar.classList.toggle('active');
        if(window.innerWidth <= 768){
            sidebar.classList.remove('active');
        }
    });

    // navbar color
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 50) {
            $('.navbar').css('background','var(--backColor)');
            $('.navbar').css('box-shadow', " rgba (0, 0, 0, 0.1) 0px 4px 12px");
        }
        else{
            $('.navbar').css('background','transparent');
            $('.navbar').css('box-shadow', "none");
        }
    })

    var options = {
        series:[{
            name: 'Last Month  $32,502.00',
            data: [101, 64, 78, 191, 42, 109, 100, 230]
        },{
            name:'Last Year $46,018.00',
            data: [41, 32, 85, 42, 124, 52, 71, 120]
        }],
        chart: {
            height: 300,
            type:'area',
            toolbar: {
                show:false,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#1a73e8','#e91e63'],
        stroke: {
            curve: 'smooth',
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            }
        },
        tooltip: {
            theme: 'dark',
        },
        xaxis: {
            categories: [
                "January 12",
                "January 13",
                "January 14",
                "January 15",
                "January 16",
                "January 17",
                "January 18",
                "January 19",
                "Sep",
                "Oct",
            ],
            labels: {
                style: {
                    colors: 'var(--fontColor)'
                }
           }
        },
        yaxis :{
           labels: {
                style: {
                    colors: 'var(--fontColor)'
                }
           }
        },
        legend: {
            labels: {
                 colors: 'var(--fontColor)'   
           },
        },
    };

    var chart = new ApexCharts(document.querySelector("#chLine"), options);
    chart.render();
    
    // doughnut chart
    var options = {
        series: [24, 14, 38, 23],
        labels: ['Diet Plans', 'Meditation', 'Exercise', 'Others',],
        chart: {
            type: 'donut',
            height: 250,
            plotOptions: {
                pie: {
                    expandOnClick: true
                },
            },
        },
        colors: ['#3a86ff','#3d348b','#ff006c','#ffbe0b'],
        legend: {
            show: false
        }
    };
    var chart = new ApexCharts(document.querySelector('#dougnut-chart'), options);
    chart.render();
    })