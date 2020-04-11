import React, { useEffect, useRef, useCallback } from "react";
import { useNode, useEditor } from "@craftjs/core";

import ReactDOM from "react-dom";

import "./RenderNode.scss";

export const RenderNode = ({ render }) => {
  const { actions, query, connectors } = useEditor();
  const {
    id,
    isActive,
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isActive: node.events.selected,
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
  }));

  const {
    query: { node },
  } = useEditor();
  const isRoot = node(id).isRoot();

  const currentRef = useRef();

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document
      .querySelector(".craftjs-renderer")
      .addEventListener("scroll", scroll);

    return () => {
      document
        .querySelector(".craftjs-renderer")
        .removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <div>
      {isActive && !isRoot
        ? ReactDOM.createPortal(
            <div
              ref={currentRef}
              className="render__options"
              style={{
                left: getPos(dom).left,
                top: `${dom.offsetTop - 19}px`,
                zIndex: 9999,
              }}
            >
              <span className="render__icons">{name}</span>
              {moveable ? (
                <div className="render__icons" ref={drag}>
                  <img src="/icons/move.svg" alt="" />
                </div>
              ) : null}
              {deletable ? (
                <div
                  className="render__icons "
                  onClick={(e) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <img src="/icons/delete.svg" alt="" />
                </div>
              ) : null}
            </div>,

            document.body
          )
        : null}
      {render}
    </div>
  );
};
