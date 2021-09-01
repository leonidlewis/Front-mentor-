import React from 'react'
import { Container, Paper, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

interface ContentsProp {}
const Contents: React.FC<ContentsProp> = ({ children }) => {
  const classes = useStyles()
  return (
    <Container className="container">
      <Paper className={classes.contents}>
        <div className={classes.paper}>{children}</div>
      </Paper>
    </Container>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    contents: {
      border: '3px solid #191D44',
      borderRadius: 14,
      background: 'none',
      boxShadow: '4px 4px #38246a',
    },
    paper: {
      padding: ' 21px 17px',
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: '#191D44',
      border: '3px solid #7345A1',
      borderRadius: 10,
    },
  }),
)
export default Contents
