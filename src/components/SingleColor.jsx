import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const {hex, weight} = color;

  const copyToClipboard = async (hex) => {
    try {
      await navigator.clipboard.writeText('#'+hex);
      toast.success('Color copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy color');
    }
  }

  return (
    <article className={index >= 10 ? 'color color-light' : 'color'} style={{ backgroundColor: '#'+hex }} onClick={() => copyToClipboard(hex)}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}

export default SingleColor