import { useState } from "react"
import Values from 'values.js';
import { toast } from 'react-toastify';

const Form = ({ setColorList }) => {
    const [color, setColor] = useState('#001980');


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const colorPallete = new Values(color).all(10);
            setColorList(colorPallete);
            toast.success('Awesome');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <section className="container">
            <h4>Color Generator</h4>
            <form className="color-form" onSubmit={handleSubmit}>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="text" placeholder="#001980" value={color} onChange={(e) => setColor(e.target.value)} />
                <button type="submit" style={{ backgroundColor: color }} className="btn">Submit</button>
            </form>
        </section>
    )
}

export default Form