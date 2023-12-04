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
               bat 'npm install'
           }
       }
        stage('Use TDG to generate data') {
            steps {
                bat 'cypress run --spec=cypress\\e2e\\createData.cy.js'
            }
        }
             
        stage('Unzip file') {
            steps {
                bat 'powershell Expand-Archive -Path %ZIP_FILE_PATH% -DestinationPath %UNZIP_DESTINATION%'
            }
        }
       stage('Deploy') {
           steps {
               echo 'Deploying....'
           }
       }
   }
}