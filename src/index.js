
import app from "./app.js";
import {Conectdb } from "./db.js";
Conectdb()
app.listen(4000);
console.log('server on port 4000')