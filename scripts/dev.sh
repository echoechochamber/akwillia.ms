#!/usr/bin/env bash

if [ -z $1 ]
then
    mode="static"
elif [ -n $1 ]
then
    # otherwise, use the first arg to set the mode
    mode=$1
fi

case $mode in
    "static" )
#        docker build -t djangotest . && docker run -p 0.0.0.0:8081:8081 djangotest;;
        docker run -it  --mount type=bind,source="$(pwd)",target=/code -p 0.0.0.0:8081:8081 djangotest;;
    "local" )
        # start django with gunicorn
        gunicorn --bind=127.0.0.1:8080 akw_site.wsgi:application &
        # start the react frontend with
        npm run start;;
esac