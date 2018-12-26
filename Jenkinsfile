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
                stash name: "dist", includes: "dist/ux-components/**"
            }
        }
        stage ('Build docker image') {
            agent {label 'master'}
            steps {
                unstash "dist"
                sh "docker build -t ${DOCKER_SNAPSHOTS_REGISTRY}/${IMAGE}:${BASE_TAG} ."
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'jenkins-at-nexus.netexlearning.com',
                        usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker login ${DOCKER_SNAPSHOTS_REGISTRY} -u ${USERNAME} -p ${PASSWORD}"
                    sh "docker push ${DOCKER_SNAPSHOTS_REGISTRY}/${IMAGE}:${BASE_TAG}"
                }
            }

        }
        stage ('Deploy') {
            agent any
            steps {
                sshagent(['ssh@lcloudtheme']) {
                    sh "$SSH_COMMAND docker login ${DOCKER_SNAPSHOTS_REGISTRY} -u maquinas_desarrollo -p m4qU1N4s-D3s4rr0ll0"
                    sh "$SSH_COMMAND docker pull ${DOCKER_SNAPSHOTS_REGISTRY}/${IMAGE}:${BASE_TAG}"
                    sh "$SSH_COMMAND \"docker rm -f ng-${BASE_TAG} || true\""
                    sh """
                        $SSH_COMMAND docker run -d --restart=always --name ng-${BASE_TAG} \\
                        --label traefik.port=80 \\
                        --label traefik.frontend.rule=PathPrefixStrip:/ng-${BASE_TAG} \\
                        --network ux-components-nebula_default \\
                        ${DOCKER_SNAPSHOTS_REGISTRY}/${IMAGE}:${BASE_TAG}
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
