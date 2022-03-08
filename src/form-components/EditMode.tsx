import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
// HTMLTextAreaElement |
// | HTMLSelectElement

export function EditMode(): JSX.Element {
    const [editMode, switchEditMode] = useState<boolean>(false);
    const [name, changeName] = useState<string>("Your Name");
    const [isStudent, switchStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={editMode}
                    id="edit-mode-id"
                    onChange={(
                        event: ChangeEvent //switchEditMode(!editMode)}
                    ) => switchEditMode(event.target.checked)}
                ></Form.Check>
                {editMode && (
                    <Form.Control
                        type="textbox"
                        value={name}
                        onChange={(event: ChangeEvent) =>
                            changeName(event.target.value)
                        }
                    ></Form.Control>
                )}
                {editMode && (
                    <Form.Check
                        type="switch"
                        label="is a student"
                        id="student"
                        checked={isStudent}
                        onChange={(
                            event: ChangeEvent //switchStudent(!isStudent)
                        ) => switchStudent(event.target.checked)}
                    ></Form.Check>
                )}
                {/* {!editMode && ( */}
                <div>
                    {name} {isStudent ? " is " : " is not "} a student.
                </div>
                {/* )} */}
            </Form.Group>
        </div>
    );
}
