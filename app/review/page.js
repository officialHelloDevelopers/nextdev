'use client'

import './review.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function Review() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const [serverResponse, setServerResponse] = useState(null)

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api', {
        method: 'POST',
        body: new FormData(document.getElementById('review-form'))
      })

      const result = await res.json()
      if (result.success) {
        setServerResponse("✅ Thanks for your feedback we'll keep working to be better!")
        reset()
      } else {
        setServerResponse('❌ Something went wrong.')
      }
    } catch (err) {
      setServerResponse('🚨 Server error. Please try again later.')
    }
  }

  return (
    <div className="form-section">
      <div className="form-container">
        <h2 className="form-title">⭐ Share Your Experience</h2>
        <h3 className="form-subtitle">Master the Art of Web-Development</h3>

        <form id="review-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            rows="5"
            {...register('feedback', { required: 'Feedback is required' })}
          ></textarea>
          {errors.feedback && <p className="error">{errors.feedback.message}</p>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>

        </form>

        {serverResponse && <p className="server-response">{serverResponse}</p>}
      </div>
    </div>
  )
}
