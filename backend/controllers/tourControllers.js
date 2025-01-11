import Tour from '../models/Tour.js'

// Creating new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const saved = await newTour.save()

        res
            .status(200)
            .json({ success: true, message: "Tour Created", data: saved })
    }
    catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Failed to create. Try Again" });
    }
};


// Update Tour 

export const updateTour = async (req, res) => {

    const id = req.params.id;

    try {
        const updatedObj = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        res
            .status(200)
            .json({
                success: true,
                message: "Tour Updated Successfully",
                data: updatedObj,
            })

    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "Tour Update Failed :(",
            })
    }
};

// delete Tour 

export const deleteTour = async (req, res) => {

    const id = req.params.id;

    try {
        await Tour.findByIdAndDelete(id);

        res
            .status(200)
            .json({
                success: true,
                message: "Tour Deleted Successfully",
            })

    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "Tour Delete Failed :(",
            })
    }
};

// get Single Tour 

export const getSingleTour = async (req, res) => {
    const id = req.params.id;

    try {
        const obj = await Tour.findById(id).populate("reviews");

        res
            .status(200)
            .json({
                success: true,
                message: "Tour Found",
                data: obj,
            })

    } catch (err) {
        res
            .status(404)
            .json({
                success: false,
                message: "Tour not Found :(",
            })
    }
};

// get All Tour 

export const getAllTours = async (req, res) => {

    const page = parseInt(req.query.page);

    //console.log(page)

    try {
        const tours = await Tour.find({}).populate("reviews")

        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Tours Found",
            data: tours,
        });
    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "Tours not Found :(",
            })
    }
};


// get tour by search

export const getTourbySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i');
    const price = parseInt(req.query.price);

    try {
        const tours = await Tour.find({
            city,
            price: { $lte: price } // Changed $gte to $lte
        }).populate("reviews");

        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed",
        });
    }
}

// get featured tour

export const getFeaturedTour = async (req, res) => {

    try {
        const tours = await Tour.find({ featured: true }).populate("reviews").limit(8);

        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed",
        });
    }

}

// get Tour Counts

export const getTourCount = async (req, res) => {

    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({
            success: true,
            message: "Successful",
            data: tourCount,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Data",
        });
    }

}