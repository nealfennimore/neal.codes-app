FROM keymetrics/pm2:8-alpine

WORKDIR /var/www/app

RUN apk add --update \
    bash \
    lcms2-dev \
    libpng-dev \
    gcc \
    g++ \
    make \
    autoconf \
    automake \
    nasm \
    && rm -rf /var/cache/apk/*

RUN npm install -g yarn
RUN yarn install
RUN npm rebuild

ENTRYPOINT [ "/usr/local/bin/yarn", "run" ]
CMD [ "docker:development" ]