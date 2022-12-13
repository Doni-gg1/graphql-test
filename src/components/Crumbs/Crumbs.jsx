import React from "react";
import { useLocation, useMatch, useNavigate, useResolvedPath } from "react-router-dom";


const removeReaminingCrumbs = (state, url) => {
    const index = state.findIndex(({ url: route }) => route === url);
    return state.slice(0, index)
}


export const Crumbs = ({
    className,
    path,
    title,
    url
}) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const match = useMatch(path);

    const routeTo = e => {
        e.preventDeafault();
        navigate(url, {
            state: removeReaminingCrumbs(state, url)
        })
    }

    return (
        <span className={`Crumb ${className}`}>
            {
                match ? (
                    title
                ) : (
                    <>
                        <div onClick={routeTo}>
                            {title}
                        </div>
                        >
                    </>
                )
            }
        </span>
    )
}