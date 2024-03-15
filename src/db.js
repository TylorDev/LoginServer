import mongoose from "mongoose";


export const Conectdb = async () =>{
    try {
        await mongoose.connect("mongodb://localhost/merndb")
        console.log("Db is conected")
    } catch (error) {
        console.log(error)
    }
}
