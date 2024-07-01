/**
 * Programming With JavaScript - QAP2
 *
 *
 * Please update the following with your information:
 *
 *      Name: Clovis Neba
 *      Date: July 1, 2024
 */

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscore
 * ('_'), and makes it lowercase.
 *
 * We want to be able to convert a string to Lower Snake Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are lower cased.
 *
 * The snake() function should work like this:
 *
 * snake('abc') --> returns 'abc'
 * snake(' ABC ') --> returns 'abc'
 * snake('ABC') --> returns 'abc'
 * snake('A BC') --> returns 'a_bc'
 * snake(' A bC  ') --> returns 'a_bc'
 * snake('A   BC') --> returns 'a_bc'
 * snake('A.BC') --> returns 'a_bc'
 * snake(' A..  B   C ') --> returns 'a_b_c'
 *
 ******************************************************************************/

function snake(value) {
    value = value.trim();
    
    value = value.replace(/\s+|\.+/g, '_').toLowerCase();
    
    return value;
  }

/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to video:
 *
 * http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image? or a video?), we have to use special markup. The <video>
 * tag is how we specify that a URL is to be interpreted as a video, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 *
 * Here is how we might use HTML to markup this video:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>
 *
 * Our <video> has two attributes:
 *
 * - src: the URL to a video file
 * - width: the width to use (in pixels) when showing the video
 *
 * Write the createVideo() function to accept a URL and width, and return the
 * properly formatted video element.  For example:
 *
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 *
 * should return the following string of HTML:
 *
 * '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
 *
 * A <video> can also optionally contain a `controls` attribute, which turns on the play/pause/etc controls. For example:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>
 *
 * In this case, the <video> element should include the user controls.  Therefore,
 * your createVideo() function should also accept a third argument, controls:
 *
 * // No controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 * // With controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true)
 *
 * The returned <video> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and width attribute values should be wrapped in double-quotes (e.g., src="..." width="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." width="..." controls)
 * - The width attribute should only be added if a valid integer value (number or string) is included.  Otherwise ignore it.
 *
 * ******************************************************************************/


  function createVideo(src, width, controls) {
    // Trim leading and trailing whitespace from src
    src = src.trim();
    
    // Initialize the video element string
    let videoElement = `<video src="${src}"`;
    
    // Check if width is a valid integer
    if (Number.isInteger(parseInt(width))) {
      videoElement += ` width="${width}"`;
    }
    
    // Add the controls attribute if controls parameter is true
    if (controls) {
      videoElement += ' controls';
    }
    
    // Close the video tag
    videoElement += '></video>';
    
    return videoElement;
  }
  
  // Test cases
  console.log(createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true));
  // Output: '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>'
  
  console.log(createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', '500', false));
  // Output: '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
  
  console.log(createVideo(' http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4 ', 400));
  // Output: '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="400"></video>'


/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * January 1, 2021 would therefore be the following date string:
 *
 * 2021-01-01
 *
 * Similarly, September 29, 2021 would be:
 *
 * 2021-09-29
 *
 * Write a function, parseDateString() that accepts a date string of the format
 * specified above, and returns a JavaScript Date object, set to the correct day.
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * To help developers using your function, you are asked to provide detailed error
 * messages when the date string is formatted incorrectly.  We will use the `throw`
 * statement to throw an Error object when a particular value is not what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01-01-01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021-1-01') should fail because
 * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also
 * cause an exception to be thrown, for example parseDateString(null) or
 * parseDateString("this is totally wrong").
 *
 ******************************************************************************/

function parseDateString(value) {
  if (typeof value !== 'string') {
    throw new Error('Invalid date string: not a string');
  }

  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!datePattern.test(value)) {
    throw new Error('Invalid date string: incorrect format');
  }

  const [year, month, day] = value.split('-').map(Number);

  if (year < 1000 || year > 9999) {
    throw new Error('Invalid year: should be 4 digits');
  }

  if (month < 1 || month > 12) {
    throw new Error('Invalid month: should be between 01 and 12');
  }

  if (day < 1 || day > 31) {
    throw new Error('Invalid day: should be between 01 and 31');
  }

  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1); // JavaScript months are 0-based
  date.setDate(day);

  return date;
}

// Test cases
console.log(parseDateString('2021-01-01')); // Date object for January 1, 2021
console.log(parseDateString('2021-09-29')); // Date object for September 29, 2021

try {
  console.log(parseDateString('01-01-01'));
} catch (error) {
  console.log(error.message); // Invalid year: should be 4 digits
}

try {
  console.log(parseDateString('2021-1-01'));
} catch (error) {
  console.log(error.message); // Invalid date string: incorrect format
}

