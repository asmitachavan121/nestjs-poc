FROM node

WORKDIR /usr/app

COPY package*.json  ./

RUN npm install

COPY . .

COPY ormconfig.docker.json ./ormconfig.json

EXPOSE 3000

CMD npm run start

# # step 1

# FROM node as builder

# WORKDIR /usr/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# #step 2

# FROM node

# WORKDIR /usr/app

# COPY package*.json ./

# RUN npm install --production

# COPY --from=builder /usr/app/dist  ./dist

# COPY ormconfig.docker.json  ormconfig.json

# COPY .env .

# EXPOSE 3000

# CMD npm run start


