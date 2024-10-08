import React from 'react'
import { ProjectT, TaskT } from '../../../../utils/types'

type Props = {
  data: ProjectT | TaskT | null
}

const EditTask:React.FC<Props> = ({ data }) => {
  return (
    <div>EditTask</div>
  )
}

export default EditTask;
