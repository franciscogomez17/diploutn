export function NovedadItem(props){

    const { title, subtitle, author, body } = props;

    return(
        <div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h4>{author}</h4>
            <p>{body}</p>
        </div>
    );
}