def BASE_TAG = JOB_BASE_NAME.replace('/','-').replace("%2F",'-') as String
def DOCKER_SNAPSHOTS_REGISTRY = 'nexus.netexlearning.com:5001'
def IMAGE = 'netexlearning/ux-components'

pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '15'))
    }
    agent none
    environment{
        SSH_COMMAND = "ssh root@192.168.134.10  -o StrictHostKeyChecking=no -o UserKnownHostsFile=no "
    }
    stages {
        stage ('Build') {
            agent {
                docker {
                    image 'node:8'
                    args '-v /tmp:/tmp -e HOME=/tmp -w /code'
                }
            }
            steps {
                sh 'npm install'
                sh 'npm run build-ux-components'
                sh "npm run-script ng build -- --base-href /ng-${BASE_TAG}/"
                stash name: "dist", includes: "dist/ux-components"
            }
        }
        stage ('Build docker image') {
            agent {label 'master'}
            steps {
                sh "docker build -t ${NEXUS_URL}${IMAGE}:${BASE_TAG} ."
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'jenkins-at-nexus.netexlearning.com',
                        usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker login ${NEXUS_URL} -u ${USERNAME} -p ${PASSWORD}"
                    sh "docker push ${NEXUS_URL}${IMAGE}:${BASE_TAG}"
                }
            }
        }
        stage ('Deploy') {
            agent none
            steps {
                sshagent(['ssh@lcloudtheme']) {
                    sh '$SSH_COMMAND docker login ${NEXUS_URL} -u maquinas_desarrollo -p m4qU1N4s-D3s4rr0ll0'
                    sh '$SSH_COMMAND docker pull ${NEXUS_URL}${IMAGE}:${BASE_TAG}'
                    sh '$SSH_COMMAND "docker rm -f ng-${BASE_TAG} || true"'
                    sh """
                        $SSH_COMMAND docker run --restart=always --name ng-${BASE_TAG} 
                        --label traefik.port=80 
                        --label traefik.frontend.rule=PathPrefix:/ng-${BASE_TAG}
                        --network ux-components-nebula_default
                    """
                }
            }
        }
    }
    post {
        always {
            deleteDir() /* clean up our workspace */
        }
    }
}
