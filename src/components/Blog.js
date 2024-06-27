import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Import Darcula-like theme
import 'prismjs/components/prism-python'; // Import Prism.js language support

const Blog = () => {
  // Başlangıçta tüm gönderiler için expandedPosts true olarak ayarlandı
  const initialExpandedState = {
    0: true,
    1: true,
    2: true,
    // Ekstra gönderileriniz varsa onları da buraya ekleyin
  };

  const [expandedPosts, setExpandedPosts] = useState(initialExpandedState);

  useEffect(() => {
    Prism.highlightAll(); // Ensure Prism highlights the code
  }, [expandedPosts]);

  const blogPosts = [
    {
      title: "Understanding the Random Forest Algorithm",
      excerpt: "Learn how the Random Forest algorithm works, its applications, and why it's a popular choice for both classification and regression tasks...",
      content: `
        <p>Random Forest is a versatile machine learning algorithm capable of performing both regression and classification tasks. It is also a handy tool for feature selection and identifying important variables in a dataset. Here’s how it works:</p>
        <h4>How it Works</h4>
        <p>Random Forest builds multiple decision trees and merges them together to get a more accurate and stable prediction. The general idea is to combine the output of multiple (randomly created) decision trees to generate a single result.</p>
        <h4>Applications</h4>
        <p>Random Forest is used in various applications, such as:</p>
        <ul>
          <li>Fraud detection</li>
          <li>Stock market prediction</li>
          <li>Medical diagnosis</li>
        </ul>
        <h4>Example Code</h4>
        <pre><code class="language-python" style="font-size: 12px;">
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load dataset
data = pd.read_csv('data.csv')
X = data.drop('target', axis=1)
y = data['target']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)

# Make predictions
predictions = clf.predict(X_test)
        </code></pre>
      `,
      image: "https://miro.medium.com/v2/resize:fit:1358/1*jE1Cb1Dc_p9WEOPMkC95WQ.png"
    },
    {
      title: "A Beginner's Guide to Neural Networks",
      excerpt: "Dive into the world of neural networks, understanding their structure, how they learn, and their use in modern AI applications and more...",
      content: `
        <p>Neural networks are a fundamental part of deep learning and are used to solve a variety of complex tasks in AI. Here’s a basic overview:</p>
        <h4>Introduction</h4>
        <p>A neural network is a series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.</p>
        <h4>Structure</h4>
        <p>Neural networks consist of layers of interconnected nodes. Each node represents a neuron, and each connection represents a synapse. The layers include:</p>
        <ul>
          <li>Input Layer</li>
          <li>Hidden Layers</li>
          <li>Output Layer</li>
        </ul>
        <h4>Learning Process</h4>
        <p>Neural networks learn by adjusting the weights of the connections based on the error of the output compared to the expected result. This process is known as backpropagation.</p>
        <h4>Example Code</h4>
        <pre><code class="language-python" style="font-size: 12px;">
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Load dataset
data = pd.read_csv('data.csv')
X = data.drop('target', axis=1)
y = data['target']

# Define the model
model = Sequential()
model.add(Dense(12, input_dim=X.shape[1], activation='relu'))
model.add(Dense(8, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

# Compile the model
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model
model.fit(X, y, epochs=150, batch_size=10, verbose=1)

# Make predictions
predictions = model.predict(X)
        </code></pre>
      `,
      image: "https://media.licdn.com/dms/image/C4E12AQG1YRTeaIwxsQ/article-cover_image-shrink_720_1280/0/1600906154133?e=2147483647&v=beta&t=3Qp8n6RJMsBmaw0OVRI1IGLubSWi8NQepqMHXhO8QYM"
    },
    {
      title: "Top 20 SAP Transaction Codes for Efficient Workflows",
      excerpt: "Discover the most essential SAP transaction codes that can streamline your workflows and boost productivity in your organization...",
      content: `
        <p>SAP transaction codes are crucial for navigating through the SAP system efficiently. Here are the top 20 essential codes:</p>
        <ul>
          <li><strong>ME21N:</strong> Create Purchase Order</li>
          <li><strong>ME51N:</strong> Create Purchase Requisition</li>
          <li><strong>VA01:</strong> Create Sales Order</li>
          <li><strong>MM03:</strong> Display Material</li>
          <li><strong>FB50:</strong> Enter G/L Account Document</li>
          <li><strong>FBL1N:</strong> Vendor Line Item Display</li>
          <li><strong>FBL3N:</strong> G/L Account Line Item Display</li>
          <li><strong>FBL5N:</strong> Customer Line Item Display</li>
          <li><strong>SE80:</strong> Object Navigator</li>
          <li><strong>ST22:</strong> Dump Analysis</li>
          <li><strong>ME23N:</strong> Display Purchase Order</li>
          <li><strong>CO03:</strong> Display Production Order</li>
          <li><strong>SE38:</strong> ABAP Editor</li>
          <li><strong>SE37:</strong> Function Builder</li>
          <li><strong>SE93:</strong> Transaction Code Maintenance</li>
          <li><strong>ME11:</strong> Create Purchasing Info Record</li>
          <li><strong>MB52:</strong> List of Warehouse Stocks on Hand</li>
          <li><strong>MIRO:</strong> Enter Incoming Invoice</li>
          <li><strong>VL01N:</strong> Create Outbound Delivery</li>
          <li><strong>VL02N:</strong> Change Outbound Delivery</li>
        </ul>
        <h4>Explanation of Selected Codes</h4>
        <ul>
          <li><strong>ME21N:</strong> Used to create a purchase order. It facilitates the procurement process by allowing users to specify vendor details, materials, quantities, and prices.</li>
          <li><strong>VA01:</strong> Allows users to create sales orders. It involves entering customer information, items, quantities, delivery dates, and pricing conditions.</li>
          <li><strong>FB50:</strong> Enables users to enter general ledger account documents. This transaction is crucial for financial accounting, allowing detailed entry of accounting transactions.</li>
          <li><strong>FBL1N:</strong> Displays vendor line items, providing insight into vendor transactions and outstanding balances, aiding in vendor account management.</li>
          <li><strong>SE80:</strong> The Object Navigator, a comprehensive tool for developers to manage all development objects like programs, function modules, and classes in the SAP system.</li>
        </ul>
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrbl9RlC3xBVwQqzFOTafHq98JNLqkx_tpw&s"
    },
    // Additional blog posts...
  ];

  const toggleExpand = (index) => {
    setExpandedPosts((prevExpandedPosts) => ({
      ...prevExpandedPosts,
      [index]: !prevExpandedPosts[index],
    }));
  };

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-blue-700">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <button 
                onClick={() => toggleExpand(index)} 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-2 inline-block">
                {expandedPosts[index] ? 'Show Less' : 'Read More'}
              </button>
              {expandedPosts[index] && (
                <div className="mt-4 text-left text-sm">
                  <div className="bg-gray-900 text-white p-4 rounded">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
