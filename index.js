import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;
routes(app);

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(() => {
    console.error('Unable to connect to MongoDB');
  });

// body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));

//servubg static files
app.use(express.static('public'))

app.get('/',(req,res)=>
    res.send('Node and express server running on port '+PORT)
);

app.listen(PORT,()=>
    console.log('your server is running on port '+PORT)
);