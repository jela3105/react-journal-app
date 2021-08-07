import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLooged, setIsLooged] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLooged(true);
        dispatch(startLoadingNotes(user.uid));
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
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLooged}
          />
          <PrivateRoute
            exact
            isAuthenticated={isLooged}
            component={JournalScreen}
            path="/"
          />
          <Redirect to="auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
