import React, { useEffect, useState } from "react"
import "../../style/marketingDownload.css"
import { BiSolidDownvote } from "react-icons/bi";
import { downloadAPost, userDownload } from "../../service/userService";
import Table from "react-bootstrap/Table"
import { toast } from "react-toastify";
import Download from "./modalDownload";

const MarketingManager = () => {

    const [listUser, setListUser] = useState([])
    const [isShowModalDownload, setIsShowModalDownload] = useState(false)
    const [dataDownload, setDataDownload] = useState([])

    const handleClose = () => {
        setIsShowModalDownload(false)
    }

    const getFile = async() => {
        let res = await userDownload()
        if (res) {
            setListUser(res)
        }
    }

    useEffect(() => {
        getFile()
    }, [])

    const handleDownload = async () => {
        try {
            const response = await downloadAPost(dataDownload.PostID);
            console.log(">>check", response);
            if (response) {
                // await getFile()
                setDataDownload(response)
                setIsShowModalDownload(!isShowModalDownload)
                toast.success("Download successful!!!")
            }
        } catch (error) {
            toast.error("Delete error")
        }
    }

    const handleClick = (download) => {
        setIsShowModalDownload(true)
        setDataDownload(download)
    }

    return(
        <>
        <div className="download-container">
            <div className="download-body">
                <div className="download-title">
                    <h2>Download all file here</h2>
                </div>
                <BiSolidDownvote/>
                <div className="but">
                    <a href="https://magazine-web-670c.onrender.com/downloadPostsAsZip"><button className="btn btn-primary"><i className="fa-solid fa-download"></i> Download All</button></a>
                </div>
            </div>
            <div className="table-account">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th style={{textAlign: "center"}}>Post ID</th>
                        <th style={{textAlign: "center"}}>User</th>
                        <th style={{textAlign: "center"}}>Create</th>
                        <th style={{textAlign: "center"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUser && listUser.length > 0 &&
                            listUser.map((item, index) => {
                                return(
                                    <tr key={`faculty-${index}`}>
                                        <td style={{textAlign: "center"}}>{item.PostID}</td>
                                        <td style={{textAlign: "center"}}>{item.User.name}</td>
                                        <td style={{textAlign: "center"}}>{item.CreatedAt}</td>
                                        <td>
                                            <div className="button-action">
                                                <button className="btn btn-primary" onClick={() => handleClick(item)}>Download</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
        <Download
            show = {isShowModalDownload}
            handleClose = {handleClose}
            dataUser = {dataDownload}
            handleAccountDownload = {handleDownload}
        />
        </>
    )
}

export default MarketingManager