#!/bin/sh
sed -i -e "s/example.test/.$VIRTUAL_HOST/" /etc/nginx/conf.d/default.conf
supervisord -c /etc/supervisor/conf.d/supervisord.conf
