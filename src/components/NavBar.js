import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkMap = links.map( item => {
    return <a key={item} href={`#${item}`}>{item}</a>
  })
  return <nav>{linkMap}</nav>;
}

export default NavBar;
