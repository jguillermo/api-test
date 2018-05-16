pipeline {
  agent any
  parameters {
    choice(
      name: 'DEPLOY_REGION',
      choices:"eu-west-1\nus-west-2\nus-east-1",
      description: "Region de despliegue de aws")
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Set Enviroment') {
      steps {
        sh '''
          export DEPLOY_REGION=$DEPLOY_REGION
          '''
      }
    }
    stage('Test') {
      steps {
        sh 'make test'
      }
    }
  }
  post {
    always(dir) {
      cleanWS
    }
    success {
      sh '''
        echo "FIN SUCCESS"
        '''
    }
    failure {
      sh '''
        echo "FIN ERROR"
        '''
    }
  }
}
