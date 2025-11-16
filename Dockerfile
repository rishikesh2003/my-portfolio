# Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage (static serve)
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN sed -i '/server_name/a \
  add_header X-Content-Type-Options nosniff;\n  add_header X-Frame-Options DENY;\n  add_header Referrer-Policy no-referrer-when-downgrade;\n  add_header X-XSS-Protection "1; mode=block";\n' /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1/ || exit 1
