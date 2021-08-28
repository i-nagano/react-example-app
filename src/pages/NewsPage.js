import React from 'react';
import ResultsNews from '../components/ResultsNews';
import SelectorCategory from '../components/SelectorCategory';
import Title from '../components/Title';
import Header from '../components/Header';

const NewsPage = (props) => {
    return (
        <div>
            <Header />
            <Title titleNews={props.titleNews} />
            <SelectorCategory categoriesJson={props.categoriesJson} setResponse={props.setResponse} category={props.category} setCategory={props.setCategory} getNews={props.getNews} />
            <ResultsNews response={props.response} />
        </div>
    )
}

export default NewsPage;
