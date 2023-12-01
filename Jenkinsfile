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
                    @echo off
                    // Paths and name of the zip file
                    set 'zipFilePath=cypress/downloads/peopleDetails.zip'
                    set 'extractPath=cypress/fixtures/'

                    // Unzip
                    tar -xf %zipFilePath% -C %extractPath%
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
