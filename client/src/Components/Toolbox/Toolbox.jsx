import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { Canvas, useEditor } from "@craftjs/core";
import { Container, Button, Card, Text } from "../../dryComponents";

import "./Toolbox.scss";

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div className="toolbox">
      <div>Drag to add</div>
      <div>
        <MaterialButton
          ref={(ref) =>
            connectors.create(ref, <Button text="Click me" size="small" />)
          }
          variant="contained"
        >
          Button
        </MaterialButton>
      </div>
      <div>
        <MaterialButton
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
          variant="contained"
        >
          Text
        </MaterialButton>
      </div>
      <div>
        <MaterialButton
          ref={(ref) =>
            connectors.create(ref, <Canvas is={Container} padding={20} />)
          }
          variant="contained"
        >
          Container
        </MaterialButton>
      </div>
      <div>
        <MaterialButton
          ref={(ref) =>
            connectors.create(ref, <Canvas is={Card} padding={20} />)
          }
          variant="contained"
        >
          Card
        </MaterialButton>
      </div>
    </div>
  );
};
