import { ContainerSld } from './styles'
import Header from '../components/Header'
import UserInformation from '../components/UserInformation'
import Form from '../components/Form'
import { useState } from 'react'

const Main = () => {
  const [user, setUser] = useState()
  
  return (
    <>
        <Header />
        <ContainerSld>
          <UserInformation user={user} setUser={setUser} />
          <Form user={user} setUser={setUser} />
        </ContainerSld>
    </>
  )
}

export default Main;