FROM node AS mynode
WORKDIR /app
COPY ./app /app
RUN npm install
RUN npm install --save express mysql body-parser
EXPOSE 8080


FROM mysql:8.0.2
WORKDIR /app
ENV MYSQL_DATABASE mydb
COPY data.sql /docker-entrypoint-initdb.d/
COPY --from=mynode /app . 
CMD [ "node", "index.js" ]
