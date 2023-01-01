import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_DELL } from '../mutations/dellMutations'


export default function AddDell() {
    const [Owner, setOwner] = useState('')
    const [Nice_classification, setNice_classification] = useState('')
    const [Office, setOffice] = useState('')
    const [Number, setNumber] = useState('')
    const [Status, setStatus] = useState('')
    const [Designation, setDesignation] = useState('')
    const [IPR, setIPR] = useState('')
    const [Brand_name, setBrand_name] = useState('')

    const [addDell] = useMutation(ADD_DELL, {
        variables: { Brand_name, IPR, Designation, Status, Number, Office, Nice_classification, Owner},
    });

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(Brand_name === '' || IPR === '' || Designation === '' || Status === '' || Number === '' || Office === '' || Nice_classification === '' || Owner === '') {
            return alert('Please fill in all fields')
        }
        
        addDell(Brand_name, IPR, Designation, Status, Number, Office, Nice_classification, Owner)

        setOwner('')
        setNice_classification('')
        setOffice('')
        setNumber('')
        setStatus('')
        setDesignation('')
        setIPR('')
        setBrand_name('')
    }

    return (
    <>
        <button
        type='button'
        className='btn btn-secondary'
        data-bs-toggle='modal'
        data-bs-target='#addClientModal'
        >
        <div className='d-flex align-items-center'>
            <div>Add Dell Data</div>
        </div>
        </button>

        <div
        className='modal fade'
        id='addClientModal'
        aria-labelledby='addClientModalLabel'
        aria-hidden='true'
        >
        <div className='modal-dialog'>
            <div className='modal-content'>
            <div className='modal-header'>
                <h5 className='modal-title' id='addClientModalLabel'>
                Add Client
                </h5>
                <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                ></button>
            </div>
            <div className='modal-body'>
                <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>Brand Name</label>
                    <input
                    type='text'
                    className='form-control'
                    id='Brand_name'
                    value={Brand_name}
                    onChange={(e) => setBrand_name(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>IPR</label>
                    <input
                    type='email'
                    className='form-control'
                    id='IPR'
                    value={IPR}
                    onChange={(e) => setIPR(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Designation</label>
                    <input
                    type='text'
                    className='form-control'
                    id='Designation'
                    value={Designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Status</label>
                    <input
                    type='text'
                    className='form-control'
                    id='Status'
                    value={Status}
                    onChange={(e) => setStatus(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Number</label>
                    <input
                    type='text'
                    className='form-control'
                    id='Number'
                    value={Number}
                    onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Office</label>
                    <input
                    type='text'
                    className='form-control'
                    id='Office'
                    value={Office}
                    onChange={(e) => setOffice(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Nice Classification</label>
                    <input
                    type='text'
                    className='form-control'
                    id='Nice_classification'
                    value={Nice_classification}
                    onChange={(e) => setNice_classification(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Owner</label>
                    <input
                    type='text'
                    className='form-control'
                    id='Owner'
                    value={Owner}
                    onChange={(e) => setOwner(e.target.value)}
                    />
                </div>

                <button
                    type='submit'
                    data-bs-dismiss='modal'
                    className='btn btn-secondary'
                >
                    Submit
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}
