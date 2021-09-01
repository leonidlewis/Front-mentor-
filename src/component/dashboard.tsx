import React from 'react'
import { Typography, Grid, Theme } from '@material-ui/core'
import Contents from './contents'
import BoardTable from './boardtable'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import meter from '../assets/img/meter.png'
import token1 from '../assets/img/token1.png'
import token2 from '../assets/img/token2.png'
import token3 from '../assets/img/token3.png'
import token4 from '../assets/img/token4.png'
import token5 from '../assets/img/token5.png'
import token6 from '../assets/img/token6.png'
import trophy from '../assets/img/trophy.png'
import dash from '../assets/img/dash.png'

interface DashboardProp {
  handleDialog: any
}
const Dashboard: React.FC<DashboardProp> = ({ handleDialog }) => {
  const classes = useStyles()
  return (
    <Contents>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} className={classes.logoContanier}>
          <Typography variant="h3" className={classes.welcomeText}>
            YOUR Non Fungible Times
          </Typography>
        </Grid>
        <Grid container spacing={4} className={classes.footerContainer}>
          <div className={classes.layout6}>
            <div className={classes.layout4}>
              <p className={classes.infotext}>NON FUNGIBLE TIMES</p>
            </div>
            <div className={classes.layout8}>
              <p className={classes.number}>0</p>
            </div>
          </div>
          {/* layout 6 */}
          <div className={classes.layout6}>
            <img src={meter} alt="meter" />
          </div>
        </Grid>
        <Grid container spacing={4} className={classes.footerContainer}>
          <div className={classes.layout6}>
            <div className={classes.layout4}>
              <p className={classes.infotext}>TOP 3 PROVIT TOKENS</p>
            </div>
            <div className={classes.layout8}>
              <img src={token1} alt="token1" />
              <img src={token2} alt="token2" />
              <img src={token3} alt="token3" />
            </div>
          </div>
          {/* layout 6 */}
          <div className={classes.layout6}>
            <div className={classes.layout4}>
              <p className={classes.infotext}>
                BOTTOM <br />3 LOSS
              </p>
            </div>
            <div className={classes.layout8}>
              <img src={token4} alt="token4" />
              <img src={token5} alt="token5" />
              <img src={token6} alt="token6" />
            </div>
          </div>
        </Grid>
        <Grid container spacing={4} className={classes.footerContainer}>
          <div className={classes.layout12}>
            <div className={classes.layout3}>
              <img src={trophy} alt="token4" />
              <p className={classes.leadText}>LEADERBOARD</p>
            </div>
            <div className={classes.layout3}>
              <img src={dash} alt="token4" />
              <p className={classes.dateText}>OUT OF 248217</p>
            </div>
          </div>
        </Grid>
        <Grid container spacing={4}>
          <div className={classes.tableContainer}>
            <BoardTable />
          </div>
        </Grid>
      </Grid>
    </Contents>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '13px 35px 30px 35px',
      width: 780,
      justifyContent: 'center',
    },
    logoContanier: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    welcomeText: {
      fontFamily: 'Retro',
      fontSize: 20,
      textAlign: 'center',
      lineHeight: '23.24px',
      color: 'white',
    },

    footerContainer: {
      marginBottom: 10,
    },
    bodyText: {
      color: 'white',
      marginBottom: 8,
      fontSize: 12,
      lineHeight: '14px',
      fontFamily: 'pixelmix',
    },
    layout6: {
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 1,
      margin: '10px 7px',
      height: 97,
      padding: '10px 20px',
      backgroundColor: '#2F335D',
      borderRadius: 6,
    },
    layout4: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      boxSizing: 'border-box',
    },
    layout8: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 2,
      marginLeft: 40,
      boxSizing: 'border-box',
    },
    infotext: {
      margin: 0,
      color: 'white',
      fontFamily: 'Retro',
      textAlign: 'left',
      fontSize: 14,
      lineHeight: '18.07px',
    },
    number: {
      fontSize: 80,
      lineHeight: '50px',
      margin: 0,
      color: '#9C4AEE',
      fontFamily: 'Upheav',
      marginLeft: 100,
      marginBottom: 5,
    },
    layout3: {
      display: 'flex',
      width: 190,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leadText: {
      fontSize: 20,
      margin: 0,
      marginLeft: 17,
      fontFamily: 'Retro',
      color: 'white',
    },
    dateText: {
      fontSize: 14,
      width: 90,
      fontFamily: 'Retro',
      color: 'white',
    },
    layout12: {
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flex: 1,
      margin: 10,
      height: 72,
      padding: '10px 17px',
      backgroundColor: '#2F335D',
      borderRadius: 6,
    },
    tableContainer: {
      margin: 10,
      width: '100%',
    },
  }),
)

export default Dashboard
