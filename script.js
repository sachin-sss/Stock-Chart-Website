document.addEventListener("DOMContentLoaded", function () {
    loadCompanyDropdown();
});

function loadCompanyDropdown() {
    fetch("/companies")
        .then(response => response.json())
        .then(companies => {
            const dropdown = document.getElementById("companySelect");
            dropdown.innerHTML = ""; 

            companies.forEach(company => {
                const option = document.createElement("option");
                option.value = company;
                option.textContent = company;
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error loading companies:", error));
}

function fetchSelectedCompany() {
    const selectedCompany = document.getElementById("companySelect").value;
    fetch(`/data/${selectedCompany}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                alert("No data available for this company.");
                return;
            }
            renderChart(data, selectedCompany);
        })
        .catch(error => console.error("Error fetching data:", error));
}

function renderChart(data, company) {
    const ctx = document.getElementById("stockChart").getContext("2d");
    
    if (window.stockChartInstance) {
        window.stockChartInstance.destroy();
    }

    const labels = data.map(item => item.index_date);
    const values = data.map(item => item.closing_index_value);

    window.stockChartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: `Stock Prices of ${company}`,
                data: values,
                borderColor: "blue",
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
