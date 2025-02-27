import mongoose from "mongoose";

const DogSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    dogName: {
        type: String,
        required: true,
        unique: false,
    },
    breed: {
        type: String,
        required: true,
        unique: false,
    },
    age: {
        type: String,
        required: true,
        unique: false,
    },
    ownerName: {
        type: String,
        required: true,
        unique: false,
    },
    contactNumber: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
        unique: false,
    }

});

const DogModel = mongoose.model("Dog", DogSchema);
export default DogModel;