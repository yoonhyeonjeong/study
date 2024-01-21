import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import App from './App'
import './app.css'
import Post from './component/Post';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/post/:id">
                    <Post />
                </Route>Ï
            </Switch>
        </Router>
    </React.StrictMode>,
)