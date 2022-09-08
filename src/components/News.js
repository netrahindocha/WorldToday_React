import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor() {
        super();
        // console.log("constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=48753e7eee184f03b80ebfddb963ecf2&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <div className='container my-3'>
                <h1>WorldToday - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((elem) => {
                        return <div className="col-md-4"  key={elem.url}>
                            <NewsItem title={elem.title?elem.title.slice(0, 45):""} description={elem.description?elem.description.slice(0, 88):""} imageUrl={elem.urlToImage} newsUrl={elem.url} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News
