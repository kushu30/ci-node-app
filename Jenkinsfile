pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run') {
            steps {
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}