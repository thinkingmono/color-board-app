import { useState } from "react"
import Values from 'values.js';
import { toast } from 'react-toastify';

const Form = ({ colorList, setColorList }) => {
    const [color, setColor] = useState('#fafafa');


    const handleSubmit = (e) => {
        e.preventDefault();
        const colorPallete = new Values(color).all(10);
        if(!colorPallete){
            toast.error('error message');
            return;
        }else{
            toast.success('Awesome');
        }
        // console.log(colorPallete);
        const tempColorList = [];
        colorPallete.map((color) => {
            tempColorList.push({
                rgb: '(' + color.rgb[0] + ',' + color.rgb[1] + ',' + color.rgb[2] + ')',
                alpha: color.alpha,
                type: color.type,
                weight: color.weight
            });
        });
        setColorList(tempColorList);
        // console.log(colorList);
    };

    return (
        <form className="color-form" onSubmit={handleSubmit}>
            <input type="text" id='hex' name='hex' value={color} readOnly />
            <input type="color" name="colorsel" id="colorsel" value={color} onChange={(e) => setColor(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form