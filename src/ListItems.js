import React from 'react';
import FlipMove from 'react-flip-move';

import './ListItems.css';

function ListItems(props) {

    const items = props.items;

    const listItems = items.map((item) => {
        return (

            <div className='list-item' key={item.key}>
                <p>
                    <input
                    type="text"
                    id={item.key}
                    value={item.text}
                    onChange={(e) => {
                        props.setUpdated(e.target.value, item.key)
                    }}
                    />
                    <span>
                        <i className='fas fa-trash'
                        onClick={() => props.deleteItem(item.key)}></i>
                    </span>
                </p>
            </div>

        );
    })

    return ( 

        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>

        );
}

export default ListItems;