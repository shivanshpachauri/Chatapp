// import React from 'react';
import {Button, Drawer,Divider} from 'rsuite';
import { useProfile } from '../../context/profile.context';
import EditableInput from '../EditableInput';
import { database } from '../../misc/firebase';
import ProviderBlock from './ProviderBlock';
import AvatarUploadBtn from './AvatarUploadBtn';
import { getUserUpdates } from '../../misc/helpers';
const Dashboard = ({onSignOut}) => {

  const {profile}=useProfile();

  const onSave=async newData=>{

   try{
    const updates = await getUserUpdates(
      profile.uid,
      'name',
      newData,
      database
    );

    await database.ref().update(updates);
        window.alert('Nickname has been updated');
   }
   catch(err){
    window.alert(err.message);
   }
  }
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>
        Dashboard
        </Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
          <h3>Hey,{profile.name}</h3>
          <ProviderBlock/>
          <Divider/>
          <EditableInput
          name="nickname"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className='mb-2'>Nickname</h6>}
          />
          <AvatarUploadBtn/>
      </Drawer.Body>
      <Drawer.Footer>
          <Button block color="red"onClick={onSignOut} >
          Sign out
          </Button>
      </Drawer.Footer>
    </>
  )
}

export default Dashboard
