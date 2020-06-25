FROM node:latest 
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8050
CMD ts-node main.ts ./data/maps/rect.01.map