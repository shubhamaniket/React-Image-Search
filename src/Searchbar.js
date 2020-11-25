import React from 'react';

class Searchbar extends React.Component{
    state = {
        term : ''
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.searchTerm(this.state.term);
    }
    render(){
        return(
            <div className="ui segment">
                <div className="ui form">
                <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input  
                        type="text"
                        value={this.state.term} 
                        onChange={(e)=>this.setState({term : e.target.value})}
                    />
                </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Searchbar;