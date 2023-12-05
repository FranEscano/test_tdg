# README

## Random Data Generator App

This application is designed to automate the generation and utilization of random personal data for testing purposes. It interacts with a TDG (Test Data Generator) to fetch and process data. The application is built using Cypress for data generation, and the web form is hosted on Vercel.com, making it accessible on the internet. Additionally, a Jenkins pipeline script is included to facilitate the entire process automatically.

### Table of Contents
1. [Installation](#installation)
2. [Manual Execution](#manual-execution)
3. [Jenkins Pipeline Setup](#jenkins-pipeline-setup)

### Installation

To install and run the application manually, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/FranEscano/test_tdg.git
    cd your-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Manual Execution

1. Run the data generation process:
    ```bash
    npx cypress run --spec=cypress/e2e/createData.cy.js
    ```

    This command will interact with the TDG website, download a zip file, and save it to the Cypress `downloads` folder.

2. Manually extract the JSON file from the downloaded zip and move it to the Cypress `fixtures` folder.

3. Run the script to use the JSON file in the React app:
    ```bash
    npx cypress run --spec=cypress/e2e/useData.cy.js
    ```

If you prefer to see how Cypress navigates through web interfaces by selecting and filling in each field, use the command 
 ```bash 
  npx cypress open
 ```
and choose each file in the same order as specified above. 

### Jenkins Pipeline Setup

To set up a Jenkins pipeline for automated execution, follow these steps:

1. Install Jenkins on your server or preferred platform.

2. Create a new Jenkins pipeline job.

3. Configure the pipeline job with the following settings:

    - **General:**
        - Specify a meaningful name for the job.

    - **Source Code Management:**
        - Choose your version control system (e.g., Git).
        - Provide the repository URL (e.g., `https://github.com/FranEscano/test_tdg.git`).

    - **Pipeline:**
        - Define the pipeline script from SCM.
        - Choose your version control system.
        - Specify the repository URL and credentials.

    - Save the configuration.

4. In the repository, there is a `Jenkinsfile` containing the pipeline script.:

5. Trigger the Jenkins pipeline manually.

7. Jenkins will automatically clone the repository, install dependencies, generate data, and use the JSON file in the React app.

Now, your Jenkins pipeline is configured to automate the entire process of data generation, including the manual step of extracting the JSON file from the zip. The React form is hosted on Vercel, and there's no need to start it manually. Access the form on the specified URL (`https://test-tdg.vercel.app/`) to use the generated data for testing.