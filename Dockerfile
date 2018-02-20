FROM python:2.7

WORKDIR ./

ADD . .

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt
RUN curl -sL https://deb.nodesource.com/setup | bash - && \
apt-get install -yq nodejs build-essential

# fix npm - not the latest version installed by apt-get
RUN npm install -g npm
# Make port 80 available to the world outside this container
EXPOSE 80

CMD ["/bin/bash", "./scripts/dev.sh"]