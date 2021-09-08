import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import { url } from '../src/App';

export default function FormDialog({testName, active, attributes, type}) {
  const [open, setOpen] = React.useState(false);

  let params = {
    test_name: testName,
    attributes: {
      customer_name: attributes?.customer_name,
    },
    active,
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    axios.post(type === 1 ? `${url}/new-test` : `${url}/update` , params).then(response => {
      const tests = response.data;

      console.log(params)
    })
  }

  return (
    <div>
      <IconButton aria-label="add" size="small" onClick={handleClickOpen}>
        {type === 1 ? <AddIcon /> : <EditIcon />}
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{type === 1 ? 'Add new test' : 'Edit test'}</DialogTitle>
        <DialogContent>
          {type === 1 ? 
          <><TextField
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
          /></> : null}
          <TextField
            autoFocus
            margin="dense"
            id="groupA"
            label="Group A Parameters"
            type="text"
            fullWidth
            multiline
            defaultValue={JSON.stringify(attributes?.group_a)}
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
            defaultValue={JSON.stringify(attributes?.group_b)}
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
