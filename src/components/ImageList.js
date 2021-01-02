import React from 'react';
import './ImageList.css'


const ImageList = (props) =>{
  // const image = props.images.map((image) =>{
  //   return < img key = {image.id} alt = {image.description} src = {image.urls.regular}/>;
  // });

  const image = props.images.map(image => {
    return (
      <div className = 'item' key ={image.id}>
        < img key = {image.id} alt = {image.description} src = {image.urls.regular}/>
          <div className = "content">
            <div className = "description">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
      </div>
    )
  })

 return <div className = "image-list">{image}</div>;
}
export default ImageList



