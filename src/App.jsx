import { useState } from "react";
import gallerey from "./data";

function App() {
  const [images, setImages] = useState(gallerey);

  const addLike = (id) => {
    const updatedImages = images.map((image) => {
      if (id === image.id)
        return {
          ...image,
          likes: image.likes + 1,
        };
      else {
        return image;
      }
    });
    setImages(updatedImages);
  };

  const addDislike = (id) => {
    const updatedImages = images.map((image) => {
      if (id === image.id)
        return {
          ...image,
          disLikes: image.disLikes + 1,
        };
      else {
        return image;
      }
    });
    setImages(updatedImages);
  };

  const deleteItem = (id) => {
    const updatedImages = images.filter((image) => id !== image.id)
    setImages(updatedImages);
  };

  return (
    <div className="images-container">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.url} alt="" />
            <div className="buttons-container">
              <button
                onClick={() => {
                  addLike(image.id);
                }}
              >
                👍 {image.likes}
              </button>
              <button
                onClick={() => {
                  addDislike(image.id);
                }}
              >
                👎 {image.disLikes}
              </button>
              <button
                onClick={() => {
                  deleteItem(image.id);
                }}
              >
                🗑
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
