## Workout Tracker
This application is for tracking one's progress in the gym. This is done by tracking how many sets, reps, and how much weight was done for each specific workout. This application is meant to be simple.

### Planned Features:
- Create sets of workouts
    - Ex. Push day includes bench press, tricep pulldown, etc.
- Create a workout schedule
    - Ex. Monday -> Push day, Tuesday -> Pull day, etc.
- Track weight, sets, reps for each workout
- Track time / pace for cardio workouts?

### Possible Features:
- Accounts for each user
    - Add friends, change profile picture, etc

### To Do:
- Database:
    - MongoDB

    - User
        - UID
        - Username
        - Email
        - Password hash?

    - Workouts
        - UID
        - Exercises
            - Exercise Name
            - Sets
            - Reps
        - Associated Day(s)?

    - Completed Workouts
        - UID
        - Name
        - Sets
        - Reps
        - Weight
        - Date