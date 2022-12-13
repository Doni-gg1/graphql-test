import React from "react";
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { ALL_COURSES } from "../../apollo/courses";
import { TESTERS_BY_COURSE } from "../../apollo/testers";

export const Course = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(ALL_COURSES);
  const {data: testers} = useQuery(TESTERS_BY_COURSE, {
    variables: {
      id
    }
  })

  console.log(testers);
  return (
      <div className="block">
        <div>
          {
            data?.allCourses.map(({id, title}) => (
              <div key={id}><Link to={"/course/" + id}>{title}</Link></div>
            ))
          }
        </div>
        <div>
          {
            testers?.Course?.testers.map(({id, fio}) => (
              <div key={id}>{id}: {fio}</div>
            ))
          }
        </div>
      </div>
    )
}
