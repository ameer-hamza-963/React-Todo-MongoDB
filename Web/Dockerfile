# Dockerfile for React client

# Build react client
FROM node:16-alpine

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies

RUN npm install --legacy-peer-deps --silent

# copy local files to app folder
COPY . .

CMD ["npm","run","build"]

RUN npm install -g serve

CMD ["npm","start"]
