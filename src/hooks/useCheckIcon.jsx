import { useState } from 'react';

// import CheckIcon from '../components/LoginComponents/CheckIcon';

export default function useCheckIcon() {
  const [isChecked, setIsChecked] = useState(false);
  const checking = () => setIsChecked(!isChecked);
//   const check = () => setIsChecked('check');
//   const uncheck = () => setIsChecked('uncheck');

  return { isChecked, checking };
}
