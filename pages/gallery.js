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

<div className="billboard">
<Container 
          style={{
            padding: '0 1rem',
            width: '92%',
            marginBottom: 0,
            marginTop: '2em',
          }}
>
    <Header
      as='h1'
      content="Let's do this."
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '1.4em',
      }}
    />
    <Header
      as='h2'
      content="Take our latest class now with insturctor Britt Lee."
      inverted

      className="billboard-second-header"
    />
    <Button size='large' className="billboard-button">
      Start Class
      <Icon name='play' />
    </Button>
  </Container>

  <img
              src="/images/teaserheaderlarge.png"
              className="billboard-image"
              
            />

  </div>


  <div className="gallery-container">
            <Header as='h2' textAlign='left' inverted color='white'>Gallery</Header>
            
            <Card.Group itemsPerRow={3}>
            <Card href='#card-example-link-card'>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
            </Card>
            </Card.Group>
            
            <Card.Group className="card-row" itemsPerRow={3}>
                <Card>
                <Card.Content>
                <iframe src="https://player.vimeo.com/video/410388339" width="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </Card.Content>
                </Card>
                <Card>
                <Card.Content>
                <iframe src="https://player.vimeo.com/video/410388339" width="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         
                </Card.Content>
                </Card>
                <Card>
                <Card.Content>
                <iframe src="https://player.vimeo.com/video/410388339" width="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         
                </Card.Content>
                </Card>
                <Card>
                <Card.Content>
                <iframe src="https://player.vimeo.com/video/410388339" width="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         
                </Card.Content>
                </Card>
                <Card>
                <Card.Content>
                <iframe src="https://player.vimeo.com/video/410388339" width="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         
                </Card.Content>
                </Card>
                <Card>
                <Card.Content>
                <iframe src="https://player.vimeo.com/video/410388339" width="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         
                </Card.Content>
                </Card>
                
                <Card>
                <Card.Content>
                <iframe src="https://player.vimeo.com/video/410388339" width="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         
                </Card.Content>
                </Card>
                
                <Card>
                <Card.Content>
                <iframe src="https://player.vimeo.com/video/410388339" width="350" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         
                </Card.Content>
                </Card>
                
                
            </Card.Group>
            </div>
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