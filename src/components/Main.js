import PageNumber from "./PageNumber"
import Gallery from "./Gallery"
import image1 from "../assets/mobile/image-woman-in-videocall.jpg";
import image2 from "../assets/mobile/image-women-videochatting.jpg";
import image3 from "../assets/mobile/image-men-in-meeting.jpg";
import image4 from "../assets/mobile/image-man-texting.jpg";

function Main() {
    return(
        <main>
            <PageNumber number="1" />
            <Gallery images={[image1, image2, image3, image4]} />
            <div className="image-container"></div>
        </main>
    )
}

export default Main