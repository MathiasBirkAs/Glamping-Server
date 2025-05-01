// models/review.model.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  review: String,
  age: Number,
  name: String,
  image: String, // billede af anmelder (valgfrit)
  stay: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stay'
  }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
