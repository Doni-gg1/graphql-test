import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { useQuery } from "@apollo/client";
import { ALL_COURSES } from "../../apollo/courses";
import { ALL_TESTERS } from "../../apollo/testers";

export const CoursesPage = () => {
    const [testers, setTesters] = useState([]);
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     const itialBreadCrumbs = [{path: "/", url: "/", title: 'awdawd'}]
    // }

    const { data, loading } = useQuery(ALL_COURSES);
    const { data: testersData } = useQuery(ALL_TESTERS);

    useEffect(() => {
        if (testersData) {
            setTesters(testersData.allTesters)
        }
    }, [testersData])
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
                    testers.map(({id, fio}) => (
                      <div key={id}>{id}: {fio}</div>
                    ))
                }
            </div>
        </div>
    )
}
