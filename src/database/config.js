import mongoose from 'mongoose';

const connect = () => {
  const { DB_URL } = process.env;
  mongoose.connect(DB_URL);
};

export default { connect };
