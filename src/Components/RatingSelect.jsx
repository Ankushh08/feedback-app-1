import { useState } from "react";
const RatingSelect = ({ select }) => {
    const [selected, setSelected] = useState(10);
    const handleChange = (e) => {
        // console.log('kuch toh hua hai', e.currentTarget.value);
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value);
    }

    return (
        <ul className="rating">
            <li>
                <input type='radio'
                    id='num1'
                    name='rating'
                    value='1'
                    checked={selected === 1}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num1">1</label>
            <li>
                <input type='radio'
                    id='num2'
                    name='rating'
                    value='2'
                    checked={selected === 2}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num2">2</label>
            <li>
                <input type='radio'
                    id='num3'
                    name='rating'
                    value='3'
                    checked={selected === 3}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num3">3</label>
            <li>
                <input type='radio'
                    id='num4'
                    name='rating'
                    value='4'
                    checked={selected === 4}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num4">4</label>
            <li>
                <input type='radio'
                    id='num5'
                    name='rating'
                    value='5'
                    checked={selected === 5}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num5">5</label>
            <li>
                <input type='radio'
                    id='num6'
                    name='rating'
                    value='6'
                    checked={selected === 6}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num6">6</label>
            <li>
                <input type='radio'
                    id='num7'
                    name='rating'
                    value='7'
                    checked={selected === 7}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num7">7</label>
            <li>
                <input type='radio'
                    id='num8'
                    name='rating'
                    value='8'
                    checked={selected === 8}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num8">8</label>
            <li>
                <input type='radio'
                    id='num9'
                    name='rating'
                    value='9'
                    checked={selected === 9}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num9">9</label>
            <li>
                <input type='radio'
                    id='num10'
                    name='rating'
                    value='10'
                    checked={selected === 10}
                    onChange={handleChange} />
            </li>
            <label htmlFor="num10">10</label>
        </ul>
    );
}

export default RatingSelect;

