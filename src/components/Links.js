import React from "react"


const Links = (links) => {
    return (
      <><h3>Links</h3>
       <a href= {links.github}>{links.github} </a>
       <a href= {links.linkedin}>{links.linkedin}</a>
       </>
    )
}
export default Links