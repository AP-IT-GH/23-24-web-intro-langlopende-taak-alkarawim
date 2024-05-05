// CPU Usage Chart
var ctx = document.getElementById('cpuUsageChart').getContext('2d');
var cpuUsageChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'Zondag'],
        datasets: [{
            label: 'CPU Gebruik (%)',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Memory Usage Chart
var ctx2 = document.getElementById('memoryUsageChart').getContext('2d');
var memoryUsageChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'Zondag'],
        datasets: [{
            label: 'Memory Usage (GB)',
            data: [3, 4, 2, 5, 6, 3, 4],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

