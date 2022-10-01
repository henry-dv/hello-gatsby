import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CustomTitle = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return(
        <title>{title} | {data.site.siteMetadata.title}</title>
    );
};

export default CustomTitle;