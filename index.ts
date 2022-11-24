// Import stylesheets
import './style.css';

// Write TypeScript code!

function print() {
  var label = 'html_string';
  label = btoa(label);
  label = label.replace(/=/g, '_');
  window.location.href = 'arrowhead://x-callback-url/htmlcode?code=' + label;
}
