import { gql } from "@apollo/client";


export const ALL_TESTERS = gql`
  query AllTesters {
    allTesters {
      id, fio
    }
  }  
`

export const TESTERS_BY_COURSE = gql`
  query Course($id: ID!) {
    Course(id: $id) {
      testers
    }
  }
`
