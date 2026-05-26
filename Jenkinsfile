pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    }

    stages {
        stage('Install') {
            steps {
                sh 'node -v'
                sh 'npm -v'
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
