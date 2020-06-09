import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'https://apollo-music-share-2.herokuapp.com/v1/graphql'
})

export default client;