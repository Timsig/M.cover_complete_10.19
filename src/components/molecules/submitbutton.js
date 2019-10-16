import React from "react"

const Submitbutton = ({ style, cta, id, form, name, value }) => (
    <button id={id} className={style} type="submit" form={form} name={name} value={value}>
      {cta}
    </button>
)

export default Submitbutton