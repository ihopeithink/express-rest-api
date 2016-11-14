Building Express restful api with Relational database(MySQL, SQLite, PostgreSQL)<br>

Build a Complete MVC framework With Express:<br>
Express： 4.*<br>
RDB： MySQL or SQLite or PostgreSQL <br>
ORM: sequelize<br>

Usage:<br>
git clone https://github.com/ihopeithink/express-rest-api.git myapp<br>
cd myapp<br>
npm install<br>
npm run build<br>
npm start<br>

http://localhost:3300/posts        GET     return all posts<br>
http://localhost:3300/posts/:id    GET     return single post<br>
http://localhost:3300/posts/:id    DELETE  delete single post<br>
http://localhost:3300/posts        POST    new post created<br>
