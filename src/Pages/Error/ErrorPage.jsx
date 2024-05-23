import { Button, Container } from '../../Components/compnents'
import { errorcat } from '../../Assets/assets'

function ErrorPage() {
  return (
    <Container classes={` h-screen flex flex-col justify-center items-center`}>
      <img src={errorcat} alt=""  className='h-[20rem] lg:h-[50rem]'/>
      <Button NavigateTo={`/`}>Go to Home</Button>
    </Container>
  )
}

export default ErrorPage