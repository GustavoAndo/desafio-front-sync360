import { InputSld, LabelSld } from './styles'

const Input = ({label}) => {
    return (
        <div>
           {label && <><LabelSld>{label}</LabelSld><br /></>}
            <InputSld type='text' /> 
        </div>
    )

}

export default Input;