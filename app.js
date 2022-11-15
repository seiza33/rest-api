import express from 'express';
import bodyParser from 'body-parser';

import sminkaRoutes from './routes/sminka.js';

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use('/sminka', sminkaRoutes);


app.get('/', (req, res) => {
    console.log('TEST');
    res.send('Hello from the Homepage')
})





app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}...`));
