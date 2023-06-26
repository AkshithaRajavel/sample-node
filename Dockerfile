FROM node
COPY . /home/node/sample-node
WORKDIR /home/node/sample-node
RUN npm install
CMD ["node", "index.js"]