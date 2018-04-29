FROM keymetrics/pm2:8-alpine

WORKDIR /var/www/app

RUN npm install -g yarn
RUN yarn install

ENTRYPOINT [ "/usr/local/bin/yarn", "run" ]
CMD [ "docker:development" ]