import { connectDB } from '@/lib/config/db';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'is_my_secret';

const LoadDB = async () => {
    await connectDB();
}

LoadDB();

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, password, walletAddress } = body;

        const existUser = await User.findOne({ email });
        if (existUser) {
            return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            walletAddress,
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
        return new Response(JSON.stringify({ token, walletAddress: newUser.walletAddress }), {
            status: 201,
        });
    } catch (error) {
        console.error('Internal server error:', error); 
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
        });
    }
}
