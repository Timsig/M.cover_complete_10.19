import React from "react"

const Submitbutton = ({ rank, cta, id, form, name, value }) => (
    <button id={id} className={rank} type="submit" form={form} name={name} value={value}>
      {cta}
    </button>
)

export default Submitbutton