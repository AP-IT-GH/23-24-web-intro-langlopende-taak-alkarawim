// Import Faker as an ES module
import { faker } from 'https://esm.sh/@faker-js/faker';

// Data generation using Faker
const data = [];
const categories = ['Firewall', 'Intrusion Detection System', 'Antivirus', 'VPN', 'Access Control'];

categories.forEach(category => {
  const entry = {
    category: category,
    count: faker.number.int({ min: 50, max: 5000 }),
    severity: faker.helpers.arrayElement(['Low', 'Medium', 'High']),
    status: faker.helpers.arrayElement(['Active', 'Inactive']),
  };
  data.push(entry);
});

// Update the table with generated data
const tableBody = document.querySelector("#dataTable").querySelector('tbody');
tableBody.innerHTML = data.map(cat => `<tr>
  <td>${cat.category}</td>
  <td>${cat.count}</td>
  <td>${cat.severity}</td>
  <td>${cat.status}</td>
</tr>`).join("\n");

// Feather Icons Replacement
feather.replace();

// Graphs using Chart.js
document.addEventListener('DOMContentLoaded', function () {
  const categoriesCtx = document.getElementById("categories");
  const categoriesChart = new Chart(categoriesCtx, {
    type: 'bar',
    data: {
      labels: data.map(cat => cat.category),
      datasets: [{
        data: data.map(cat => cat.count),
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false,
      }
    }
  });
});
