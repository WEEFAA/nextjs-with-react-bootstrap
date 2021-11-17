import Layout from '@layouts/default'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'

const Home = () => {
  return (
    <>
      <Head>
        <title>NextJS with React-Bootstrap</title>
      </Head>
      <Container fluid className="mt-5">
        <Container>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is an example of container using react-bootstrap Container component.
          </p>
          <hr className="my-4" />
          <p>
            It uses the same of concept of container from bootstrap.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="https://react-bootstrap.github.io/" role="button">
              Learn more
            </a>
          </p>
        </Container>
      </Container>
    </>
  )
}

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>
}

export default Home