try {
  console.log(parseDateString('2021-01-1'));
} catch (error) {
  console.log(error.message); // Invalid date string: incorrect format
}

try {
  console.log(parseDateString(null));
} catch (error) {
  console.log(error.message); // Invalid date string: not a string
}

try {
  console.log(parseDateString('this is totally wrong'));
} catch (error) {
  console.log(error.message); // Invalid date string: incorrect format
}


/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 *
 * As above, a date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object, and returns a
 * date string formatted according to the specification above. Make sure your
 * day and month values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021-01-29)) should return '2021-01-29'
 *
 * If an invalid Date is passed, throw an Error object with an appropriate error message.
 * HINT: use try/catch, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 ******************************************************************************/

function parseDateString(value) {
  if (typeof value !== 'string') {
    throw new Error('Invalid input: Input must be a string.');
  }

  // Check the format using a regular expression
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(value)) {
    throw new Error('Invalid format: Date must be in YYYY-MM-DD format.');
  }

  // Split the string into components
  const [year, month, day] = value.split('-').map(Number);

  // Validate the components
  if (year < 1000 || year > 9999) {
    throw new Error('Invalid year: Year must be a 4-digit number.');
  }
  if (month < 1 || month > 12) {
    throw new Error('Invalid month: Month must be between 01 and 12.');
  }
  if (day < 1 || day > 31) {
    throw new Error('Invalid day: Day must be between 01 and 31.');
  }

  // Create and set the date object
  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1); // Months are zero-based in JavaScript
  date.setDate(day);

  return date;
}

// Test cases
try {
  console.log(parseDateString('2021-09-29')); // Should return a Date object for September 29, 2021
  console.log(parseDateString('2021-01-01')); // Should return a Date object for January 1, 2021
  console.log(parseDateString('2021-13-01')); // Should throw an error
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString('2021-09-31')); // Should throw an error (invalid day for September)
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString('2021-1-01')); // Should throw an error (invalid month format)
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString('2021-01-1')); // Should throw an error (invalid day format)
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString(null)); // Should throw an error (invalid input type)
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString('this is totally wrong')); // Should throw an error (invalid format)
} catch (e) {
  console.error(e.message);
}


/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * A example, let's suppose the Keyin College St.John's campus is located at:
 *
 * Longitude: -77.4369 (negative number means West)
 * Latitude: 42.9755 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "42.9755,-77.4369" NOTE: no space
 * 4. "[-77.4369, 42.9755]" NOTE: the space, as well as lat/lng values are reversed
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the form: "(lat, lng)"
 *
 ******************************************************************************/

function normalizeCoord(value) {
  // Define a regular expression to match the different valid formats
  const regex1 = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/; // "lat,lng"
  const regex2 = /^\[\s*(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)\s*\]$/; // "[lng, lat]"

  let lat, lng;

  if (regex1.test(value)) {
    // Match the first format "lat,lng"
    const match = value.match(regex1);
    lat = parseFloat(match[1]);
    lng = parseFloat(match[3]);
  } else if (regex2.test(value)) {
    // Match the second format "[lng, lat]"
    const match = value.match(regex2);
    lng = parseFloat(match[1]);
    lat = parseFloat(match[3]);
  } else {
    throw new Error('Invalid format: Coordinate must be in "lat,lng" or "[lng, lat]" format.');
  }

  // Validate latitude and longitude ranges
  if (lat < -90 || lat > 90) {
    throw new Error('Invalid latitude: Latitude must be between -90 and 90.');
  }
  if (lng < -180 || lng > 180) {
    throw new Error('Invalid longitude: Longitude must be between -180 and 180.');
  }

  return `(${lat}, ${lng})`;
}

// Test cases
try {
  console.log(normalizeCoord("42.9755,-77.4369")); // Should return "(42.9755, -77.4369)"
  console.log(normalizeCoord("[-77.4369, 42.9755]")); // Should return "(42.9755, -77.4369)"
  console.log(normalizeCoord("42.9755, -77.4369")); // Should return "(42.9755, -77.4369)"
  console.log(normalizeCoord("[-77.4369,42.9755]")); // Should return "(42.9755, -77.4369)"
} catch (e) {
  console.error(e.message);
}

try {
  console.log(normalizeCoord("95.0000,-77.4369")); // Should throw an error (invalid latitude)
} catch (e) {
  console.error(e.message);
}

try {
  console.log(normalizeCoord("[200.0000, 42.9755]")); // Should throw an error (invalid longitude)
} catch (e) {
  console.error(e.message);
}

