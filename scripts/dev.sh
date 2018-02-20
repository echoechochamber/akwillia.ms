#!/usr/bin/env bash
HOME=`pwd`

# start django with gunicorn
gunicorn --bind=127.0.0.1:8080 akw_site.wsgi:application &
# start the react frontend with
npm run start