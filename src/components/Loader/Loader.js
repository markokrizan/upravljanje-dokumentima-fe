import React from 'react';

export default function Loader({ isLoading }) {
    if(!isLoading) {
        return null;
    }

    return <label> Loading... </label>
}
