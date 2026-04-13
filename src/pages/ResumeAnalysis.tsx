import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDropzone } from 'react-dropzone';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ChevronRight, 
  Search, 
  Lightbulb, 
  Target,
  RefreshCw,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI, Type } from "@google/genai";
import * as pdfjs from 'pdfjs-dist';

// Set up PDF.js worker for Vite using the standard URL constructor
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url
).toString();

interface AnalysisResult {
  atsScore: number;
  keywordSuggestions: string[];
  improvementTips: string[];
  missingSkills: string[];
  rewriteSuggestions: { original: string; suggested: string }[];
}

const ResumeAnalysis = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError(null);
      setResult(null);
    } else {
      setError('Please upload a valid PDF file.');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false
  } as any);

  const extractTextFromPDF = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    // Use a simpler worker setup if possible, or cast to any to avoid type issues
    const pdf = await (pdfjs as any).getDocument({ data: arrayBuffer }).promise;
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(' ');
      fullText += pageText + '\n';
    }
    
    return fullText;
  };

  const analyzeResume = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      console.log('Starting PDF extraction for:', file.name);
      const resumeText = await extractTextFromPDF(file);
      console.log('Extracted text length:', resumeText.length);
      
      if (resumeText.trim().length < 50) {
        throw new Error('The resume content seems too short or could not be read properly.');
      }

      const apiKey = process.env.GEMINI_API_KEY || '';
      if (!apiKey) {
        throw new Error('Gemini API Key is missing. Please configure it in the settings.');
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      console.log('Sending request to Gemini...');
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an expert ATS (Applicant Tracking System) analyzer. Analyze the following resume text and provide a detailed report in JSON format.
        
        CRITICAL: Your response MUST be a valid JSON object. Do not include any markdown formatting or extra text outside the JSON.
        
        The report should include:
        - atsScore: A number from 0 to 100.
        - keywordSuggestions: An array of strings representing keywords that should be added or emphasized.
        - improvementTips: An array of strings with specific advice on formatting, structure, or content.
        - missingSkills: An array of strings identifying skills that are commonly expected for the roles implied by the resume but are missing.
        - rewriteSuggestions: An array of objects with 'original' and 'suggested' fields for specific bullet points or sections.

        Resume Text:
        ${resumeText}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              atsScore: { type: Type.NUMBER },
              keywordSuggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
              improvementTips: { type: Type.ARRAY, items: { type: Type.STRING } },
              missingSkills: { type: Type.ARRAY, items: { type: Type.STRING } },
              rewriteSuggestions: { 
                type: Type.ARRAY, 
                items: { 
                  type: Type.OBJECT, 
                  properties: { 
                    original: { type: Type.STRING }, 
                    suggested: { type: Type.STRING } 
                  },
                  required: ["original", "suggested"]
                } 
              }
            },
            required: ["atsScore", "keywordSuggestions", "improvementTips", "missingSkills", "rewriteSuggestions"]
          }
        }
      });

      const text = response.text;
      if (!text) {
        throw new Error('Empty response from AI model.');
      }

      // Strip markdown code blocks if present
      const cleanedText = text.replace(/```json\n?|```/g, '').trim();
      
      try {
        const analysisData = JSON.parse(cleanedText);
        setResult(analysisData);
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError, 'Raw text:', text);
        throw new Error('Failed to parse analysis results. Please try again.');
      }
    } catch (err: any) {
      console.error('Analysis error:', err);
      setError(err.message || 'An error occurred during analysis. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-red-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            AI Resume Analysis
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get an instant ATS score and professional optimization tips powered by advanced AI.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-24">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100"
            >
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold text-secondary mb-4">Upload Your Resume</h2>
                <p className="text-gray-600">We support PDF files. Your data is analyzed securely.</p>
              </div>

              <div 
                {...getRootProps()} 
                className={`border-3 border-dashed rounded-[2rem] p-12 text-center transition-all cursor-pointer ${
                  isDragActive ? 'border-primary bg-red-50' : 'border-gray-200 hover:border-primary hover:bg-gray-50'
                }`}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
                    <Upload className="text-primary" size={32} />
                  </div>
                  {file ? (
                    <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                      <FileText className="text-primary" size={20} />
                      <span className="font-bold text-secondary">{file.name}</span>
                    </div>
                  ) : (
                    <>
                      <p className="text-xl font-bold text-secondary mb-2">
                        {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume'}
                      </p>
                      <p className="text-gray-500">or click to browse files</p>
                    </>
                  )}
                </div>
              </div>

              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center text-red-600">
                  <AlertCircle size={20} className="mr-3 flex-shrink-0" />
                  <p className="font-medium">{error}</p>
                </div>
              )}

              <div className="mt-10 flex justify-center">
                <button
                  onClick={analyzeResume}
                  disabled={!file || isAnalyzing}
                  className={`px-12 py-5 rounded-full font-bold text-lg shadow-lg transition-all flex items-center space-x-3 ${
                    !file || isAnalyzing 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-primary text-white hover:bg-primary-dark hover:shadow-red-200'
                  }`}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      <span>Analyzing Resume...</span>
                    </>
                  ) : (
                    <>
                      <Target size={24} />
                      <span>Generate ATS Score</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-green-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">ATS Score</h4>
                    <p className="text-sm text-gray-500">Check how well you rank</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Keywords</h4>
                    <p className="text-sm text-gray-500">Identify missing terms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">AI Tips</h4>
                    <p className="text-sm text-gray-500">Smart rewrite suggestions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              {/* Score Card */}
              <div className="bg-white rounded-[2.5rem] shadow-xl p-10 border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-secondary mb-4">Your ATS Analysis Result</h2>
                    <p className="text-gray-600 max-w-md">
                      Based on our AI analysis, your resume has a strong foundation but could benefit from some strategic optimizations.
                    </p>
                    <button 
                      onClick={reset}
                      className="mt-8 flex items-center space-x-2 text-primary font-bold hover:text-secondary transition-colors"
                    >
                      <RefreshCw size={18} />
                      <span>Analyze Another Resume</span>
                    </button>
                  </div>
                  
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        className="text-gray-100"
                      />
                      <motion.circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={552.92}
                        initial={{ strokeDashoffset: 552.92 }}
                        animate={{ strokeDashoffset: 552.92 - (552.92 * result.atsScore) / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-primary"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-black text-secondary">{result.atsScore}</span>
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Score</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Keywords & Skills */}
                <div className="space-y-8">
                  <div className="bg-white rounded-[2rem] shadow-lg p-8 border border-gray-100">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Search className="text-blue-500" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">Keyword Suggestions</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {result.keywordSuggestions.map((kw, i) => (
                        <span key={i} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-[2rem] shadow-lg p-8 border border-gray-100">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                        <Target className="text-purple-500" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">Missing Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {result.missingSkills.map((skill, i) => (
                        <span key={i} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-bold border border-purple-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Improvement Tips */}
                <div className="bg-white rounded-[2rem] shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Lightbulb className="text-orange-500" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">Improvement Tips</h3>
                  </div>
                  <ul className="space-y-4">
                    {result.improvementTips.map((tip, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-600">
                        <ChevronRight className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Rewrite Suggestions */}
              <div className="bg-white rounded-[2rem] shadow-lg p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                    <RefreshCw className="text-green-500" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">AI-Powered Rewrite Suggestions</h3>
                </div>
                <div className="space-y-6">
                  {result.rewriteSuggestions.map((item, i) => (
                    <div key={i} className="grid md:grid-cols-2 gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Original</span>
                        <p className="text-gray-500 italic text-sm">"{item.original}"</p>
                      </div>
                      <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest block mb-2">Suggested</span>
                        <p className="text-secondary font-medium">"{item.suggested}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResumeAnalysis;
