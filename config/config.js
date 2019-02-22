if(process.env.NODE_ENV === 'production'){
    process.env.DB_URL = "mongodb://localhost:27017/PEUTP";
}else if(process.env.NODE_ENV === 'test'){
    process.env.DB_URL = "mongodb://localhost:27017/PEUTP-TEST";
}else if(process.env.NODE_ENV === 'development'){
    process.env.DB_URL = "mongodb://localhost:27017/PEUTP-DEV";
}
