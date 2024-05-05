import React from 'react';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; 

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const HomepageHeading = ({ mobile }) => (
  <Container text >
    <Header
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
    <Header
      as='h2'
      content='Take your farm management to the next level.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Link to="/login">
      <Button primary size='huge'style={{ backgroundColor: 'rgba(11, 102, 35)', marginTop: '500' }}>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Link>
  </Container>
);

HomepageHeading.propTypes = {
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
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Market</Menu.Item>
                <Menu.Item as='a'>Information</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Link to="/login">
                    <Button inverted={!fixed}>
                      Log in
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Link>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
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
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Market</Menu.Item>
            <Menu.Item as='a'>Information</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
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
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Link to="/login">
                      <Button as='a' inverted>
                        Log in
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                      </Button>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
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
            <Header as='h3' style={{ fontSize: '2em' }}>
              Farm Records at Your Finger Tips
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Keep a record of your produce making optimization easy and fast.
              Login to the farm management system to access your records and analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Explore The Market & Information Section
            </Header>
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
            <Header as='h3' style={{ fontSize: '2em' }}>
              "The FormFolio FMS"
            </Header>
            <p style={{ fontSize: '1.33em' }}>A world class Farm Management System (FMS) for every farmer </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "All your farm management needs in one platform."
            </Header>
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
        <Header as='h3' style={{ fontSize: '2em' }}>
        Revolutionizing Agribusiness: Kiambu County Farmers Reap Lucrative Harvests with FarmFolio FMS!
        </Header>
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

        <Header as='h3' style={{ fontSize: '2em' }}>
        Elevating Agriculture: The Rise of Vertical Farms
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Vertical farming represents a modern approach to agriculture, addressing the challenges of land scarcity and urbanization while offering sustainable solutions to food production. By stacking crops in vertical layers, often within controlled indoor environments, vertical farms maximize space utilization and minimize water usage compared to traditional farming methods.
        </p>
        <Button as='a' size='large' style={{color: 'white', backgroundColor: 'rgba(11, 102, 35)' }}>
          Read More
        </Button>
      </Container>
    </Segment>
    //styles footer
    <Segment inverted vertical style={{ 
                                        padding: '5em 0em',
                                        backgroundColor: 'rgba(11, 102, 35)'
                                      }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Research</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Help</List.Item>
                <List.Item as='a'>FAQ</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Vet services</List.Item>
                <List.Item as='a'>Training</List.Item>
                <List.Item as='a'>Delivery</List.Item>
                <List.Item as='a'>Consult an expert</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Access The Farm Management System
              </Header>
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
