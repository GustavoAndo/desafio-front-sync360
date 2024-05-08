import { FormSld, TitleSld, CenterSld, HalfInputSld, FullInputSld } from './styles'
import Button from '../Button'
import Input from '../Input'
import TextArea from '../TextArea'

const Form = () => {
    return (
       <FormSld>
            <TitleSld>Atualizar Informações</TitleSld>
            <div>
                <HalfInputSld>
                    <Input label="Nome: "/>
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Idade: "/>
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Estado: "/>
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Cidade: "/>
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Bairro: "/>           
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Endereço: "/>
                </HalfInputSld>
            </div>
            <FullInputSld>
                <TextArea label="Biografia: " rows={10} />
            </FullInputSld>
            <CenterSld>
                <Button text="Atualizar" />
            </CenterSld>
       </FormSld>
    )
}

export default Form;