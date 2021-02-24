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
                    if("${DOCKER_PS}"==""){
                    echo "vacio"   
                    }else {
                    echo "${DOCKER_PS}"
                    }
                }
            }
        }
    }
}