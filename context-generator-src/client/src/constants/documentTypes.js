/**
 * Types of documents that can be generated by the application
 */
export const DOCUMENT_TYPES = {
  TARGET_MARKET_AUDIENCE: 'targetMarketAudience',
  BUSINESS_PROFILE: 'businessProfile',
  STYLE_GUIDE: 'styleGuide',
  PERSONAL_BIO: 'personalBio',
  OFFER_DOCUMENTATION: 'offerDocumentation',
  SALES_MESSAGING_PLAYBOOK: 'salesMessagingPlaybook'
};

/**
 * Display names for document types
 */
export const DOCUMENT_TYPE_NAMES = {
  [DOCUMENT_TYPES.TARGET_MARKET_AUDIENCE]: 'Target Market Audience Profile',
  [DOCUMENT_TYPES.BUSINESS_PROFILE]: 'Business Dimensional Profile',
  [DOCUMENT_TYPES.STYLE_GUIDE]: 'AI Style Guide',
  [DOCUMENT_TYPES.PERSONAL_BIO]: 'Personal Bio Document',
  [DOCUMENT_TYPES.OFFER_DOCUMENTATION]: 'Offer Documentation Brief',
  [DOCUMENT_TYPES.SALES_MESSAGING_PLAYBOOK]: 'Sales Messaging Playbook'
};

/**
 * Icons for document types (can be replaced with actual icon components)
 */
export const DOCUMENT_TYPE_ICONS = {
  [DOCUMENT_TYPES.TARGET_MARKET_AUDIENCE]: '📊',
  [DOCUMENT_TYPES.BUSINESS_PROFILE]: '📈',
  [DOCUMENT_TYPES.STYLE_GUIDE]: '📝',
  [DOCUMENT_TYPES.PERSONAL_BIO]: '👤',
  [DOCUMENT_TYPES.OFFER_DOCUMENTATION]: '🏷️',
  [DOCUMENT_TYPES.SALES_MESSAGING_PLAYBOOK]: '🎯'
};

/**
 * Descriptions for document types
 */
export const DOCUMENT_TYPE_DESCRIPTIONS = {
  [DOCUMENT_TYPES.TARGET_MARKET_AUDIENCE]: 'Comprehensive analysis of your ideal customer segments for semantically calibrating AI systems to accurately understand and target your specific audience demographics, psychographics, behaviors, and needs.',
  [DOCUMENT_TYPES.BUSINESS_PROFILE]: 'Detailed business context document that enables AI systems to generate outputs precisely aligned with your unique business model, market position, offerings, and strategic objectives.',
  [DOCUMENT_TYPES.STYLE_GUIDE]: 'Advanced AI calibration document for consistently aligning AI-generated content with your brand voice, terminology preferences, and communication standards across all platforms.',
  [DOCUMENT_TYPES.PERSONAL_BIO]: 'Comprehensive personal profile that helps AI systems understand your professional background, expertise, communication style, and preferences to generate more personalized and contextually relevant outputs.',
  [DOCUMENT_TYPES.OFFER_DOCUMENTATION]: 'Detailed, AI-calibrated offer brief that structures your product or service messaging, positioning, and customer clarity for more effective sales pages, pitches, and marketing materials.',
  [DOCUMENT_TYPES.SALES_MESSAGING_PLAYBOOK]: 'Strategic communication framework that helps AI systems create persuasive, audience-aligned sales copy across different awareness levels, channels, and buyer personas for consistent and effective messaging.'
};

/**
 * Recommended users for document types
 */
export const DOCUMENT_TYPE_RECOMMENDED_FOR = {
  [DOCUMENT_TYPES.TARGET_MARKET_AUDIENCE]: 'Marketing teams working with AI, digital marketers using LLMs, customer insight specialists',
  [DOCUMENT_TYPES.BUSINESS_PROFILE]: 'AI implementation teams, business strategists leveraging AI tools, consultants optimizing AI workflows',
  [DOCUMENT_TYPES.STYLE_GUIDE]: 'Content teams using generative AI, brand managers implementing AI assistants, AI prompt engineers',
  [DOCUMENT_TYPES.PERSONAL_BIO]: 'Professionals using AI assistants, freelancers leveraging AI tools, executives with AI support, content creators working with LLMs',
  [DOCUMENT_TYPES.OFFER_DOCUMENTATION]: 'Product teams, service providers, course creators, membership site owners, digital product sellers, copywriters working on sales pages',
  [DOCUMENT_TYPES.SALES_MESSAGING_PLAYBOOK]: 'Sales teams, marketing copywriters, conversion specialists, sales trainers, email marketers, content strategists, campaign managers'
};