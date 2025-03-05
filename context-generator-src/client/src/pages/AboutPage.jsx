import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

/**
 * About page explaining how the Context Generator works with AI systems
 */
const AboutPage = () => {
  // Scroll to the element if a hash is present in the URL
  useEffect(() => {
    // Get the hash from the URL (without the # symbol)
    const hash = window.location.hash.substring(1);
    
    // If there's a hash, try to scroll to the element
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Wait a bit for the page to fully render before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
  return (
    <div className="page-container about-page">
      <div className="about-header">
        <h1>About <span className="brand-title">
          <span className="brand-title-context">Context</span><span className="brand-title-forge">Forge</span>
        </span></h1>
        <p className="subtitle">Enhancing AI interactions through semantic calibration</p>
      </div>

      <div className="about-section">
        <h2>What is <span className="text-orange">ContextForge</span>?</h2>
        <p>
          ContextForge is a specialized tool designed to create comprehensive context documents that semantically calibrate AI language models (like ChatGPT, Claude, Gemini) to your specific business needs, audience, and communication style.
        </p>
        <p>
          Unlike traditional documentation that's primarily meant for human consumption, these context documents are specifically optimized to help AI systems better understand your unique business context and generate more accurate, relevant, and precisely aligned outputs.
        </p>
      </div>

      <div className="about-section">
        <h2>How It Works with AI Systems</h2>
        <p>
          Modern AI systems are incredibly powerful but work best when provided with detailed, structured context about your specific needs. Our context documents serve as semantic calibration tools that can be:
        </p>
        <ul className="feature-list">
          <li>
            <strong>Attached to Conversations:</strong> Upload or paste these documents directly into AI chat interfaces to establish context
          </li>
          <li>
            <strong>Used for Knowledge Retrieval:</strong> Create dedicated knowledge bases or embeddings from these documents
          </li>
          <li>
            <strong>Integrated with AI APIs:</strong> Incorporate into your system prompts when building applications with AI APIs
          </li>
          <li>
            <strong>Referenced in Prompts:</strong> Refer back to specific sections in your ongoing conversations with AI systems
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Our Document Types</h2>
        
        <div className="document-type" id="business-profile">
          <h3>📈 Business Dimensional Profile</h3>
          <p>A comprehensive business context document that semantically calibrates AI systems to understand your:</p>
          <ul>
            <li>Business model and market positioning</li>
            <li>Core offerings, unique value propositions, and differentiators</li>
            <li>Strategic objectives and operational approach</li>
            <li>Industry-specific terminology and concepts</li>
          </ul>
          <p>This document helps AI systems generate outputs that precisely align with your business strategy and market position, ensuring all AI-generated content is contextually appropriate for your specific business situation.</p>
        </div>

        <div className="document-type" id="target-audience">
          <h3>📊 Target Market Audience Profile</h3>
          <p>A detailed audience analysis document that helps AI systems accurately understand and address your specific customer segments with:</p>
          <ul>
            <li>Demographic and psychographic profiles of key segments</li>
            <li>Customer journey touchpoints and pain points</li>
            <li>Communication preferences and behavioral patterns</li>
            <li>Audience-specific terminology and conceptual frameworks</li>
          </ul>
          <p>This document significantly improves how well AI systems can generate content that resonates with your specific target audiences, rather than generic customer profiles.</p>
        </div>

        <div className="document-type" id="style-guide">
          <h3>📝 AI Style Guide</h3>
          <p>A specialized communication framework document that calibrates AI outputs to match your brand voice with:</p>
          <ul>
            <li>Specific tone, voice, and communication style parameters</li>
            <li>Terminology preferences, approved/unapproved language</li>
            <li>Structural guidelines for different content types</li>
            <li>Brand-specific examples and templates</li>
          </ul>
          <p>This document ensures that all AI-generated content maintains consistent brand standards and communication style, regardless of who's prompting the AI system.</p>
        </div>

        <div className="document-type" id="personal-bio">
          <h3>👤 Personal Bio Document</h3>
          <p>A comprehensive personal profile that helps AI systems understand your unique professional identity:</p>
          <ul>
            <li>Professional background, experience, and expertise areas</li>
            <li>Communication style, voice preferences, and personal brand</li>
            <li>Goals, values, and priorities that influence your work</li>
            <li>Learning preferences and decision-making approaches</li>
          </ul>
          <p>This document enables AI systems to provide highly personalized responses that align with your individual preferences, professional expertise, and communication style, creating a more tailored experience.</p>
        </div>
        
        <div className="document-type" id="offer-documentation">
          <h3>🏷️ Offer Documentation Brief</h3>
          <p>A detailed, structured blueprint for your product or service offering:</p>
          <ul>
            <li>Core value proposition and positioning strategy</li>
            <li>Target customer profile and pain points addressed</li>
            <li>Features, deliverables, and customer experience journey</li>
            <li>Pricing strategy, conversion mechanisms, and objection handling</li>
          </ul>
          <p>This document helps AI systems create more effective sales copy, marketing materials, and customer communications that accurately reflect your offer's unique value and competitive positioning.</p>
        </div>
        
        <div className="document-type" id="sales-messaging">
          <h3>🎯 Sales Messaging Playbook</h3>
          <p>A comprehensive communication framework for persuasive, consistent sales messaging:</p>
          <ul>
            <li>Core messaging and value proposition frameworks</li>
            <li>Customer awareness-level specific communication strategies</li>
            <li>Channel-optimized messaging templates and examples</li>
            <li>Emotional triggers, objection handling, and conversion techniques</li>
          </ul>
          <p>This document enables AI systems to generate highly persuasive, audience-calibrated sales copy across various platforms and touchpoints while maintaining consistent messaging aligned with your unique value proposition.</p>
        </div>
      </div>

      <div className="about-section">
        <h2>Benefits of Semantic Calibration</h2>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Enhanced Accuracy</h3>
            <p>Get responses that accurately reflect your specific business context rather than generic information</p>
          </div>
          
          <div className="benefit-card">
            <h3>Consistent Outputs</h3>
            <p>Maintain brand and messaging consistency across different AI interactions and team members</p>
          </div>
          
          <div className="benefit-card">
            <h3>Reduced Hallucinations</h3>
            <p>Minimize AI fabrications by providing detailed, factual information about your business</p>
          </div>
          
          <div className="benefit-card">
            <h3>Time Efficiency</h3>
            <p>Save time by not having to repeatedly explain your business context in every AI conversation</p>
          </div>
          
          <div className="benefit-card">
            <h3>Knowledge Transfer</h3>
            <p>Easily share organizational knowledge with new team members through structured documents</p>
          </div>
          
          <div className="benefit-card">
            <h3>AI Prompt Optimization</h3>
            <p>Shorter, more effective prompts because context is already established</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to enhance your AI interactions?</h2>
        <p>Forge your first context document and experience the difference in AI output quality.</p>
        <div className="cta-buttons">
          <Link to="/forge" className="primary-button">Start Forging</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;