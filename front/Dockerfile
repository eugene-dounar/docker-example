FROM nginx:1.7

RUN apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | bash - && \
    apt-get install -y nodejs

COPY . /src/
COPY ./config/ /etc/nginx/

WORKDIR /src/
RUN npm install -g gulp && npm install
RUN gulp less
