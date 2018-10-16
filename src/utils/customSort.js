module.exports = {
  getTop(currQues, nextQue) {
    if (nextQue.view_count < currQues.view_count)
      return -1;
    if (nextQue.view_count > currQues.view_count)
      return 1;
    return 0;
  },

  getBottom(currQues, nextQue) {
    if (currQues.view_count < nextQue.view_count)
      return -1;
    if (currQues.view_count > nextQue.view_count)
      return 1;
    return 0;
  }
}