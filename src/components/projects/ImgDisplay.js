const ImgDisplay = (props) => {
  const { text, img, alt } = props
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <img
        style={{ maxWidth: '400px', margin: '10px', borderRadius: '10px' }}
        src={img}
        alt={alt}
      />
      {text && <h5>{text}</h5>}
    </div>
  )
}

export default ImgDisplay
