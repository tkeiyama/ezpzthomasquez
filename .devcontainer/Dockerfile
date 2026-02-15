FROM debian:13.3

RUN apt update -y && \
  apt install -y \
  git \
  curl

COPY ./scripts ./scripts

RUN sh ./scripts/install-nodejs.sh
ENV PATH=$PATH:/usr/local/nodejs/bin

RUN npm install -g wrangler
