import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button, Row, Col } from 'antd';
import TextArea from "antd/lib/input/TextArea";
import { INote } from '../App';
import { ColorResult, CompactPicker } from 'react-color';
import Tippy from '@tippyjs/react';

interface AddNoteProps {
    notes: INote[];
    setNotes: Function;
}

const AddNote: React.FC<AddNoteProps> = ({ notes, setNotes }) => {
    const [text, setText] = useState('');
    const [tags, setTags] = useState('');
    const [selectedColor, setSelectedColor] = useState('#fff');

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value)

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>): void => setTags(e.target.value)

    const addNote = (): void => {
        setNotes([...notes, { id: uuidv4(), text, tags, selectedColor }]);
        form.resetFields();
        setText('');
        setTags('');
        setSelectedColor('#fff');
    }

    const [form] = Form.useForm();
    const [fields] = useState([
        { name: ['text'], value: text },
        { name: ['tags'], value: tags },
        { name: ['selectedColor'], value: selectedColor },
    ]);

    return (
        <>
            <Form form={form} className='add-note' onFinish={addNote} fields={fields}>
                <Form.Item name="text" label="Text" rules={[{ required: true }]} >
                    <TextArea rows={3} placeholder='write text here' name='text' onChange={handleTextChange} />
                </Form.Item>
                <Row>
                    <Col>
                        <Form.Item name="tags" label="Tags" rules={[{ required: true }]} >
                            <Input type="text" placeholder='add tags here' name='tags' onChange={handleTagsChange} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item>
                            <Tippy interactive={true} content={
                                <CompactPicker color={selectedColor} onChangeComplete={(color: ColorResult) => setSelectedColor(color.hex)} />
                            }>
                                <Button className='color-button' style={{ backgroundColor: selectedColor }}> Color </Button>
                            </Tippy>
                            <Button type="primary" htmlType="submit"> Add Note </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default AddNote