import { TextAreaSld, LabelSld } from './styles'

const TextArea = ({label, rows, value, handle}) => {
    return (
        <div>
           {label && <><LabelSld>{label}</LabelSld><br /></>}
            <TextAreaSld rows={rows} onChange={(e) => handle(e.target.value)} value={value} /> 
        </div>
    )
}

export default TextArea;