try {
  console.log(normalizeCoord("invalid string")); // Should throw an error (invalid format)
} catch (e) {
  console.error(e.message);
}


/*******************************************************************************
 * Problem 6: format any number of coordinates as a list in a string
 *
 * You are asked to format geographic lat, lng coordinates in a list using your
 * normalizeCoord() function from problem 5.
 *
 * Where normalizeCoord() takes a single geographic coord, the formatCoords()
 * function takes a list of any number of geographic coordinates, parses them,
 * filters out any invalid coords, and creates a list.
 *
 * For example: given the following coords, "42.9755,-77.4369" and "[-62.1234, 42.9755]",
 * a new list would be created of the following form "((42.9755, -77.4369), (42.9755, -62.1234))".
 *
 * Notice how the list has been enclosed in an extra set of (...) braces, and each
 * formatted geographic coordinate is separated by a comma and space.
 *
 * The formatCoords() function can take any number of arguments, but they must all
 * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
 * an Error is thrown), skip the value.  For example:
 *
 * formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000") should return
 * "((42.9755, -77.4369), (42.9755, -62.1234))" and skip the invalid coordinate.
 *

 ******************************************************************************/

function normalizeCoord(value) {
  // Define a regular expression to match the different valid formats
  const regex1 = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/; // "lat,lng"
  const regex2 = /^\[\s*(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)\s*\]$/; // "[lng, lat]"

  let lat, lng;

  if (regex1.test(value)) {
    // Match the first format "lat,lng"
    const match = value.match(regex1);
    lat = parseFloat(match[1]);
    lng = parseFloat(match[3]);
  } else if (regex2.test(value)) {
    // Match the second format "[lng, lat]"
    const match = value.match(regex2);
    lng = parseFloat(match[1]);
    lat = parseFloat(match[3]);
  } else {
    throw new Error('Invalid format: Coordinate must be in "lat,lng" or "[lng, lat]" format.');
  }

  // Validate latitude and longitude ranges
  if (lat < -90 || lat > 90) {
    throw new Error('Invalid latitude: Latitude must be between -90 and 90.');
  }
  if (lng < -180 || lng > 180) {
    throw new Error('Invalid longitude: Longitude must be between -180 and 180.');
  }

  return `(${lat}, ${lng})`;
}

function formatCoords(...values) {
  const formattedCoords = values.map(value => {
    try {
      return normalizeCoord(value);
    } catch (e) {
      // Skip invalid coordinates
      return null;
    }
  }).filter(coord => coord !== null);

  return `(${formattedCoords.join(', ')})`;
}

