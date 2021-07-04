import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
const LazyAlbums = React.lazy(() => import("./Pages/Albums"));
const LazySingleAlbum = React.lazy(() => import("./Pages/SingleAlbum"));
function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route exact path="/" component={LazyAlbums} />
          <Route exact path="/album/:id" component={LazySingleAlbum} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
