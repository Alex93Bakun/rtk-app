import React from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

const ChangeColor = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="color"
                onChange={(e) => {
                    dispatch(changeColor(e.target.value));
                }}
            />
        </div>
    );
};

export default ChangeColor;
