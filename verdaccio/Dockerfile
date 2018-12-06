FROM verdaccio/verdaccio
# RUN npm i && npm install verdaccio-s3-storage

USER root

CMD $APPDIR/bin/verdaccio --config /verdaccio/conf/config.yaml --listen $PROTOCOL://0.0.0.0:${PORT}
