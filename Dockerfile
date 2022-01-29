FROM node:16

WORKDIR /home/node/app

# Copy config files and source code directory
COPY ["package.json", "package-lock.json", "tsconfig.json", ".swcrc", "./"]
COPY src src

# Install dependencies and build application
RUN npm install
RUN npm run build

# Remove non production files and folders
RUN rm -rf node_modules src tsconfig.json .swcrc .swc

# Install only production dependencies
RUN npm install --production

# Create a user called node to run the app as non-root user
USER node

# Set node environment to production
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
