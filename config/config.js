if(process.env.NODE_ENV === 'production'){
    process.env.DB_URL = "mongodb://localhost:27017/PEUTP";
    process.env.PORT = '80';
}else if(process.env.NODE_ENV === 'test'){
    process.env.DB_URL = "mongodb://localhost:27017/PEUTP-TEST";
    process.env.PORT = '3000'
}else if(process.env.NODE_ENV === 'dev'){
    process.env.DB_URL = "mongodb://localhost:27017/PEUTP-DEV";
    process.env.PORT = '80';
}
