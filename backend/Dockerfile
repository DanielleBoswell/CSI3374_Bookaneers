# Base image with Node.js
FROM node:18

# Set working directory inside container
WORKDIR /src

# Copy package.json and package-lock.json and install deps
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port your app runs on
EXPOSE 8000

# Start the app
CMD ["npm", "start"]