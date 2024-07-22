# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy your HTML file to the default Nginx public directory
COPY signup.html /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

