import React from 'react'
import { Typography, Grid, Theme } from '@material-ui/core'
import Contents from './contents'
import WalletButton from './walletbutton'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import walletconnect from '../assets/img/walletconnect.png'
import metamask from '../assets/img/metamask.png'

interface WalletProp {
  handleDialog: any
}
const Wallet: React.FC<WalletProp> = ({ handleDialog }) => {
  const classes = useStyles()
  return (
    <Contents>
      <Grid container spacing={3} className={classes.walletContainer}>
        <Grid item xs={12} className={classes.logoContanier}>
          <Typography variant="body1" className={classes.gradientText}>
            WALLET
          </Typography>
          <Typography variant="body1" className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut lab
          </Typography>
        </Grid>
        <WalletButton
          handleEvent={handleDialog}
          title="METAMASK"
          content="Connect to your MetaMask Wallet"
          walletIcon={metamask}
        />
        <WalletButton
          handleEvent={handleDialog}
          title="WalletConnect"
          content="Scan with WalletConnect to connect"
          walletIcon={walletconnect}
        />
      </Grid>
    </Contents>
  )
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletContainer: {
      width: 570,
    },
    content: {
      color: 'white',
      fontFamily: 'Pixelmix',
      fontWeight: 400,
      fontSize: 12,
      textAlign: 'left',
    },
    logoContanier: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 21,
    },
    gradientText: {
      fontFamily: 'Retro',
      fontSize: 18,
      lineHeight: '23.24px',
      color: 'white',
    },
  }),
)
export default Wallet
