
function GitCard(props){
    return(
        <div className="git-card">
            <a href={props.image.images.original.url} target="_blank">
            <img src={props.image.images.original.url}  className="card-img" alt={props.image.title} />
            {/*<h5>{props.image.title}</h5>*/}
            </a>
        </div>
    );
}

export default GitCard;