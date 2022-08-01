import CommentForm from "./CommentForm"

// type Image = {
//     id: number,
//     title: string,
//     likes: number,
//     image: string
// }

function ImageCard(props: any) {
    return (<article className="image-card">
        <h2 className="title">{props.image.title}</h2>
        <img src={props.image.image} className="image" />
        <div className="likes-section">
            <span className="likes">{props.image.likes} likes</span>
            <button className="like-button" onClick={() => {
               props.likeImages ()
            }}>♥</button>
        </div>
        <ul className="comments">
            {props.image.comments.map(comment => (
            <li key={comment.id}>{comment.content}</li>))}
        </ul>


        <CommentForm />
    </article>

    )
}

export default ImageCard