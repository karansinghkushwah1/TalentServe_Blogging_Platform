import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-noz5b0y-shard-00-00.z2ehvfd.mongodb.net:27017,ac-noz5b0y-shard-00-01.z2ehvfd.mongodb.net:27017,ac-noz5b0y-shard-00-02.z2ehvfd.mongodb.net:27017/?ssl=true&replicaSet=atlas-11s4cv-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;