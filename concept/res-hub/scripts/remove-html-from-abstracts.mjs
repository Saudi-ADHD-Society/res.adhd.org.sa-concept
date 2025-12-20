import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const papersDir = path.join(__dirname, '../src/content/papers');

/**
 * Remove HTML tags from a string
 * @param {string} text - Text that may contain HTML tags
 * @returns {string} - Text with HTML tags removed
 */
function removeHtmlTags(text) {
  if (!text || typeof text !== 'string') {
    return text;
  }
  // Remove all HTML tags (including self-closing tags)
  return text.replace(/<[^>]+>/g, '');
}

/**
 * Process a single paper JSON file
 * @param {string} filePath - Path to the JSON file
 */
function processPaperFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const paper = JSON.parse(content);
    
    let updated = false;
    
    // Check if abstract exists and contains HTML
    if (paper.abstract && typeof paper.abstract === 'string') {
      const originalAbstract = paper.abstract;
      const cleanedAbstract = removeHtmlTags(originalAbstract);
      
      if (originalAbstract !== cleanedAbstract) {
        paper.abstract = cleanedAbstract;
        updated = true;
      }
    }
    
    // Save if updated
    if (updated) {
      fs.writeFileSync(filePath, JSON.stringify(paper, null, 2) + '\n', 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main function to process all paper files
 */
function main() {
  const files = fs.readdirSync(papersDir);
  const jsonFiles = files.filter(file => file.endsWith('.json'));
  
  console.log(`Found ${jsonFiles.length} paper files to process...`);
  
  let processedCount = 0;
  let updatedCount = 0;
  
  for (const file of jsonFiles) {
    const filePath = path.join(papersDir, file);
    const wasUpdated = processPaperFile(filePath);
    
    processedCount++;
    if (wasUpdated) {
      updatedCount++;
      console.log(`✓ Updated: ${file}`);
    }
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`Total files processed: ${processedCount}`);
  console.log(`Files updated: ${updatedCount}`);
}

main();

