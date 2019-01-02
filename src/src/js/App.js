import React from 'react';
import Logo from '../components/logo.jsx';
import MainMenu from '../components/menu.jsx';
import News from '../components/news.jsx';
import GoodPractices from '../components/goodpractices.jsx';
import Documentation from '../components/documentation.jsx';
import '../css/App.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import {configureAnchors} from 'react-scrollable-anchor'

configureAnchors({offset: 40, scrollDuration: 400});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
        };
    };

    render() {
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
                        <h1>Co nowego?</h1>
                        <article>
                            <News icons={'fab fa-react fa-5x'} title={'React w wersji 16.7'} content={"React"}
                                  webpage={"https://reactjs.org/"}/>
                            <News icons={'fab fa-npm fa-5x'} title={'Npm w wersji 6.5.0'} content={"Npm"}
                                  webpage={"https://www.npmjs.com/"}/>
                            <News icons={'fab fa-node fa-5x'} title={'Node.js w wersji 10.15.0'} content={"Node"}
                                  webpage={"https://nodejs.org/en/"}/>
                            <News icons={'fab fa-codepen fa-5x'} title={'Webpack w wersji 4.27.1'} content={"Webpack"}
                                  webpage={"https://webpack.js.org/"}/>
                            <News icons={'fab fa-git fa-5x'} title={'Git w wersji 2.20.1'} content={"Git"}
                                  webpage={"https://git-scm.com/"}/>
                            <News icons={'fab fa-sass fa-5x'} title={'Sass w wersji 1.15.2'} content={"Sass"}
                                  webpage={"https://sass-lang.com/"}/>
                        </article>
                    </section>
                </ScrollableAnchor>

                <ScrollableAnchor id={'section2'}>
                    <section className='goodPractices-container'>
                        <h1>Dobre praktyki</h1>
                        <article>
                            <GoodPractices title={'Typowanie'}
                                           content={'W Javascript nie ma wymogu określania wprost typów zmiennych (typ determinuje ich użycie - tak zwany "duck typing"). ' +
                                           'Niemniej w złożonych projektach warto rozważyć takie "obostrzenie". Konsekwentne stosowanie typów jest możliwe (a wymuszane rzez użycie Flow). ' +
                                           'Poniższy przykład został napisany zgodnie z tymi regułami. Pokazuje on przy okazji ponownie powiązanie stanów z własnościami. Do renderowania ' +
                                           'komponentów używa się własności. Natomiast dynamika zmian jest związana ze zmianami stanów. Na podstawie stanu wylicza się nowe wartości ' +
                                           'własności (props) – ale nie poprzez podstawienie (zmianę zmiennych), tylko powstanie komponentów wizualnych z aktualnymi własnościami.'}
                                           code={'import React, {Component} from "react";\n' +
                                           '\n' +
                                           'class Przycisk extends Component {\n' +
                                           '\n' +
                                           '    props : {\n' +
                                           '        opis : ?string,\n' +
                                           '        licznik : ?number,\n' +
                                           '        akcja : ?string\n' +
                                           '    };\n' +
                                           '\n' +
                                           '    render() {\n' +
                                           '        return (\n' +
                                           '        <button\n' +
                                           '        onClick={this.props.akcja}>\n' +
                                           '          Kliknij: {this.props.opis} [{this.props.licznik}] \n' +
                                           '        </button>\n' +
                                           '        );\n' +
                                           '    }\n' +
                                           '}\n' +
                                           '\n' +
                                           'class App extends Component {\n' +
                                           '    state: {\n' +
                                           '        licznik: ?number,\n' +
                                           '    };\n' +
                                           '\n' +
                                           '    constructor(props: {}) {\n' +
                                           '        super(props);\n' +
                                           '        this.state = {\n' +
                                           '            licznik: 1,\n' +
                                           '        };\n' +
                                           '    }\n' +
                                           '\n' +
                                           '    klikniecie() {\n' +
                                           '        this.setState(\n' +
                                           '        (prevState, props) => ({\n' +
                                           '            licznik: prevState.licznik + 1\n' +
                                           '        }));\n' +
                                           '    }\n' +
                                           '\n' +
                                           '    render() {\n' +
                                           '        return (\n' +
                                           '          <div className="App">\n' +
                                           '            <Przycisk opis="licznik"\n' +
                                           '            licznik={this.state.licznik} akcja={() => this.klikniecie()} />\n' +
                                           '          </div>\n' +
                                           '        );\n' +
                                           '    }\n' +
                                           '}\n' +
                                           'export default App;'
                                           }/>

                            <GoodPractices title={'Wyrażenia'}
                                           content={'Wyrażenia JavaScript w definicji własności etc... podajemy w nawiasach klamrowych {}.'}
                                           code={'<MyComponent foo={1 + 2 + 3 + 4} />'
                                           }/>

                            <GoodPractices title={'Łańcuchy znaków'}
                                           content={'Łańcuchy znaków mogą występować jako wartość własności - bez {}.'}
                                           code={'<MyComponent message="hello world" />\n' +
                                           '\n' +
                                           '<MyComponent message={\'hello world\'} />\n' +
                                           '\n' +
                                           '<MyComponent message="<3" />\n' +
                                           '\n' +
                                           '<MyComponent message={\'<3\'} />'
                                           }/>

                            <GoodPractices title={'Własności'}
                                           content={'Własność domyślnie otrzymuje wartość ' +
                                           <strong>true</strong> + '.'}
                                           code={'<MyTextBox autocomplete />\n' +
                                           '\n' +
                                           '<MyTextBox autocomplete={true}/> //to jest równoważne z powyższym zapisem'
                                           }/>

                            <GoodPractices title={'Operator Spread'}
                                           content={'W definicji własnosci można używać operatora spread'}
                                           code={'function App1() {\n' +
                                           '   return <Greeting firstName="Ben" lastName="Hector" />;\n' +
                                           '}\n' +
                                           'function App2() {\n' +
                                           '   const props = {firstName: \'Ben\', lastName: \'Hector\'};\n' +
                                           'return <Greeting {...props} />;\n' +
                                           '}'
                                           }/>

                            <GoodPractices title={'Tablice w komponencie'}
                                           content={'Komponent React może zwracać tablicę elementów'}
                                           code={'render() {\n' +
                                           '// No need to wrap list items in an extra element!\n' +
                                           'return [\n' +
                                           '// Don\'t forget the keys :)\n' +
                                           '   <li key="A">First item</li>,\n' +
                                           '   <li key="B">Second item</li>,\n' +
                                           '   <li key="C">Third item</li>,\n' +
                                           '];\n' +
                                           '}'
                                           }/>

                            <GoodPractices title={'Definicja potomka'}
                                           content={'W definicji potomka można podać wyrażenie JavaScript ujęte w nawiasy {}.'}
                                           code={'<MyComponent>foo</MyComponent>\n' +
                                           '<MyComponent>{\'foo\'}</MyComponent>'
                                           }/>
                            <GoodPractices title={'Funkcja w definicji potomka'}
                                           content={'Można podać funkcję w definicji potomka.'}
                                           code={'// Calls the children callback numTimes to produce a repeated component\n' +
                                           'function Repeat(props) {\n' +
                                           '   let items = [];\n' +
                                           '   for (let i = 0; i < props.numTimes; i++) {\n' +
                                           '      items.push(props.children(i));\n' +
                                           '   }\n' +
                                           '   return <div>{items}</div>;\n' +
                                           '}\n' +
                                           'function ListOfTenThings() {\n' +
                                           '   return (\n' +
                                           '   <Repeat numTimes={10}>\n' +
                                           '      {(index) =><div key={index}>This is item {index} in the list</div>}\n' +
                                           '   </Repeat>\n' +
                                           '   );\n' +
                                           '}'
                                           }/>

                            <GoodPractices title={'Ignorowane typy danych'}
                                           content={'Booleans, Null, i Undefined są ignorowane'}
                                           code={'<div />\n' +
                                           '<div></div>\n' +
                                           '<div>{false}</div>\n' +
                                           '<div>{null}</div>\n' +
                                           '<div>{undefined}</div>\n' +
                                           '<div>{true}</div>'
                                           }/>

                        </article>
                    </section>
                </ScrollableAnchor>

                <ScrollableAnchor id={'section3'}>
                    <section className="documentation-container">
                        <h1>Dokumentacja</h1>

                        <Documentation title={'react.js'}
                                       content={'Reactowa biblioteka, zawierająca wszystkie koncepty i funkcje Reacta'}
                                       code={'import React from "react";'}/>

                            <Documentation title={'react-dom.js'}
                                           content={'Reactowa biblioteka, umożliwiająca renderowanie elementów w przeglądarce'}
                                           code={'import ReactDOM from "react-dom";'}/>

                            <Documentation title={'ReactDOM.render(...)'}
                                           content={'Metoda wstawiająca do rzeczywistego drzewa DOM elementy, które chcesz wyświetlić'}
                                           code={'ReactDOM.render(\n' +
                                           '  <div>\n' +
                                           '    <h1>Witaj, świecie!</h1>\n' +
                                           '    <h2>Jestem ambitna/y, więc przerabiam kurs React.js!</h2>\n' +
                                           '  </div>,\n' +
                                           '  document.getElementById(\'app\')\n' +
                                           ');'}/>

                            <Documentation title={'React.createElement(...)'}
                                           content={'Metoda, która zwraca obiekt wirtualnego drzewa DOM'}
                                           code={'React.createElement("span", {id: "test"}, "Hello, World!")'}/>

                            <Documentation title={'React.Component'}
                                           content={'Klasa rozszerzająca samą siebie oferując wszystkie funkcjonalności oferowane przez React'}
                                           code={'class GoodPractices extends React.Component {}'}/>

                            <Documentation title={'Props'}
                                           content={'To sposób przekazywania informacji komponentom, w ten sam sposób, jak atrybuty przekazywane są elementom'}
                                           code={'<Hi\tname="Zygmunt"\t/>'}/>

                            <Documentation title={'Pure function'}
                                           content={'Funkcja, zwracająca te same dane przy przyjęciu tych samych parametrów. Nie zawiera skutków ubocznych'}
                                           code={'let data = {\n' +
                                           '\t\ta:\t1\n' +
                                           '}\n' +
                                           'function firstAdd(obj){\n' +
                                           '\t\tlet b = 2;\n' +
                                           '\t\tobj.a = obj.a + b;\n' +
                                           '\t\treturn obj.a;\n' +
                                           '}'}/>

                            <Documentation title={'State'}
                                           content={'Obiekt, przechowujący aktualny, wewnętrzny stan danego komponentu'}
                                           code={'constructor(props){\n' +
                                           '\t\tsuper(props);\n' +
                                           '\t\tthis.state = {\n' +
                                           '\t\t\t\t//Dowolne\telementy,\tdo\tprzechowania\n' +
                                           '\t\t};\n' +
                                           '}'}/>

                            <Documentation title={'componentWillMount(...)'}
                                           content={'Metoda, uruchamiana tuż przed zamontowaniem. Nie powinna zmieniać stanu wewnętrznego'}
                                           code={'componentWillMount() {\n' +
                                           '    let mode;\n' +
                                           '    if (this.props.age > 70) {\n' +
                                           '      mode = \'old\';\n' +
                                           '    } else if (this.props.age < 18) {\n' +
                                           '      mode = \'young\';\n' +
                                           '    } else {\n' +
                                           '      mode = \'middle\';\n' +
                                           '    }\n' +
                                           '    this.setState({ mode });\n' +
                                           '  }'}/>

                            <Documentation title={'componentDidMount(...)'}
                                           content={'Metoda, uruchamiana tuż po stworzeniu realnych elementów w realnym drzewie DOM'}
                                           code={'componentDidMount(){\n' +
                                           '\tthis.intervalId = setInterval(() => {\n' +
                                           '\t\t\t\t//Tu będziemy aktualizowali state\n' +
                                           '\t}, 1000);\n' +
                                           '}'}/>
                    </section>
                </ScrollableAnchor>
            </>
        );
    }
}

export default App;
