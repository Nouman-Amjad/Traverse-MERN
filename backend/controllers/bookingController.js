import Booking from '../models/Booking.js'


// create new booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res
            .status(200)
            .json({
                success: true,
                message: "Your tour is booked",
                data: savedBooking,
            })
    } catch (err) {
        res.status(500).json({
            success: true, message: "internal server error"
        });
    }
}


// get single booking
export const getBooking = async(req, res)=>{
    const id = req.params.id
    try{
        const book = await Booking.findById(id)

        res
        .status(200)
        .json({
            success:true,
            message: "successful", 
            data: book,
        })

    } catch(err){
        res
        .status(500)
        .json({
            success:false,
            message: "not found", 
        })

    }
}

export const getAllBookings = async(req, res)=>{
    try{
        const {email} = req.body;
        const books = await Booking.find({userEmail:email})

        res
        .status(200)
        .json({
            success:true,
            message: "successful", 
            data: books,
        })

    } catch(err){
        res
        .status(500)
        .json({
            success:false,
            message: "Internal Server error", 
        })

    }
}