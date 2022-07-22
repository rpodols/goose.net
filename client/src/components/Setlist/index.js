import React from 'react';

const Setlist = () => {
    return (
        <div className="setlist-container">
            <h4 className="setlist-header">goose: Radio City Music Hall</h4>
            <h5 className="setlist-subheader">wednesday: 07/20/2022 | Philadelphia, PA</h5>
            <div className="setlist-song">
                    <ul className="set-container">
                        <li className='set-format'>Set One:</li>
                        <li className='each-song'>arrow > </li>
                        <li className='each-song'>earthling or alien?, </li>
                        <li className='each-song'>rockdale, </li>
                        <li className='each-song'>hot tea > </li>
                        <li className='each-song'>empress of organos</li>
                    </ul>
                    <ul className="set-container">
                        <li className='set-format'>Set Two:</li>
                        <li className='each-song'>tumble > </li>
                        <li className='each-song'>writing a novel > </li>
                        <li className='each-song'>fish in the sea, </li>
                        <li className='each-song'>teaprise > </li>
                        <li className='each-song'>drive</li>
                    </ul>
                    <ul className="set-container">
                        <li className='set-format'>Encore:</li>
                        <li className='each-song'>Whip It > </li>
                        <li className='each-song'>Jive II</li>
                    </ul>
                    <ul className="set-container2">
                        <li className="commenter-format">Comments: 4</li>
                    </ul>
            </div>
        </div>
    )
};

export default Setlist;