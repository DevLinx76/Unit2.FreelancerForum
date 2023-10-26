/* Freelancer Forum */
const possibleName = ["Devin", "Cindy", "Julia", "Ramona", "Liz", "Sally", "Matthew", "Edwin", "Heather", "Ann", "Jared", "Jenny"];
const possibleOccupations = ["Web Developer", "ASL Interpreter", "Marketer", "Software Developer", "Educator", "Doctor", "Constructor", "Mentor", "Realtor", "Investor", "Driver", "ASL Interpreter"];

const freelancers = [
    { name: "Devin", price: 25, occupation: "Web Developer" },
    { name: "Cindy", price: 30, occupation: "ASL Interpreter" },
    { name: "Julia", price: 35, occupation: "Marketer" },
    { name: "Ramona", price: 40, occupation: "Software Developer" },
    { name: "Liz", price: 45, occupation: "Educator" },
    { name: "Sally", price: 50, occupation: "Doctor" },
    { name: "Matthew", price: 55, occupation: "Constructor" },
    { name: "Edwin", price: 60, occupation: "Mentor" },
    { name: "Heather", price: 65, occupation: "Realtor" },
    { name: "Ann", price: 60, occupation: "Investor" },  // Reduced by $10
    { name: "Jared", price: 65, occupation: "Driver" },  // Reduced by $10
    { name: "Jenny", price: 70, occupation: "ASL Interpreter" }  // Reduced by $10
];


// Calculate the average price
function calculateAveragePrice() {
    let total = 0;
    freelancers.forEach(f => total += f.price);
    return total / freelancers.length;
}

// Add freelancers to the DOM
function addFreelancersToDOM() {
    const freelancerList = document.getElementById('freelancerList');
    freelancerList.innerHTML = ''; // Clear the list first

    freelancers.forEach(freelancer => {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = freelancer.name;
        tr.appendChild(nameTd);

        const occupationTd = document.createElement('td');
        occupationTd.textContent = freelancer.occupation;
        tr.appendChild(occupationTd);

        const priceTd = document.createElement('td');
        priceTd.textContent = `$${freelancer.price}`;
        tr.appendChild(priceTd);

        freelancerList.appendChild(tr);
    });
}

// Styling with DOM
function applyStyles() {
    const container = document.querySelector('.forum-container');
    container.style.width = "80%";
    container.style.margin = "0 auto";
    container.style.border = "1px solid black";
    container.style.padding = "20px";
    container.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
    
    const table = document.querySelector('table');
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    
    const ths = document.querySelectorAll('th, td');
    ths.forEach(th => {
        th.style.border = "1px solid black";
        th.style.padding = "8px 15px";
    });

    const thElements = document.querySelectorAll('th');
    thElements.forEach(th => {
        th.style.background = "#f2f2f2";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('averagePrice').textContent = `$${calculateAveragePrice()}`;
    addFreelancersToDOM();
    applyStyles();
});

// Function to generate a random freelancer
function generateRandomFreelancer() {
    const randomName = possibleName[Math.floor(Math.random() * possibleName.length)];
    const randomOccupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
    const randomPrice = Math.floor(Math.random() * (100 - 20 + 1)) + 20; // Random price between $20 and $100

    return {
        name: randomName,
        occupation: randomOccupation,
        price: randomPrice
    };
}

// Function to add a random freelancer and rerender
function addRandomFreelancer() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);

    // Update the DOM
    addFreelancersToDOM();
    document.getElementById('averagePrice').textContent = `$${calculateAveragePrice()}`;
}

// Set an interval to add a freelancer and rerender every few seconds
setInterval(addRandomFreelancer, 5000); // Adds a new freelancer every 5 seconds
