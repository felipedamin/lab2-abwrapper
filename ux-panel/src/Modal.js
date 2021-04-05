import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';

const url = "http://localhost:3002/customertests/new-test";

export default function FormDialog({attributes}) {
  const [open, setOpen] = React.useState(false);

//   const [params, setParams] = React.useState(attributes);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    // setParams(newParams);
    setOpen(false);
    // axios.post(`${url}`).then(response => {
    //   const tests = response.data;
    //   console.log(tests)
    // })
    console.log(params)
  }

  let params = {}

  return (
    <div>
      <IconButton aria-label="add" size="small" onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new test</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="testName"
            label="Test Name"
            type="text"
            multiline
            onBlur={e => params = {
                ...params,
                test_name: e.target.value
            }}
            // defaultValue={JSON.stringify(params.group_a)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="active"
            label="Active"
            type="text"
            multiline
            onBlur={e => params = {
                ...params,
                active: e.target.value
            }}
            // defaultValue={JSON.stringify(params.group_a)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="mobileOnly"
            label="Mobile Only"
            type="text"
            multiline
            onBlur={e => params = {
                ...params,
                mobileOnly: e.target.value
            }}
            // defaultValue={JSON.stringify(params.group_a)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="customerName"
            label="Customer Name"
            type="text"
            fullWidth
            multiline
            onBlur={event => params = {
                ...params,
                customer_name: event.target.value
            }}
            // defaultValue={JSON.stringify(params.group_a)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="groupA"
            label="Group A Parameters"
            type="text"
            fullWidth
            multiline
            onChange={e => params = {
                ...params,
                attributes: {
                    ...params.attributes,
                    group_a: e.target.value
                }
            }}
            // defaultValue={JSON.stringify(params.group_a)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="groupB"
            label="Group B Parameters"
            type="text"
            fullWidth
            multiline
            onChange={e => params = {
                ...params,
                attributes: {
                    ...params.attributes,
                    group_b: e.target.value
                }
            }}
            // defaultValue={JSON.stringify(params.group_b)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
