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
  
  // Try multiple possible locations for main.js
  const possiblePaths = [
    path.join(distPath, 'main.js'),           // dist/main.js
    path.join(distPath, 'src', 'main.js'),    // dist/src/main.js
    path.join(process.cwd(), 'dist', 'main.js'), // absolute path
  ];
  
  let mainJsPath = null;
  let mainJsExists = false;
  
  for (const possiblePath of possiblePaths) {
    console.log('Checking path:', possiblePath);
    if (fs.existsSync(possiblePath)) {
      mainJsPath = possiblePath;
      mainJsExists = true;
      console.log('✅ Found main.js at:', possiblePath);
      break;
    }
  }
  
  if (mainJsExists && mainJsPath) {
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
    console.error('❌ main.js not found in any expected location');
    console.log('📁 Exploring dist directory structure:');
    
    function exploreDirectory(dirPath, prefix = '') {
      try {
        const items = fs.readdirSync(dirPath);
        items.forEach(item => {
          const itemPath = path.join(dirPath, item);
          const stats = fs.statSync(itemPath);
          if (stats.isDirectory()) {
            console.log(`${prefix}📁 ${item}/`);
            if (prefix.length < 6) { // Limit depth
              exploreDirectory(itemPath, prefix + '  ');
            }
          } else {
            console.log(`${prefix}📄 ${item}`);
          }
        });
      } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error.message);
      }
    }
    
    exploreDirectory(distPath);
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
