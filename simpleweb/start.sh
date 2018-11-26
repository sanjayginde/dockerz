#!/bin/bash

docker build -t sanjayginde/simpleweb .

echo "Starting at http://localhost:5000..."
docker run -p 5000:8080 sanjayginde/simpleweb
