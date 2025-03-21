# Base image with Node.js installed
FROM node:20

# Set working directory inside container
WORKDIR /src

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight server to serve the built app
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "8080"]

# Container will expose port 3000
EXPOSE 8080