import './styles.css'

export default function ArrayRepresentation({ array }) {
  return (
    <div className="array-container">
        {array.map((element, index) => (
            <div className='array-item' key={index}>{element}</div>
        ))}
    </div>
  )
}
