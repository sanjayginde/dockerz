FROM node:10.13-alpine

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

# Default command
CMD ["npm", "start"]
