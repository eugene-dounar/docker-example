FROM node:0.10

RUN apt-get install -y libzmq3 libzmq3-dev
RUN npm install -g nodemon

ADD . /src/
WORKDIR /src/
RUN npm install

EXPOSE 80 3317
CMD ["/src/pubsub.js"]
