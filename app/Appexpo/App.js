import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home';
import Contatos from './screens/contato'
import Cursos from './screens/cursos'

const Stack = createStackNavigator({
  TelaInicial : {
    navigationOptions : {
      header : null
    },
    screen: Home
  },
  Cursos : {
    navigationOptions : {
      title: 'Cursos'
    },
    screen: Cursos
  },
  Contatos : {
    navigationOptions : {
      title: 'Contatos'
    },
    screen: Contatos
  },
})

export default createAppContainer(Stack);