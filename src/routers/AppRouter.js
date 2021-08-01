import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from "../actions/auth";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLooged, setIsLooged] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLooged(true);
      } else {
        setIsLooged(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLooged]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" exact component={JournalScreen} />
          <Redirect to="auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
