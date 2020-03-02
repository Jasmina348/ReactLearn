//Inline If with Logical && Operator 
import React from 'react';
const messages =[
    "HEY","hi","Hello" ];
class InlineIf extends React.Component{

    render(){
        return(
            <div>
                <h1>Hello</h1>
                {messages.length> 0 && 
                <h2>You have {messages.length} messages</h2>}
            </div>
        )
    }
}

export default InlineIf;