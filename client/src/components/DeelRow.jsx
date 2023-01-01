import { FaTrash } from 'react-icons/fa'
import { BiEditAlt } from 'react-icons/bi'
import { Link } from "react-router-dom";

export default function DellRow({ dell }) {

  return (
    <tr>
        <td>{ dell.Brand_name }</td>
        <td>{ dell.IPR }</td>
        <td>{ dell.Designation }</td>
        <td>{ dell.Status }</td>
        <td>{ dell.Number }</td>
        <td>{ dell.Office }</td>
        <td>{ dell.Nice_classification }</td>
        <td>{ dell.Owner }</td>
        <td>
            <button className="btn btn-danger btn-sm">
              <FaTrash />
            </button>
            <Link>
              <button className="btn btn-success ms-2 mt-2 btn-sm">
                <BiEditAlt />
              </button>
            </Link>
        </td>
    </tr>
  )
}
    
