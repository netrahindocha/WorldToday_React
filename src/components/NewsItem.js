import React from 'react'

let NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
                    <span className="badge rounded-pill bg-danger"> {source} <span className="visually-hidden">unread messages</span></span>
                </div>
                <img className="card-img-top" alt='' src={!imageUrl ? "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" : imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>

                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
