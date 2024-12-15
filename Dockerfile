FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g typescript ts-node

EXPOSE 8080

CMD ["yarn", "start"]
