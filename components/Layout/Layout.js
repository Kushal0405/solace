import { Container } from '@material-ui/core'

const Layout = ({ children, width = "lg" }) => {
  return (
    <Container maxWidth={width}>
      {children}
    </Container>
  )
}

export default Layout