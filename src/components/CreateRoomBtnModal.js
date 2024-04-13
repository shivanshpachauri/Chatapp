import {useCallback, useRef, useState}  from 'react'
import {Button,Icon,Modal,Form,FormGroup,Schema,ControlLabel,FormControl} from 'rsuite';
import { useModalState } from '../misc/custom-hooks';
import firebase from 'firebase/app';
// import { useModalState } from '../misc/custom-hooks';
import { database } from '../misc/firebase';
const {StringType }=Schema.Types;

const model=Schema.Model({
    name:  StringType().isRequired('Chat name is required'),
    description: StringType().isRequired('Description is required'),
}
)
const INITIAL_FORM={
    name:'',
    description:''
}
const CreateRoomBtnModal = () => {
    const{isOpen,open,close}=useModalState();
    const[formValue,setFormvalue]=useState(INITIAL_FORM);
    const[isLoading,setIsLoading]=useState(false);
    const formRef=useRef()
    const onFormChange=useCallback(value=>{
        setFormvalue(value);
    },[]);
    const onSubmit=async()=>{
        if(!formRef.current.check()){
            return;
        }
        setIsLoading(true);
        const newRoomdata={
            ...formValue,
            createdAt: firebase.database.ServerValue.TIMESTAMP
        }
        try {
            await database.ref('rooms').push(newRoomdata);
            window.alert(`${formValue.name} has been created`)
            setIsLoading(false);
             
            setFormvalue(INITIAL_FORM);
            close();
           
        } catch (err) {
            setIsLoading(false);
            window.alert(err.message)
        }
    }
  return (
    <div className="mt-1">
      <Button block color='green' onClick={open}>
        <Icon icon="creative"/> Create New Chat Room
      </Button>
      <Modal show = {isOpen} onHide={close}> 
        <Modal.Header>
            <Modal.Title>New Chat room</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form fluid 
            onChange={onFormChange} 
            formValue={formValue} 
            model={model}
            ref={formRef}>
                <FormGroup>
                    <ControlLabel>Room</ControlLabel>
                    <FormControl name="name"placeholder="Enter chat room name..."/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" 
                    rows={5} 
                    name="description"
                    placeholder="Enter room description..."/>
                </FormGroup>
            </Form>
        </Modal.Body>

        <Modal.Footer>
        <Button block appearance="primary" onClick={onSubmit} disabled={isLoading}>
                Create new chat room
            </Button>
        </Modal.Footer>
    </Modal>
    </div>
    
  )
}

export default CreateRoomBtnModal
