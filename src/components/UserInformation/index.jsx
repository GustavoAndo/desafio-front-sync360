import { SectionSld, TitleSld, TextSld, ImgSld, RightSideSld, LeftSideSld } from './styles'
import avatar from '../../assets/avatar.jpg'
import api from '../../services/api';
import { useState, useEffect } from 'react';
import Loading from '../Loading';

const UserInformation = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        (async() => {
            api.get('/users/1')
                .then(function (response) {
                    setUser(response.data)
                })
                .catch(function (error) {
                    console.error(error);
                })
                .finally(function () {
                    setLoading(false)
                });
        })()
    }, [])

    function getAge(dateString) {
        let today = new Date()
        let birthDate = new Date(dateString)
        console.log(today, birthDate.getDate())
        let age = today.getFullYear() - birthDate.getFullYear()
        let m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        return age
    }

    return (
        <SectionSld>
            {loading ? 
                <Loading />
            :
            <>
                <LeftSideSld>
                    <ImgSld src={avatar} alt="Foto de Perfil" />
                </LeftSideSld>
                <RightSideSld>
                    <TitleSld>{user ? user.name : "Gustavo Kenji Ando"}</TitleSld>
                    <TextSld>Idade: {user ? getAge(user.birthday) : "20 anos"}</TextSld>
                    <TextSld>Estado: {user ? user.state : "São Paulo"}</TextSld>
                    <TextSld>Cidade: {user ? user.city: "São José dos Campos"}</TextSld>
                    <TextSld>Bairro: {user ? user.district: "Jardim Oriente"} </TextSld>
                    <TextSld>Rua: {user ? user.street : "Rua Kumamoto"}</TextSld>
                </RightSideSld>
                    <TitleSld>Biografia</TitleSld>
                <TextSld>
                    {user ? user.biography : "Me formei em Análise e Desenvolvimento de Sistemas na FATEC de São José dos Campos no final de 2023.\nDurante meu desenvolvimento em estudos, consegui conhecimento em linguagens de programação como Python Java, TypeScript e PHP, além de aprender um pouco de Front-End com HTML e CSS. Os frameworks que já estudei foram: Express (Node.js), Spring Boot, Flask, React e Vue.js. Tive também contato com banco de dados, como MySQL, PostgresSQL e MongoDB. Além disso, tenho experiências em versionamento com Git e metodologia ágil Scrum, que auxiliou na melhora de minhas habilidades de trabalho em equipe e proatividade. \nMinha experiência profissional ocorreu no INPE, onde eu trabalhei com o desenvolvimento de rotinas em Python para o gerenciamento de uma base de dados de sistemas aquáticos por sensoriamento remoto. Isso me trouxe um desenvolvimento profissional inicial na minha carreira, me ajudando a ter melhor noção de programação em Python e de colaboração dentro de uma equipe de uma empresa. \nAtualmente, estou em busca de oportunidades de inserção no mercado de trabalho para me tornar um Desenvolvedor Web Full Stack."}
                </TextSld>
            </>
            }
        </SectionSld>
    )
}

export default UserInformation;