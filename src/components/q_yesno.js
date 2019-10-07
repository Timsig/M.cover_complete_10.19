import React from "react"

const Qyesno = ({ id, question }) => (
  <div className="qwrap inline-radio-group">
    <p className="question">{question}</p>
    <input type="radio" id="yes" name="yesno" value="yes" />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="yesno" value="no" />
    <label htmlFor="no">No</label>
  </div>
)
export default Qyesno
