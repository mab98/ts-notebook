import * as React from 'react';
import { INote } from '../App';
import { Button, Modal } from 'antd';

import styled from 'styled-components';
import { deleteNoteAction } from '../store/action-creators';
import { useDispatch } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';

const NoteSC = styled.div`
  margin: 10px;
  margin-top: 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;  border-radius: 5px;
  padding: 15px;
  width: 100%;
  height: 150px;
`

const H3 = styled.h3`
  width: 80%;
  margin-bottom: 0px;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
`

const NoteText = styled.p`
  word-break: break-all;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
`

const ModalSC = styled(Modal)`
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-content {
    overflow: auto;
    border-radius: 10px;
  }
`

const Note: React.FC<{ note: INote, dragging: boolean }> = ({ note, dragging }) => {
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = (e: any): void => {
    if (dragging == false) {
      setIsModalVisible(true);
    } else { setIsModalVisible(false); }
  };

  const handleOk = (): void => {
    setIsModalVisible(false);
  };

  const handleCancel = (): void => {
    setIsModalVisible(false);
  };

  return (
    <div data-testid='newNote'>
      <NoteSC style={{ backgroundColor: note.selectedColor }} onClick={showModal}>
        <H3><strong>{note.title}</strong></H3>  {note.category}
        <Button data-testid='delete-btn' style={{ position: 'absolute', top: '0', right: '-12px', color: 'black', background: 'opaque' }} size="large" type="text" onClick={() => dispatch(deleteNoteAction(note.id))}><DeleteOutlined /></Button>
        <NoteText>{note.text.length > 50 ? note.text.slice(0, 50) + '...' : note.text} </NoteText>
      </NoteSC>
      <ModalSC footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div style={{ backgroundColor: note.selectedColor, padding: '20px' }}>
          <H3><strong>{note.title}</strong> {note.category} </H3>
          <NoteText>{note.text}</NoteText>
        </div>
      </ModalSC>
    </div>

  )
}

export default Note
