FROM node:11-alpine

WORKDIR /api-v1/

COPY package.json package-lock.json /api-v1/

COPY . .

RUN npm install

CMD npm run start
