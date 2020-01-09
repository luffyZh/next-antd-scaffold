# Dockerfile
FROM node:8.14 As builder
LABEL maintainer="luffyZh"
COPY . .
RUN yarn install
RUN yarn build
CMD yarn prod
