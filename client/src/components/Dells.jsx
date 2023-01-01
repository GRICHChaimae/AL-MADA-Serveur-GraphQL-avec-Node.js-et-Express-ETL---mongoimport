import { useQuery } from '@apollo/client'
import DellRow from './DeelRow'
import { GET_DELLS } from '../queries/clientQueries'


export default function Dells() {
    const { loading, error, data } = useQuery(GET_DELLS)

    if(loading) return <p>loading</p>
    if(error) return <p>Something Went Wrong</p>

    return (
        <>
        { !loading && !error && (
            <table className='table table-hover mt-3'>
            <thead>
                <tr>
                <th>Brand Name</th>
                <th>IPR</th>
                <th>Designation</th>
                <th>Status</th>
                <th>Number</th>
                <th>Office</th>
                <th>Nice Classification</th>
                <th>Owner</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.dells.map(dell => (
                <DellRow key={dell.id} dell={dell}/>
                ))}
            </tbody>
            </table>
        )}
        </>
    )
}
