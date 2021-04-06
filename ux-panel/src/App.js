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
import { useEffect } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import FormDialog from '../src/Modal';

export const url = "http://ec2-3-84-161-231.compute-1.amazonaws.com:3002/customertests/";

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

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState(row.attributes);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.test_name}</TableCell>
        <TableCell align="right">{row.active ? 'Yes' : 'No'}</TableCell>
        <TableCell align="right">{row.mobileOnly ? 'Yes' : 'No'}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Attributes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date Created</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Group A</TableCell>
                    <TableCell align="right">Group B</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {moment(row.created_on).format('L')}
                    </TableCell>
                    <TableCell>{row.attributes ? row.attributes.customer_name : 'Not Defined'}</TableCell>
                    <TableCell align="right">{row.attributes ? JSON.stringify(row.attributes.group_a) : 'Not Defined'}</TableCell>
                    <TableCell align="right">{row.attributes ? JSON.stringify(row.attributes.group_b) : 'Not Defined'}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function CollapsibleTable({tests}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tablePosition}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="right">Test Name</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Mobile Only</TableCell>
            <TableCell align="right">
              <FormDialog />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tests.map((test) => (
            <Row key={test.id} row={test} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

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
          <CollapsibleTable tests={tests}/>
        </Grid>
      </div>
    </div>
  );
}
