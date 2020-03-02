import React from 'react';
import { render } from "@testing-library/react";
import State from "./Clock";
import Todos from './components/Todos';

//JSX pass the function as the eventhandler not ths string
//Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.
//synthetic event(cross browser wrapper) so that they have the same properties across different  browser and platform

class HandlingEvent extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: 'HeLLO WORLD'

            },
            {
                id: 2,
                title: 'Namaste'

            },
            {
                id: 2,
                title: 'World'

            }
        ]
    }
    render() {
        console.log(this.state.todos);
        return (
            <div>
            <Todos />
            </div>
        );
    }
}
export default HandlingEvent;