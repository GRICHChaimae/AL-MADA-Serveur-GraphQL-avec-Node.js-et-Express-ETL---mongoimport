import { gql } from "@apollo/client";

const ADD_DELL = gql`
    mutation addDell($Brand_name: String!, $IPR: String!, $Designation: String!, $Status: String!, $Number: String!, $Office: String!, $Nice_classification: String!, $Owner: String!) {
        addDell(Brand_name: $Brand_name, IPR: $IPR, Designation: $Designation, Status: $Status, Number: $Number, Office: $Office, Nice_classification: $Nice_classification, Owner: $Owner){
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

const DELETE_CLIENT = gql`
    mutation deleteDell($id: ID!) {
        deleteDell(id: $id) {
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

export { ADD_DELL, DELETE_CLIENT }