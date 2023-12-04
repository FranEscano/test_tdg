pipeline {
   agent any
//    options {
//         ansiColor('xterm')
//     }

//    tools {nodejs "Node21"}

   environment {
//         CHROME_BIN = '/bin/google-chrome'
        ZIP_FILE_PATH = 'cypress\\downloads\\peopleDetails.zip' 
        UNZIP_DESTINATION = 'cypress\\fixtures' 
   }

   stages {
       stage('Dependencies') {
           steps {
               bat 'npm install'
               bat 'npm install cypress'
               bat 'npm start'
           }
       }
        stage('Use TDG to generate data') {
            steps {
                bat 'npx cypress run --spec=cypress\\e2e\\createData.cy.js'
            }
        }
             
        stage('Unzip file') {
            steps {
                bat 'powershell Expand-Archive -Path %ZIP_FILE_PATH% -DestinationPath %UNZIP_DESTINATION%'
            }
        }
       stage('use data') {
           steps {
               bat 'npx cypress run --spec=cypress\\e2e\\spec.cy.js'
           }
       }
   }
}