FROM python:2.7
RUN mkdir /code
WORKDIR /code

ADD requirements.txt /code/

# install nginx x for serving the static files
RUN apt-get update && apt-get install -y nginx
# create the /etc/nginx/conf.d directory if it hasn't already been created
RUN if ! [ -d /etc/nginx/conf.d ]; then mkdir -p /etc/nginx/conf.d; fi;



# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# set up gunicorn logs and such
RUN mkdir -p /var/log/gunicorn/
RUN touch /var/log/gunicorn/gunicorn.log
RUN touch  /var/log/gunicorn/gunicorn-access.log

## install supervisor and overwrite the supervisor conf file
RUN apt-get update && apt-get install -y supervisor
RUN rm /etc/supervisor/supervisord.conf
COPY ./config/supervisord.conf /etc/supervisor/supervisord.conf


ADD . /code
# give the right user groups ownership to the backend
RUN chown -R www-data:www-data /code
RUN chmod 755 /code

#add my conf to the sites-available directory
RUN rm -f /etc/nginx/sites-available/default
RUN cp ./config/nginx.conf /etc/nginx/sites-available/akw.com

# symlink to the nginx-production.conf
RUN ln -s /etc/nginx/sites-available/akw.com /etc/nginx/sites-enabled/akw.com


# Make port 80 available to the world outside this container
EXPOSE 80

#CMD ["python", "/code/manage.py", "runserver", "0.0.0.0:8080"]
CMD ["/bin/bash", "-c","supervisord -n -c /etc/supervisor/supervisord.conf"]