# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all app files to the working directory
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Expose port 80 for the Angular app
EXPOSE 80

# Start the Angular app when the container starts
CMD ["npm", "start"]
