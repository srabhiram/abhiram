import React from 'react'

function Chip(props) {
  return (
    <span
    {...props}
    className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 rounded-md px-2 py-2 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
  />
  )
}

export default Chip