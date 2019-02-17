import React from 'react';

class Homepage extends React.Component {
// const Homepage = () => (
    render(){
    return (
        <div>
        <h2>AAAAAH</h2>
        <h2>{this.props.match.params.id}</h2>
        </div>)
        ;
    }
}

export default(Homepage);