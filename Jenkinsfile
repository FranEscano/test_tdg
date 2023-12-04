pipeline {
   agent any
   options {
        ansiColor('xterm')
    }

   tools {nodejs "Node21"}

   environment {
        CHROME_BIN = '/bin/google-chrome'
        ZIP_FILE_PATH = 'cypress\\downloads\\peopleDetails.zip' 
        UNZIP_DESTINATION = 'cypress\\fixtures' 
   }

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm install'
               sh 'npx cypress install'
           }
       }
        stage('Use TDG to generate data') {
            steps {
                sh 'docker run -v $PWD:/e2e -w /e2e cypress/included:3.4.0'
                sh 'npx cypress run --spec=cypress\\e2e\\createData.cy.js'
            }
        }
             
        stage('Unzip file') {
            steps {
                sh 'powershell Expand-Archive -Path ${ZIP_FILE_PATH} -DestinationPath ${UNZIP_DESTINATION}'
            }
        }
       stage('use data') {
           steps {
               sh 'npx cypress run --spec=cypress\\e2e\\spec.cy.js'
           }
       }
   }
}