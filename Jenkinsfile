pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'Building..'
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