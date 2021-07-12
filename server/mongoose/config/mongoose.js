const mongoose = require("mongoose")
let url = "mongodb+srv://junayedkhan:khan_0258@cluster0.xgotw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

function mongoDB(){
    if(mongoose.connections[0].readyState){
        console.log("mongoDB allready connected");
        return
    }
    mongoose.connect(url , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    mongoose.connection.on("connected", () => {
        console.log("mongoDB connected");
    })
    mongoose.connection.on("error", () => {
        console.log("mongoDB not connected");
    })
}

export default mongoDB