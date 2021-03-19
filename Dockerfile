FROM alpine:3.12

# Install packages and remove default server definition
RUN apk update
RUN apk --no-cache add nginx supervisor curl \
    php7 php7-fpm php7-openssl php7-common \
    nodejs-current npm

# Configure nginx
COPY config/nginx/nginx.conf /etc/nginx/
COPY config/nginx/conf.d/default.conf /etc/nginx/conf.d/

# Configure PHP-FPM
COPY config/php7/fpm-pool.conf /etc/php7/php-fpm.d/www.conf
COPY config/php7/php.ini /etc/php7/conf.d/custom.ini

# Configure supervisord
COPY config/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Configure script to start supervisord
COPY config/entrypoint.sh /sbin/
RUN chmod 755 /sbin/entrypoint.sh

# Add application
RUN mkdir -p /var/www/ &&\
  rm -rf /var/www/* &&\
  mkdir /var/www/localhost

# Make sure files are accessable when run under nobody user
RUN chown -R nobody:nobody /var/www/ && \
  chown -R nobody:nobody /run && \
  chown -R nobody:nobody /var/lib/nginx && \
  chown -R nobody:nobody /var/log/nginx && \
  chown -R nobody:nobody /etc/nginx

# Switch to use a non-root user from here on
USER nobody
WORKDIR /var/www/localhost

# Expose the port nginx is reachable on
EXPOSE 8080

# Start nginx & php-fpm
CMD ["/sbin/entrypoint.sh"]

# Configure a healthcheck to validate that everything is up&running
HEALTHCHECK --timeout=10s CMD curl --silent --fail http://127.0.0.1:8080/fpm-ping
