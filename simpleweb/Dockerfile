# Base image
FROM node:10.13-alpine

# Initialize working directory
WORKDIR /usr/app

# Install dependencies
COPY ./package*.json ./
RUN npm install

# Copy over app code
COPY ./index.js ./

# Default command
CMD ["npm", "start"]
