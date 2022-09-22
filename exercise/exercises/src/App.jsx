import React from 'react';
import colorList from './data';

// para criar o estado, precisamos declarar o constructor depois da class. depois
// vc ja tem acesso à propriedades como props, state, render etc

class App extends React.Component {

  constructor() {
    super()

    this.setFilterValue = this.setFilterValue.bind(this); // criando o bind aqui

    this.state = {
        filter: 'matheus'
    }
}

    setFilterValue(event) { // se esta função for uma arrow func. ñ é necessário criar o bind
     this.setState({
        filter: event.target.value // precisa fazer o bind no constructor para funcionar 
     });
    }

  render() {

    const { filter } = this.state;

    const filteredColors = colorList.filter((color) => { // criação da funçao que filtrará o valor digitado no input com o valor que tem na propriedade filter
        const colorItem = color.color;
        return colorItem.includes(filter)
    });

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