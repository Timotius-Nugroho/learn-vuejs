import gql from "graphql-tag";

export const GET_PAYLOAD = gql`
  query GetPayload($limit: Int, $offset: Int) {
    payloads(limit: $limit, offset: $offset) {
      id
      orbit
      payload_type
    }
  }
`;
