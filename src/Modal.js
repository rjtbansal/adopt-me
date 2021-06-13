import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    //we want our modal div to be able to survive between renders and thats why adding it to a ref
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current); //add our above created ref div to the modalRoot so this will be like <div id="modal"><div></div></div>
    return () => modalRoot.removeChild(elRef.current); //during cleanup we just remove that inner div so it will look like <div id="modal"></div>. This is to avoid memory leaks when creating modals
  }, []);

  return createPortal(<div>{children}</div>, elRef.current); //this is taking children and rendering it within our DOM element elRef.current which is <div><div>{ children }</div></div>
}

export default Modal;