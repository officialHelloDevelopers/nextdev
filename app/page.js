'use client'

import React from "react";
import { useState, useEffect, useRef } from 'react';
import './App.css';
import IntroReact from '@/components/frontend/introreact';
import IntroMern from '@/components/frontend/intromern';
import IntroFront from '@/components/frontend/introfront';
import FileSys from '@/components/frontend/file';
import Components from '@/components/frontend/components';
import Prop from '@/components/frontend/props';
import StateHooks from '@/components/frontend/statehooks';
import UseEffect from '@/components/frontend/useffect';
import UseRef from '@/components/frontend/useref';
import Rendering from '@/components/frontend/rendering';
import Events from '@/components/frontend/events';
import Routing from '@/components/frontend/routing';
import NavBar from '@/components/navbar';
import UseContext from '@/components/frontend/usecontext';
import UseMemo from '@/components/frontend/usememo';
import Footer from '@/components/footer';
import UseCallBack from "@/components/frontend/usecallback";
import FormCreation from "@/components/frontend/formcreation";

function App() {
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
          <h1 className="writer">🚀Master the Art of Web-Development</h1>
          <h3>Build, Innovate & Elevate Your Skills to the Next Level!</h3>
        </div>
        <p>💡Scroll down and dive deep into modern web technologies, real-world projects, and expert insights. Begin your journy in <strong>Web-Development</strong>, unlock the secrets of full-stack mastery with hands-on learning!</p>
      </div>

      <div className="content" ref={contentRef}>
        <IntroFront fun={highlightContent} />
        <br /><br />
        <IntroMern fun={highlightContent} />
        <br /><br />
        <IntroReact fun={highlightContent} />
        <br /><br />
        <FileSys fun={highlightContent} />
        <br /><br />
        <Components fun={highlightContent} />
        <br /><br />
        <Prop fun={highlightContent} />
        <br /><br />
        <StateHooks fun={highlightContent} />
        <br /><br />
        <UseEffect fun={highlightContent} />
        <br /><br />
        <UseRef fun={highlightContent} />
        <br /><br />
        <Rendering fun={highlightContent} />
        <br /><br />
        <Events fun={highlightContent} />
        <br /><br />
        <Routing fun={highlightContent} />
        <br /><br />
        <UseContext fun={highlightContent} />
        <br /><br />
        <UseMemo fun={highlightContent} />
        <br /><br />
        <UseCallBack fun={highlightContent} />
        <br /><br />
        <FormCreation fun={highlightContent} />
      </div>
      <Footer />

      <div className="nondesktop">
        <div className="container">
          <h1>Sorry, we apolozise for the inconvenience...</h1>
          <h2>Actually, the non-desktop version of the website is not created yet and is on comming soon.</h2>
          <p>Try accessing this website on a desktop device like - laptop, PC etc...</p>
        </div>
      </div>
    </>
  );
}

export default App;