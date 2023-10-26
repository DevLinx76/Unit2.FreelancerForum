# Unit2.FreelancerForum

# Freelancer Forum

The Freelancer Forum displays a dynamic list of freelancers with their names, occupations, and starting prices. Every few seconds, a new freelancer with randomized details is added to the list. The average starting price of all freelancers is also calculated and displayed.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Criteria](#criteria)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
   ```git
   git clone [your-repository-link]
   ```

2. Open the `index.html` file in your preferred browser.

## Usage

1. Once you open the `index.html`, you'll see a table displaying the initial list of freelancers.
2. The average starting price of the displayed freelancers is shown above the table.
3. Wait a few seconds, and you'll observe new freelancers being added to the list dynamically.
4. The average starting price updates as new freelancers are added.

## Features

- **Dynamic Freelancer Addition**: Every few seconds, a new freelancer with randomized details is added to the list.
- **Average Starting Price Calculation**: The average starting price of all listed freelancers is dynamically calculated and displayed.
- **Responsive Design**: The Freelancer Forum is designed to be viewed on devices of all sizes.

## Criteria

1. **Project Setup**: The latest changes have been pushed to the submitted Github repo.
2. **Project Setup**: The repo contains an HTML file and a connected JS file.
3. **DOM**: The HTML does not contain any hard-coded data about freelancer names, occupations, or starting prices.
4. **DOM**: `document.querySelector` is correctly used to select existing DOM elements.
5. **State**: The program initializes an array of possible names and an array of possible occupations.
6. **State**: The program initializes an array of at least two freelancers with names, occupations, and starting prices.
7. **Functionality**: The initial array of freelancers is rendered onto the page.
8. **Functionality**: A function is written that correctly calculates the average starting price of the freelancers array.
9. **DOM**: The DOM is updated to reflect the average starting price.
10. **Functionality**: A function is written that generates a freelancer with a random name, occupation, and starting price. This object is pushed into the freelancers array.
11. **Functionality**: An interval is set to add a freelancer and rerender every few seconds.
12. **TC-FR 6**: Understands expanded JavaScript and Intermediate Programming.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
