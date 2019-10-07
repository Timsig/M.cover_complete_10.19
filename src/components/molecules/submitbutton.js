import React from "react"

const Submitbutton = ({ style, cta, id, form }) => (
    <button id={id} className={style} type="submit" form={form}>
      {cta}
    </button>
)

export default Submitbutton