import React from 'react';

export const AvatarImage = ({ eyes, nose, mouth, color }) => (
    <img src={`http://api.adorable.io/avatars/face/${eyes}/${nose}/${mouth}/${color.substring(1, 7)}`}
        alt="Aaabaaadaaar!" />
);
