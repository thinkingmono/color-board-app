import SingleColor from "./SingleColor";
import {nanoid} from 'nanoid';

const ColorList = ({colorList}) => {
  return (
    <section className='colors'>
      {colorList && colorList.map((color) => {
        return <SingleColor key={nanoid()} color={color}/>
      })}
    </section>
  )
}

export default ColorList