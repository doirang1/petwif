import { useState } from 'react';

import Modal from '../components/Modal/Modal.jsx';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close, Modal };
}
