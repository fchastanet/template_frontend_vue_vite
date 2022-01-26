ARG UPSTREAM_VERSION=latest
FROM cktechno/vuejs-base:${UPSTREAM_VERSION}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "serve"]
