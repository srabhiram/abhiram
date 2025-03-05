import React from 'react'

function Chip(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
    {...props}
    className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 rounded-md text-xs p-1 sm:px-2 sm:py-2 sm:text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
  />
  )
}

export default Chip