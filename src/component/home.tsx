import React, { useState } from 'react'
import { Container, Typography, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useWeb3React } from '@web3-react/core'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import EnhancedTable from './datatable'
import DataTable from './datagrid'

function TabPanel(props: any) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Home: React.FC = () => {
  const classes = useStyles()
  const { account } = useWeb3React()

  const [progress, setProgress] = useState(0)

  // if (progress < 100) return <LinearProgress variant="determinate" value={progress} />
  const [value, setValue] = React.useState(0)

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }
  return (
    <div className={classes.container}>
      <div className={classes.tabcontainer}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="wallet tab">
            <Tab label="Contract" {...a11yProps(0)} />
            <Tab label="Send" {...a11yProps(1)} />
            <Tab label="Receive" {...a11yProps(2)} />
            <Tab label="Current" {...a11yProps(3)} />
            <Tab label="Period" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <EnhancedTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DataTable />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item 4
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item 5
        </TabPanel>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexGrow: 1,
      marginTop: 40,
    },
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabcontainer: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

export default Home
