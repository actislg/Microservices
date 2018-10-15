FROM node:8
WORKDIR /usr/src/app
COPY package*.json  /usr/src/app
RUN npm install
RUN npm install express
COPY . .
EXPOSE 8080
CMD ["npm","start"]
