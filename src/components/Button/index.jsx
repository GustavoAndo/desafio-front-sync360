import { ButtonSld } from './styles'

const Button = ({text, click}) => {
    return <ButtonSld onClick={click}>{text}</ButtonSld>
}

export default Button;