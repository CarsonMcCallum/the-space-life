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

      <div className="bottom-shadow"></div>

  </div>


  <div className="gallery-container">
            <Header as='h2' textAlign='left' inverted className="gallery-section-label" color='white'>Class Gallery</Header>
            
            <Card.Group itemsPerRow={3}>

            
            <Card raised="true" href='#card-example-link-card' className="gallery-card">
                <Image src='/images/classthumbnailone.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Get comfortable with Discomfort</Card.Header>
                <Card.Meta>
                    <span className='date'>August 7th</span>
                </Card.Meta>
                <Card.Description>
                Most people aren't naturally comfortable with discomfort, but this is a skill that can be developed, and during today's experience you we will use the body to train us learn how to develop this skill in our life.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='eye' />
                    204 Views
                </a>
                </Card.Content>
            </Card>



            <Card raised="true" href='#card-example-link-card' className="gallery-card">
                <Image src='/images/classthumbnailtwo.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>More Faith, Less Fear</Card.Header>
                <Card.Meta>
                    <span className='date'>August 1st</span>
                </Card.Meta>
                <Card.Description>
                Together we'll have a chance to explore our relationship with both faith and fear and then we'll learn how to shift ourselves out of fear when we learn it arises in our life. 
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='eye' />
                    398 Views
                </a>
                </Card.Content>
            </Card>



            <Card raised="true" href='#card-example-link-card' className="gallery-card">
                <Image src='/images/classthumbnailthree.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Gratitude</Card.Header>
                <Card.Meta>
                    <span className='date'>July 28th</span>
                </Card.Meta>
                <Card.Description>
                Gratitude is a habit that can be developed and the more we practice the more our brain begins looking for things to be grateful for. During today's journey you will be guided to practice experiencing gratitude for your body, your breath, and your life. 
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='eye' />
                    398 Views
                </a>
                </Card.Content>
            </Card>

            {allPostsData.map(({ id, date, title, header,imagesrc,description }) => (
            <Card raised="true" href={`/posts/${id}`}  className="gallery-card">
                <Image src={imagesrc} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{header}</Card.Header>
                <Card.Meta>
                    <span className='date'>{date}</span>
                </Card.Meta>
                <Card.Description>
                 </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='eye' />
                    398 Views
                </a>
                </Card.Content>
            </Card>
       ))}

            </Card.Group>
            
            {/*
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
            */}


            </div>
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