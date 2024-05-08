import { TextAreaSld, LabelSld } from './styles'

const TextArea = ({label, rows}) => {
    return (
        <div>
           {label && <><LabelSld>{label}</LabelSld><br /></>}
            <TextAreaSld rows={rows}/> 
        </div>
    )
}

export default TextArea;