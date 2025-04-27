'use client'

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '@/app/App.css';
import NavBar from '@/components/navbar';

function Backend() {
  const [searchTerm, setSearchTerm] = useState('');
  const contentRef = useRef(null); // Ref to the content div

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

  return (
    <>
      <NavBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <div className="maintitle">
        <div className="head1">
          <h1>Comming Soon!</h1>
        </div>
      </div>
    </>
  );
}

export default Backend;