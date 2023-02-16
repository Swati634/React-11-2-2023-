import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";

const Create = ({ isEdit, editData, getData, closeForm }) => {
    const url = `https://crudcrud.com/api/fa9e07defdee49adaee876c94b581741/data`;
    const [Name, setName] = useState(editData?.Name ? editData?.Name : "");
    const [Age, setAge] = useState(editData?.Age ? editData?.Age : "");

    const postData = () => {
        if (isEdit) {
            axios
                .put(
                    `https://crudcrud.com/api/fa9e07defdee49adaee876c94b581741/data/${editData._id}`,
                    {
                        Name,
                        Age,
                    }
                )
                .then(() => {
                    setName("");
                    setAge("");
                    getData();
                    closeForm();
                });
        } else {
            axios
                .post(url, {
                    Name,
                    Age,
                })
                .then((response) => {
                    setName("");
                    setAge("");
                    getData();
                    closeForm();
                });
        }
    };
    useEffect(() => {
        if (isEdit && editData) {
            setName(editData.Name);
            setAge(editData.Age);
        }
    }, [isEdit, editData]);

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input
                        placeholder="Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input
                        placeholder="Age"
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Form.Field>
                <Button onClick={() => postData()} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default Create;
