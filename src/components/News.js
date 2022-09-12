import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        // console.log("constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + ' - WorldToday';
    }

    async UpdateNews(pageNo){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48753e7eee184f03b80ebfddb963ecf2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, page: this.state.page })
    }

    async componentDidMount() {
        this.UpdateNews();
    }

    handlePrevClick = async () => {
        await this.setState({page: this.state.page - 1});
        await this.UpdateNews();
    }

    handleNextClick = async () => {
            await this.setState({page: this.state.page + 1});
            await this.UpdateNews();
    }
    

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{margin: '35px 0px'}}>WorldToday - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row my-6">
                    {!this.state.loading && this.state.articles.map((elem) => {
                        return <div className="col-md-4" key={elem.url}>
                            <NewsItem title={elem.title} description={elem.description} imageUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} source={elem.source.name} color={this.props.color}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
