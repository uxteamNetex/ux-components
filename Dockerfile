FROM nginx:1.15

ADD nginx_default.conf /etc/nginx/conf.d/default.conf

COPY dist/ux-components /usr/share/nginx/html
