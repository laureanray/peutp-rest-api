const mongoose = require('mongoose');
let app = require('../../index');
let port = process.env.PORT || '3000';

require('../../config/config');


if(process.env.NODE_ENV !== 'production'){
    console.log('Development');
}else{
    console.log('Production');
}

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
    
});


