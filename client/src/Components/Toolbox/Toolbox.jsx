import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { Canvas, useEditor } from "@craftjs/core";
import {
  Container,
  Button,
  Card,
  Text,
  Header1,
  Select,
  ImageCarousel,
} from "../../dryComponents";

import "./Toolbox.scss";

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div className="toolbox">
      <div>Drag to add</div>
      <div>
        <button
          ref={(ref) =>
            connectors.create(ref, <Button text="Click me" size="small" />)
          }
          variant="contained"
        >
          Button
        </button>
      </div>
      <div>
        <button
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
          variant="contained"
        >
          Text
        </button>
      </div>
      <div>
        <button
          ref={(ref) =>
            connectors.create(ref, <Canvas is={Container} padding={20} />)
          }
          variant="contained"
        >
          Container
        </button>
      </div>
      <div>
        <button
          ref={(ref) =>
            connectors.create(ref, <Canvas is={Header1} padding={20} />)
          }
          variant="contained"
        >
          Header1
        </button>
      </div>
      <div>
        <button
          ref={(ref) =>
            connectors.create(ref, <Canvas is={ImageCarousel} padding={20} />)
          }
          variant="contained"
        >
          ImageCarousel
        </button>
      </div>
      <div>
        <button
          ref={(ref) =>
            connectors.create(ref, <Canvas is={Card} padding={20} />)
          }
          variant="contained"
        >
          Card
        </button>
      </div>
      <div>
        <button
          ref={(ref) =>
            connectors.create(ref, <Canvas is={Select} padding={20} />)
          }
          variant="contained"
        >
          Select
        </button>
      </div>
    </div>
  );
};
