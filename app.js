const bodyParser = require('body-parser');
const app = require('express')();
const cors = require('cors');
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');

app.use(bodyParser.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send('API home');
});
app.use('/user', userRoute);
app.use('/products', productRoute);

app.use((err, req, res, next) => {
    console.log(err);
    let statusCode = err.statusCode || 500;
    res.status(statusCode).json(err);
})
app.listen(3030, () => {
    console.log('API is listening on 3030')
})

