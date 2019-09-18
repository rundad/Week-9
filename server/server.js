const express = require('express');  // Import exprerss.js
const app = express(); //The app object conventionally denotes the Express application. Create it by 
const http = require('http').Server(app);
const bodyParser = require('body-parser'); //create an instance of body-parser
const cors = require('cors'); //allow Cross site origin requests
const MongoClient = require('mongodb').MongoClient;  // require MongoClient functionality
var  ObjectID = require('mongodb').ObjectID; //require ObjectID functionality

app.use(cors());
app.use (bodyParser.json()); //Mounts the specified middleware function
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize:10,useNewUrlParser: true,useUnifiedTopology: true},function(err, client) {
    //Callback function code. When we have a connection start the rest of the app.
    if (err) {return console.log(err)}
        const dbName = 'mydb';
        const db = client.db(dbName);

        require('./routes/add.js')(db, app);
        require('./routes/read.js')(db,app);
        require('./routes/update.js')(db,app, ObjectID);
        // require('./routes/api-getlist.js')(db,app);
        // require('./routes/api-getitem.js')(db,app,ObjectID);
        // require('./routes/api-update.js')(db,app,ObjectID);
        require('./routes/remove.js')(db,app,ObjectID);
        
    //Start the server listening on port 3000. Outputs message to console once server has started.(diagnostic only)
    require('./listen.js')(http);

});

