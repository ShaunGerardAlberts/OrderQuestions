import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { unescape } from 'underscore'

import { findQuestion, getQuestions } from '../actions/questionsActions'
import Spinner from '../layout/Spinner'

class QuestionDetail extends Component {
  state = {
    id: "",
  }

  async componentWillMount() {
    const { getQuestions } = this.props

    await getQuestions(true)

    // Get question id from url
    const { id } = this.props.match.params;

    const { findQuestion } = this.props
    findQuestion(Number(id))
  }

  render() {
    const { foundQuestion } = this.props
    const { owner } = this.props.foundQuestion

    if (owner !== undefined) {
      const { tags } = this.props.foundQuestion
      const { display_name, profile_image, link, reputation } = this.props.foundQuestion.owner

      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-md-block text-center mt-4">
              <h3 className="mb-4">{display_name}</h3>
              <div><img src={profile_image} alt="owner" className="img-fluid w-75" /></div>
              <a href={link} className="btn btn-outline-dark mt-4">About Me</a>
            </div>
            <div className="col-md-6 mt-4">
              <h3 className="offset-2">Area of speciality</h3><br />
              {tags.map((tag, index) => {
                return (
                  <div key={index} className="d-flex offset-2">
                    <div className="align-self-start">
                      <i className="fas fa-check pr-2"></i>
                    </div>
                    <h6 className="align-self-end">{tag}</h6>
                  </div>
                )
              })}
              <br /><br />
              <h3 className="offset-2">Reputation:  <span style={{ fontWeight: "bold" }}>{reputation}</span></h3><br />
              <Link className="offset-2" to="/"><i className="pt-4 fas fa-arrow-circle-left"></i> Back To Questions</Link>
            </div>
          </div>
        </div>
      )

    } else return (
      <Spinner />
    )

  }
}

const mapStateToProps = (state) => ({
  questions: state.store.questions,
  foundQuestion: state.store.foundQuestion
})

export default connect(mapStateToProps, { findQuestion, getQuestions })(QuestionDetail)