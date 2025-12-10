import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy loading pages for performance
const Home = lazy(() => import('./pages/Home'));
const Generator = lazy(() => import('./pages/Generator'));
const Templates = lazy(() => import('./pages/Templates'));
const Favorites = lazy(() => import('./pages/Favorites'));

// Simple loading spinner
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-light dark:bg-dark">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/template/:id" element={<SingleTemplateRedirect />} />
            <Route path="/search" element={<Navigate to="/templates" replace />} />
            
            {/* Pages with Aadarsha Bashyal's Info */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  );
};

// Helper to redirect template detail view to generator for MVP
const SingleTemplateRedirect = () => {
  const { id } = useParams();
  return <Navigate to={`/generator?template=${id}`} replace />;
};

// --- Custom Pages ---

const AboutPage = () => (
  <div className="container mx-auto px-4 py-20 max-w-3xl animate-fade-in">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-display font-bold mb-4 text-slate-900 dark:text-white">About MemeSquare</h1>
      <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
    </div>
    
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-center">
        MemeSquare is your ultimate destination for creating the most lovable and viral memes on the internet. 
        We provide a vast library of over 10,000 templates, including extensive collections for Indian and Nepali users.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 border-t border-slate-100 dark:border-slate-700 pt-12">
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Developer & Owner</h3>
          <p className="text-2xl font-display font-bold text-primary">Aadarsha Bashyal</p>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Kathmandu, Nepal</p>
        </div>
        
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Company</h3>
          <p className="text-2xl font-display font-bold text-secondary">Bashyal Team</p>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Innovative Web Solutions</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-20 max-w-2xl text-center animate-fade-in">
    <h1 className="text-4xl font-display font-bold mb-8 text-slate-900 dark:text-white">Contact Us</h1>
    <div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-xl">
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
        We'd love to hear from you! Whether you have a suggestion for a new template, found a bug, or just want to say hi.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Email Us At</p>
        <a href="mailto:bashyalteam@gmail.com" className="text-2xl md:text-3xl font-bold text-primary hover:text-indigo-600 transition-colors break-all">
          bashyalteam@gmail.com
        </a>
      </div>
      
      <div className="mt-8 text-slate-500 dark:text-slate-400">
        <p>Aadarsha Bashyal</p>
        <p>Bashyal Team, Nepal</p>
      </div>
    </div>
  </div>
);

const PrivacyPage = () => (
  <div className="container mx-auto px-4 py-20 max-w-4xl animate-fade-in">
    <h1 className="text-3xl font-display font-bold mb-8 text-slate-900 dark:text-white">Privacy Policy</h1>
    <div className="prose dark:prose-invert max-w-none bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <h3>1. Introduction</h3>
      <p>Welcome to MemeSquare, operated by <strong>Bashyal Team</strong> and owned by <strong>Aadarsha Bashyal</strong>. We respect your privacy.</p>
      <h3>2. Data Collection</h3>
      <p>We do not store your personal images on our servers. All meme generation happens client-side in your browser. We may use local storage to save your preferences and favorite memes.</p>
      <h3>3. Contact</h3>
      <p>For any privacy concerns, please contact us at <a href="mailto:bashyalteam@gmail.com" className="text-primary">bashyalteam@gmail.com</a>.</p>
    </div>
  </div>
);

const TermsPage = () => (
  <div className="container mx-auto px-4 py-20 max-w-4xl animate-fade-in">
    <h1 className="text-3xl font-display font-bold mb-8 text-slate-900 dark:text-white">Terms of Service</h1>
    <div className="prose dark:prose-invert max-w-none bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <h3>1. Ownership</h3>
      <p>MemeSquare is owned and operated by <strong>Aadarsha Bashyal</strong> (Bashyal Team) from Nepal.</p>
      <h3>2. Usage</h3>
      <p>You are free to use our tools to generate memes. You are responsible for the content you create.</p>
      <h3>3. Contact</h3>
      <p>Questions? Email us at <a href="mailto:bashyalteam@gmail.com" className="text-primary">bashyalteam@gmail.com</a>.</p>
    </div>
  </div>
);

export default App;