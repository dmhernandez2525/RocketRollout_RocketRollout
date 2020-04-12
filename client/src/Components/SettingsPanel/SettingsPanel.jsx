import React from "react";
import { useEditor } from "@craftjs/core";

import "./SettingsPanel.scss";

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  return selected ? (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <span>Selected Component: </span>
                <span> {selected.name}</span>
              </div>
            </div>
          </div>
        </div>
        {selected.settings && React.createElement(selected.settings)}
        {selected.isDeletable ? (
          <button
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  ) : null;
};
