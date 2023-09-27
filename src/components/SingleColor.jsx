import { toast } from 'react-toastify';

const SingleColor = ({ color }) => {

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      // console.log('Text copied to clipboard');
      toast.success('Text copied to clipboard');
    } catch (error) {
      console.error('Failed to copy text: ', error);
      toast.error('Failed to copy text');
    }
  }

  return (
    <div className='color' style={{ backgroundColor: 'rgb' + color.rgb }} onClick={() => copyToClipboard(color.rgb)}>
      <p>{color.rgb}</p>
      <p>{color.weight}</p>
    </div>
  )
}

export default SingleColor