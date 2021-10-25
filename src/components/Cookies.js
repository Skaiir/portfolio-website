import { useState, useEffect } from 'react'

const Cookies = () => {
  const [cookie, setCookie] = useState(document.cookie.split('@@').join('/n'))
  useEffect(() => {
    document.cookie = cookie.split('/n').join('@@')
  }, [cookie])

  return (
    <>
      <div class='cookie-notes-root'>
        <h5>Notepad (uses cookies):</h5>
        <textarea
          className='cookie-notes'
          type='text'
          value={cookie}
          onChange={(e) => setCookie(e.target.value)}
        />
      </div>
    </>
  )
}

export default Cookies
