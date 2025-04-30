import { Background } from "./styles";
import UserImage from "../../../src/assets/users.png"
const TopBackground = () => {
    return (
        <Background>
            <img src={UserImage} alt="icone-usuarios" />
        </Background>
    );
};

export default TopBackground;