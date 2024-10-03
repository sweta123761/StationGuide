import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowLeft, FaSearch, FaTimes } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const MenuIconBar = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
  transition: transform 0.4s, opacity 0.4s;
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Menu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30vw;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.4s ease forwards;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const MenuItem = styled.a`
  color: rgb(59 130 246);
  padding: 22px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: rgb(59 130 246);
    color: white;
  }
`;

const HamburgerIcon = styled.div`
  position: relative;
  width: 30px;
  height: 24px;
`;

const Bar1 = styled(MenuIconBar)`
  transform: ${({ open }) => (open ? 'rotate(-45deg) translate(-5px, 5px)' : 'rotate(0)')};
`;

const Bar2 = styled(MenuIconBar)`
  opacity: ${({ open }) => (open ? 0 : 1)};
`;

const Bar3 = styled(MenuIconBar)`
  transform: ${({ open }) => (open ? 'rotate(45deg) translate(-5px, -5px)' : 'rotate(0)')};
`;

const BackButton = styled(FaArrowLeft)`
  font-size: 24px;
  cursor: pointer;
  margin: 16px;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 24px;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  transition: color 0.3s;
  &:hover {
    color: rgb(37 99 235);
  }
`;

const ClearIcon = styled(FaTimes)`
  font-size: 16px;
  color: white;
  cursor: pointer;
  margin-left: 5px;
  transition: color 0.3s;
  &:hover {
    color: rgb(255 0 0);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 5px 10px;
  transition: width 0.4s ease;
`;

const SearchInput = styled.input`
  display: block;
  padding: 8px;
  margin-left: 10px;
  border: 2px solid rgb(59 130 246);
  border-radius: 5px;
  width: ${({ show }) => (show ? '200px' : '0px')};
  transition: width 0.4s ease;
  background-color: transparent;
  color: white;
  outline: none;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  &::placeholder {
    color: #ccc;
  }
`;

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleBack = () => {
    setOpen(false);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    searchInputRef.current.focus();
  };

  // Focus input when search is toggled on
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div>
      <HamburgerContainer onClick={toggleMenu} aria-label="Toggle Menu" role="button">
        <HamburgerIcon>
          <Bar1 open={open} />
          <Bar2 open={open} />
          <Bar3 open={open} />
        </HamburgerIcon>
      </HamburgerContainer>

      {open && <BackButton onClick={handleBack} />}

      <Menu open={open}>
        <MenuItem href="#back" onClick={handleBack} style={{ fontSize: '30px' }}>
          ←
        </MenuItem>
        <MenuItem href="#home">Home</MenuItem>
        <MenuItem href="#services">Services</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </Menu>

      <SearchContainer>
        <SearchIcon onClick={toggleSearch} />
        <SearchInput
          type="text"
          show={showSearch}
          placeholder="Type to search..."
          ref={searchInputRef}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {showSearch && searchTerm && <ClearIcon onClick={clearSearch} />}
      </SearchContainer>
    </div>
  );
};

export default Hamburger;
