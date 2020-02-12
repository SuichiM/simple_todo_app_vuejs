FROM node:lts-alpine

ENV PORT 8080
EXPOSE 8080

WORKDIR /home/node/app

RUN npm install --save -g @vue/cli

COPY . .

RUN npm install


#ADD ./ /home/node/app

CMD ["npm", "run", "serve"]