pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    // Install dependencies
                    bat 'npm install'
                }
            }
        }

        stage('Create data from TDG') {
            steps {
                script {
                    // execute Cypress file to create Data
                    bat 'npx cypress run --spec "cypress/e2e/createData.cy.js"'
                }
            }
        }

        stage('unzip file') {
            steps {
                script {
                    // Paths and name of the zip file
                    def zipFilePath = 'cypress/downloads/peopleDetails.zip'
                    def extractPath = 'cypress/fixtures/'

                    // Unzip
                    bat "unzip -o ${zipFilePath} -d ${extractPath}"
                }
            }
        }

        stage('Use json file with data in website') {
            steps {
                script {
                    bat "npm start"
                    // Execute Cypress script to fill up a form
                    bat 'npx cypress run --spec "cypress/integration/segundo_archivo_spec.js"'
                }
            }
        }
    }

    // post {
    //     always {
    //         // Limpieza, si es necesario
    //     }
    // }
}
