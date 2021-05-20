import * as React from 'react';
import { INote } from '../App';
import { Modal } from 'antd';
import styled from 'styled-components';

const NoteSC = styled.div`
  margin: 10px;
  margin-top: 0;
  border: 1px solid #80808030;
  border-radius: 5px;
  padding: 3px 10px;
  width: 15.8rem;
`
const H3 = styled.h3`
  margin-bottom: 0px;
`
const NoteText = styled.p`
word-break: break-all;
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
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <NoteSC style={{ backgroundColor: note.selectedColor }} onClick={showModal}>
        <H3><strong>{note.tags}</strong></H3>
        <NoteText>{note.text.slice(0, 35)} ...</NoteText>
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
