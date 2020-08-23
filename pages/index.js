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
      
      <section className={utilStyles.headingMd}>
      <img
              src="/images/Logo.png"
              className={`${utilStyles.homePageLogo}`}
              
            />

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
        border:'none'
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

        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
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