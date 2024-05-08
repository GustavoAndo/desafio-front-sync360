import { ContainerSld } from './styles'
import Header from '../components/Header'
import UserInformation from '../components/UserInformation'
import Form from '../components/Form'

const Main = () => {
  return (
    <>
        <Header />
        <ContainerSld>
          <UserInformation />
          <Form />
        </ContainerSld>
    </>
  )
}

export default Main;