import React from 'react'

const ResultsNews = (props) => {
    return (
        <div>
        {props.response.map((singleData, index) =>
            <div key = {index} className = "card bg-light mb-3" styles = "max-width: 20rem" >
                <div className="card-body">
                    <h3 className="card-title">{singleData.title}</h3>
                    <p className="card-text">{singleData.description}</p>
                    <p className="card-text"><a href={singleData.url}>{singleData.url}</a></p>
                    <p className="card-text">
                        <span>{singleData.author}</span> | 
                        <span> {singleData.source.name}</span> | 
                        <span> {singleData.publishedAt.slice(0,10)}</span>
                    </p>
                    <img className="card-img-bottom" src={singleData.urlToImage} alt={singleData.title} width="400" height="225" />
                </div>
                <br />
            </div>
        )}
    </div>
    )
}

export default ResultsNews;
