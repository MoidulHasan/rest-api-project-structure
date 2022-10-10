// Dependencies
const mongoose = require('mongoose');


const RoomSchema = new mongoose.Schema({
    Room_Number: {
        type: Number,
        required: [true, "Room number is required"],
        unique: [true, "Room number must be unique"],
        select: true
    },
    Name: {
        type: String,
        required: [true, "Room Name is required"],
        select: true
    },
    Guest_Capacity: {
        type: Number,
        required: [true, "Guest Capacity is required"],
        select: true
    },
    Room_Descriptions: {
        type: String,
        select: true
    },
    Room_Area: {
        type: String,
        select: true
    },
    Rent_Charge: {
        type: Number,
        select: true
    },
    Images: [
        {
            Image_Id: {
                type: Number,
                required: [true, "Image id is required"],
                unique: [true, "Image id must be unique"],
                select: false,
            },
            Image_URL: {
                type: String,
                required: true
            }
        }
    ],
    Reviews: [{
        Review_Id: {
            type: Number,
            required: [true, "Review id is required"],
            unique: [true, "Review id must be unique"],
            select: false,
        },
        Guest_Id: {
            type: Number,
            required: [true, "Guest id is required"],
            select: false,
        },
        Date: {
            type: String,
            required: [true, "Date is required"],
            select: false,
        },
        Comment: {
            type: String,
            required: [true, "Comment is required"],
            select: false,
        },
        Ratting: {
            type: String,
            required: [true, "Ratting is required"],
            select: false,
        }
    }],
    Booking: [{
        Id: {
            type: Number,
            required: [true, "Booking id is required"],
        },
        Booking_Id: {
            type: Number,
            required: [true, "Booking id is required"],
        },
        Date: {
            type: String,
            required: [true, "Date is required"],
            select: false,
        },
        Status: {
            type: String,
            required: [true, "Booking Status is required"],
        },
    }]
});


const Room = mongoose.model("Room", RoomSchema);
module.exports = Room;