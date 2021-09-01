import * as React from 'react'
import { Theme } from '@material-ui/core'

import { makeStyles, createStyles } from '@material-ui/core/styles'

interface TableBodyProp {
  token: string
  user: string
  loss: string
}
const TableBody: React.FC<TableBodyProp> = ({ token, user, loss }) => {
  const classes = useStyles()
  return (
    <div className={classes.tableBody}>
      <div className={classes.token}>{token}</div>
      <div className={classes.user}>{user}</div>
      <div className={classes.loss}>{loss}</div>
    </div>
  )
}
export default function BoardTable() {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.tableHeader}>
        <div className={classes.token}>TOKENS NAMES</div>
        <div className={classes.user}>ACTIVE USERS</div>
        <div className={classes.loss}>PROVIT/LOSS</div>
      </div>
      <div className={classes.content}>
        {mockup.map((item, index) => {
          return (
            <TableBody
              key={`table-${index}`}
              token={item.token}
              user={item.user}
              loss={item.loss}
            />
          )
        })}
      </div>
    </div>
  )
}

const mockup = [
  {
    token: 'Lorem ipsum dolor',
    user: 'Lorem ipsum dolor',
    loss: 'Lorem ipsum dolor',
  },
  {
    token: 'Lorem ipsum dolor',
    user: 'Lorem ipsum dolor',
    loss: 'Lorem ipsum dolor',
  },
  {
    token: 'Lorem ipsum dolor',
    user: 'Lorem ipsum dolor',
    loss: 'Lorem ipsum dolor',
  },
  {
    token: 'Lorem ipsum dolor',
    user: 'Lorem ipsum dolor',
    loss: 'Lorem ipsum dolor',
  },
  {
    token: 'Lorem ipsum dolor',
    user: 'Lorem ipsum dolor',
    loss: 'Lorem ipsum dolor',
  },
  {
    token: 'Lorem ipsum dolor',
    user: 'Lorem ipsum dolor',
    loss: 'Lorem ipsum dolor',
  },
  {
    token: 'Lorem ipsum dolor',
    user: 'Lorem ipsum dolor',
    loss: 'Lorem ipsum dolor',
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableHeader: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#474C82',
      color: 'white',
      fontSize: 12,
      padding: '10px 26px',
      fontFamily: 'Retro',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#2F335D',
      paddingBottom: 10,
    },
    tableBody: {
      display: 'flex',
      flexDirection: 'row',
      color: '#C68CFF',
      fontSize: 10,
      padding: '7.5px 26px',
      fontFamily: 'pixelmix',
    },
    token: {
      flex: 2,
      textAlign: 'left',
    },
    user: {
      flex: 1,
      textAlign: 'left',
    },
    loss: {
      width: 125,
      textAlign: 'left',
    },
  }),
)
