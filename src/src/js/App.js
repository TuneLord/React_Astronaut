import React from 'react';
import Logo from '../components/logo.jsx';
import MainMenu from '../components/menu.jsx';
import News from '../components/news.jsx';
import GoodPractices from '../components/goodpractices.jsx';
import Documentation from '../components/documentation.jsx';
import ScrollableAnchor from 'react-scrollable-anchor'
import {configureAnchors} from 'react-scrollable-anchor'
import * as firebase from "firebase";
import 'firebase/firestore';
import '../css/App.css';

/* Configure anchors for menu */
configureAnchors({offset: 40, scrollDuration: 400});
let news = [];
let goodPractices = [];
let documentation = [];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            databaseState: null,
            news: null,
            goodPractices: null,
            documentation: null,
        };
    };

    componentWillMount() {
        /* Google Cloud Firestore initializeApp */
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyA6a6gdSjb0F1MP-ihJfguG0Qco_nQrQYc",
                authDomain: "react-astronaut.firebaseapp.com",
                databaseURL: "https://react-astronaut.firebaseio.com",
                storageBucket: "gs://react-astronaut.appspot.com",
                projectId: 'react-astronaut'
            });
        }
        var db = firebase.firestore();

        /* Get data from Firestore */
        const collectionNews = db.collection('database').doc('news');
        const collectionGoodPractices = db.collection('database').doc('goodPractices');
        const collectionDocumentation = db.collection('database').doc('documentation');

        collectionNews.get().then((doc) => {
            if (doc.exists) {
                let data = doc.data();
                this.setState({
                    news: data
                });
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        collectionGoodPractices.get().then((doc) => {
            if (doc.exists) {
                let data = doc.data();
                this.setState({
                    goodPractices: data
                });
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });


        collectionDocumentation.get().then((doc) => {
            if (doc.exists) {
                let data = doc.data();
                this.setState({
                    documentation: data
                });
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

    render() {
        if (this.state.news != null) {
            Object.values(this.state.news).map((element, index) => {
                let displayNews = <News key={index} icons={element.icon} title={element.title} content={element.content}
                                        webpage={element.webpage}/>;
                news.push(displayNews);
            });
        }

        if (this.state.goodPractices != null) {
            Object.values(this.state.goodPractices).map((element, index) => {
                let displayGoodPractices = <GoodPractices key={index} title={element.title} content={element.content} code={element.code}/>;
                goodPractices.push(displayGoodPractices);
            });
        }

        if (this.state.documentation != null) {
            Object.values(this.state.documentation).map((element, index) => {
                let displayDocumentation = <Documentation key={index} title={element.title} content={element.content} code={element.code}/>;
                documentation.push(displayDocumentation);
            });
        }

        /* Delete duplicates */
        let elementsUnique = function (array) {
            let arrSize = array.length / 3;
            if (array === goodPractices) {
                arrSize = array.length / 2;
            }
            else if (array === documentation){
                arrSize = array.length;
            }

            return array.filter(function (item, index) {
                return array.indexOf(item.key) >= index - arrSize;
            });
        };

        let uniqueNews = elementsUnique(news);
        let uniqueGoodPractices = elementsUnique(goodPractices);
        let uniqueDocumentation = elementsUnique(documentation);

        return (
            <>
                <ScrollableAnchor id={"section0"}>
                    <section className="entrance-container">
                        <MainMenu/>
                        <Logo/>
                    </section>
                </ScrollableAnchor>

                <ScrollableAnchor id={'section1'}>
                    <section className="news-container">
                        <h1>Poznaj technologie</h1>
                        <article>
                            {uniqueNews}
                        </article>
                    </section>
                </ScrollableAnchor>

                <ScrollableAnchor id={'section2'}>
                    <section className='goodPractices-container'>
                        <h1>Dobre Reactowe praktyki</h1>
                        <article>
                            {uniqueGoodPractices}
                        </article>
                    </section>
                </ScrollableAnchor>

                <ScrollableAnchor id={'section3'}>
                    <section className="documentation-container">
                        <h1>Reactowa dokumentacja </h1>
                        {uniqueDocumentation}
                    </section>
                </ScrollableAnchor>
            </>
        );
    }
}

export default App;
