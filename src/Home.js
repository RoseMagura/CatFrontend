import React from 'react';

class Home extends React.Component {
    state = {
        allImages: [],
        selectedImages: [],
    };

    componentDidMount() {
        this.fetchAll();
    }

    fetchAll = () => {
        const apiUrl = 'http://localhost:3000/all';
        let imageList = [];
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                data.forEach((element) => {
                    imageList.push(element);
                });
                this.setState({ allImages: imageList });
            })
            .catch((error) => console.error(error));
    };

    displayAll = () => {
        this.setState({ selectedImages: this.state.allImages });
    };

    fetchById = (event) => {
        const id = event.target.value;
        // let id = 5;
        const apiUrl = `http://localhost:3000/id/${id}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ selectedImages: data });
            });
    };
    render() {
        return (
            <div>
                <h1>Cat Pictures</h1>
                <button onClick={this.displayAll}>See All</button>
                <div>
                    <h2>Pick By Title:</h2>
                    <select onChange={this.fetchById}>
                        <option>Select a title</option>
                        {this.state.allImages.map((i) => (
                            <option value={i.id} key={i.id}>
                                {i.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div id="image-grid">
                    {this.state.selectedImages.map((image) => (
                        <img key={image.id} src={image.url} alt={image.title} />
                    ))}
                </div>

            </div>
        );
    }
}

export default Home;
