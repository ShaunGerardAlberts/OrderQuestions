const expect = require("chai").expect

const staticQuestions = require('./static-questions')
const { getTop, getBottom } = require('../utils/customSort')


describe("Unit Testing of Questions", () => {

  it("Should return an array of 10 questions", () => {

    expect(staticQuestions.items.length).to.equal(10)
  })

  it("Most popular result is: How to undo the most recent commits in Git?", () => {

    sortedArray = staticQuestions.items.sort(getTop)

    expect(sortedArray[0].title).to.equal("How to undo the most recent commits in Git?")
  })

  it("Least popular result is: What is the &quot;--&gt;&quot; operator in C++?", () => {

    sortedArray = staticQuestions.items.sort(getBottom)

    expect(sortedArray[0].title).to.equal("What is the &quot;--&gt;&quot; operator in C++?")
  })
})