#!/bin/bash

echo "🧹 Shutting down containers and clearing DB volumes..."
docker compose down --volumes --remove-orphans
rm -rf ./data/postgres-data

echo "🚀 Rebuilding and starting everything fresh..."
docker compose up --build -d
