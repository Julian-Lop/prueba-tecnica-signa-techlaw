import { useState } from 'react';

export const useBrandForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [initialData, setInitialData] = useState(null)

  const openForm = (data = null) => {
    setInitialData(data)
    setIsFormOpen(true)
  };

  const closeForm = () => {
    setIsFormOpen(false)
    setInitialData(null)
  };

  return { isFormOpen, initialData, openForm, closeForm }
}
