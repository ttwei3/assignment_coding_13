# Stage 1: Build the React application
FROM node:14 AS builder

# Set the working directory in the Docker container
WORKDIR /usr/src/wei_tingting_ui_garden

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
# Alternatively, if you're using yarn, copy the yarn.lock file
# COPY package.json yarn.lock ./

# Install dependencies
RUN npm install
# Or if you're using yarn, run yarn install
# RUN yarn install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the application
RUN npm run build
# Or if you're using yarn, run yarn build
# RUN yarn build

# Stage 2: Serve the build using serve
FROM nginx:alpine

# Copy the build from the previous stage
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Expose port 8083 to the outside once the container has launched
EXPOSE 8083

# Use sed to replace the default port (80) with 8083 in the nginx configuration
RUN sed -i 's/80;/8083;/g' /etc/nginx/conf.d/default.conf

# Start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]
