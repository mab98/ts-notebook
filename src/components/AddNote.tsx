import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import TextArea from "antd/lib/input/TextArea";
import { ColorResult, CirclePicker } from 'react-color';
import Tippy from '@tippyjs/react';
import styled from 'styled-components';
import { addNoteAction } from "../store/action-creators";
import { useDispatch } from "react-redux";
import { INote } from "../App";

const { Option } = Select;

const AddNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px;
`
const AddNoteForm = styled(Form)`
  margin: 10px;
  width: 375px;
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

type InputInterface = Pick<INote, 'title' | 'text' | 'category'>

const AddNote: React.FC = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState<InputInterface>({
        title: '',
        text: '',
        category: '',
    });
    const [selectedColor, setSelectedColor] = useState('#fff');

    const category = undefined;

    const addNote = (): void => {
        dispatch(addNoteAction({ id: 'note-' + uuidv4(), ...input, selectedColor }));
        form.resetFields();
        setInput({
            title: '',
            text: '',
            category: '',
        })
        setSelectedColor('#fff');
    }

    const [form] = Form.useForm();
    const [fields] = useState([
        { name: ['title'], value: input.title },
        { name: ['text'], value: input.text },
        { name: ['category'], value: category },
        { name: ['selectedColor'], value: selectedColor },
    ]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <AddNoteContainer>
            <AddNoteForm form={form} onFinish={addNote} fields={fields}>
                <Row>
                    <Col span={24}>
                        <Form.Item name="title" rules={[{ required: true }]} >
                            <Input id='title-input' type="text" placeholder='Title ...' name='title' onChange={handleChange} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item name="text" rules={[{ required: true }]} >
                            <TextArea id='text-input' rows={2} placeholder='Text ...' name='text' onChange={handleChange} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ display: 'flex', justifyContent: "space-between" }}>
                    <Col span={12}>
                        <Form.Item
                            name="category"
                            rules={[{ required: true }]}
                        >
                            <Select
                                id='select-category'
                                data-testid='select-category'
                                placeholder="Select Category"
                                style={{ width: '100%' }}
                                onChange={(value: string) => setInput({ ...input, category: value })}
                            >
                                <Option id='option-home' data-testid='option-home' value="Home">Home</Option>
                                <Option id='option-work' data-testid='option-work' value="Work">Work</Option>
                                <Option id='option-study' data-testid='option-study' value="Study">Study</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item>
                            <span id='tippy'>
                                <Tippy interactive={true} content={
                                    <CirclePicker color={selectedColor} circleSize={23} onChangeComplete={(color: ColorResult) => setSelectedColor(color.hex)} />
                                }>
                                    <ColorButton aria-expanded={true} style={{ backgroundColor: selectedColor }}> Color  </ColorButton>
                                </Tippy>
                            </span>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item>
                            <Button id='submit-btn' type="primary" htmlType="submit"> Add Note </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </AddNoteForm>
        </AddNoteContainer>
    )
}

export default AddNote