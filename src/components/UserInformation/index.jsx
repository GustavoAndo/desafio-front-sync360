import { SectionSld, TitleSld, TextSld, ImgSld, RightSideSld, LeftSideSld } from './styles'
import avatar from '../../assets/avatar.jpg'

const UserInformation = () => {
    return (
    <SectionSld>
        <LeftSideSld>
            <ImgSld src={avatar} alt="Foto de Perfil" />
        </LeftSideSld>
        <RightSideSld>
            <TitleSld>Gustavo Kenji Ando</TitleSld>
            <TextSld>Idade: 20 anos</TextSld>
            <TextSld>Estado: São Paulo</TextSld>
            <TextSld>Cidade: São José dos Cmapos</TextSld>
            <TextSld>Bairro: Jardim Oriente </TextSld>
            <TextSld>Rua: Rua Kumamoto, 106</TextSld>
        </RightSideSld>
            <TitleSld>Biografia</TitleSld>
        <TextSld>
            Me formei em Análise e Desenvolvimento de Sistemas na FATEC de São José dos Campos no final de 2023.<br />
            Durante meu desenvolvimento em estudos, consegui conhecimento em linguagens de programação como Python Java, TypeScript e PHP, além de aprender um pouco de Front-End com HTML e CSS. Os frameworks que já estudei foram: Express (Node.js), Spring Boot, Flask, React e Vue.js. Tive também contato com banco de dados, como MySQL, PostgresSQL e MongoDB. Além disso, tenho experiências em versionamento com Git e metodologia ágil Scrum, que auxiliou na melhora de minhas habilidades de trabalho em equipe e proatividade. <br />
            Minha experiência profissional ocorreu no INPE, onde eu trabalhei com o desenvolvimento de rotinas em Python para o gerenciamento de uma base de dados de sistemas aquáticos por sensoriamento remoto. Isso me trouxe um desenvolvimento profissional inicial na minha carreira, me ajudando a ter melhor noção de programação em Python e de colaboração dentro de uma equipe de uma empresa. <br />
            Atualmente, estou em busca de oportunidades de inserção no mercado de trabalho para me tornar um Desenvolvedor Web Full Stack.
        </TextSld>
    </SectionSld>
    )
}

export default UserInformation;