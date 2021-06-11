import { useEffect, useRef, FunctionComponent, MutableRefObject } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

//typescript we specifying what type of component our Modal is. Its a FunctionComponent
const Modal: FunctionComponent = ({ children }) => {
  //below we are specifying that our elRef is a generic of type MutableRefObject which can either be a div or null
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null); //initialized as null
  if (!elRef.current) {
    //we want our modal div to be able to survive between renders and thats why adding it to a ref
    elRef.current = document.createElement("div"); //now elRef becomes a div
  }

  useEffect(() => {
    /**
     * Power of TS: try removing the if statement below and notice the errors. TS will complain about modalRoot or if elRef is null so below condition handles that scenario
     */
    if (!modalRoot || !elRef.current) {
      return;
    }

    modalRoot.appendChild(elRef.current); //add our above created ref div to the modalRoot so this will be like <div id="modal"><div></div></div>
    return () => {
      //here again TS will complain about elRef being null during cleanup so we handle that case in if condition.
      if (elRef.current) {
        modalRoot.removeChild(elRef.current); //during cleanup we just remove that inner div so it will look like <div id="modal"></div>. This is to avoid memory leaks when creating modals
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current); //this is taking children and rendering it within our DOM element elRef.current which is <div><div>{ children }</div></div>
};

export default Modal;
