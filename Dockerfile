# Use an official Node.js runtime as a parent image
FROM node:14 as builder

# Set the working directory to /app
WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/angular-frontend .

ENTRYPOINT [ "nginx","-g","deamon off;" ]

# Expose port 80 for the Angular app
EXPOSE 8000

# Start the Angular app when the container starts
CMD ["npm", "start"]
