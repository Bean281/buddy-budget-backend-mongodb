#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Debugging Render deployment paths...');
console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);

// Check if dist directory exists
const distPath = path.join(process.cwd(), 'dist');
const distExists = fs.existsSync(distPath);
console.log('dist directory exists:', distExists);

if (distExists) {
  const distContents = fs.readdirSync(distPath);
  console.log('dist directory contents:', distContents);
  
  const mainJsPath = path.join(distPath, 'main.js');
  const mainJsExists = fs.existsSync(mainJsPath);
  console.log('main.js exists:', mainJsExists);
  console.log('main.js path:', mainJsPath);
  
  if (mainJsExists) {
    console.log('✅ Starting application...');
    const child = spawn('node', [mainJsPath], {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    child.on('error', (error) => {
      console.error('❌ Error starting application:', error);
      process.exit(1);
    });
    
    child.on('exit', (code) => {
      console.log(`Application exited with code ${code}`);
      process.exit(code);
    });
  } else {
    console.error('❌ main.js not found in dist directory');
    process.exit(1);
  }
} else {
  console.error('❌ dist directory not found');
  console.log('📁 Current directory contents:');
  try {
    const contents = fs.readdirSync(process.cwd());
    console.log(contents);
  } catch (error) {
    console.error('Error reading directory:', error);
  }
  process.exit(1);
}
