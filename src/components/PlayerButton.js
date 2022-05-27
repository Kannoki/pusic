import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import color from '../misc/color';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const PlayerButton = props => {

    const { iconType, size = 40, iconColor = color.FONT, onPress } = props;


    const getIconName = type => {
        switch (type) {
            case 'PLAY':
                return 'pausecircle';
            case 'PAUSE':
                return 'playcircleo';
            case 'NEXT':
                return 'forward';
            case 'PREV':
                return 'banckward';
            case 'SHUF':
                return 'fa-solid fa-shuffle';
            case 'FLOW':
                return 'double-arrow';
            case 'LOOP':
                return 'loop';
            case 'CONT':
                return 
            

        }
    };
    return (
        <AntDesign
            {...props}
            onPress={onPress}
            name={getIconName(iconType)}
            size={size}
            color={iconColor}
        />
    );
};

export default PlayerButton;
