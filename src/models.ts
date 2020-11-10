import {model, Schema} from 'mongoose';
import { schemaComposer } from 'graphql-compose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

// STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL
const UserSchema = new Schema({
  name: String, // standard types
  age: {
    type: Number,
    index: true,
  },
});
const User = model('User', UserSchema);

// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below
const UserTC = composeWithMongoose(User, customizationOptions);

schemaComposer.Query.addFields({
  users: UserTC.getResolver('findMany'),
});
const graphqlSchema = schemaComposer.buildSchema();
export default graphqlSchema;