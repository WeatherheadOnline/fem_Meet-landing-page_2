import ButtonWrapper from "./Button.js";

export default function Header() {
    return(
        <header>
            <div className="logo-container"></div>
            <div className="header-contents">
                <div className="header-image-touchscreen"></div>
                <div className="header-desktop header-desktop-left"></div>
                <div className="header-central">                   
                    <h1>Group Chat for Everyone</h1>
                    <p className="description">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
                    <ButtonWrapper buttonContents={[
                        ["button-cyan", "Download", "v1.3"], 
                        ["button-purple", "What is it?", ""]
                    ]}/>

                </div>             
                <div className="header-desktop header-desktop-right"></div>
            </div>
        </header>
    )
}