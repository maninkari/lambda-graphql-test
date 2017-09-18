'use strict';

const GraphQL = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
} = GraphQL;


const UtilisationType = new GraphQLObjectType({
    name: 'Utilisation',
    description: 'Utilisation structure coming back from utilisation API',

    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'ID',
        },
        resources_count: {
            type: GraphQLInt,
            description: 'Number of resources',
        },
        cost: {
            type: GraphQLFloat,
            description: 'Total cost',
        },
        currency_code: {
            type: GraphQLString,
            description: 'Currency string',
        },
        breakdown: {
            type: new GraphQLList(BreakdownFilter),
            description: 'Filters list in breakdown'
        }
    }),
});

const BreakdownFilter = new GraphQLObjectType({
    name: 'Filter',
    description: 'Breakdown filter',

    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'ID',
        },
        filter: {
            type: GraphQLString,
            description: 'Filter name',
        },
        count: {
            type: GraphQLInt,
            description: 'Number of resources',
        },
        cost: {
            type: GraphQLFloat,
            description: 'Total cost',
        }
    })
});

module.exports = UtilisationType;
