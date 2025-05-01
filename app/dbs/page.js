'use client'

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '@/app/App.css';
import NavBar from '@/components/navbar';
import Link from 'next/link';
import Footer from '@/components/footer';

function dbs() {
  const [searchTerm, setSearchTerm] = useState('');
  const contentRef = useRef(null); // Ref to the content div
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to highlight text
  const highlightText = (text) => {
    if (!searchTerm) return text; // Return original text if no search term

    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Create a regex to match the search term
    const parts = text.split(regex); // Split the text by the search term

    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="highlight">{part}</span> // Highlight the matched part
      ) : part
    );
  };

  // Function to highlight all text in the content
  const highlightContent = (children) => {
    return React.Children.map(children, child => {
      if (typeof child === 'string') {
        return highlightText(child); // Highlight text nodes
      }
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          children: highlightContent(child.props.children) // Recursively highlight child elements
        });
      }
      return child; // Return non-string, non-element children as is
    });
  };

  // Scroll to the first match
  useEffect(() => {
    if (searchTerm) {
      const matches = contentRef.current.querySelectorAll('.highlight');
      if (matches.length > 0) {
        matches[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const toggleMenu = () => {
    requestAnimationFrame(() => {
      setMenuOpen(prev => !prev);
    });
  };

  return (
    <>
      <NavBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} toggleMenu={toggleMenu} menuOpen={menuOpen} />

      {/* Mobile */}
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link href="/">Frontend</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/backend">Backend</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/dbs">DataBase</Link>
          </li>
        </ul>
        <ul className='special'>
          <li>
            <Link href="/review">Give Feedback</Link>
          </li>
        </ul>
      </div>
      {menuOpen && (
        <div className="menubg" onClick={toggleMenu}></div>
      )}

      <div ref={contentRef}>
        {highlightContent(
          <>
            <div className="maintitle">
              <div className="head1">
                <h1>Coming Soon!</h1>
              </div>
            </div>
            <div className="mobiletitle incomplete">
              <div className="head1">
                <h1>Coming Soon!</h1>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default dbs;