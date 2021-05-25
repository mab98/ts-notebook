import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button, Row, Col } from 'antd';
import TextArea from "antd/lib/input/TextArea";
import { INote } from '../App';
import { ColorResult, CompactPicker } from 'react-color';
import Tippy from '@tippyjs/react';
import styled from 'styled-components';

const AddNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px;
`
const AddNoteForm = styled(Form)`
  margin: 10px;
  box-shadow: 0px 1px 3px 1px rgba(138, 130, 130, 0.5);
  border-radius: 5px;
  padding: 20px;
  .ant-form-item {
    margin: 5px 0 5px 0;
  }
  .ant-form-item-label > label {
    height: 10px;
    width: 50px;
  }
`
const ColorButton = styled(Button)`
  padding: 0 10px;
  margin: 0 10px;
`

interface AddNoteProps {
    notes: INote[];
    setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
}

const AddNote: React.FC<AddNoteProps> = ({ notes, setNotes }) => {
    const [input, setInput] = useState({
        text: '',
        tags: '',
    });
    const [selectedColor, setSelectedColor] = useState('#fff');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const addNote = (): void => {
        setNotes([...notes, { id: uuidv4(), ...input, selectedColor }]);
        form.resetFields();
        setInput({
            text: '',
            tags: '',
        })
        setSelectedColor('#fff');
    }

    const [form] = Form.useForm();
    const [fields] = useState([
        { name: ['text'], value: input.text },
        { name: ['tags'], value: input.tags },
        { name: ['selectedColor'], value: selectedColor },
    ]);

    return (
        <AddNoteContainer>
            <AddNoteForm form={form} onFinish={addNote} fields={fields}>
                <Row>
                    <Col span={24}>
                        <Form.Item name="text" rules={[{ required: true }]} >
                            <TextArea rows={2} placeholder='Text...' name='text' onChange={handleChange} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Item name="tags" rules={[{ required: true }]} >
                            <Input type="text" placeholder='Tag...' name='tags' onChange={handleChange} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item>
                            <Tippy interactive={true} content={
                                <CompactPicker color={selectedColor} onChangeComplete={(color: ColorResult) => setSelectedColor(color.hex)} />
                            }>
                                <ColorButton style={{ backgroundColor: selectedColor }}> Color  </ColorButton>
                            </Tippy>
                            <Button type="primary" htmlType="submit"> Add Note </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </AddNoteForm>
        </AddNoteContainer>
    )
}

export default AddNote