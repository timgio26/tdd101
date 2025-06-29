FROM node:22-alpine as builder

WORKDIR '/app'

COPY package*.json .

RUN npm i

COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html



