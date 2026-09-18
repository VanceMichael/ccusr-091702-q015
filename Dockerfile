FROM ccusr-backend-worker:local
USER root
WORKDIR /app
COPY . .
RUN chown -R 1000:1000 /app
USER 1000:1000
RUN chmod +x scripts/* && npm test && DATABASE_PATH=/tmp/build.sqlite3 npm run migrate
ENV HOST=0.0.0.0
CMD ["./scripts/start"]
