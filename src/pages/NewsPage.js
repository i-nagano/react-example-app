import React from 'react';
import ResultsNews from '../components/ResultsNews';
import SelectorCategory from '../components/SelectorCategory';
import TitleNews from '../components/TitleNews';
import Header from '../components/Header';

const NewsPage = (props) => {
    return (
        <div>
            <Header />
            <TitleNews />
            <SelectorCategory categoriesJson={props.categoriesJson} setResponse={props.setResponse} category={props.category} setCategory={props.setCategory} getNews={props.getNews} />
            <ResultsNews response={props.response}/>
        </div>
    )
}

export default NewsPage;
