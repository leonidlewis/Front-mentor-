import React from 'react'
import { Typography, Grid, Theme, Button } from '@material-ui/core'
import Contents from './contents'
import { makeStyles, createStyles } from '@material-ui/core/styles'

interface WelcomeProp {
  handleDialog: any
}
const Welcome: React.FC<WelcomeProp> = ({ handleDialog }) => {
  const classes = useStyles()
  return (
    <Contents>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} className={classes.logoContanier}>
          <Typography variant="h3" className={classes.welcomeText}>
            Welcome
          </Typography>
          <Typography variant="h1" className={classes.nftText}>
            NON FUNGIBLE TIMES
          </Typography>
        </Grid>
        <Grid container spacing={2} className={classes.footerContainer}>
          <Grid item xs={8} className={classes.content}>
            <Typography variant="body1" className={classes.bodyText}>
              How many rugpulls, hacks and aping has your wallet endured?
            </Typography>
            <Typography variant="body1" className={classes.bodyText}>
              Get your DegenScore now and find out how you rank on the DeFi Leaderboard!
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.jumpButton} onClick={() => handleDialog(2)}>
              JUMP IN
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Contents>
  )
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '0px 13px 30px',
      width: 552,
      justifyContent: 'center',
    },
    logoContanier: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontFamily: 'Retro',
      fontSize: 20,
      textAlign: 'center',
      lineHeight: '23.24px',
      color: 'white',
    },
    nftText: {
      fontFamily: 'Retro',
      letterSpacing: 3,
      fontSize: 48,
      textAlign: 'center',
      background: '-webkit-linear-gradient(#9C4AEE 100%, #754AEE  100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 900,
      margin: '63px 0',
    },
    footerContainer: {
      padding: '0 10px',
      display: 'flex',
      alignItems: 'center',
    },
    bodyText: {
      color: 'white',
      textAlign: 'left',
      marginBottom: 8,
      fontSize: 12,
      lineHeight: '14px',
      fontFamily: 'pixelmix',
    },
    content: {
      padding: '0 20px!important',
    },
    jumpButton: {
      backgroundColor: '#9C4AEE',
      fontFamily: 'Retro',
      padding: '10px 32px',
      color: 'white',
      fontSize: 14,
      textAlign: 'center',
      lineHeight: '18px',
      '&:hover': {
        backgroundColor: '#9C4AB2',
      },
    },
  }),
)

export default Welcome
