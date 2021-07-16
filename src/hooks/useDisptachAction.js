import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useDisptachAction(actions) {
  const dispatch = useDispatch();

  const [dispatchAction, setDispatchAction] = useState({});

  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      setDispatchAction((preAction) => {
        preAction[key] = (...args) => dispatch(actions[key](...args));
        return preAction;
      });
    });
  }, []);

  return dispatchAction;
}