#!/bin/sh
set -x
if [ "${RUN_SERVER:-1}" = "1" ]; then
  npm ci

  exec "$@"
else
  echo "Please run 'npm run serve' manually"
  exec sleep 9d
fi