FROM node:22-alpine AS builder

COPY . ./

RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY --from=builder ./dist/ /usr/share/nginx/html/
