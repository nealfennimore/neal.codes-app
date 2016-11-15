#!/usr/bin/env bash
DOCKER_ROOT="../.."
APP_ROOT="../"

source "${DOCKER_ROOT}/utils.sh"

export $(getEnvVars)

env_names=$(getEnvSubstituteString)

envsubst $env_names < "${DOCKER_ROOT}/docker/containers/app/config.js" > "${APP_ROOT}/config.js"