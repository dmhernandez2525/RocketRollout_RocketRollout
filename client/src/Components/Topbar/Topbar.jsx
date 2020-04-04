import React, { useState } from "react";
import {
  FormControlLabel,
  Switch,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from "copy-to-clipboard";

import "./Topbar.scss";

export const Topbar = ({ onLoadState }) => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();

  const [stateToLoad, setStateToLoad] = useState(null);

  return (
    <div className="topbar">
      <div>
        <FormControlLabel
          className="enable-disable-toggle"
          control={
            <Switch
              checked={enabled}
              onChange={(_, value) =>
                actions.setOptions((options) => (options.enabled = value))
              }
            />
          }
          label="Enable"
        />
      </div>
      <div>
        <MaterialButton
          className="copy-state-btn"
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => {
            const json = query.serialize();
            copy(lz.encodeBase64(lz.compress(json)));
            setSnackbarMessage("State copied to clipboard");
          }}
          style={{ marginRight: "10px" }}
        >
          Copy current state
        </MaterialButton>
        <MaterialButton
          className="load-state-btn"
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => setDialogOpen(true)}
        >
          Load
        </MaterialButton>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
          <DialogContent>
            <TextField
              multiline
              fullWidth
              placeholder='Paste the contents that was copied from the "Copy Current State" button'
              size="small"
              value={stateToLoad || ""}
              onChange={(e) => setStateToLoad(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <MaterialButton
              onClick={() => setDialogOpen(false)}
              color="primary"
            >
              Cancel
            </MaterialButton>
            <MaterialButton
              onClick={() => {
                setDialogOpen(false);
                const json = lz.decompress(lz.decodeBase64(stateToLoad));
                actions.deserialize(json);
                setSnackbarMessage("State loaded");
              }}
              color="primary"
              autoFocus
            >
              Load
            </MaterialButton>
          </DialogActions>
        </Dialog>
        <Snackbar
          autoHideDuration={1000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={!!snackbarMessage}
          onClose={() => setSnackbarMessage(null)}
          message={<span>{snackbarMessage}</span>}
        />
      </div>
    </div>
  );
};
