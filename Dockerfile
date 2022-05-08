FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm i --omit=optional
COPY . .

CMD ["npm", "start"]
