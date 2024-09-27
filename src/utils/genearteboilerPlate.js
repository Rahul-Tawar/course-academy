import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Resolve the current file and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const components = [
  'CourseDescription',
  'FAQ',
  'Purchase',
  'Video',
  'WhatYouWillLearn',
];

const boilerplate = (componentName) => `
import React from 'react';

const ${componentName} = () => {
  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};
`;

components.forEach((component) => {
  // Correct path to the components directory
  const componentPath = path.join(__dirname, '..', 'pages', 'course-details', `${component}.jsx`);
  
  // Create the file with boilerplate code
  fs.writeFileSync(componentPath, boilerplate(component.trim()), 'utf8');
  console.log(`Created ${componentPath}`);
});
