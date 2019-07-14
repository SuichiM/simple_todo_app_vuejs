FROM node:lts-alpine
#USER node
# RUN chmod 755 /usr/local/bin
RUN npm install -g @vue/cli
#ENTRYPOINT ["sh", "/docker-entrypoint.sh"]
WORKDIR /home/node/app
RUN npm install
#ADD ./ /home/node/app
EXPOSE 8080