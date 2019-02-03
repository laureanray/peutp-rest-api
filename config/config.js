if(process.env.NODE_ENV !== 'production'){
    process.env.DB_URL = "mongodb://localhost:27017/PEUTP-DEV";
}else{
    process.env.DB_URL = "mongodb://localhost:27017/PEUTP";
}
