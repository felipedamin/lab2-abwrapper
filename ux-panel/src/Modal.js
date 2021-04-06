import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { url } from '../src/App';

export default function FormDialog({attributes}) {
  const [open, setOpen] = React.useState(false);

  let params = {}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    axios.post(`${url}/new-test`, params).then(response => {
      const tests = response.data;

      console.log(params)
    })
  }

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
                active: true
            }}
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
                mobileOnly: false
            }}
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
                attributes: {
                    ...params.attributes,
                    customer_name: event.target.value,
                }
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="groupA"
            label="Group A Parameters"
            type="text"
            fullWidth
            multiline
            onBlur={e => params = {
                ...params,
                attributes: {
                    ...params.attributes,
                    group_a: JSON.parse(e.target.value)
                }
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="groupB"
            label="Group B Parameters"
            type="text"
            fullWidth
            multiline
            onBlur={e => params = {
                ...params,
                attributes: {
                    ...params.attributes,
                    group_b: JSON.parse(e.target.value)
                }
            }}
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
