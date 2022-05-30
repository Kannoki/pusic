import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import color from '../misc/color';
import ReactDOM from 'react-dom'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const PlayerButton = props => {

    const { iconType, size = 40, iconColor = color.FONT, onPress } = props;


    const getIconName = type => {
        switch (type) {
            case 'PLAY':
                return 'pause';
            case 'PAUSE':
                return 'play-arrow';
            case 'NEXT':
                return 'skip-next';
            case 'PREV':
                return 'skip-previous';
            case 'SHUF':
                return 'shuffle';
            case 'FLOW':
                return 'double-arrow';
            case 'LOOP':
                return 'loop';
            

        }
    };
    return (
        <MaterialIcons
            {...props}
            onPress={onPress}
            name={getIconName(iconType)}
            size={size}
            color={iconColor}
        />
    );
};

export default PlayerButton;
