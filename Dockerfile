FROM node:26-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . ./
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist/ /usr/share/nginx/html/
