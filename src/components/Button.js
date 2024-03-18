import React from 'react';

function Button({name}) {
    return (
        <div>
            <button className="px-5 py-2 rounded-lg m-2 bg-gray-100">{name}</button>
        </div>
    );
}

export default Button;