import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useDisptachActions(actions) {
  const dispatch = useDispatch();

  const [dispatchActions, setDispatchActions] = useState({});

  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      setDispatchActions((preActions) => {
        preActions[key] = (...args) => dispatch(actions[key](...args));
        return preActions;
      });
    });
  }, []);

  return dispatchActions;
}