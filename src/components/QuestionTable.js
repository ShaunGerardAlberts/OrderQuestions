import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { unescape } from 'underscore'

import { getQuestions } from '../actions/questionsActions'
import Spinner from '../layout/Spinner'

class QuestionTable extends Component {
  state = {
    topTenQuestions: true
  }

  componentDidMount() {
    const { topTenQuestions } = this.state
    const { getQuestions } = this.props
    getQuestions(topTenQuestions)
  }

  toggleQuestionSearch = () => {
    const { topTenQuestions } = this.state

    this.setState({
      topTenQuestions: !this.state.topTenQuestions
    }, () => {
      const { getQuestions } = this.props
      getQuestions(this.state.topTenQuestions)
    })

  }

  render() {
    const { questions } = this.props

    if (questions.length > 0) {
      return (
        <section>
          <div className="container">
            {
              this.state.topTenQuestions ?
                (<div className="row my-4"><h4 className="col-md-8 text-center py-3">Top 10 Most Popular Questions on Stackoverflow</h4><button className="col-md-2 btn btn-outline-dark" onClick={this.toggleQuestionSearch.bind(this)} >View Least Popular</button></div>) :
                (<div className="row my-4"><h4 className="col-md-8 text-center py-3 text-danger">Bottom 10 Least Popular Questions on Stackoverflow</h4><button className="col-md-2 btn btn-outline-dark" onClick={this.toggleQuestionSearch.bind(this)} >View Most Popular</button></div>)
            }
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th style={{ width: "5%" }}>#</th>
                  <th style={{ width: "45%" }} > Question</th>
                  <th className="px-4" style={{ width: "15%" }} > Count</th>
                  <th style={{ width: "10%" }}> Details</th>
                  <th style={{ width: "15%" }} />
                </tr>
              </thead>
              <tbody>
                {questions.map((question, index) => (
                  <tr key={question.question_id} >
                    <td>{++index}</td>
                    <td>{unescape(question.title).replace(/&#39;/g, "'")}</td>
                    <td>{question.view_count}</td>
                    <td>
                      <Link to={`questionDetail/${question.question_id}`}>
                        <i className="fas fa-search text-dark"></i></Link>
                    </td>
                    <td><a href={question.link} className="btn btn-outline-dark">Follow Link</a></td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </section >
      )
    } else {
      return <Spinner />
    }
  }
}

QuestionTable.propTypes = {
  questions: PropTypes.array.isRequired,
  getQuestions: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  questions: state.store.questions
})

export default connect(mapStateToProps, { getQuestions })(QuestionTable)
