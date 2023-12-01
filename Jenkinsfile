pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    // Instalar dependencias de Cypress
                    bat 'npm install'
                }
            }
        }

        stage('Ejecutar pruebas Cypress') {
            steps {
                script {
                    // Ejecutar pruebas Cypress desde el primer archivo
                    bat 'npx cypress run --spec "cypress/e2e/createData.cy.js"'
                }
            }
        }

        stage('Descomprimir archivo ZIP') {
            steps {
                script {
                    // Rutas y nombres de archivo
                    def zipFilePath = 'ruta/a/tu/archivo.zip'
                    def extractPath = 'ruta/a/tu/carpeta/destino/'

                    // Crear carpeta de destino si no existe
                    bat "mkdir -p ${extractPath}"

                    // Descomprimir el archivo ZIP
                    bat "unzip -o ${zipFilePath} -d ${extractPath}"
                }
            }
        }

        stage('Ejecutar pruebas Cypress después de descomprimir') {
            steps {
                script {
                    // Ejecutar pruebas Cypress desde el segundo archivo después de descomprimir
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
