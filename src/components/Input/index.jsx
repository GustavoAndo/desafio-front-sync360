import { InputSld, LabelSld } from './styles'

const Input = ({label, type, value, handle}) => {
    return (
        <div>
           {label && <><LabelSld>{label}</LabelSld><br /></>}
            <InputSld type={type} value={value} onChange={(e) => handle(e.target.value)}/> 
        </div>
    )

}

export default Input;