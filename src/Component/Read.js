import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState, useContext } from "react";
import { Table } from "semantic-ui-react";
import Create from "./Create";
import { AuthContext } from "../Contexts.js/AuthCon";

const Read = () => {
    const url = `https://crudcrud.com/api/a4f35f3dbc8745a08366c21d80e0d2db/data`;
    const [APIData, setAPIData] = useState([]);
    const [createForm, setForm] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [editData, seteditData] = useState(null);
    const auth = useContext(AuthContext)

    Cookies.get('accessToken', 'hello-get')
    const { authStatus, setAuthStatus } = useContext(AuthContext)

    const getData = () => {
        axios.get(url).then((getData) => {
            setAPIData(getData.data);
        });
        setEdit(false);
        seteditData(null);
    };
    const onDelete = (id) => {
        axios
            .delete(
                `https://crudcrud.com/api/a4f35f3dbc8745a08366c21d80e0d2db/data/${id}`
            )
            .then(() => {
                getData();
            });
    };
    useEffect(() => {
        axios.get(url).then((response) => {
            setAPIData(response.data);
        });
    }, []);

    const handleEdit = (data) => {
        setEdit(true);
        seteditData(data);
        setForm(true);
    };
    const handleAdd = () => {
        setForm(true);
        setEdit(false);
    };
    const closeForm = () => {
        setEdit(false);
        seteditData(null);
        setForm(false);
    };
    const logoutfun = (e) => {
        Cookies.remove('accessToken', 'hello-remove')
        window.location.href = `${window.location.origin}/signin`;

    };

    return (
        <div>
            <div className="logout-btn">
                <button onClick={() => logoutfun()}>Logout</button>
            </div>
            <button onClick={() => handleAdd()}>ADD</button>
            {createForm && (
                <Create
                    isEdit={isEdit}
                    editData={editData}
                    getData={getData}
                    closeForm={closeForm}
                />
            )}
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data?.Name ?? data.email}</Table.Cell>
                                <Table.Cell>{data.Age}</Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => handleEdit(data)}>Update</button>
                                </Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => onDelete(data._id)}>Delete</button>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </div>
    );
};
export default Read;
