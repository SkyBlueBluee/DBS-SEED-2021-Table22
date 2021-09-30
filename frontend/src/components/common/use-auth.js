import React, {
    useContext,
    createContext,
    useState
} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
  } from "react-router-dom";

const authContext = createContext();

export function useAuth() {
    return useContext(authContext);
}

export function ProvideAuth({ children }) {
    let auth = useProvideAuth();

    return (<authContext.Provider value={auth}>
        {children}
    </authContext.Provider>)
}

function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    let [isLoggedIn, setIsLoggedIn] = useState(null);
    let landingPath = useLocation();
    async function checkLoggedIn() {
        if (auth.user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }
    React.useEffect(checkLoggedIn, []);

    if (isLoggedIn === null) return null;

    return (
        <Route
            {...rest}
            render={() =>
                isLoggedin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: landingPath.pathname },
                        }}
                    />
                )
            }
        />
    );
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    async function signIn() {
        // do some signin here
        setUser("User is Set");
        console.log("user set done");
        return "User";
    };

    async function signOut(cb) {
        // do signout here
        setUser(null);
        return "";
    };

    return {
        user,
        signIn,
        signOut
    };
}
