import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: "https://mpjk0plp9.lp.gql.zone/graphql",
    cache: new InMemoryCache(),
});

export default client;