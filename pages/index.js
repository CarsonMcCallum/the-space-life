import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Modal,
  Form,
} from 'semantic-ui-react'

export default function Home({ allPostsData }) {
  const [open, setOpen] = React.useState(false)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
  <section className={utilStyles.landingPageHeader}>
      <img
              src="/images/Logo.png"
              className={`${utilStyles.homePageLogo}`}
              
            />


      <p>
          Space is an immersive yoga experience for everyone to enjoy.
        </p>

<Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button white 
         style={{
        marginTop: '4.5em',
        background:'white',
        color:'black',
        boxShadow:'purple 1px 1px 26px',
        border:'none',
        borderRadius:'3px'
      }}>Sign up for early access</Button>}
    >
      <Header icon>
        Sign up for early access
      </Header>
      <Modal.Content>
      <Form inverted size='large'>
        <Segment inverted stacked className="login-form">
          
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
        </Segment>
      </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='gray' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' className="cancel-icon" />
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Submit
        </Button>
      </Modal.Actions>
    </Modal>

      </section>
      <section>
    <Grid columns='equal' style={{
      marginTop: '90px',
      textAlign: 'center'
    }}>
      <Grid.Row columns='equal'>
      <Grid.Column>
          <p>
            <span></span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>• Great yoga</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>• Awesome music</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>• Immersive visuals</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span></span>
          </p>
        </Grid.Column>
      </Grid.Row>
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