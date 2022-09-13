import React, { useEffect } from 'react'
import { useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

let News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = props.category.charAt(0).toUpperCase() + props.category.slice(1) + ' - WorldToday';
        updateNews();
        // eslint-disable-next-line
    }, [])

    let fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

    return (
        <>
            <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>WorldToday - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row my-6">
                        {articles.map((elem) => {
                            return <div className="col-md-4" key={elem.url}>
                                <NewsItem title={elem.title} description={elem.description} imageUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} source={elem.source.name} color={props.color} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
