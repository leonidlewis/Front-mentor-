import React from 'react'
import { Grid, Button, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

interface WalletButtonProp {
  handleEvent: any
  walletIcon: any
  title: string
  content: string
}
const WalletButton: React.FC<WalletButtonProp> = ({
  handleEvent,
  walletIcon,
  title,
  content,
}) => {
  const classes = useStyles()
  return (
    <Grid item md={12} className={classes.walletContainer}>
      <Button
        aria-label="metamask"
        className={classes.button}
        onClick={() => handleEvent(1)}
      >
        <img src={walletIcon} alt="wallet connect" width="80" />
        <div className={classes.walletinfo}>
          <p className={classes.titleText}>{title}</p>
          <p className={classes.contentText}>{content}</p>
        </div>
      </Button>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletContainer: {
      width: '100%',
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#2F335D',
      padding: '11px 20px',
      color: 'white',
      fontSize: 12,
      width: 'calc(100% - 16px)',
      display: 'flex',
      justifyContent: 'flex-start',
      border: '1px solid transparent',
      '&:hover': {
        border: '1px solid #6C73C1',
        backgroundColor: '#2F335D',
      },
    },
    walletinfo: {
      marginLeft: 18,
      textAlign: 'left',
      '& p': {
        margin: 0,
      },
    },
    titleText: {
      fontFamily: 'Retro',
      fontWeight: 400,
      fontSize: 12,
    },
    contentText: {
      fontFamily: 'pixelmix',
      fontSize: 10,
    },
  }),
)

export default WalletButton
