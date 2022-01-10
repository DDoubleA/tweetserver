import Mongoose from 'mongoose';
import { config } from '../config.js';

export async function connectDB() {
  console.log("Hello")
  return Mongoose.connect('mongodb+srv://junyoung:junyoung@tweet.frfvm.mongodb.net/molipTweet?retryWrites=true&w=majority', {
  // return Mongoose.connect('mongodb://localhost:27017/tweet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(()=>console.log("Connected to MongoDB"))
  .catch((err)=> console.log(err));
}

export function useVirtualId(schema) {
  schema.virtual('id').get(function () {
    return this._id.toString();
  });
  schema.set('toJSON', { virtuals: true });
  schema.set('toOject', { virtuals: true });
}

// TODO(Ellie): Delete blow

let db;
export function getTweets() {
  return db.collection('tweets');
}
