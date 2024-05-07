import React from 'react';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import { Button, Container, Divider, Grid, Icon, Image, List, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; 
import TypingEffect from '../TypingEffect';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const Homepagediv = ({ mobile }) => (
  <Container text >
    <div
      as='h1'
      content='Welcome to FarmFolio'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        
      }}
    />
    <div
      as='h2'
      content='Take your farm management to the next level.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <div>
    <TypingEffect
      texts={["Welcome to FarmFolio", "Take Your Farm Management To The Next Level!", "Keep Track Of Your Farm Analytics",  "Optimize Your Farm For High Yields",]}
      speed={150} // Speed in milliseconds
      pause={1000} // Pause for 1 second after typing
      
    />
  </div>
    {/* <Link to="/login">
      <Button primary size='huge'style={{ backgroundColor: 'transparent', marginTop: '50px', border: '4px solid white' }}>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Link> */}
  </Container>
);

Homepagediv.propTypes = {
  mobile: PropTypes.bool,
};

class DesktopContainer extends React.Component {
  state = {}

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{
              minHeight: 700,
              padding: '1em 0em',
              backgroundImage: `url('https://github.com/NB-Kamoni/Images/blob/main/ladyfarmergreen.png?raw=true')`, 
              backgroundSize: 'cover', 
              backgroundColor: 'rgba(11, 102, 35)', 
            }}
           
            
            vertical
          >
           
            <Homepagediv />
          </Segment>
        </InView>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends React.Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            //styles the side menu
            style={{ maxHeight: 380,
                     backgroundSize: 'cover', 
                     backgroundColor: 'rgba(11, 102, 35)', 
                     maxWidth: 150,
                    
            }}
            visible={sidebarOpened}
          >
            
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              //styles the smaller  screen header
              style={{ minHeight: 350,
                       padding: '1em 0em',
                       backgroundImage: `url('https://github.com/NB-Kamoni/Images/blob/main/ladyfarmergreen.png?raw=true')`, 
                       backgroundSize: 'cover', 
                       backgroundColor: 'rgba(11, 102, 35)', 

                     }}
              vertical

            >
              <Container>
                
              </Container>
              <Homepagediv mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <div as='h3' style={{ fontSize: '2em' }}>
              Farm Records at Your Finger Tips
            </div>
            <p style={{ fontSize: '1.33em' }}>
              Keep a record of your produce making optimization easy and fast.
              Login to the farm management system to access your records and analytics.
            </p>
            <div as='h3' style={{ fontSize: '2em' }}>
              Explore The Market & Information Section
            </div>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you can buy and sell farm-tools, fertilizers, pesticides, seeds, and even access vet services.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://github.com/NB-Kamoni/Images/blob/main/chicken.jpg?raw=true' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' style={{ color: 'white', backgroundColor: 'rgba(11, 102, 35)' }}>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <div as='h3' style={{ fontSize: '2em' }}>
              "The FormFolio FMS"
            </div>
            <p style={{ fontSize: '1.33em' }}>A world class Farm Management System (FMS) for every farmer </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <div as='h3' style={{ fontSize: '2em' }}>
              "All your farm management needs in one platform."
            </div>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://github.com/NB-Kamoni/Images/blob/main/hen.jpg?raw=true' />
              <b>John Doe</b> Co-Founder and CEO
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <div as='h3' style={{ fontSize: '2em' }}>
        Revolutionizing Agribusiness: Kiambu County Farmers Reap Lucrative Harvests with FarmFolio FMS!
        </div>
        <p style={{ fontSize: '1.33em' }}>
        In the fields of Kiambu County, Kenya, a silent agricultural revolution is underway, fueled by innovation and propelled by FarmFolio FMS. Through this groundbreaking farming management system, farmers are witnessing a remarkable transformation in their operations, from traditional practices to modern efficiency.
        </p>
        <Button as='a' size='large' style={{ color: 'white', backgroundColor: 'rgba(11, 102, 35)' }}>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <div as='h3' style={{ fontSize: '2em' }}>
        Elevating Agriculture: The Rise of Vertical Farms
        </div>
        <p style={{ fontSize: '1.33em' }}>
        Vertical farming represents a modern approach to agriculture, addressing the challenges of land scarcity and urbanization while offering sustainable solutions to food production. By stacking crops in vertical layers, often within controlled indoor environments, vertical farms maximize space utilization and minimize water usage compared to traditional farming methods.
        </p>
        <Button as='a' size='large' style={{color: 'white', backgroundColor: 'rgba(11, 102, 35)' }}>
          Read More
        </Button>
      </Container>
    </Segment>
   
    <Segment inverted vertical style={{ 
                                        padding: '5em 0em',
                                        backgroundColor: 'rgba(11, 102, 35)'
                                      }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <div inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Research</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Help</List.Item>
                <List.Item as='a'>FAQ</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <div inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Vet services</List.Item>
                <List.Item as='a'>Training</List.Item>
                <List.Item as='a'>Delivery</List.Item>
                <List.Item as='a'>Consult an expert</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <div as='h4' inverted>
                Access The Farm Management System
              </div>
              <p>
                Take control of your farming.  Login

              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <p style={{textAlign: 'center', marginTop: 100 }}> © FarmFolio 2024</p>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default Home;
