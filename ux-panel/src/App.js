import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { useEffect } from 'react';

const url = "http://localhost:3002/customertests/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar: {
    height: '7vh',
    justifyContent: 'center',
  },
  table: {
    minWidth: 650,
  },
  tablePosition: {
    marginTop: 20,
  },
  abSwitch: {
    justifyContent: 'flex-end',
  },
}));

function BasicTable({tests}) {
  const classes = useStyles();

  const [state, setState] = React.useState({
  });
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <TableContainer component={Paper} className={classes.tablePosition}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Customer Name</TableCell>
            <TableCell align="right">Test Name</TableCell>
            <TableCell align="right">Group</TableCell>
            <TableCell align="right">Mobile Only?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tests.map((test, index) => (
            <TableRow key={test.id}>
              <TableCell component="th" scope="row">
                {test.id}
              </TableCell>
              <TableCell align="right">{test.attributes === null ? '' : test.attributes.customer_name}</TableCell>
              <TableCell align="right">{test.test_name}</TableCell>
              <TableCell align="right">
                <Grid component="label" container alignItems="center" align="right" className={classes.abSwitch}>
                  <Grid item>A</Grid>
                  <Grid item>
                    <Switch
                    checked={state.checked}
                    onChange={handleChange}
                    name={`checked${index}`}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </Grid>
                  <Grid item>B</Grid>
                </Grid>
              </TableCell>
              <TableCell align="right">      
                <Grid component="label" container alignItems="center" align="right" className={classes.abSwitch}>
                  <Grid item>No</Grid>
                  <Grid item>
                    <Switch
                    checked={state.checked}
                    onChange={handleChange}
                    name={`checked${index}`}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </Grid>
                  <Grid item>Yes</Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function App() {
  const classes = useStyles();

  const [tests, setTests] = React.useState([]);

  useEffect(() => {
    axios.get(`${url}`).then(response => {
      const tests = response.data;
      setTests(tests)
      console.log(tests)
    })
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            UX-Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 50 }}>
        <Grid container>
          <div style={{ fontSize: 20 }}>Tests stats</div>
          <BasicTable tests={tests}/>
        </Grid>
      </div>
    </div>
  );
}
