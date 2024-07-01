import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import './CodeEditor.css';

function CodeEditor() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runJavaScriptCode = (code) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(URL.createObjectURL(new Blob([`
        self.onmessage = function(e) {
          try {
            const result = eval(e.data);
            self.postMessage({ result: result !== undefined ? result : 'No output' });
          } catch (err) {
            self.postMessage({ error: err.message });
          }
        };
      `], { type: 'application/javascript' })));

      worker.onmessage = function(e) {
        if (e.data.error) {
          reject(e.data.error);
        } else {
          resolve(e.data.result);
        }
        worker.terminate();
      };

      worker.postMessage(code);
    });
  };

  const runCode = async () => {
    let result;
    if (language === 'javascript') {
      try {
        result = await runJavaScriptCode(code);
      } catch (err) {
        result = err;
      }
    } else {
      try {
        const response = await axios.post('http://localhost:5001/run', {
          language,
          code,
        });
        result = response.data.result;
      } catch (err) {
        result = err.message;
      }
    }
    setOutput(result);
  };

  return (
    <section id="coding" className="code-editor-section">
      <div className="container1">
        <h2 className="section-title pt-20">Code Editor</h2>
        <div className="code-editor-header">
          <select onChange={(e) => setLanguage(e.target.value)} value={language}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
          <button onClick={runCode}>Run Code</button>
        </div>
        <div className="editor-container">
          <Editor
            height="50vh"
            language={language}
            value={code}
            theme="vs-dark"
            onChange={(value) => setCode(value)}
          />
        </div>
        <div className="output-container">
          <pre>{output}</pre>
        </div>
      </div>
    </section>
  );
}

export default CodeEditor;
