import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageList from './ImageList';


class App extends React.Component{
    state = {
        images : []
    }

    submitSearch = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query : term},
            headers: {
                'Authorization' : 'Client-ID 3mnwJ7GrgeoDiTu1F_hMaQdzJY-DO_-0myrWqbQS11w'
            }
        });
        this.setState({
            images : response.data.results
        });
        console.log(this.state.images)
    }
    render(){
        return(
            <div className="ui container" style={{marginTop: '15px'}}>
                <Searchbar searchTerm={this.submitSearch}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));
