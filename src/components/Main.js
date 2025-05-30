import PageNumber from "./PageNumber"
import Gallery from "./Gallery"
import WrapperH2P from "./WrapperH2P"
import image1 from "../assets/mobile/image-woman-in-videocall.jpg";
import image2 from "../assets/mobile/image-women-videochatting.jpg";
import image3 from "../assets/mobile/image-men-in-meeting.jpg";
import image4 from "../assets/mobile/image-man-texting.jpg";

function Main() {
    return(
        <main>
            <PageNumber number="01" />
            <Gallery images={[image1, image2, image3, image4]} />
            <div className="main-text-contents">
                <div className="tagline">Built for modern use</div>
                <WrapperH2P 
                    h2Text="Smarter meetings, all in one place"
                    pText="Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export."
                />
            </div>
        </main>
    )
}

export default Main