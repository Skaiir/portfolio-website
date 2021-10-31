import React, { useState, useRef, useEffect } from 'react'

const PublicChat = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [message, setMessage] = useState()

  const userNameRef = useRef()
  const passwordRef = useRef()
  const chatRef = useRef()

  const login = (e) => {
    e.preventDefault()

    // TODO: Implement real login logic

    setUser(userNameRef.current.value)
    setIsLoggedIn(true)
  }

  const logout = (e) => {
    e.preventDefault()
    setUser('')
    setIsLoggedIn(false)

    // TODO: Implement real logout
  }

  const submitMessage = () => {
    if (message) {
      setChatHistory((c) => [...c, { user: user, message: message }])
      setMessage('')

      // TODO: Implement real message submission
    }
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight)
    }
  }, [chatHistory])

  if (isLoggedIn) {
    return (
      <div className='public-chat'>
        <div ref={chatRef} className='chat'>
          {chatHistory.map((c) => (
            <>
              <div class='user-message'>
                <span class='user'>@{c.user}:</span>
                <span class='message'>{c.message}</span>
              </div>
            </>
          ))}
        </div>
        <div className='users'></div>
        <div className='text-entry'>
          <span>{'@' + user}</span>
          <input
            type='text'
            value={message}
            onInput={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submitMessage()}
          />
          <button className='log-out-btn' onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='login-form'>
        <h3>Log-in or create handle</h3>
        <form onSubmit={login}>
          <label htmlFor='username-field'>User:</label>
          <input
            ref={userNameRef}
            type='text'
            name='username-field'
            id='username-field'
          />
          <label htmlFor='password-field'>Password:</label>
          <input
            ref={passwordRef}
            type='text'
            name='password-field'
            id='password-field'
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default PublicChat
