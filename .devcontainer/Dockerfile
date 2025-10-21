FROM debian:12.12

RUN apt update -y && \
  apt install -y \
  git \
  curl

COPY ./scripts ./scripts

RUN sh ./scripts/install-nodejs.sh
ENV PATH=$PATH:/usr/local/nodejs/bin

RUN sh ./scripts/install-pnpm.sh
