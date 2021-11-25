var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: 'Traffic Source',
            data: [1200, 1900, 3000],
            backgroundColor: [
                'rgba(222, 130, 50, .5)',
                'rgba(0, 180, 175, .5)',
                'rgba(255, 99, 132, .5)'
            ],
            borderColor: [
                'rgba(222, 130, 50, .5)',
                'rgba(0, 180, 175, .5)',
                'rgba(255, 99, 132, .5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});


var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        //Month-wise
        labels: ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [{
            label: 'Profits',
            data: [1000, 15000, 3200, 5000, 1211, 13430, 15600, 19430, 22000, 23300, 25700, 22000],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)', 
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',  
                'rgba(255, 99, 132, 0.2)', 
                'rgba(54, 162, 235, 0.2)',  
                'rgba(255, 159, 64, 0.2)',  
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)', 
                'rgba(255, 159, 64, 0.2)', 
                'rgba(54, 162, 235, 0.2)', 
                'rgba(153, 102, 255, 0.2)', 
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 0.2)', 
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',  
                'rgba(255, 99, 132, 0.2)', 
                'rgba(54, 162, 235, 0.2)',  
                'rgba(255, 159, 64, 0.2)',  
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)', 
                'rgba(255, 159, 64, 0.2)', 
                'rgba(54, 162, 235, 0.2)', 
                'rgba(153, 102, 255, 0.2)', 
                'rgba(75, 192, 192, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});