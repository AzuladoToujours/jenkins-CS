pipeline {
    agent any

    options {
        timeout(time:2, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = 'azuladotoujours/jenkins-cs'
        SERVICE_NAME = 'jenkins-cs'
        STACK_NAME = 'test'
    }
    stages {
        stage('Build'){
            steps {    
                script {
                    dockerImage = docker.build "${env.ARTIFACT_ID}"
                }
            }
        }
        
        stage('Publish'){
            when {
                branch 'master'
            }
            steps {
                script {
                    docker.withRegistry("", "DockerHubCredentials"){
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Schedule Deploy'){
            when {
                branch 'master'
            }
            steps {
                build job: 'cd-test', parameters: [string(name: 'ARTIFACT_ID', value:"${env.ARTIFACT_ID}"), string(name: '', value: "${}"), string(name: '', value: "${}")]
            }
        }
    }
}