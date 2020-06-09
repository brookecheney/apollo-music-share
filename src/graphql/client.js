import ApolloClient from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'



const client = new ApolloClient({
    link: new WebSocketLink ({
            uri: 'wss://apollo-music-share-2.herokuapp.com/v1/graphql',
            options: {
                reconnect: true
            }
    }),
    cache: new InMemoryCache()
})

export default client;