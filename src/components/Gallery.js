// import myImage from "../assets/mobile/image-man-texting.jpg";

function Gallery(props) {
    const makeImages = props.images.map((image) => {
        return(
            <img src={image}></img>
        )
    });
    return(
        <div className="image-container">
            {makeImages}
        </div>
    );
}

export default Gallery


    // <div className="image-main-container">
    //   <img src={Omelette['image-src']} className="recipe-image-main" alt="A dish made using this recipe" />
    // </div>
