import ButtonWrapper from "./Button.js";

function Header() {
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
                        {
                            id: "1",
                            class: "button-cyan",
                            text: "Download",
                            spantext: "v1.3"
                        },
                        {
                            id: "2",
                            class: "button-purple",
                            text: "What is it?",
                            spantext: ""
                        },
                    ]} />

                </div>             
                <div className="header-desktop header-desktop-right"></div>
            </div>
        </header>
    )
}

export default Header