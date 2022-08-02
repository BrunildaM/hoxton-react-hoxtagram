
import { useEffect, useState } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'

type Image = {
  id: number,
  title: string,
  likes: number,
  image: string
  comments: Comment[]
}

type Comment ={
  id: number
  content: ""
  imageId: number
}

function App() {

  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('http://localhost:3005/images')
      .then(resp => resp.json())
      .then(imagesOfDb => setImages(imagesOfDb))
  }, [])


  function likeImages (image: Image) {
    fetch(`http://localhost:3005/images/${image.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: image.likes +1})
    })

    let imagesCopy = JSON.parse(JSON.stringify(images))
    let match = imagesCopy.find((target:Image) => target.id === image.id)
    match.likes ++
    setImages(imagesCopy)
  }

  return (
    <div className="App">

      <img className="logo" src="assets/hoxtagram-logo.png" />

      <section className="new-post">

        <form className="comment-form image-card">
          <h2 className="title">New Post</h2>
          <input
            className="comment-input"
            type="text"
            name="title"
            id="title"
            placeholder="Add a title..."
          />
          <input
            className="comment-input"
            type="url"
            name="image"
            id="image"
            placeholder="Add an image url..."
          />
          <button className="comment-button" type="submit">Post</button>
        </form>
      </section>



      <section className="image-container">
        {images.map((image:Image) => (
          <ImageCard key={image.id} image={image} likeImages={likeImages}/>
        ))}

      </section>
    </div>
  )
}

export default App




