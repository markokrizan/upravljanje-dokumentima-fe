import React from 'react';

import { capitalize } from '../../util/helpers';

export default function Sort({ sortItems, handleChangeSort }) {
    return (
        <div className="form-group">
            <select className="form-control" onChange={e => handleChangeSort(JSON.parse(e.target.value))}>
                <option value="">Sort by</option>
                {sortItems && sortItems.map(sortItem => <option value={JSON.stringify(sortItem)}>{capitalize(sortItem.fieldName)} - {sortItem.fieldDirection}</option>)}
            </select>
        </div>
    )
}
