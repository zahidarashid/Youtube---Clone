import '../styles/sidebar.css'
const Sidebar = () => {
  let links = [

    { image: "/images/home.svg", link: "Home" },
    { image: "/images/home.svg", link: "Shorts" },
    { image: "/images/home.svg", link: "Subscriptions" },
    { image: "/images/home.svg", link: "Library" },
    { image: "/images/home.svg", link: "History" },
    { image: "/images/trending.svg", link: "Trending" },
    { image: "/images/music.svg", link: "Music" },
    { image: "/images/game.svg", link: "Games" },
    { image: "/images/home.svg", link: "sports" },
    { image: "/images/home.svg", link: "Shorts" },
   
  ]
  return (
    <div className="sidebar">
      <div className="sidebarlinks">
        <ul>
          {links.map((data) => {
            return (
              <li><img src={data.image} alt="" /><a href="/">{data.link}</a></li>

            )
          })}

        </ul>
      </div>
    </div>
  );
}

export default Sidebar;