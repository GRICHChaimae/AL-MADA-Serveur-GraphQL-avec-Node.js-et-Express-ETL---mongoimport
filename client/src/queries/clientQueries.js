import { gql } from "@apollo/client";

const GET_DELLS = gql`
    query getDells {
        dells {
            id
            Brand_name
            IPR
            Designation
            Status
            Number
            Office
            Nice_classification
            Owner
        }
    }
`

export { GET_DELLS }