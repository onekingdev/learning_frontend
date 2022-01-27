import { useState} from 'react';

export const useDialog = () =>{

  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(!isOpen);
  return {
    isOpen,
    open
  }
}
