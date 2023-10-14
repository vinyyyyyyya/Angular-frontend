# Stage 1: Build the Angular app
FROM ubuntu as builder

# Set the working directory
WORKDIR /app

# Copy the Angular app's source code to the container
COPY . .

# Build the Angular app
RUN npm install && npm run build

# Stage 2: Create the final Distroless image for serving the app
FROM gcr.io/distroless/base

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copy the built Angular app from the previous stage
COPY --from=builder /app/dist/angular-frontend .


# Expose the port that the Angular app will run on
EXPOSE 80


