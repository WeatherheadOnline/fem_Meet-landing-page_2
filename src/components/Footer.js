import PageNumber from "./PageNumber"
import WrapperH2P from "./WrapperH2P"
import ButtonWrapper from "./Button"

function Footer() {
    return(
        <footer>
            <PageNumber number="02" />
            <WrapperH2P 
                h2Text="Experience more together"
                pText="Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions."
            />
            <ButtonWrapper 
                buttonContents={[
                    ["button-purple", "Download", "v1.3"]
                ]}
            />
        </footer>
    )
}

export default Footer

