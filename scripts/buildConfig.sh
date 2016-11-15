#!/usr/bin/env bash
FILE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
_DOCKER_ROOT="${FILE_DIR}/../.."
_APP_ROOT="${FILE_DIR}/.."

source "${_DOCKER_ROOT}/utils.sh"
export $(getEnvVars)

env_names=$(getEnvSubstituteString)

envsubst $env_names < "${_DOCKER_ROOT}/docker/containers/app/config.js" > "${_APP_ROOT}/config.js"