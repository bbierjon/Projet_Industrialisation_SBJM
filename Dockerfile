FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .
RUN npm run build
FROM nginx:latest
RUN mkdir /app
COPY --from=build-stage /app/dist/front-industrialisation/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
USER nginx
