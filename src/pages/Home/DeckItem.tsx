import React, {FC} from 'react';
import {IDeck} from "../../types/types";

interface IDeckItemProps {
    deck: IDeck
}

const DeckItem: FC<IDeckItemProps> = (props) => {

    const {
        name,
        description
    } = props.deck

    return (
        <div className={'list-item'}>
            <div className="list-item-name">
                {name}
            </div>
            <div className="list-item-description">
                {description}
            </div>
        </div>
    );
};

export default DeckItem;