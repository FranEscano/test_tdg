pipeline {
   agent any
   options {
        ansiColor('xterm')
    }

   tools {nodejs "Node21"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }

   stages {
       stage('Dependencies') {
           steps {
               bat 'npm install cypress'
           }
       }
        stage('Test 1') {
            steps {
                bat 'npx cypress run --spec cypress/e2e/createData.cy.js'
            }
        }
             
        stage('Test 2') {
            steps {
        sh 'npm run cypress2:ci'
            }
        }
       stage('Deploy') {
           steps {
               echo 'Deploying....'
           }
       }
   }
}