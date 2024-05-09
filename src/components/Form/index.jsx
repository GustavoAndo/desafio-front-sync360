import { FormSld, TitleSld, CenterSld, HalfInputSld, FullInputSld, SuccessMessageSld, ValidateMessageSld } from './styles'
import Button from '../Button'
import Input from '../Input'
import TextArea from '../TextArea'
import Loading from '../Loading'
import { useState } from 'react'
import api from '../../services/api'

const Form = ({user, setUser}) => {

    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [street, setStreet] = useState('')
    const [biography, setBiography] = useState('')

    const [loading, setLoading] = useState(false)
    const [successMessage, setSucessMessage] = useState('')
    const [validateMessage, setValidateMessage] = useState('')

    const updateUserInfo = async (event) => {
        event.preventDefault();
        setValidateMessage('')
        if (name || birthday || state || city || district || street || biography) {
            if (name.length > 60) {
                return setValidateMessage("O nome deve possuir menos que 60 caracteres. Abrevie caso necessário.")
            }
            if (state.length > 30) {
                return setValidateMessage("O estado deve possuir menos que 30 caracteres. Abrevie caso necessário.")
            }
            if (city.length > 30) {
                return setValidateMessage("A cidade deve possuir menos que 60 caracteres. Abrevie caso necessário.")
            }
            if (district.length > 30) {
                return setValidateMessage("O bairro deve possuir menos que 60 caracteres. Abrevie caso necessário.")
            }
            if (street.length > 60) {
                return setValidateMessage("A rua deve possuir menos que 60 caracteres. Abrevie caso necessário.")
            }
            setLoading(true)
            api.patch('/users/1', {name, birthday, state, city, district, street, biography})
                .then(function (response) {
                    setSucessMessage(response.data.message)
                    setTimeout(() => {
                        setSucessMessage('')
                    }, 5000)
                })
                .catch(function (error) {
                    console.error(error);
                })
                .finally(function () {
                    const newUser = { ...user }
                    if (name) { newUser.name = name }
                    if (birthday) { newUser.birthday = birthday }
                    if (state) { newUser.state = state }
                    if (city) { newUser.city = city }
                    if (district) { newUser.district = district }
                    if (street) { newUser.street = street }
                    if (biography) { newUser.biography = biography }
                    setName('')
                    setBirthday('')
                    setState('')
                    setCity('')
                    setDistrict('')
                    setStreet('')
                    setBiography('')
                    setUser(newUser)
                    setLoading(false)
                });
        }
    }    

    return (
        <FormSld>
            <TitleSld>Atualizar Informações</TitleSld>
            <div>
                <HalfInputSld>
                    <Input label="Nome: " type="text" value={name} handle={setName} />
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Dia de Nascimento: " type="date" value={birthday} handle={setBirthday}/>
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Estado: " type="text" value={state} handle={setState}/>
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Cidade: " type="city" value={city} handle={setCity}/>
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Bairro: " type="text" value={district} handle={setDistrict} />           
                </HalfInputSld>
                <HalfInputSld>
                    <Input label="Rua: " type="text" value={street} handle={setStreet} />
                </HalfInputSld>
            </div>
            <FullInputSld>
                <TextArea label="Biografia: " rows={10} value={biography} handle={setBiography} />
            </FullInputSld>
            <CenterSld>
                {
                    loading ?
                    <Loading /> :
                    <Button text="Atualizar" click={updateUserInfo} />
                }
            </CenterSld>
            <SuccessMessageSld>{successMessage}</SuccessMessageSld>
            <ValidateMessageSld>{validateMessage}</ValidateMessageSld>
        </FormSld>
    )
}

export default Form;