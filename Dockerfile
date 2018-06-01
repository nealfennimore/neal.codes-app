FROM keymetrics/pm2:8-alpine

WORKDIR /var/www/app

RUN apk add --update \
    autoconf \
    automake \
    bash \
    dpkg \
    g++ \
    gcc \
    lcms2-dev \
    libpng-dev \
    libtool \ 
    make \
    nasm \
    pkgconfig \
    && rm -rf /var/cache/apk/*

RUN npm install -g yarn
RUN yarn install
RUN npm rebuild

ENTRYPOINT [ "/usr/local/bin/yarn", "run" ]
CMD [ "docker:development" ]