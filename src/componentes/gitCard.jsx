
function GitCard(props){
    return(
        <div className="git-card">
            <img src={props.image.images.original.url}  className="card-img" alt={props.image.title} />
            {/*<h5>{props.image.title}</h5>*/}
        </div>
    );
}

export default GitCard;