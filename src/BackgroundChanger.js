import React, { useState } from 'react';

export default function BackgroundChanger() {


    const [ColorChanged, setIsColorChanged] = useState(false);

    const FuncChanger = () => {
        setIsColorChanged(!ColorChanged);
    };

    return (

        <div style={{ backgroundColor: ColorChanged ? 'Orange' : 'white' , height: '1000px'}}>
            <button onClick={FuncChanger}>change</button>
        </div>

    )
}
