import * as React from 'react';
import { INote } from '../App';
import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { deleteNoteAction } from '../store/action-creators';
import { useDispatch } from 'react-redux';

const NoteSC = styled.div`
  margin: 10px;
  margin-top: 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;  border-radius: 5px;
  padding: 3px 10px;
  width: 15.8rem;
  `
const H3 = styled.h3`
  margin-bottom: 0px;
  color: ${({ theme }) => theme.colors.text};
  `
const NoteText = styled.p`
  word-break: break-all;
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

const Note: React.FC<{ note: INote }> = ({ note }) => {
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const showModal = (): void => {
    setIsModalVisible(true);
  };

  const handleOk = (): void => {
    setIsModalVisible(false);
  };

  const handleCancel = (): void => {
    setIsModalVisible(false);
  };

  return (
    <>
      <NoteSC style={{ backgroundColor: note.selectedColor }} onClick={showModal}>
        <H3><strong>{note.tags}</strong></H3>
        <NoteText>{note.text.slice(0, 35)} ...</NoteText>
        <Button danger type="primary" onClick={() => dispatch(deleteNoteAction(note.id))
        }>Delete</Button>
      </NoteSC>
      <ModalSC footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div style={{ backgroundColor: note.selectedColor, padding: '20px' }}>
          <H3><strong>{note.tags}</strong></H3>
          <NoteText>{note.text}</NoteText>
        </div>
      </ModalSC>
    </>

  )
}

export default Note
