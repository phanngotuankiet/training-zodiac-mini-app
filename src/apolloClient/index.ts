import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://hasura-63fc.onrender.com/v1/graphql",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4IiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbImFkbWluIiwidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiOCJ9LCJpYXQiOjE3MTUyNDgzODV9.CLjCPpZqn3fcnxYmjMpoO_kfIXMcPIWjOLzrbSQxjvw",
      "x-hasura-admin-secret": "myadminsecretkey",
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
