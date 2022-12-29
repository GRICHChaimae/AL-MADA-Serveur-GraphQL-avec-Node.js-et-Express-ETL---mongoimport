// Mongoose models
const Dell = require('../models/Dell')

const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema, 
    GraphQLList,
    GraphQLNonNull,
} = require('graphql')

// dell type
const DellType = new GraphQLObjectType({
    name: 'Dell',
    fields: () => ({
        id: { type: GraphQLID },
        Brand_name: { type: GraphQLString },
        IPR: { type: GraphQLString },
        Designation: { type: GraphQLString },
        Status: { type: GraphQLString },
        Number: { type: GraphQLString },
        Office: { type: GraphQLString },
        Nice_classification: { type: GraphQLString },
        Owner: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        dells: {
            type: new GraphQLList(DellType),
            resolve(parent, args) {
                return Dell.find()
            }
        },
        dell: {
            type: DellType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return Dell.findById(args.id)
            }
        },
    }
});

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Add a dell
        addDell: {
            type: DellType,
            args: {
                Brand_name: { type: GraphQLNonNull(GraphQLString) },
                IPR: { type: GraphQLNonNull(GraphQLString) },
                Designation: { type: GraphQLNonNull(GraphQLString) },
                Status: { type: GraphQLNonNull(GraphQLString) },
                Number: { type: GraphQLNonNull(GraphQLString) },
                Office: { type: GraphQLNonNull(GraphQLString) },
                Nice_classification: { type: GraphQLNonNull(GraphQLString) },
                Owner: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const dell = new Dell({
                    Brand_name: args.Brand_name,
                    IPR: args.IPR,
                    Designation: args.Designation,
                    Status: args.Status,
                    Number: args.Number,
                    Office: args.Office,
                    Nice_classification: args.Nice_classification,
                    Owner: args.Owner,
                });

                return dell.save()
            }
        },
        // Delete a dell
        deleteDell: {
            type: DellType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                return Dell.findByIdAndRemove(args.id);
            }
        },
        // Update a Dell
        updateDell: {
            type: DellType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                Brand_name: { type: GraphQLString },
                IPR: { type: GraphQLString },
                Designation: { type: GraphQLString },
                Status: { type: GraphQLString },
                Number: { type: GraphQLString },
                Office: { type: GraphQLString },
                Nice_classification: { type: GraphQLString },
                Owner: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Dell.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            Brand_name: args.Brand_name,
                            IPR: args.IPR,
                            Designation: args.Designation,
                            Status: args.Status,
                            Number: args.Number,
                            Office: args.Office,
                            Nice_classification: args.Nice_classification,
                            Owner: args.Owner,
                        },
                    },
                    { new: true }
                );
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})