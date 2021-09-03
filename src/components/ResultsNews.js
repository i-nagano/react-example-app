import React from 'react'

const ResultsNews = (props) => {
    return (
        <div>
        {props.response.map((singleData, index) =>
            <div key={index} className="card__news" styles="max-width: 20rem">
                <div className="card__news__body">
                    <h3 className="card__news__title">{singleData.title}</h3>
                    <p className="card__news__excerpt">{singleData.description}</p>
                    <p className="card__news__excerpt"><a href={singleData.url} target="_blank" rel="noopener noreferrer">{singleData.url}</a></p>
                    <p className="card__news__excerpt">
                        <span>{singleData.author}</span> | 
                        <span> {singleData.source.name}</span> | 
                        <span> {singleData.publishedAt.slice(0,10)}</span>
                    </p>
                    <img className="card__news__img" src={singleData.urlToImage} alt={singleData.title} />
                </div>
                <br />
            </div>
        )}
    </div>
    )
}

export default ResultsNews;
