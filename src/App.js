import {
  GridList, GridListTile, Paper, Typography, Box, Link, Card, CardContent, Grid, Divider, useMediaQuery,
  Button
}
  from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import {
  PersonPinCircle, PhoneInTalk, Event, LinkedIn, GitHub, ContactMail, Explore,
  BusinessCenter, School, Extension, Code, Computer, Language
}
  from "@material-ui/icons"
import Rating from "@material-ui/lab/Rating"
import Photo from "./Photo.jpg"
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: 5,
  },
  textAfterICon: {
    marginLeft: 10,
  },
  name: {
    textAlign: "center",
    color: "blue"
  },
  apropos: {
    padding: 5,
    margin: 5,
  },
  description: {
    padding: 5,
  },
  divide: {
    marginBottom: 5,
    marginTop: 5,
  },
  grandesIcons: {
    fontSize: 80,
    color: "green"
  },
  petitesIcons: {
    fontSize: 40,
    color: "brown"
  },
  telechargement:{
    fontSize: 20,
    color: "inherit"    
  }
}));
export default function App() {
  const w650 = useMediaQuery('(min-width:650px)');
  const w570 = useMediaQuery('(min-width:570px)');
  const classes = useStyles();
  return (
    <Paper className={classes.root}>

      <GridList cellHeight="auto" cols={w650 ? (2) : (1)} >
        <GridListTile key="photo">
          <img src={Photo} width={"100%"} height={"100%"} alt="Naili Massinissa" />
        </GridListTile>
        <GridListTile key="info">
          <Typography variant="h1" className={classes.name}> SAOUDI </Typography>
          <Typography variant="h2" className={classes.name}> Massinissa </Typography>
          <Card className={classes.apropos}>
            <CardContent>
              <Typography variant="body1">
                Performance-driven and motivated Full Stack Developer
                excited to be at the deployment phase of my new career
                while participating in all phases of web and mobile apps development.
                Possessing a well-developed time management skills,
                and an ability to complete all projects within schedule and in a timely manner.
                Currently seeking a position working with web, mobile, and server technologies including
                React,  React Native, Node.js, MongoDB, PostgreSQL/MySQL, Firebase, PHP, HTML5/CSS3.
            </Typography>
            </CardContent>
          </Card>
          <Box display="flex" padding={1} alignItems="center">
            <Explore className={classes.petitesIcons} />
            <Typography className={classes.textAfterICon} variant="h6">
              Algérien
            </Typography>
          </Box>
          <Box display="flex" padding={1} alignItems="center">
            <Event className={classes.petitesIcons} />
            <Typography className={classes.textAfterICon} variant="h6">
              21 September 1996, Algiers
            </Typography>
          </Box>
          <Box display="flex" padding={1} alignItems="center">
            <PersonPinCircle className={classes.petitesIcons} />
            <Typography className={classes.textAfterICon} variant="h6">
              VGE Tigrourine, Akerrou, Azeffoun, Tizi-Ouzou
            </Typography>
          </Box>
          <Box display="flex" padding={1} alignItems="center">
            <PhoneInTalk className={classes.petitesIcons} />
            <Typography className={classes.textAfterICon} variant="h6">
              +213 659 00 88 90
            </Typography>
          </Box>
          <Box display="flex" padding={1} alignItems="center">
            <ContactMail className={classes.petitesIcons} />
            <Link className={classes.textAfterICon} color="inherit" variant="h6"
              href="Saoudi.massinissa3@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Saoudi.massinissa3@gmail.com
            </Link>
          </Box>
          <Box display="flex" padding={1} alignItems="center">
            <LinkedIn className={classes.petitesIcons} />
            <Link className={classes.textAfterICon} color="inherit" variant="h6"
              href="https://www.linkedin.com/in/saoudi-massinissa/"
              rel="noopener noreferrer"
              target="_blank"
            >
            linkedin.com/in/saoudi-massinissa
            </Link>
          </Box>
          <Box display="flex" padding={1} alignItems="center">
            <GitHub className={classes.petitesIcons} />
            <Link className={classes.textAfterICon} color="inherit" variant="h6"
              href="https://github.com/Massi21"
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/Massi21
            </Link>
          </Box>
        </GridListTile>
      </GridList>
      <Grid container spacing={3} justify="center">
        <Grid item xs={w570 ? (6) : (12)}>
          <Box display="flex" padding={1} alignItems="center" >
            <School className={classes.grandesIcons} />
            <Typography className={classes.textAfterICon} variant="h5">
              Formations
            </Typography>
          </Box>
          <Card elevation={0} className={classes.description}>
            <Box>
              <Typography variant="h6">
                Master Ingénierie des Systèmes d'Information
              </Typography>
              <Typography variant="subtitle1">
                2018 &#8594; 2020
              </Typography>
              <Typography variant="subtitle2">
                Université Mouloud Mammeri de Tizi Ouzou
              </Typography>
            </Box>
          </Card>
          <Divider className={classes.divide} />
          <Card elevation={0} className={classes.description}>
            <Box>
              <Typography variant="h6">
                license informatique
              </Typography>
              <Typography variant="subtitle1">
                2015 &#8594; 2018
              </Typography>
              <Typography variant="subtitle2">
                Université Mouloud Mammeri de Tizi Ouzou
              </Typography>
            </Box>
          </Card>
          <Divider className={classes.divide} />
          <Card elevation={0} className={classes.description}>
            <Box>
              <Typography variant="h6">
                Baccalauréat Mathématiques
              </Typography>
              <Typography variant="subtitle1">
                2014 &#8594; 2015
              </Typography>
              <Typography variant="subtitle2">
                Lycée Technicum Yazouren Said de Azazga
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={w570 ? (6) : (12)}>
          <Box display="flex" padding={1} alignItems="center" >
            <BusinessCenter className={classes.grandesIcons} />
            <Typography className={classes.textAfterICon} variant="h5">
              Expériences
            </Typography>
          </Box>
          <Card elevation={0} className={classes.description}>
            <Box>
              <Typography variant="h6">
                GTS Développement
              </Typography>
              <Typography variant="subtitle1">
                Août 2020 &#8594; Octobre 2020
              </Typography>
              <Typography variant="subtitle2">
                Satge de projet de fin d'études Master.
                <Typography variant="subtitle2">
                  Thème : conception et développement d'une application mobile
                  multiplatforme pour le suivi de personnel dans un chantier.
                </Typography>
                <Typography variant="subtitle2">
                  Technologies utilisées : React Native, Expo, NodeJS, MondoDB.
                </Typography>
              </Typography>
            </Box>
          </Card>
          <Divider className={classes.divide} />
          <Card elevation={0} className={classes.description}>
            <Box>
              <Typography variant="h6">
                Idir Location
              </Typography>
              <Typography variant="subtitle1">
                Avril 2018 &#8594; Juin 2018
              </Typography>
              <Typography variant="subtitle2">
                Satge de projet de fin d'études License.
                <Typography variant="subtitle2">
                  Thème : conception et développement d'une application web
                  pour réservation de voitures en ligne.
                </Typography>
                <Typography variant="subtitle2">
                  Technologies utilisées : HTML5, CSS3, PHP, MySQL, WampServer.
                </Typography>
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={w570 ? (6) : (12)}>
          <Box display="flex" padding={1} alignItems="center" >
            <Code className={classes.grandesIcons} />
            <Typography className={classes.textAfterICon} variant="h5">
              Outils de Développement
            </Typography>
          </Box>
          <Card elevation={0} className={classes.description}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                HTML5 CSS3
              </Typography>
              <Rating value={4.5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                React
              </Typography>
              <Rating value={4} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                React Native
              </Typography>
              <Rating value={4} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                NodeJS
              </Typography>
              <Rating value={3.5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                PHP
              </Typography>
              <Rating value={4} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                MySQL
              </Typography>
              <Rating value={4.5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                MongoDB
              </Typography>
              <Rating value={3.5} precision={0.5} size="large" readOnly />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                PostgreSQL
              </Typography>
              <Rating value={3.5} precision={0.5} size="large" readOnly />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={w570 ? (6) : (12)}>
          <Box display="flex" padding={1} alignItems="center" >
            <Computer className={classes.grandesIcons} />
            <Typography className={classes.textAfterICon} variant="h5">
              Logiciels Maîtrisé
            </Typography>
          </Box>
          <Card elevation={0} className={classes.description}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                Word
              </Typography>
              <Rating value={5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                PowerPoint
              </Typography>
              <Rating value={5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                Excel
              </Typography>
              <Rating value={3.5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                Wamp Server
              </Typography>
              <Rating value={4} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                AdobeXD
              </Typography>
              <Rating value={3.5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                Draw.io
              </Typography>
              <Rating value={5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                Android Studio
              </Typography>
              <Rating value={2} precision={0.5} size="large" readOnly />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={w570 ? (6) : (12)}>
          <Box display="flex" padding={1} alignItems={"center"} >
            <Language className={classes.grandesIcons} />
            <Typography className={classes.textAfterICon} variant="h5">
              Langues
            </Typography>
          </Box>
          <Card elevation={0} className={classes.description}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                Kabyle
              </Typography>
              <Rating value={5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                Anglais
              </Typography>
              <Rating value={5} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                Français
              </Typography>
              <Rating value={4} precision={0.5} size="large" readOnly />
            </Box>
            <Divider variant="middle" className={classes.divide} />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">
                Arabe
              </Typography>
              <Rating value={4.5} precision={0.5} size="large" readOnly />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={w570 ? (6) : (12)}>
          <Box display="flex" padding={1} alignItems="center" >
            <Extension className={classes.grandesIcons} />
            <Typography className={classes.textAfterICon} variant="h5">
              Loisirs
            </Typography>
          </Box>
          <Card elevation={0} className={classes.description}>
            <Typography variant="h6">
              Music
            </Typography>
            <Divider variant="middle" className={classes.divide} />
            <Typography variant="h6">
              Football
            </Typography>
            <Divider variant="middle" className={classes.divide} />
            <Typography variant="h6">
              mouvement associatif
            </Typography>
            <Divider variant="middle" className={classes.divide} />
            <Typography variant="h6">
              Films et émissions de télévision
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}