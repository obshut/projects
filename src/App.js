import Header from "./component/header/header";
import React from "react";
import Open from "./component/open/open";
import Footer from "./component/footer/footer";
import Card from "./component/card/card";
import Slider from "./component/slider/slider";
import Team from "./component/team/team";
import Video from "./component/video/video";
import Application from "./component/application/application";
import Reviews from "./component/reviews/reviews";
import {Switch} from "react-router-dom";
import {Route} from "react-router";
import Services from "./component/services/services";
import Trener from "./component/trener/trener";
import Questions from "./component/questions/questions";
import Benefit from "./component/benefit/benefit";

const App = () => {

    return (
        <>
            <Header/>

            {/*<Router history={createBrowserHistory()}>*/}
            <Switch>
                <Route exact path={'/'}>
                    <Open/>
                </Route>
                <Route path={'/home'}>
                    <Open/>
                    <Slider/>
                    <Team/>
                    <Video/>
                    <Questions/>
                    <Card/>
                    <Application/>
                    <Benefit/>
                    <Reviews/>
                </Route>

                <Route path={'/services'}>
                    <Services></Services>
                </Route>
                <Route path={'/trainer'}>
                    <Trener/>
                    <Slider/>
                    <Video/>
                    <Benefit/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;