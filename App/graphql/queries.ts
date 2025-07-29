import { gql } from "@apollo/client";

// This defines a GraphQL query named "GetCharacters".
// The `gql` tag is used to parse the string into a GraphQL query document.
export const GET_CHARACTERS_FOR_DESTINATIONS = gql`
  query GetCharactersForDestinations {
    # We ask for the 'characters' field from the API
    characters(page: 1) {
      # 'results' is the array of characters
      results {
        # These are the specific fields we want for each character
        id
        name
        image
        location {
          name
        }
        status
        # --- UPGRADED FIELDS ---
        gender # Fetches the character's gender
        origin {
          # Fetches the character's origin planet
          name
        }
      }
    }
  }
`;

export const GET_HOME_PAGE_DATA = gql`
  query GetHomePageData {
    getHomePageData {
      me {
        id
        username
        avatar
      }
      categories {
        id
        name
      }
      topDestinations {
        id
        name
        location
        imageUrl
        rating
      }
      exclusivePackages {
        id
        name
        location
        imageUrl
        price
        duration
      }
    }
  }
`;
