import { gql } from "@apollo/client";


export const ALL_COURSES = gql`
  query AllCourses {
    allCourses {
      id, title  
    }
  }
`
