import React from 'react';

const SelectorCategory = (props) => {
    return (
        <div>
            <select onChange={(e) => props.setCategory(e.target.value)}>
                <option>カテゴリを選択</option>
                {props.categoriesJson.map((category, index) =>
                    <option key={index} name={category.categoryName} value={category.categoryId}>{category.categoryName}</option>
                )}
            </select>
            <button onClick={props.getNews} >Get News</button>
        </div>
    )
}

export default SelectorCategory;
