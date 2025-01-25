FROM node:16
WORKDIR /app

# Copy package files first for caching
COPY package.json package-lock.json ./
RUN npm install  --legacy-peer-deps

# Copy remaining files
COPY . . 
RUN npm run build

CMD ["npx", "serve", "-s", "build"]