var host = "localhost"; 
var user = "connor";
var password = "secret"; 
var db = "MyDB2"; 

exports.host_get = function() {
    return host; 
}

exports.user_get = function() {
    return user;
}

exports.password_get = function() {
    return password; 
}

exports.db_get = function() {
    return db; 
}