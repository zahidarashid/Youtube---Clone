import "../styles/categories.css"
const Categories = () => {
    let links=[
        {links:"All"},
        {links:"Music"},
        {links:"Netflex"},
        {links:"Cricket"},
        {links:"Arijit Singh"},
        {links:"BollywoodMusic"},
        {links:"News"},
        {links:"Comedy"},
        {links:"T-Series"},
        {links:"Trailers"}
    ]
    return (  
        <div className="categories">
            <div className="categories_links">
                <ul>
                    {links.map((data)=>{
                 return(
                    <li><a href="/">{data.links}</a></li>
                 )
                    })}
                </ul>
            </div>
        </div>
    );
}
 
export default Categories;