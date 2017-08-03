import React from 'react';
import './index.scss';

const sets = [
    'one',
    'two',
    'base',
    'four',
    'five'
];

const Component = () => (
    <div className="color-scaling">
        <div>
            Base Pallet
        </div>
        <div className="pallet base">
            <div className="color1"></div>
            <div className="color2"></div>
            <div className="color3"></div>
            <div className="color4"></div>
            <div className="color5"></div>
        </div>
        <div>
            Analogous
        </div>
        {sets.map(($_item) => (
            <div className="pallet analogous">
                <div className={'color1 ' + $_item}></div>
                <div className={'color2 ' + $_item}></div>
                <div className={'color3 ' + $_item}></div>
                <div className={'color4 ' + $_item}></div>
                <div className={'color5 ' + $_item}></div>
                <div className={'color6 ' + $_item}></div>
                <div className={'color7 ' + $_item}></div>
            </div>
        ))}
        <div>
            Shades
        </div>
        {sets.map(($_item) => (
            <div className="pallet shades">
                <div className={'color1 ' + $_item}></div>
                <div className={'color2 ' + $_item}></div>
                <div className={'color3 ' + $_item}></div>
                <div className={'color4 ' + $_item}></div>
                <div className={'color5 ' + $_item}></div>
                <div className={'color6 ' + $_item}></div>
                <div className={'color7 ' + $_item}></div>
            </div>
        ))}
        <div>
            Triad
        </div>
        {sets.map(($_item) => (
            <div className="pallet triad">
                <div className={'color1 ' + $_item}></div>
                <div className={'color2 ' + $_item}></div>
                <div className={'color3 ' + $_item}></div>
                <div className={'color4 ' + $_item}></div>
                <div className={'color5 ' + $_item}></div>
                <div className={'color6 ' + $_item}></div>
                <div className={'color7 ' + $_item}></div>
            </div>
        ))}
        <div>
            Monochromatic
        </div>
        {sets.map(($_item) => (
            <div className="pallet monochromatic">
                <div className={'color1 ' + $_item}></div>
                <div className={'color2 ' + $_item}></div>
                <div className={'color3 ' + $_item}></div>
                <div className={'color4 ' + $_item}></div>
                <div className={'color5 ' + $_item}></div>
                <div className={'color6 ' + $_item}></div>
                <div className={'color7 ' + $_item}></div>
            </div>
        ))}
        <div>
            Compound
        </div>
        {sets.map(($_item) => (
            <div className="pallet compound">
                <div className={'color1 ' + $_item}></div>
                <div className={'color2 ' + $_item}></div>
                <div className={'color3 ' + $_item}></div>
                <div className={'color4 ' + $_item}></div>
                <div className={'color5 ' + $_item}></div>
                <div className={'color6 ' + $_item}></div>
                <div className={'color7 ' + $_item}></div>
            </div>
        ))}
        <div>
            Complimentary
        </div>
        {sets.map(($_item) => (
            <div className="pallet complementary">
                <div className={'color1 ' + $_item}></div>
                <div className={'color2 ' + $_item}></div>
                <div className={'color3 ' + $_item}></div>
                <div className={'color4 ' + $_item}></div>
                <div className={'color5 ' + $_item}></div>
                <div className={'color6 ' + $_item}></div>
                <div className={'color7 ' + $_item}></div>
            </div>
        ))}
    </div>
);

export default Component;
