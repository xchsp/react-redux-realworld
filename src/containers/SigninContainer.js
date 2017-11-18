import React, { Component } from 'react'
import Form from '../components/commons/Form'
import FormField from '../components/commons/FormField'

class SigninContainer extends Component {

  constructor (props) {
    super(props)
    this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    console.log('form submitted')
  }

  render () {
    return (
      <div className='ui text container'>
        <div className='ui segment'>
          <center>
            <h1>
              <i className='code icon'></i> Sign in
            </h1>
          </center>

          <Form onSubmit={this.onSubmit}>
            <FormField name='email' type='text' placeholder='Email address' icon='mail' />
            <FormField name='password' type='password' placeholder='Your password' icon='lock' />

            <button className='ui green huge button' type='submit'>Submit</button>
          </Form>
        </div>
      </div>
    )
  }

}

export default SigninContainer