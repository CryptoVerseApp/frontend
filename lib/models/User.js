import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    walletAddress: { type: String, required: true },
});

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;