# base image with Node.js installed
FROM node:20

# set working directory inside container
WORKDIR /frontend

# copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# copy the rest of the app
COPY . .

# build and start the React app
CMD ["npm", "start"]
EXPOSE 3000
#RUN npm run build
#RUN npm install -g serve
#CMD ["serve", "-s", "build", "-l", "8080"]

