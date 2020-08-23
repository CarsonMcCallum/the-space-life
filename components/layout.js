import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
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

const name = 'Carson'
export const siteTitle = 'SPACE'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="SPACE online yoga."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Grid columns={5} className="navigation-bar">
            <Grid.Column floated='left'>
            </Grid.Column>
            <Grid.Column floated='right'>
              <Menu
                items={[
                  { key: '1', href:'/', name: 'link-1', content: 'Home' },
                  { key: '2', href:'/gallery', name: 'link-2', content: 'Gallery' },
                  { key: '2', href:'/login', name: 'link-2', content: 'Log In' },
                ]}
                inverted
                pointing
                secondary
                className={styles.navigation}
              />
            </Grid.Column>
            </Grid>
            
          </>
        ) : (
          <>
            <Grid columns={5} className="navigation-bar">
            <Grid.Column floated='left'>
            <img
              src="/images/Logo.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            </Grid.Column>
            <Grid.Column floated='right'>
              <Menu
                items={[
                  { key: '1', href:'/', name: 'link-1', content: 'Home' },
                  { key: '2', href:'/Gallery', name: 'link-2', content: 'Gallery' },
                  { key: '2', href:'/login', name: 'link-2', content: 'Log In' },
                ]}
                inverted
                pointing
                secondary
                className="navigation"
              />
            </Grid.Column>
            </Grid>
            
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}