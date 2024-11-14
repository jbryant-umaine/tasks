import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // This is the Control
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    // Update username
    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    // Update student status
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editmode-check"
                label="Edit Mode?"
                checked={editMode}
                onChange={updateEditMode}
            />
            {!editMode && (
                <div>
                    {username +
                        (isStudent ? " is a student" : " is not a student")}
                </div>
            )}
            {editMode && (
                <div>
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Student Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={updateUsername}
                        />
                    </Form.Group>
                    <Form.Group controlId="formIsStudent">
                        <Form.Check
                            type="checkbox"
                            label="Is a student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </Form.Group>
                </div>
            )}
        </div>
    );
}
