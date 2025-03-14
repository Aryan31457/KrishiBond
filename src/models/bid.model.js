import mongoose from 'mongoose';
const { Schema } = mongoose;

const bidSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected','cancelled'],
        default:"pending",
        required: true,
    },
    appliedFor: [{
        type: Schema.Types.ObjectId,
        ref: 'CompanyDemand', // Referencing the CompanyDemand model
    }],
    appliedRate: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number, // in kg 
        required: true
    },
    duration: {
        type: Number, // in days
        required: true
    },
    deliveryStart:{
        type:Boolean,
        default:false
    },
    delivered:{
        type:Boolean,
        default:false
    }
}, {
    timestamps: true
});

const Bid = mongoose.model('Bid', bidSchema);

export default Bid;
