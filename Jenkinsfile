pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/kushu30/ci-node-app.git'
            }
        }
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run') {
            steps {
                bat 'npm start'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
}