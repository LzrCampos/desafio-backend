FROM node:10.13-alpine
ENV NODE_ENV dev

# Create directory for container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json . 
# Install all Packages --production --silent && mv node_modules ../
RUN npm install --silent

# Copy all other source code to work directory
ADD . /usr/src/app
# TypeScript build
RUN npm run build

# Start
EXPOSE 3000
CMD ["npm", "start"]