// Test cases
console.log(formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000")); 
// Should return "((42.9755, -77.4369), (42.9755, -62.1234))"

console.log(formatCoords("42.9755,-77.4369", "[100, 42.9755]", "invalid"));
// Should return "((42.9755, -77.4369))"


/*******************************************************************************
 * Problem 7: determine MIME type from filename extension
 *
 * Web browsers and servers exchange streams of bytes, which must be interpreted
 * by the receiver based on their type.  For example, an HTML web page is
 * plain text, while a JPG image is a binary sequence.
 *
 * The Content-Type header contains information about a resource's MIME type, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
 * The type is general, for example, 'text' or 'video'.  The subtype is more
 * specific, indicating the specific type of text, image, video, etc.  See:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *
 * A number of common types are used in web development:
 *
 * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
 *
 * Your mimeFromFilename() function should support all of the following extensions
 * with and without the leading '.':
 *
 * - .html, .htm --> text/html
 * - .css --> text/css
 * - .js --> text/javascript
 * - .jpg, .jpeg --> image/jpeg
 * - .gif --> image/gif
 * - .bmp --> image/bmp
 * - .ico, .cur --> image/x-icon
 * - .png --> image/png
 * - .svg --> image/svg+xml
 * - .webp --> image/webp
 * - .mp3 --> audio/mp3
 * - .wav --> audio/wav
 * - .mp4 --> video/mp4
 * - .webm --> video/webm
 * - .json --> application/json
 * - .mpeg --> video/mpeg
 * - .csv --> text/csv
 * - .ttf --> font/ttf
 * - .woff --> font/woff
 * - .zip --> application/zip
 * - .avi --> video/x-msvideo
 *
 *
 * NOTE: any other extension should use the `application/octet-stream` MIME type,
 * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
 * also use `application/octet-stream` if the file has no extension.
 *

 ******************************************************************************/

function mimeFromFilename(filename) {
  // Extract the extension from the filename
  const extension = filename.split('.').pop().toLowerCase();
  
  // Determine the MIME type based on the extension
  switch (extension) {
    case 'html':
    case 'htm':
      return 'text/html';
    case 'css':
      return 'text/css';
    case 'js':
      return 'text/javascript';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'gif':
      return 'image/gif';
    case 'bmp':
      return 'image/bmp';
    case 'ico':
    case 'cur':
      return 'image/x-icon';
    case 'png':
      return 'image/png';
    case 'svg':
      return 'image/svg+xml';
    case 'webp':
      return 'image/webp';
    case 'mp3':
      return 'audio/mp3';
    case 'wav':
      return 'audio/wav';
    case 'mp4':
      return 'video/mp4';
    case 'webm':
      return 'video/webm';
    case 'json':
      return 'application/json';
    case 'mpeg':
      return 'video/mpeg';
    case 'csv':
      return 'text/csv';
    case 'ttf':
      return 'font/ttf';
    case 'woff':
      return 'font/woff';
    case 'zip':
      return 'application/zip';
    case 'avi':
      return 'video/x-msvideo';
    default:
      return 'application/octet-stream';
  }
}

// Test cases
console.log(mimeFromFilename('/User/Documents/readme.txt')); // "text/plain"
console.log(mimeFromFilename('/User/Documents/image.jpg')); // "image/jpeg"
console.log(mimeFromFilename('/User/Documents/file.mp4')); // "video/mp4"
console.log(mimeFromFilename('/User/Documents/archive.zip')); // "application/zip"
console.log(mimeFromFilename('/User/Documents/noextensionfile')); // "application/octet-stream"
console.log(mimeFromFilename('/User/Documents/.hiddenfile')); // "application/octet-stream"


/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank) {
  // License code to URL and description mapping
  const licenses = {
    "CC-BY": "Creative Commons Attribution License",
    "CC-BY-NC": "Creative Commons Attribution-NonCommercial License",
    "CC-BY-SA": "Creative Commons Attribution-ShareAlike License",
    "CC-BY-ND": "Creative Commons Attribution-NoDerivs License",
    "CC-BY-NC-SA": "Creative Commons Attribution-NonCommercial-ShareAlike License",
    "CC-BY-NC-ND": "Creative Commons Attribution-NonCommercial-NoDerivs License"
  };
  
  // Default values for unknown license codes
  let url = "https://choosealicense.com/no-permission/";
  let description = "All Rights Reserved";

  // Check if the provided license code is in our licenses object
  if (licenses.hasOwnProperty(licenseCode)) {
    const formattedCode = licenseCode.replace("CC-", "").toLowerCase();
    url = `https://creativecommons.org/licenses/${formattedCode}/4.0/`;
    description = licenses[licenseCode];
  }

  // Create the HTML link
  let link = `<a href="${url}">${description}</a>`;

  // Add target="_blank" if targetBlank is true
  if (targetBlank) {
    link = `<a href="${url}" target="_blank">${description}</a>`;
  }

  return link;
}

// Test cases
console.log(generateLicenseLink('CC-BY-NC')); // '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
console.log(generateLicenseLink('CC-BY-NC-SA', true)); // '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike License</a>'
console.log(generateLicenseLink('UNKNOWN-LICENSE')); // '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>'


/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 ******************************************************************************/

function pureBool(value) {
  // Define sets of strings for true and false values
  const trueValues = new Set(["yes", "y", "oui", "o", "t", "true", "vrai", "v", "1"]);
  const falseValues = new Set(["no", "n", "non", "f", "false", "faux", "0"]);

  // If the value is already a Boolean, return it directly
  if (typeof value === 'boolean') {
    return value;
  }

  // Handle string input
  if (typeof value === 'string') {
    const lowerValue = value.trim().toLowerCase();
    if (trueValues.has(lowerValue)) {
      return true;
    }
    if (falseValues.has(lowerValue)) {
      return false;
    }
  }

  // Handle numeric input
  if (typeof value === 'number') {
    if (value > 0) {
      return true;
    }
    if (value <= 0) {
      return false;
    }
  }

  // If none of the conditions matched, throw an error
  throw new Error('invalid value');
}

