import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';
import Slider, { defaultValueReducer } from '@material-ui/lab/Slider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';


const styles = theme => ({
    root: {
      width: '100%',
    },
    list_root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
      },
    },
    chip: {
      margin: theme.spacing.unit,
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    header:{
        backgroundColor: "#21232b"
    },
    button: {
        margin:"10px",
        width: "150px"
      },
    card_button:{
      margin: "auto"
    },
    card: {
        maxWidth: 345,
        margin: "20px auto",
        [theme.breakpoints.down('md')]:{
          margin: "20px auto 20px 20px"
        },
        [theme.breakpoints.down('xs')]:{
          margin: "20px auto"
        }
      },
    media: {
        height: 400,
    },
    slider: {
      padding: '22px 0px',
      margin: "10px auto"
    },
    nested_col:{
      paddingLeft: theme.spacing.unit * 4,
      flexDirection: "column"
    },
    list_item:{
        fontWeight: "Bold"
    },
    image: {
      width: 180,
      height: 240,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });

  function valueReducer(rawValue, props, event) {
    const { disabled, max, min, step } = props;
  
    function roundToStep(number) {
      return Math.round(number / step) * step;
    }
  
    if (!disabled && step) {
      if (rawValue > min && rawValue < max) {
        if (rawValue === max - step) {
          // If moving the Slider using arrow keys and value is formerly an maximum edge value
          return roundToStep(rawValue + step / 2);
        }
        if (rawValue === min + step) {
          // Same for minimum edge value
          return roundToStep(rawValue - step / 2);
        }
        return roundToStep(rawValue);
      }
      return rawValue;
    }
  
    return defaultValueReducer(rawValue, props, event);
  }

class home extends Component {
    state = {
        mobileMoreAnchorEl: null,
        openCategories: true,
        openProducts: true,
        openPriceRange: true,
        Sildervalue: 10,
        openColor: true,
        openSize: true,
        checked_S: false,
        checked_M: false,
        checked_L: false,
        checked_XL: false,
        checked_2XL: false,
        checked_3XL: false,
        checked_4XL: false,
      };
    
      handleMenuClose = () => {
        this.handleMobileMenuClose();
      };
    
      handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
      };
    
      handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
      };

      handleCategoriesClick = () => {
        this.setState(state => ({ openCategories: !state.openCategories }));
      };

      handleProductsClick = () => {
        this.setState(state => ({openProducts: !state.openProducts }))
      };

      handlePriceRangeClick = () => {
        this.setState(state => ({openPriceRange: !state.openPriceRange }))
      };

      handleSilderValueChange = (event, value) =>{
        this.setState({Sildervalue: value})
      };

      handleColorClick = () =>{
        this.setState(state => ({openColor: !state.openColor }))
      };

      handleSizeClick = () =>{
        this.setState(state => ({openSize: !state.openSize}))
      };

      handleCheckedChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

  render() {
    const { classes } = this.props;
    const { mobileMoreAnchorEl } = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { Sildervalue } = this.state;

    const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
                <AccountCircle />
            </IconButton>
            <p>Account</p>
          </MenuItem>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
                <ShoppingCart/>
            </IconButton>
            <p>Shopping Cart</p>
          </MenuItem>
        </Menu>
      );

    return (
        <div className={classes.root}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Company Name
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
                <IconButton color="inherit">
                    <ShoppingCart/>
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}

        <div id="background_img">
            <div id="round_title_bg">
                <div id="round_bg_color">
                </div>
                <h1>explore your true style.</h1>
                <div id="btns">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Shop now
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Contact us
                    </Button>
                </div>
            </div>    
        </div>  
        <div id="newProduct">
             <div className="headerBlock">
                <h1>Discover our new Products</h1>
             </div>
             <div id="grid_news">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={require('../images/bg1.jpeg')}
                        title="Contemplative Reptile"
                        />
                        <div className="news_tag">New</div>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Men's T-Shirt
                        </Typography>
                        <Typography component="p">
                        t-shirts created by independent artists from around the globe. We print the highest quality t-shirts on the internet.
                        </Typography>
                        <div className="Chip_new">
                            <Chip className={classes.chip} label="S"   color="primary"/>
                            <Chip className={classes.chip} label="M"   color="primary"/>
                            <Chip className={classes.chip} label="L"   color="primary"/>
                            <Chip className={classes.chip} label="XL"   color="primary"/>
                            <Chip className={classes.chip} label="2XL"   color="primary"/>
                            <Chip className={classes.chip} label="3XL"   color="primary"/>
                            <Chip className={classes.chip} label="4XL"   color="primary"/>
                        </div>
                        </CardContent>
                    </CardActionArea>
                    <Divider variant="middle" />
                    <CardActions>
                        <Button variant="contained" color="primary" className={classes.card_button}>
                            add to cart
                        </Button>
                    </CardActions>   
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={require('../images/bg2.jpg')}
                        title="Contemplative Reptile"
                        />
                        <div className="news_tag">New</div>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Men's T-Shirt
                        </Typography>
                        <Typography component="p">
                        t-shirts created by independent artists from around the globe. We print the highest quality t-shirts on the internet.
                        </Typography>
                        <div className="Chip_new">
                            <Chip className={classes.chip} label="S"   color="primary"/>
                            <Chip className={classes.chip} label="M"   color="primary"/>
                            <Chip className={classes.chip} label="L"   color="primary"/>
                            <Chip className={classes.chip} label="XL"   color="primary"/>
                            <Chip className={classes.chip} label="2XL"   color="primary"/>
                            <Chip className={classes.chip} label="3XL"   color="primary"/>
                            <Chip className={classes.chip} label="4XL"   color="primary"/>
                        </div>
                        </CardContent>
                    </CardActionArea>
                    <Divider variant="middle" />
                    <CardActions>
                        <Button variant="contained" color="primary" className={classes.card_button}>
                            add to cart
                        </Button>
                    </CardActions>   
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={require('../images/bg3.jpg')}
                        title="Contemplative Reptile"
                        />
                        <div className="news_tag">New</div>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Men's T-Shirt
                        </Typography>
                        <Typography component="p">
                        t-shirts created by independent artists from around the globe. We print the highest quality t-shirts on the internet.
                        </Typography>
                        <div className="Chip_new">
                            <Chip className={classes.chip} label="S"   color="primary"/>
                            <Chip className={classes.chip} label="M"   color="primary"/>
                            <Chip className={classes.chip} label="L"   color="primary"/>
                            <Chip className={classes.chip} label="XL"   color="primary"/>
                            <Chip className={classes.chip} label="2XL"   color="primary"/>
                            <Chip className={classes.chip} label="3XL"   color="primary"/>
                            <Chip className={classes.chip} label="4XL"   color="primary"/>
                        </div>
                        </CardContent>
                    </CardActionArea>
                    <Divider variant="middle" />
                    <CardActions>
                        <Button variant="contained" color="primary" className={classes.card_button}>
                        add to cart
                        </Button>
                    </CardActions>   
                </Card>
            </div>       
        </div> 
        <div id="our_collections">
              <div className="headerBlock">
                <h1>check our collections</h1>
              </div>
              <div id="filfter_collection">
                <List
                 component="nav"
                 subheader={<ListSubheader component="div">Filter</ListSubheader>}
                 className={classes.list_root}
                >
                  <ListItem button onClick={this.handleCategoriesClick}>
                  <ListItemText  primary="Categories" classes={{primary:classes.list_item}}/>
                  {this.state.openCategories ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.openCategories} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText inset primary="Men" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText inset primary="Women" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText inset primary="Kids And Babies" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText inset primary="Acccessoires" />
                    </ListItem>
                  </List>
                </Collapse>
                <Divider variant="middle" />
                <ListItem button onClick={this.handleProductsClick}>
                  <ListItemText  primary="Products" classes={{primary:classes.list_item}}/>
                  {this.state.openProducts ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.openProducts} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText inset primary="T-Shirts" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText inset primary="Long Sleeve Shirts" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText inset primary="Hoodies & Sweatshirts" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText inset primary="Jackets & Vests" />
                    </ListItem>
                  </List>
                </Collapse>
                <Divider variant="middle" />
                <ListItem button onClick={this.handlePriceRangeClick}>
                  <ListItemText  primary="Price Range" classes={{primary:classes.list_item}}/>
                  {this.state.openPriceRange ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.openPriceRange} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem  className={classes.nested_col}>
                    <Slider
                      classes={{ container: classes.slider }}
                      valueReducer={valueReducer}
                      min={0}
                      max={100}
                      step={10}
                      value={Sildervalue}
                      aria-labelledby="label"
                      onChange={this.handleSilderValueChange}
                    />
                    <ListItemText inset primary={`${this.state.Sildervalue} TND`} />
                    </ListItem>
                  </List>
                </Collapse>
                <Divider variant="middle" />
                <ListItem button onClick={this.handleColorClick}>
                  <ListItemText  primary="Color" classes={{primary:classes.list_item}} />
                  {this.state.openColor ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.openColor} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem  className={classes.nested}>
                        <div id="Color_picker">
                            <div className="colors_Round" id="black"></div>
                            <div className="colors_Round" id="white"></div>
                            <div className="colors_Round" id="blue"></div>
                            <div className="colors_Round" id="red"></div>
                            <div className="colors_Round" id="green"></div>
                            <div className="colors_Round" id="gray"></div>
                            <div className="colors_Round" id="yellow"></div>
                            <div className="colors_Round" id="pink"></div>
                            <div className="colors_Round" id="Cyan"></div>
                            <div className="colors_Round" id="mauve"></div>
                        </div>
                    </ListItem>
                  </List>
                </Collapse>
                <Divider variant="middle" />
                <ListItem button onClick={this.handleSizeClick}>
                  <ListItemText  primary="Size" classes={{primary:classes.list_item}} />
                  {this.state.openSize ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.openSize} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem  className={classes.nested}>
                      <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checked_S}
                                onChange={this.handleCheckedChange('checked_S')}
                                value="checked_S"
                                color="primary"
                              />
                            }
                            label="S"
                          />
                           <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checked_M}
                                onChange={this.handleCheckedChange('checked_M')}
                                value="checked_M"
                                color="primary"
                              />
                            }
                            label="M"
                          />
                           <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checked_L}
                                onChange={this.handleCheckedChange('checked_L')}
                                value="checked_L"
                                color="primary"
                              />
                            }
                            label="L"
                          />
                           <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checked_2XL}
                                onChange={this.handleCheckedChange('checked_2XL')}
                                value="checked_2XL"
                                color="primary"
                              />
                            }
                            label="2XL"
                          />
                           <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checked_3XL}
                                onChange={this.handleCheckedChange('checked_3XL')}
                                value="checked_3XL"
                                color="primary"
                              />
                            }
                            label="3XL"
                          />
                           <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checked_4XL}
                                onChange={this.handleCheckedChange('checked_4XL')}
                                value="checked_4XL"
                                color="primary"
                              />
                            }
                            label="4XL"
                          />
                        
                      </FormGroup>
                    </ListItem>
                  </List>
                </Collapse>
                <Divider variant="middle" />
              </List>
              <div id="filter_grid">
                  <Grid container  justify="center" spacing={16}>
                    
                  </Grid>        
              </div>
            </div>
        </div>        
      </div>
    )
  }
}

home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(home);

/*
  <div className="custom_card">
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="clothes" src={require("../images/13.jpg")} />
                        </ButtonBase>
                        <Divider variant="middle" />
                          <p className="clothes_title">Men T-Shirt</p>
                          <p className="clothes_price">15 TND</p>    
                      </div>
 */