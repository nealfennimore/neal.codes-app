FROM keymetrics/pm2:8-alpine

WORKDIR /var/www/app

RUN mkdir -p /var/www/app/dist/assets

RUN apk add --update \
    autoconf \
    automake \
    bash \
    ca-certificates \
    dpkg \
    g++ \
    gcc \
    lcms2-dev \
    libpng-dev \
    libtool \ 
    make \
    nasm \
    openssl \
    pkgconfig \
    python \
    python-dev \
    && rm -rf /var/cache/apk/*

RUN npm install -g yarn
RUN yarn install
RUN npm rebuild

ENTRYPOINT [ "/usr/local/bin/yarn", "run" ]