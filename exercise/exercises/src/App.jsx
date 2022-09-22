import React from 'react';
import colorList from './data';

// para criar o estado, precisamos declarar o constructor depois da class. depois
// vc ja tem acesso à propriedades como props, state, render etc

class App extends React.Component {

  constructor() {
    super()
    this.state = {
        filter: 'matheus'
    }
}

    setFilterValue(event) {
      return (event.target.value);
    }

  render() {

    const createListLi = colorList.map((color) => {
        return <li key={color.number}>
            { color.color } o numero é { `${color.number}` } 
        </li>
    })
    
// precisa chamar this.function pq ela nao reconhece a função fora do render
// o onChange ja passa automaticamente o evento

    return(
        <main> 
            <input onChange={this.setFilterValue} type="text"  /> 
            <ul>
                {createListLi}
            </ul>
        </main>
    )
  }
}

export default App;