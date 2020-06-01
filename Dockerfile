FROM node:latest

WORKDIR /app

ADD /package.json /app/package.json

# RUN npm config set reigstry http://registry.npmjs.org

RUN npm install

ADD . /app

EXPOSE 3000

CMD ["npm", "run", "start"]


