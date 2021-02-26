pipeline {
    agent any

    options {
        timeout(time:2, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = 'azuladotoujours/jenkins-cs'
        CONTAINER_NAME = 'jenkins-cs'
    }
    stages {
        stage('Build'){
            steps {    
                script {
                    dockerImage = docker.build "${env.ARTIFACT_ID}"
                }
            }
        }
        
        stage('Container running validation'){
            steps {
                script {
                    DOCKER_PS = sh (
                    script: "docker ps --quiet --filter name=${env.CONTAINER_NAME}",
                    returnStdout: true
                    ).trim()
                    if("${DOCKER_PS}"!=""){
                    sh (script: "docker rm -f ${env.CONTAINER_NAME}")
                    }
                }
            }
        }
        stage('Schedule Deploy'){
            steps {
                build job: 'test_cd', parameters: [string(name: 'ARTIFACT_ID', value:"${env.ARTIFACT_ID}"), string(name: 'CONTAINER_NAME', value: "${env.CONTAINER_NAME}")], wait: false
            }
        }
    }
}