import React from 'react';

class Home extends React.Component {
    state = {
        images: [],
    };
    fetchAll = () => {
        const apiUrl = 'http://localhost:3000/all';
        let imageList = [];
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                data.forEach((element) => {
                    imageList.push(element);
                });
                this.setState({ images: imageList });
            });
    };

    fetchById = () => {
        let id = 5;
        const apiUrl = `http://localhost:3000/id/${id}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ images: data });
            });
    };
    render() {
        return (
            <div>
                <h1>Cat Pictures</h1>
                <button onClick={this.fetchAll}>See All</button>
                <button onClick={this.fetchById}>Pick By Id</button>
                {this.state.images.map((image) => (
                    <img key={image.id} src={image.url} alt={image.title} />
                ))}
            </div>
        );
    }
}

export default Home;
