import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./redux.css";
import { Navbar } from "./app/Navbar";
import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'


function ThunkParent() {

  // useEffect(() => {
  //   fetch('/fakeApi/users').then(res => res.json()).then(res => {
  //     console.log("From Thunk parent",res)
  //   })   
  // }, [])


  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />

          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default ThunkParent;