// Test cases
console.log(pureBool(true)); // true
console.log(pureBool(false)); // false
console.log(pureBool('Yes')); // true
console.log(pureBool('no')); // false
console.log(pureBool('OUI')); // true
console.log(pureBool('Non')); // false
console.log(pureBool(1)); // true
console.log(pureBool(0)); // false
console.log(pureBool(123)); // true
console.log(pureBool(-123)); // false
try {
  console.log(pureBool('maybe')); // should throw 'invalid value'
} catch (error) {
  console.log(error.message); // invalid value
}
function pureBool(value) {
  // Define sets of strings for true and false values
  const trueValues = new Set(["yes", "y", "oui", "o", "t", "true", "vrai", "v", "1"]);
  const falseValues = new Set(["no", "n", "non", "f", "false", "faux", "0"]);

  // If the value is already a Boolean, return it directly
  if (typeof value === 'boolean') {
    return value;
  }

  // Handle string input
  if (typeof value === 'string') {
    const lowerValue = value.trim().toLowerCase();
    if (trueValues.has(lowerValue)) {
      return true;
    }
    if (falseValues.has(lowerValue)) {
      return false;
    }
  }

  // Handle numeric input
  if (typeof value === 'number') {
    if (value > 0) {
      return true;
    }
    if (value <= 0) {
      return false;
    }
  }

  // If none of the conditions matched, throw an error
  throw new Error('invalid value');
}

// Test cases
console.log(pureBool(true)); // true
console.log(pureBool(false)); // false
console.log(pureBool('Yes')); // true
console.log(pureBool('no')); // false
console.log(pureBool('OUI')); // true
console.log(pureBool('Non')); // false
console.log(pureBool(1)); // true
console.log(pureBool(0)); // false
console.log(pureBool(123)); // true
console.log(pureBool(-123)); // false
try {
  console.log(pureBool('maybe')); // should throw 'invalid value'
} catch (error) {
  console.log(error.message); // invalid value
}


/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function pureBool(value) {
  const trueValues = new Set(["yes", "y", "oui", "o", "t", "true", "vrai", "v", "1"]);
  const falseValues = new Set(["no", "n", "non", "f", "false", "faux", "0"]);

  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    const lowerValue = value.trim().toLowerCase();
    if (trueValues.has(lowerValue)) {
      return true;
    }
    if (falseValues.has(lowerValue)) {
      return false;
    }
  }

  if (typeof value === 'number') {
    if (value > 0) {
      return true;
    }
    if (value <= 0) {
      return false;
    }
  }

  throw new Error('invalid value');
}

function every(...values) {
  try {
    return values.every(value => pureBool(value) === true);
  } catch (error) {
    return false;
  }
}

function any(...values) {
  try {
    return values.some(value => pureBool(value) === true);
  } catch (error) {
    return false;
  }
}

function none(...values) {
  try {
    return values.every(value => pureBool(value) === false);
  } catch (error) {
    return false;
  }
}

// Test cases
console.log(every('Y', 'yes', 1)); // true
console.log(any('Y', 'no', 1)); // true
console.log(none('Y', 'invalid', 1)); // false
console.log(every('yes', 'oui', '1')); // true
console.log(any('no', 'faux', '1')); // true
console.log(none('no', 'non', 'faux')); // true

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know might know, a URL can contain optional name=value pairs. For reference: read query strings on web :)
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 50, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * The following might be the parameters
 *
 *  "query" the query to use. Must be properly URI encoded
 * "order" the sort order to use, must be one of `ascending` or `descending`
 * "count" the number of results per page, must be 1-50
 * "license" the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 ******************************************************************************/

function buildUrl(query, order, count, license) {
  const validOrders = ['ascending', 'descending'];
  const validLicenses = ['none', 'any', 'cc-by', 'cc-by-nc', 'cc-by-sa', 'cc-by-nd', 'cc-by-nc-sa', 'cc-by-nc-nd'];

  if (typeof query !== 'string' || query.trim() === '') {
    throw new Error('Invalid query');
  }

  if (!validOrders.includes(order)) {
    throw new Error('Invalid order');
  }

  if (typeof count !== 'number' || count < 1 || count > 50) {
    throw new Error('Invalid count');
  }

  if (!validLicenses.includes(license)) {
    throw new Error('Invalid license');
  }

  const encodedQuery = encodeURIComponent(query.trim());
  return `https://api.inaturalist.org/v2/observations?query=${encodedQuery}&count=${count}&order=${order}&license=${license}`;
}

// Test cases
console.log(buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by')); 
// "https://api.inaturalist.org/v2/observations?query=Monarch%20Butterfly&count=25&order=ascending&license=cc-by"

try {
  console.log(buildUrl('', 'ascending', 25, 'cc-by'));
} catch (error) {
  console.log(error.message); // Invalid query
}

try {
  console.log(buildUrl('Monarch Butterfly', 'ascend', 25, 'cc-by'));
} catch (error) {
  console.log(error.message); // Invalid order
}

try {
  console.log(buildUrl('Monarch Butterfly', 'ascending', 0, 'cc-by'));
} catch (error) {
  console.log(error.message); // Invalid count
}

try {
  console.log(buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-license'));
} catch (error) {
  console.log(error.message); // Invalid license
}
