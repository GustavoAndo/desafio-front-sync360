import { ContainerSld } from './styles'
import Header from '../components/Header'
import UserInformation from '../components/UserInformation'

const Main = () => {
  return (
    <>
        <Header />
        <ContainerSld>
          <UserInformation />
        </ContainerSld>
    </>
  )
}

export default Main;