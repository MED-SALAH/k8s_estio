node('master') {
    properties ([
        parameters([
              [
                 $class: 'NodeParameterDefinition',
                 allowedSlaves: ['ALL (no restriction)'],
                 defaultSlaves: ['master'],
                 description: 'What nodes to run the build on.',
                 name: 'NODE_NAME',
                 nodeEligibility: [$class: 'AllNodeEligibility'],
                 triggerIfResult: 'allowMultiSelectionForConcurrentBuilds'
            ]
        ])
    ])
}


pipeline {

     agent {
        node {
              label "${NODE_NAME}"
              customWorkspace "${env.WORKSPACE}/${env.JOB_NAME}_${env.BUILD_ID}"
        }
      }



     stages {

             stage('GET PROJECT ENV') {
                steps {
                    echo "dir : /${env.JOB_NAME} removed "
                    echo "GIT BRANCH : ${env.GIT_BRANCH}";
                    echo "GIT URL : ${env.GIT_URL}"
                    echo "GIT URL : ${env.JAVA_HOME}"
                    echo "NODE NAME : ${env.NODE_NAME}"
                    echo "JOB NAME : ${env.JOB_NAME}"
                }
            }

            stage('INSTALL') {
                steps {
                    sh """
                        mvn clean install
                    """
                 }
            }
     }

      post {

             always {
                     echo "-----------------------------------THE END ------------------------------"
             }


            failure {
                    echo 'failure:  Error when executing : thank you to consult the logs on Jenkins  '

            }

            success {

                    echo '         *********** Build and deploy to nexus  was a success ***************************'

                    echo 'sh "rm -rf ../${env.JOB_NAME}*"'

             }

        }

}



