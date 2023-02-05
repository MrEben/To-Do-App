import React, { useState, useContext } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
        noteText,
        setNoteText,
        isSettingsOpen,
        setIsSettingsOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
