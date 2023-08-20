# Use the lightweight version of the official nginx image
FROM nginx:alpine

# Copy the src content to the nginx web directory
COPY src/ /usr/share/nginx/html

# Modify the nginx default port to 8080 in the default.conf
RUN sed -i 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Start nginx with foreground process
CMD ["nginx", "-g", "daemon off;"]