import CommentForm from "./CommentForm"

type Image = {
    id: number,
    title: string,
    likes: number,
    image: string
    comments: Comment[]
}

type Props = {
    image: Image
    likeImages: (image: Image)=> void
}

type Comment ={
    id: number
    content: ""
    imageId: number
}

function ImageCard({image, likeImages}: Props) {
    return (<article className="image-card">
        <h2 className="title">{image.title}</h2>
        <img src={image.image} className="image" />
        <div className="likes-section">
            <span className="likes">{image.likes} likes</span>
            <button className="like-button" 
            onClick={() => {
               likeImages (image)
            }}>♥</button>
        </div>
        <ul className="comments">
            {image.comments.map ((comment: Comment) => (
            <li key={comment.id}>{comment.content}</li>))}
        </ul>


        <CommentForm />
    </article>

    )
}

export default ImageCard