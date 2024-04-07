import React, { useEffect, useState } from "react";
import "../../style/adminEvent.css"
import ModalAdd from "./modalAdd";
import ModalEdit from "./modalEdit";
import ModalDelete from "./modalDelete";
import { addNewEvent, deleteEvent, editEvent, fetchAllCountEvent, fetchAllEvent } from "../../service/userService";
import { toast } from "react-toastify";

const Event = () => {

    const [isShowModalAdd, setIsShowModalAdd] = useState(0)
    const [isShowModalEdit, setIsShowModalEdit] = useState(false)
    const [isShowModalDelete, setIsShowModalDelete] = useState(false)
    const [dataEdit, setDataEdit] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [listEvent, setListEvent] = useState([])
    const [listCountEvent, setListCountEvent] = useState([])
    const [totalEvent, setTotalEvent] = useState(0)
    const [totalCountEvent, setTotalCountEvent] = useState(0)

    const handleClose = () => {
        setIsShowModalAdd(false)
        setIsShowModalEdit(false)
        setIsShowModalDelete(false)
    }
    const handleAddNew = async (event) => {
        try {
            const response = await addNewEvent(event);
            console.log(response);
            if (response) {
                await getAllEvent()
                setIsShowModalAdd(!isShowModalAdd)
                toast.success("Create success!")
            }
        } catch (error) {
            toast.error("Create fail")
        }
    }
    const handleEdit = (accountEdit) => {
        setDataEdit(accountEdit)
        setIsShowModalEdit(true)
    }
    const handleDelete = (accountDelete) => {
        setIsShowModalDelete(true)
        setDataDelete(accountDelete)
    }
    const handleEditFromModal = async (dataEdit) => {
        console.log(dataEdit)
        const id = dataEdit._id
        let newData = dataEdit
        delete newData.__v
        delete newData._id
        newData = { ...newData, id }
        try {
            const response = await editEvent(newData);
            if (response) {
                await getAllEvent()
                setIsShowModalEdit(!isShowModalEdit)
                toast.success("Edit success!")
            }
        } catch (error) {
            toast.error("Edit error")
        }
    }
    const handleDEleteFromModal = async (user) =>{
        try {
            const response = await deleteEvent(user._id);
            if (response) {
                await getAllEvent()
                setIsShowModalDelete(!isShowModalDelete)
                toast.success("Delete successful!!!")
            }
        } catch (error) {
            toast.error("Delete error")
        }
    }

    const getAllEvent = async () =>{
        let res = await fetchAllEvent()
        if (res) {
            setTotalEvent(res.total)
            setListEvent(res.data)
            // setTotalPages(res.total_pages)
        }
    }

    useEffect(() => {
        getAllEvent()
    }, [])

    const getAllCountEvent = async () =>{
        let res = await fetchAllCountEvent()
        if (res) {
            // setTotalCountEvent(res.total)
            setListCountEvent(res.data)
        }
    }

    useEffect(() => {
        getAllCountEvent()
    }, [])

    return(
        <>
        <div className="event-manage">
            
                <div className="button-container">
                    <button className="btn btn-primary"
                    onClick={() => setIsShowModalAdd(true)}
                    >Add Event</button>
                </div>
                <div className="event-form">
                    <h3>List Event</h3>
                    <div className="list-event">
                        {
                            listEvent && listEvent.length > 0 &&
                            listEvent.map((item, index) =>{
                                return(
                                        <div key={`event-${index}`} className="eventM">
                                            <div className="assignment">
                                                <div className="inform">
                                                    <div className="inform-item">Event name:</div>
                                                    <div className="inform-item">Date start:</div>
                                                    <div className="inform-item">Deadline:</div>
                                                </div>
                                                <div className="eventInform">
                                                    <div className="eventInform-item">{item.event_name}</div>
                                                    <div className="eventInform-item">{item.first_closure_date}</div>
                                                    <div className="eventInform-item">{item.final_closure_date}</div>
                                                </div>
                                            </div>
                                            <span>----------------------------------</span>
                                            <div className="grd-container">
                                                <div className="react">
                                                    <div className="react-item">Post:</div>
                                                    <div className="react-item">Like:</div>
                                                    <div className="react-item">Comment:</div>
                                                </div>
                                                {
                                                    listCountEvent && listCountEvent.length > 0 &&
                                                    listEvent.map((item, index) => {
                                                        const countEventItem = listCountEvent.filter(countItem => countItem.eventId === item._id);
                                                        return(
                                                            <div key={`countEvent-${index}`} className="reactEvent">
                                                                <div className="reactEvent-item">{countEventItem ? countEventItem.eventId.totalCount.totalPosts : 0}</div>
                                                                <div className="reactEvent-item">{item.totalCount.totalLikes}</div>
                                                                <div className="reactEvent-item">{item.totalCount.totalComments}</div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="button">
                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => handleEdit(item)}
                                                >Edit</button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(item)}
                                                >Delete</button>
                                            </div>
                                        </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            
        </div>
        <ModalAdd
            show = {isShowModalAdd}
            handleClose = {handleClose}
            handleAddNewEvent = {handleAddNew}
        />
        <ModalEdit
            show = {isShowModalEdit}
            dataEditAccount = {dataEdit}
            handleClose = {handleClose}
            handleEventEdit = {handleEditFromModal}
        />
        <ModalDelete
            show = {isShowModalDelete}
            handleClose = {handleClose}
            dataEventDelete = {dataDelete}
            handleAccountDelete = {handleDEleteFromModal}
        />
        </>
    )
}

export default Event