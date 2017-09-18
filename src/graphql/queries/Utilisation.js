'use strict';

const GraphQL = require('graphql');

const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} = GraphQL;

// import the Post type we created
const UtilisationType = require('../types/Utilisation');

// import the Post resolver we created
const UtilisationResolver = require('../resolvers/Utilisation');

module.exports = {

    index() {
        return {
            type: UtilisationType,
            description: 'This will return all we find.',
            args: {
                period: {
                    type: GraphQLString,
                    description: 'Please enter period here',
                },
            },
            resolve(parent, args, context, info) {
                return UtilisationResolver.index(args);
            },
        };
    },
};
