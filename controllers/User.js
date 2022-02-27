const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: /.+\@.+\..+/
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(
      (total) => total + 1,
      0
    );
  });

const User = model('User', UserSchema);

module.exports = User;