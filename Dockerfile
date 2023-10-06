# Use an official Node.js runtime as a parent image
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular application (make sure you have already run 'ng build' with the production flag)
RUN npm run build -- --prod

# Stage 2: Create a lightweight container with a web server to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app from the 'build' stage to the nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]
