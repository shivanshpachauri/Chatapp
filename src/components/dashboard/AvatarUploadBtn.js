// import React from 'react'

import { Modal,Button } from 'rsuite';
import AvatarEditor from 'react-avatar-editor'
import { useModalState } from "../../misc/custom-hooks";
import { useState } from 'react';
const fileInputTypes='.png,.jpeg,.jpg';
const acceptedFileTypes=['image/png','image/jpeg','image/pjpeg'];
const isValidFile=file=>acceptedFileTypes.includes(file.type);

const AvatarUploadBtn = () => {
    const {isOpen,open,close}=useModalState();
    const [img,setImg]=useState(null);
    const onFileInputChange=ev=>{
        const currFiles=ev.target.files;
        if(currFiles.length===1){
            const file=currFiles[0];

            if(isValidFile(file)){
                setImg(file);

                open();
            }else{
                window.alert(`Wrong file type ${file.type}`);
            }
        }
    };
  return (
    <div className="mt-3 text-center">
        <div>
            <label 
            htmlFor="avatar-upload" 
            className="d-block cursor-pointer padded">
                Select new avatar 
                <input 
                id="avatar-upload"
                type="file" 
                className="d-none" 
                accept={fileInputTypes}
                onChange={onFileInputChange}/>
            </label>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>
                        Adjust and Upload new avatar
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center align-items center h-100">
                    {img &&(
                     <AvatarEditor
                     image={img}
                     width={200}
                     height={200}
                     border={10}
                     borderRadius={100}
                    //  color={[255, 255, 255, 0.6]} // RGBA
                    //  scale={1.2}
                     rotate={0}
                   />)}
                   </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button blockappearance="ghost">
                        Upload new avatar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
      
    </div>
  );
};

export default AvatarUploadBtn
