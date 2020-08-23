import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {
    Button,
    Card,
    Placeholder,
    Container,
    Divider,
    Form,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'


export default function Gallery({ allPostsData }) {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
      <Grid textAlign='center' style={{ height: '100vh',marginTop:'-80px' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        
      </Header>
      <Form inverted size='large'>
        <Segment inverted stacked className="login-form">
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='white' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
        <a href='#'>Sign Up</a>
   
    </Grid.Column>
  </Grid>

</section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}