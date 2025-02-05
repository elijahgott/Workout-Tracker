const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    sets: {type: Number, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true}
});

const WorkoutSchema = new mongoose.Schema({
    name: {type: String, required: true},
    exercises: [ExerciseSchema],
    days: [{type: String}]
});

module.exports = mongoose.model.Workout || mongoose.model('Workout', WorkoutSchema);