FROM node:18-alpine

WORKDIR /app

COPY package*.json .
COPY tsconfig*.json .

RUN npm i

RUN npm run build

COPY /dist .

CMD ["node", "main.js"]