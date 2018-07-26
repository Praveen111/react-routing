import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/api/auth',(req,resp) => {

    resp.json({errors :{ "global" : "Invalid credentials"}})
})

app.get('/*', (req,resp) => {
    resp.sendFile(path.join(__dirname,'index.html'));
});


app.listen(8000, () => { console.log("Running on port 8000")});