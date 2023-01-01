import { FaTrash } from 'react-icons/fa'
import { BiEditAlt } from 'react-icons/bi'
import { useMutation  } from '@apollo/client'
import { DELETE_CLIENT } from '../mutations/dellMutations';
import { GET_DELLS } from '../queries/clientQueries';
import { Link } from "react-router-dom";

export default function DellRow({ dell }) {

    const [deleteDell] = useMutation(DELETE_CLIENT, {
        variables: { id: dell.id },
        refetchQueries: [{ query: GET_DELLS }]
    })

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
                <button className="btn btn-danger btn-sm" onClick={deleteDell}>
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
    
