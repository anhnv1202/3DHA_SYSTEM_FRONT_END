# Nginx
FROM nginx:alpine as nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./ssl/certificate.crt /etc/nginx/ssl/certificate.crt
COPY ./ssl/private.key /etc/nginx/ssl/private.key

COPY ./build /usr/share/nginx/html

EXPOSE 80
# EXPOSE 443